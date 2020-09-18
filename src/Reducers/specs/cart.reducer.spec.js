import {
    CLEAR_CART, SAVE_DATA, ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY,
    ADD_QUANTITY, ADD_SHIPPING
} from '../../Actions/action.types';
import { loadState, validatePrice } from '../../Components/Util';
import CartReducer from "../cart.reducer"

const initialState = loadState("CartReducer");
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

describe("CartReducer", () => {
    it('should return the initial state', () => {
        expect(CartReducer(undefined, {})).toEqual(initialState)
    })

    it("handles ADD_TO_CART", () => {
        expect(
            OrderReducer(initialState, {
                type: ADD_TO_CART,
                product: product,
                currency: "AUD"
            })
        ).toEqual({ ...initialState, currency: "AUD", total:60 })

    })
})