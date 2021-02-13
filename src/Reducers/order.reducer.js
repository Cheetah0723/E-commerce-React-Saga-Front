import { ADD_BUYER_INFO, CLEAR_ORDER, SET_PAYMENT_METHOD, SAVE_ORDER_CONFIRMATION } from "../Actions/action.types";

const initialState = {
    buyerInfo: {}, // including currency
    payment: {},
    products: []
}

const OrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BUYER_INFO:
            if (!action.data) { return state }
            return { ...state, buyerInfo: action.data }
        case SET_PAYMENT_METHOD:
            return { ...state, payment: { paymentMethod: action.paymentMethod, total: action.total } }
        case SAVE_ORDER_CONFIRMATION:
            return action.data
        case CLEAR_ORDER:
            return initialState
        default:
            return state;
    }
}

export default OrderReducer