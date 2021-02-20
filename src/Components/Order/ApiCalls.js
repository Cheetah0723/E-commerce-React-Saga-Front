//Take in an Order object and fetch a POST request to the server
export async function createOrder(order) {
    const url = "http://localhost:8080/api/orders/"
    const jsonOrder = JSON.stringify(order)
 //   console.log("jsonOrder", jsonOrder)
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: jsonOrder
    })
   // console.log("response", response)
    return response.status === 200 ? response.json() : ""
}



//--------------------------------------------------
//actions for the admin

export async function getOrderById(id) {
    const url = "/api/orders/" + id
    const response = await fetch(url)
    const body = await response.json()
    return body[0]  //return a single order
}


export async function getAllOrders() {
    const url = "/api/orders/"
    const response = await fetch(url)
    const body = await response.json()
    return body  //return an array
}