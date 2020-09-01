import { ADD_BUYER_INFO, CLEAR_ORDER, SET_PAYMENT_METHOD, SAVE_ORDER_CONFIRMATION }
    from "../ActionTypes";
import OrderReducer from "../OrderReducer"


describe.skip("OrderReducer", () => {
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

const buyerInfo = {
    email: "test email",
    fName: "test fName",
    lName: "test lName",
    streetAddress: "test street address",
    suburb: "test suburb",
    postcode: "test postcode",
    state: "test state",
    country: "test country"
}


describe('OrderReducer', () => {
    it('should return the initial state', () => {
        expect(OrderReducer(undefined, {})).toEqual(initialState)
    })

    it('should handle ADD_BUYER_INFO', () => {
        expect(
            OrderReducer(initialState, {
                type: ADD_BUYER_INFO,
                data: buyerInfo
            })
        ).toEqual({
            "customerFName": "test fName",
            "customerLName": "test lName",
            "customerEmail": "test email",
            "shippingAddress": "test street address",
            "shippingSuburb": "test suburb",
            "shippingPostcode": "test postcode",
            "shippingState": "test state",
            "shippingCountry": "test country",
            "paidDateTime": "",
            "paymentMethod": "",
            "total": 0,
            "currency": "AUD",
            "products": []
        })
    })

    it('should handle SET_PAYMENT_METHOD', () => {
        expect(
            OrderReducer({
                "customerFName": "test fName",
                "customerLName": "test lName",
                "customerEmail": "test email",
                "shippingAddress": "test street address",
                "shippingSuburb": "test suburb",
                "shippingPostcode": "test postcode",
                "shippingState": "test state",
                "shippingCountry": "test country",
                "paidDateTime": "",
                "paymentMethod": "",
                "total": 0,
                "currency": "AUD",
                "products": []
            }, {
                    type: SET_PAYMENT_METHOD,
                    paymentMethod: "PayPal",
                    total: 100
                })
        ).toEqual({
            "customerFName": "test fName",
            "customerLName": "test lName",
            "customerEmail": "test email",
            "shippingAddress": "test street address",
            "shippingSuburb": "test suburb",
            "shippingPostcode": "test postcode",
            "shippingState": "test state",
            "shippingCountry": "test country",
            "paidDateTime": "",
            "paymentMethod": "PayPal",
            "total": 100,
            "currency": "AUD",
            "products": []
        })
    })

    it('should handle SAVE_ORDER_CONFIRMATION', () => {
        expect(
            OrderReducer(initialState, {
                type: SAVE_ORDER_CONFIRMATION,
                data: mockState
            })
        ).toEqual(mockState)
    })

    it('should return the initial state when handling CLEAR_ORDER', () => {
        expect(
            OrderReducer(initialState, {
                type: CLEAR_ORDER,
            })
        ).toEqual(initialState)
    })

})
})