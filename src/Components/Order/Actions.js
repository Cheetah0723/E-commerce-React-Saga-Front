import { CREATE_ORDER, ADD_BUYER_INFO, CLEAR_ORDER, SET_PAYMENT_METHOD,
    SAVE_ORDER_CONFIRMATION } from "./ActionTypes";

export const addBuyerInfo = (data) => {
    return {
        type: ADD_BUYER_INFO,
        data: data
    }
}

export const createOrder = () => {
    return {
        type: CREATE_ORDER,
    }
}

export const clearOrder = () => {
    return {
        type: CLEAR_ORDER,
    }
}

export const setPaymentMethod = (paymentMethod, total) => {
    return {
        type: SET_PAYMENT_METHOD,
        paymentMethod: paymentMethod,
        total: total
    }
}

export const saveOrderConfirmation = data =>{
    return {
        type: SAVE_ORDER_CONFIRMATION,
        data: data
    }
}