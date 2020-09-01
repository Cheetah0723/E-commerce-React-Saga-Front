import {
    setPaymentMethod, addBuyerInfo, createOrder, clearOrder, saveOrderConfirmation
} from "../Actions"
import {
    SET_PAYMENT_METHOD, ADD_BUYER_INFO, CREATE_ORDER, CLEAR_ORDER, SAVE_ORDER_CONFIRMATION,
} from "../ActionTypes"

const paymentMethod = "Google Pay"
const total = 100
const id = "1"
const info = { test: "test" }


describe.skip("Actions", () => {
    describe('setPaymentMethod', () => {
        it('should create an action', () => {
            let action = setPaymentMethod(paymentMethod, total)
            expect(action).toEqual({
                type: SET_PAYMENT_METHOD,
                paymentMethod: paymentMethod,
                total: total
            });
        })
    })

    describe('addBuyerInfo', () => {
        it('should create an action', () => {
            let action = addBuyerInfo(info)
            expect(action).toEqual({
                type: ADD_BUYER_INFO,
                data: info
            });
        })
    })

    describe('createOrder', () => {
        it('should create an action', () => {
            let action = createOrder()
            expect(action).toEqual({
                type: CREATE_ORDER,
            });
        })
    })

    describe('clearOrder', () => {
        it('should create an action', () => {
            let action = clearOrder(id)
            expect(action).toEqual({
                type: CLEAR_ORDER
            });
        })
    })

    describe('saveOrderConfirmation', () => {
        it('should create an action', () => {
            let action = saveOrderConfirmation(info)
            expect(action).toEqual({
                type: SAVE_ORDER_CONFIRMATION,
                data: info
            });
        })
    })
})