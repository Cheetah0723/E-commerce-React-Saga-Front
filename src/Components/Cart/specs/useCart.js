import useCart from "../useCart"
import { renderHook } from '@testing-library/react-hooks'
import history from "../../../history"
import * as Redux from 'react-redux';
jest.mock("../../../history", () => ({
    history: jest.fn().mockReturnValue([]),
}));

describe('useCartData', () => {

    const spy = jest.spyOn(Redux, 'useSelector');
    const { items, totalFromState, handleCheckOut, shipping } = renderHook(() => useCart());

    it('calls useSelector', () => {
        spy.mockReturnValue({
            addedItems: ["item1"],
            total: 100
        });
        expect(Redux.useSelector).toHaveBeenCalled()
    })

  
    //todo wrap it with mock store?!

    it('loads the total cost', () => {
        //expect(cartReducer).toBe(100)
        expect(totalFromState).toBe(100)
    })

    it('returns a function to update the history', () => {
        handleCheckOut()
        expect(history).toEqual(["/checkoutInfo"])
    })

    it('calculates the shipping', () => {
        expect(shipping).toBe(10)
    })
});




