import {
    CREATE_REVIEW, SAVE_REVIEWS, APPEND_REVIEW, SUCCESSFUL, FAILED, ADD_RATING
} from "../Actions/action.types"

const initialState = {
    toBeAdded: {},
    successful: false,
    failed: false,
}

export default function ReviewReducer(state = initialState, action) {
    let newState = { ...state }
    switch (action) {
        case CREATE_REVIEW:
            const toBeAdded = {
                id: action.review.id,
                overall: 0,
                fit: 0,
                length: 0,
                comfort: 0,
                dateTime: action.review.dateTime,
                productId: action.review.productId,
                title: action.review.title,
                body: action.review.body,
                customerName: action.review.name,
                customerEmail: action.review.email
            }
            newState.toBeAdded = toBeAdded
            return newState
        case ADD_RATING:
            const type = action.type
            newState.toBeAdded = { ...newState.toBeAdded, [type]: action.data }
            return newState
        case SAVE_REVIEWS:
            newState.reviews = action.data
            return newState
        case APPEND_REVIEW:
            newState.reviews.push(action.data)
            return newState
        case SUCCESSFUL:
            newState.loading = false
            newState.successful = true
            return newState
        case FAILED:
            newState.loading = false
            newState.failed = true
            return newState
        default:
            return state
    }
}