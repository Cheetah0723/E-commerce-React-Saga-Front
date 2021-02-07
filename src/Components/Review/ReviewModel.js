
import { getReviewsByProductId } from "./ApiCalls"



export default function ReviewModel({ productId }) {

    const getReviews = () => {
        getReviewsByProductId(productId)
    }

    return { getReviews }
}

