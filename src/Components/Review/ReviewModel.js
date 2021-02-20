
import { getReviewsByProductId } from "./apiCalls"



export default function ReviewModel({ productId }) {

    const getReviews = () => {
        getReviewsByProductId(productId)
    }

    return { getReviews }
}

