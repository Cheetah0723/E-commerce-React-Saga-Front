import { EDIT_ORDER, DELETE_ORDER, ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT } from "./ActionTypes"

export const editOrder = (id) => {
    return {
        type: EDIT_ORDER,
        id: id
    }
}

export const deleteOrder = (id) => {
    return {
        type: DELETE_ORDER,
        id: id
    }
}

export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        data: product
    }
}


export const editProduct = (product) => {
    return {
        type: EDIT_PRODUCT,
        data: product
    }
}

export const deleteProduct = (product) => {
    return {
        type: DELETE_PRODUCT,
        data: product
    }
}