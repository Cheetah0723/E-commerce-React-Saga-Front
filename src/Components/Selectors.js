import { createSelector } from 'reselect'

export const selectCartReducer = (state) => {
    return state.CartReducer
}

export const selectOrderReducer = (state) => {
    return state.OrderReducer
}

export const selectReviewReducer = (state) => {
    return state.ReviewReducer
}

export const selectPaymentReducer = (state) => {
    return state.PaymentReducer
}

/**** Reselectors **********/
export const selectTotal = createSelector(
    selectCartReducer,
    reducer => reducer.total
)

export const selectTotalQuantity = createSelector(
    selectCartReducer,
    reducer => reducer.addedItems.length || 0
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

export const selectPaymentMethod = createSelector(
    selectOrderReducer,
    reducer => reducer.paymentMethod
)


