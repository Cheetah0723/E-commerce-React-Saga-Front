import {
    CLEAR_CART, ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, SAVE_DATA
} from './action.types';

//add cart action
export const addToCart = (product, size, price) => {
    return {
        type: ADD_TO_CART,
        data: product,
        size: size,
        price: price
    }
}

//remove item action
export const removeItem = (id, size, price) => {
    return {
        type: REMOVE_ITEM,
        id: id,
        size: size,
        price: price
    }
}
//subtract qt action
export const sub = (id, size, price) => {
    return {
        type: SUB_QUANTITY,
        id: id,
        size: size,
        price: price
    }
}
//add qt action
export const addOn = (id, size, price) => {
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

