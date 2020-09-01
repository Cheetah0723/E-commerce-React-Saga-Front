import { useCallback } from 'react';
import { getReviewsByProductId } from "./ApiCalls"



export default function ReviewModel({ productId }) {

    const getReviews = useCallback(() => {
        getReviewsByProductId(productId)
    },
        [productId],
    )

    return { getReviews }
}

