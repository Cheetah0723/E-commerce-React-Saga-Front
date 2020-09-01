import {
    CLEAR_CART, ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY,
    ADD_SHIPPING, SAVE_DATA
} from './ActionTypes';

//add cart action
export const addToCart = (product, currency) => {
    return {
        type: ADD_TO_CART,
        product: product,
        currency: currency
    }
}
//remove item action
export const removeItem = (id, size) => {
    return {
        type: REMOVE_ITEM,
        id: id,
        size: size
    }
}
//subtract qt action
export const sub = (id, size) => {
    return {
        type: SUB_QUANTITY,
        id: id,
        size: size
    }
}
//add qt action
export const addOn = (id, size) => {
    return {
        type: ADD_QUANTITY,
        id: id,
        size: size
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

export const test = {
    addOn: (id, size) => {
        return {
            type: ADD_QUANTITY,
            id: id,
            size: size
        }
    },
    sub: (id, size) => {
        return {
            type: SUB_QUANTITY,
            id: id,
            size: size
        }
    },
    addToCart: (product, currency)=>{
        return {
            type: ADD_TO_CART,
            product: product,
            currency: currency
        }
    }
}