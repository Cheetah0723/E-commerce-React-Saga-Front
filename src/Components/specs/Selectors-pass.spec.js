import {
    selectCurrency, selectTotal, selectReview, selectProductId,
    selectProductsInCart, selectPaymentMethod
} from "../Selectors"

const order = {
    "currency": "AUD",
    "customerEmail": "jin0925aki@live.cn",
    "customerFName": "Zoe",
    "customerLName": "Zhang",
    "paidDateTime": "2020-01-01T23:28:56.782Z",
    "paymentMethod": "PayPal",
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
const items = [{
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
const review = {
    dateTime: new Date(),
    productId: "productId",
    title: "title",
    body: "body",
    customerName: "customerName",
    customerEmail: "customerEmail"
}
const state = {
    CurrencyReducer: {
        currency: "AUD",
        total: 100,
        addedItems: items
    },
    ReviewReducer: {
        toBeAdded: review,
        currentProductId: "111"
    },
    OrderReducer: {
        paymentMethod: "PayPal"
    },
    CartReducer: {
        total: 100,
        addedItems: items
    }
}

describe.skip("selector", ()=>{
describe('selectCurrency', () => {
    it('should select the specified field', () => {
        let selector = selectCurrency(state)
        expect(selector).toBe("AUD");
    })
})

describe('selectTotal', () => {
    it('should select the specified field', () => {
        let selector = selectTotal(state)
        expect(selector).toBe(100);
    })
})

describe('selectReview', () => {
    it('should select the specified field', () => {
        let selector = selectReview(state)
        expect(selector).toEqual(review);
    })
})

describe('selectProductId', () => {
    it('should select the specified field', () => {
        let selector = selectProductId(state)
        expect(selector).toBe("111");
    })
})

describe('selectProductsInCart', () => {
    it('should select the specified field', () => {
        let selector = selectProductsInCart(state)
        expect(selector).toEqual(items);
    })
})

describe('selectPaymentMethod', () => {
    it('should select the specified field', () => {
        let selector = selectPaymentMethod(state)
        expect(selector).toBe("PayPal");
    })
})
})