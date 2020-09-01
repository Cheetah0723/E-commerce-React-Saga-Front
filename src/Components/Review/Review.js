const Review = (dateTime, productId, title, body, customerName, customerEmail) => {
    return {
        dateTime: dateTime,
        productId: productId,
        title: title,
        body: body,
        customerName: customerName,
        customerEmail: customerEmail
    }
}

export default Review