import { createSelector } from 'reselect'

export const selectCartReducer = (state) => {
    return state.CartReducer
}

export const selectReviewReducer = (state) => {
    return state.ReviewReducer
}

export const selectPaymentReducer = (state) => {
    return state.PaymentReducer
}

export const selectTotal = (state) => {
    return state.CartReducer.total
}

/**** Reselectors **********/
export const selectTotalQuantity = createSelector(
    selectCartReducer,
    reducer => reducer.addedItems.map(each => each.quantity).reduce((result, item) => result + item, 0)
)

export const selectProductsInCart =
    createSelector(
        selectCartReducer,
        reducer => reducer.addedItems
    )

export const selectCurrency = createSelector(
    selectCartReducer,
    reducer => reducer.currency
)

export const selectReview = createSelector(
    selectReviewReducer,
    reducer => reducer.toBeAdded
)

export const selectProductId = createSelector(
    selectReviewReducer,
    reducer => reducer.currentProductId
)

export const selectOrderConfirmation = createSelector(
    selectCartReducer,
    reducer => reducer.order
)