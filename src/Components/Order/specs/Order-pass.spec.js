import Order from "../Order"

describe.skip("Order", () => {

    const paidDateTime = new Date()
    const parsedDate = paidDateTime.toJSON()
    const products = ["2", "3"]
    const mockOrder = {
        "customerName": "customerName",
        "customerEmail": "customerEmail@test.com",
        "shippingAddress": "shippingAddress",
        "shippingPostcode": "3000",
        "shippingState": "VIC",
        "shippingCountry": "Australia",
        "paidDateTime": parsedDate,  //TODO check if this is correct
        "paymentMethod": "paymentMethod",
        "total": 100,
        "currency": "AUD",
        "products": products
    }

    const order = Order("customerName", "customerEmail@test.com", "shippingAddress",
        "3000", "VIC", "Australia", parsedDate, "paymentMethod", 100, "AUD", products)

    test('Order is created correctly', () => {
        expect(order).toEqual(mockOrder)
    });

})