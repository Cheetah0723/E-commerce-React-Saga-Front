import { createReview, getReviewsOfTheProduct, saveReviews, appendReview} from "../review.action"
import { CREATE_REVIEW,  SAVE_REVIEWS, APPEND_REVIEW } from "../../Actions/action.types"

describe.skip("CheckoutForm", () => {
const review = {
    dateTime: new Date(),
    productId: "1",
    title: "title",
    body: "body",
    customerName: "customerName",
    customerEmail: "customerEmail"
}
const id = "1"

describe('createReview', () => {
    it('should create an action', () => {
        let action = createReview(review)
        expect(action).toEqual({
            type: CREATE_REVIEW,
            review: review
        });
    })
})

describe('saveReviews', () => {
    it('should create an action', () => {
        let action = saveReviews([review])
        expect(action).toEqual({
            type: SAVE_REVIEWS,
            data: [review]
        });
    })
})

describe('appendReview', () => {
    it('should create an action', () => {
        let action = appendReview(review)
        expect(action).toEqual({
            type: APPEND_REVIEW,
            data: review  // a list of reviews
        });
    })
})
})