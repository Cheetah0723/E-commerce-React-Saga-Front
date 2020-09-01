const Order = (customerName, customerEmail, shippingAddress, shippingPostcode,
    shippingState, shippingCountry, paidDateTime, paymentMethod, total, currency,
    products) => {
    return {
        "customerName": customerName,
        "customerEmail": customerEmail,
        "shippingAddress": shippingAddress,
        "shippingPostcode": shippingPostcode,
        "shippingState": shippingState,
        "shippingCountry": shippingCountry,
        "paidDateTime": paidDateTime,
        "paymentMethod": paymentMethod,
        "total": total,
        "currency": currency,
        "products": products,
    }
}

export default Order


