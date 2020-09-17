import { call, all, select, takeLatest, fork, put } from 'redux-saga/effects'
import { saveReviews, appendReview, failed, successful } from "../Actions/review.action"
import { CREATE_REVIEW } from "../Actions/action.types"
import { getReviewsByProductId, createReview } from "../Components/Review/ApiCalls"
import { selectReview, selectProductId } from "../Components/Selectors"

/**
 ************** Workers **************
 */

//fetch create review 
export function* fetchCreateReview() {
    while (select(selectReview) === undefined || {}) {
        yield select(selectReview)
    }
    try {
        const newReview = yield select(selectReview)  // Select the review to be created from the store
        const response = yield call(createReview, newReview)    // POST the review to the server
        yield all([
            put(appendReview(response)),  //Save the new review to the store
            put(successful)
        ])
    }
    catch (err) {
        console.log(err)
        //yield take(FETCH_FAILED)
        put(failed)
    }
}

/**
 ************** Watchers **************
 */

//fetch create review when received the "Create review" action 
export function* watchCreateReview() {
    yield takeLatest(CREATE_REVIEW, fetchCreateReview)
}

export const ReviewSaga = [
    fork(watchCreateReview),
]