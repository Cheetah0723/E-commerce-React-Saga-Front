import { OrderSaga } from "../Sagas//OrderSaga"
import { ReviewSaga } from "../Sagas/ReviewSaga"
import { all } from 'redux-saga/effects';

export default function* RootSaga() {
     yield all([...OrderSaga, ...ReviewSaga])
}