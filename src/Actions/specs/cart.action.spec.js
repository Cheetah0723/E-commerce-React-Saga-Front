import {
    addToCart, removeItem, sub, addOn,  addShipping,
    clearCart
} from "../cart.action"

const id = "1"
const size = "L"
const currency = "AU"
const product = {
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
}

describe.skip("Actions", () => {
    describe('addToCart', () => {
        it('should create an action', () => {
            let action = addToCart(id, size, currency)
            expect(action).toEqual({
                type: 'ADD_TO_CART',
                product: product,
                currency: currency
            });
        })
    })

    describe('removeItem', () => {
        it('should create an action', () => {
            let action = removeItem(id, size)
            expect(action).toEqual({
                type: 'REMOVE_ITEM',
                id: id,
                size: size
            });
        })
    })

    describe('sub', () => {
        it('should create an action', () => {
            let action = sub(id, size)
            expect(action).toEqual({
                type: 'SUB_QUANTITY',
                id: id,
                size: size
            });
        })
    })

    describe('addOn', () => {
        it('should create an action', () => {
            let action = addOn(id, size)
            expect(action).toEqual({
                type: 'ADD_QUANTITY',
                id: id,
                size: size
            });
        })
    })

    describe('addShipping', () => {
        it('should create an action', () => {
            let action = addShipping();
            expect(action).toEqual({
                type: 'ADD_SHIPPING'
            });
        })
    })

    describe('clearCart', () => {
        it('should create an action', () => {
            let action = clearCart();
            expect(action).toEqual({
                type: 'CLEAR_CART'
            });
        })
    })

})