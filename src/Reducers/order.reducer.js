import { ADD_BUYER_INFO, CLEAR_ORDER, SET_PAYMENT_METHOD, SAVE_ORDER_CONFIRMATION } from "../Actions/action.types";

const initialState = {
    "customerFName": "",
    "customerLName": "",
    "customerEmail": "",
    "shippingAddress": "",
    "shippingSuburb": "",
    "shippingPostcode": "",
    "shippingState": "",
    "shippingCountry": "",
    "paidDateTime": "",
    "paymentMethod": "",
    "total": 0,
    "currency": "AUD",
    "products": []
}

// eslint-disable-next-line
const mockState = {
    "currency": "AUD",
    "customerEmail": "jin0925aki@live.cn",
    "customerFName": "Zoe",
    "customerLName": "Zhang",
    "paidDateTime": "2020-01-01T23:28:56.782Z",
    "paymentMethod": "PayPal",
    "products": [{
        productId: "1",
        unitPrice: 90,
        quantity: 1,
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
        img2: "product-photos/pink-back.png"
    }],
    "shippingAddress": "Room 404, BLOG A, NO521 SOUTH WANPING RD",
    "shippingCountry": "China",
    "shippingPostcode": 200032,
    "shippingState": "",
    "shippingSuburb": "XUHUI DISTRICT",
    "total": "0",
    "OrderProducts": [{
        productId: "1",
        unitPrice: 90,
        quantity: 1,
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
        img2: "product-photos/pink-back.png"
    }],
}

const OrderReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case ADD_BUYER_INFO:
            if (action.data === undefined) { return state }
            newState = Object.assign({}, initialState)
            newState.customerEmail = action.data.email
            newState.customerFName = action.data.fName
            newState.customerLName = action.data.lName
            newState.shippingAddress = action.data.streetAddress
            newState.shippingSuburb = action.data.suburb
            newState.shippingPostcode = action.data.postcode
            newState.shippingState = action.data.state
            newState.shippingCountry = action.data.country
            return newState
        case SET_PAYMENT_METHOD:
            newState = Object.assign({}, state)
            return {
                ...state, paymentMethod: action.paymentMethod, total: action.total,
                paidDateTime: ""
            }
        case SAVE_ORDER_CONFIRMATION:
            return action.data
        case CLEAR_ORDER:
            return initialState
        default:
            return state;
    }
}

export default OrderReducer