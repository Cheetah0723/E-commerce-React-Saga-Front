import Review from "../Review"

describe.skip("CheckoutForm", () => {
const mockReview = {
    dateTime: "date",
    productId: "3",
    title: "title",
    body: "body",
    customerName: "customerName",
    customerEmail: "customerEmail@test.com"
}
const review = Review( "date", "3", "title", "body", "customerName", "customerEmail@test.com")

test('Review is created correctly', () => {
    expect(review).toEqual(mockReview)
});
})
