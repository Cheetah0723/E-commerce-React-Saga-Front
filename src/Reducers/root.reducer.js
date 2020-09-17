import { combineReducers } from 'redux';
import CartReducer from './cart.reducer';
import OrderReducer from './order.reducer';
import SearchReducer from './search.reducer';
import CurrencyReducer from "./currency.reducer"
import ReviewReducer from "./review.reducer"

const RootReducer = combineReducers({
    CartReducer,
    OrderReducer,
    SearchReducer,
    CurrencyReducer,
    ReviewReducer
});

export default RootReducer;


