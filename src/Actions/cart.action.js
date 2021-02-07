import {
    CLEAR_CART, ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, SAVE_DATA, UPDATE_CURRENCY
} from './action.types';

/**************Thunk Actions *********************/
export const addToCartThunk = (product, size, price) => async (dispatch, getState) => {
    const itemsInCart = getState().CartReducer.addedItems
    const itemExist = itemsInCart.find(item => product.id === item.id && size === item.size)
    if (itemExist) { // Increase the item quantity instead.
        dispatch(addQuantity(product.id, size, price))
    } else { // Add the item into the cart
        dispatch(addToCart(product, size, price))
    }
}

/************** Actions *********************/

export const addToCart = (product, size, price) => {
    return {
        type: ADD_TO_CART,
        data: product,
        size: size,
        price: price
    }
}

export const removeItem = (id, size, price) => {
    return {
        type: REMOVE_ITEM,
        id: id,
        size: size,
        price: price
    }
}

export const subQuantity = (id, size, price) => {
    return {
        type: SUB_QUANTITY,
        id: id,
        size: size,
        price: price
    }
}

export const addQuantity = (id, size, price) => {
    return {
        type: ADD_QUANTITY,
        id: id,
        size: size,
        price: price
    }
}

export const addShipping = () => {
    return {
        type: ADD_SHIPPING
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}

export const saveData = (data) => {
    return {
        type: SAVE_DATA,
        data: data
    }
}

export const updateCurrency = data => {
    return {
        type: UPDATE_CURRENCY,
        data: data
    }
}
