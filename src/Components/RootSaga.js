import { OrderSaga } from "./Order/OrderSaga"
import { ReviewSaga } from "./Review/ReviewSaga"
import { all } from 'redux-saga/effects';

export default function* RootSaga() {
     yield all([...OrderSaga, ...ReviewSaga])
}