/*global spyOn*/
import { useDispatch } from "react-redux"
import useData from "../useData"
import { renderHook } from '@testing-library/react-hooks'
import { test } from "../../../Actions/cart.action"

jest.mock('react-redux', () => ({
    useDispatch: () => jest.fn().mockImplementation(() => {
        return {
            type: "ADD_TO_CART",
            product: {
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
                size: "XS"
            },
            currency: "AU"
        }
    })
}));

describe('useData', () => {
    const item = {
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
        size: "XS"
    }
    const { handleAddToCart } = renderHook(() => useData(item, "AU"));

    it('calls useSelector', () => {


        handleAddToCart()
        expect(useDispatch).toHaveBeenCalledTimes(1)
    })

    it('calls useDispatch to dispatch an action', () => {
        const spy = spyOn(test, "addToCart")
        test.addToCart({
            type: "ADD_TO_CART",
            product: item,
            currency: "AU"
        })
        expect(useDispatch).toHaveBeenCalledTimes(1)
    })
});