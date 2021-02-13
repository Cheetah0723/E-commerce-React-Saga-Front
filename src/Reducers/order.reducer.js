import { ADD_BUYER_INFO, CLEAR_ORDER, SET_PAYMENT_METHOD, SAVE_ORDER_CONFIRMATION } from "../Actions/action.types";

const initialState = {
    buyerInfo: {}, // including currency
    paymentMethod: {}
}

const OrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BUYER_INFO:
            if (!action.data) { return state }
            return { ...state, buyerInfo: action.data }
        case SET_PAYMENT_METHOD:
            return { ...state, paymentMethod: action.paymentMethod }
        case SAVE_ORDER_CONFIRMATION:
            return action.data
        case CLEAR_ORDER:
            return initialState
        default:
            return state;
    }
}

export default OrderReducer