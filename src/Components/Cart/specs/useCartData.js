/*global spyOn*/
import useCartData from "../useCartData"
import { renderHook } from '@testing-library/react-hooks'
import { useSelector, useDispatch } from "react-redux"
import { test, sub } from '../Actions';

jest.mock('react-redux', () => ({
  useSelector: jest.fn().mockReturnValue("AUD"),
  useDispatch: () => jest.fn()
}));

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

describe('useCartData', () => {
  const { addQuantity, subQuantity, currency } = renderHook(() => useCartData(item));

  it.skip('calls useSelector', () => {
    expect(useSelector).toHaveBeenCalledTimes(1)
  })

  it.skip('calls useDispatch to dispatch an action', () => {
    const spy = spyOn(test, "addOn")
    test.addOn(1, "XS")
    expect(useDispatch).toHaveBeenCalledTimes(1)
  })

  it.skip('calls useDispatch to dispatch an action', () => {
    const spy = spyOn(test, "sub")
    test.sub(1, "XS")
    expect(useDispatch).toHaveBeenCalledTimes(1)
  })
});




