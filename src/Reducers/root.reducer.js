import { combineReducers } from 'redux';
import CartReducer from './cart.reducer';
import SearchReducer from './search.reducer';
import ReviewReducer from "./review.reducer"

const RootReducer = combineReducers({
    CartReducer,
    SearchReducer,
    ReviewReducer
});

export default RootReducer;


