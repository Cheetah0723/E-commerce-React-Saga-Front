import { combineReducers } from 'redux';
import CartReducer from './Cart/CartReducer';
import OrderReducer from './Order/OrderReducer';
import SearchReducer from './Search/SearchReducer';
import CurrencyReducer from "./Currency/CurrencyReducer"
import ReviewReducer from "./Review/ReviewReducer"

const RootReducer = combineReducers({
    CartReducer,
    OrderReducer,
    SearchReducer,
    CurrencyReducer,
    ReviewReducer
});

export default RootReducer;


