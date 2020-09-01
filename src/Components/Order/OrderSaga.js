import { call, all, select, takeLatest, fork, put } from 'redux-saga/effects'
import { CREATE_ORDER } from "./ActionTypes"
import { saveOrderConfirmation, clearOrder } from "./Actions"
import { createOrder } from "./ApiCalls"
import { selectOrder, selectCurrency, selectProductsInOrder, } from "../Selectors"
import { UPDATE_CURRENCY } from "../Currency/Actions"
import { clearCart } from "../Cart/Actions"

/**
 * Workers
 */

//fetch create order
export function* fetchCreateOrder() {
    while (select(selectOrder) === undefined || select(selectOrder) === {}) {
        yield select(selectOrder)
    }
    try {
        let [newOrder, currency, products] = yield all([
            select(selectOrder),
            select(selectCurrency),
            select(selectProductsInOrder)
        ])
        newOrder.currency = currency + "D"
        newOrder.products = products.map(each => {
            return {
                "productId": each.id,
                "unitPrice": currency === "AU" ? each.AUprice : each.USprice,
                "quantity": each.quantity
            }
        })
        const response = yield call(createOrder, newOrder)   // POST the review to the server
        if (response !== undefined && response.id !== undefined) {
            yield all([
                put(saveOrderConfirmation(response))   // POST the review to the server
            ])
        }
    }
    catch (err) {
        console.log(err)
    }
}

export function* clearCartAndOrder() {
    yield all([
        put(clearOrder),
        put(clearCart),
        call(localStorage.clear())
    ])
}

/**
 * Watchers
 */

//fetch create order when received the "Create order" action 
export function* watchCreateOrder() {
    yield takeLatest(CREATE_ORDER, fetchCreateOrder)
}

//Clear the order and cart data if the currency has been changed
export function* watchCurrencyChange() {
    yield takeLatest(UPDATE_CURRENCY, clearCartAndOrder)
}

export const OrderSaga = [
    fork(watchCreateOrder),
    fork(watchCurrencyChange)
]