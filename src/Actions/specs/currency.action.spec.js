import { updateCurrency } from "../currency.action"

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