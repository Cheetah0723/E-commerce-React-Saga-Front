
//Take in a Review object and fetch a POST request to the server
export async function createReview(review) {
    const url = "/api/order/"
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            dateTime: review.dateTime,  //TODO must be parsed to JSON() before sent here
            productId: review.productId,
            title: review.title,
            body: review.body,
            customerName: review.customerName,
            customerEmail: review.customerEmail
        }),
    })
    const body = await response.json()
    //console.log("response for createReview()", body)
    return body
}

export async function getReviewsByProductId(id) {
    const url = "/api/reviews/product/" + id
    const response = await fetch(url)
    const body = await response.json()
    return body
}


//--------------------------------------------------
//actions for the admin
export async function getAllReviews() {
    const url = "/api/reviews/"
    const response = await fetch(url)
    const body = await response.json()
    return body
}

