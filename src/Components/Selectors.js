import { createSelector } from 'reselect'

export const selectCurrencyReducer = (state) => {
    return state.CurrencyReducer
}

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

export const selectOrderReducer = (state) => {
    return state.OrderReducer
}


/**** Reselectors **********/
export const selectTotal = createSelector(
    selectCartReducer,
    reducer => reducer.total
)

export const selectCartFilter = createSelector(
    selectCartReducer,
    reducer => reducer.id
)

export const selectProductsInOrder =
createSelector(
    selectCartReducer,
    reducer => reducer.addedItems
)

export const selectCurrency = createSelector(
    selectCurrencyReducer,
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

export const selectPaymentMethod =createSelector(
    selectOrderReducer,
    reducer => reducer.paymentMethod
)


