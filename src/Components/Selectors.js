export const selectCurrency = (state) => {
    return state.CurrencyReducer.currency
}

export const selectTotal = (state) => {
    return state.CartReducer.total
}

export const selectReview = (state) => {
    return state.ReviewReducer.toBeAdded
}

export const selectOrder = (state) => {
    return state.OrderReducer
}

export const selectProductId = (state) => {
    return state.ReviewReducer.currentProductId
}

export const selectProductsInOrder = (state) => {
    const test = [{
        id: 1,
        name: "Flex Leggings",
        color: "pink",
        img: "product-photos/pink-front.png",
        AUprice: 60,
        USprice: 40,
        category: "bottoms",
        texture: ["56% Nylon", "41% Polyester", "3% Elastane"],
        new: true,
        salesRate: 1,
        img2: "product-photos/pink-back.png",
        quantity: 1,
        size: "L"
    }]
    return state.CartReducer.addedItems
}

export const selectPaymentMethod = (state) => {
    return state.OrderReducer.paymentMethod
}

export const selectCartFilter = (state) => {
    return state.CartReducer.id
}
