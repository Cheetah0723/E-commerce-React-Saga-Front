import {
    addToCart, removeItem, subQuantity, addQuantity,  addShipping,
    clearCart,updateCurrency
} from "../cart.action"


const id = "1"
const size = "L"
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
            let action = addToCart(id, size)
            expect(action).toEqual({
                type: 'ADD_TO_CART',
                product: product,

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


const data = "US"

describe.skip('addToCart', () => {
    it('should create an action', () => {
        let action = updateCurrency(data)
        expect(action).toEqual({
            type: "UPDATE_CURRENCY",
            data: data,
            //currency: currency
        });
    })
})