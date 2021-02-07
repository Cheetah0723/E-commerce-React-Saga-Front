import {
    CLEAR_CART, ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, UPDATE_CURRENCY,
    ADD_QUANTITY, ADD_SHIPPING
} from '../Actions/action.types';
import { loadState } from '../Components/Util';

const initialState = loadState("CartReducer");

function CartReducer(state = initialState, action) {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case UPDATE_CURRENCY:
            newState.currency = action.data
            return newState
        case ADD_TO_CART:
            newState.total = parseInt(state.total) + action.price
            let existed_item
            let newItem = { ...action.data, size: action.size }
            if (newState.addedItems.length > 0) {
                existed_item = newState.addedItems.find(item => newState.id === item.id && item.size === newState.size);
                if (existed_item !== undefined) {
                    existed_item.quantity += 1
                }
            }
            if (!existed_item) {
                newState.addedItems.push({ ...newItem, quantity: 1 });
            }
            return newState;
        case REMOVE_ITEM:
            if (action.id === "" || action.size === "" || state.addedItems.length === 0) { return state }
            //TODO here I need to set it.
            let itemToRemove = state.addedItems.find(item => action.id === item.id && action.size === item.size);
            if (!itemToRemove) { return state }
            //calculating the total
            newState.total = parseInt(state.total) - action.price
            newState.addedItems = state.addedItems.filter(item => action.id !== item.id && action.size !== item.size);
            return newState;
        case SUB_QUANTITY:
            if (action.id === "" || action.size === "" || state.addedItems.length === 0) { return }
            newState = Object.assign({}, state)
            let itemToSub = newState.addedItems.find(item => action.id === item.id && action.size === item.size);
            if (itemToSub === undefined) {
                return state;
            }
            newState.total = parseInt(state.total) === 0 ? 0 : parseInt(state.total) - action.price
            itemToSub.quantity -= 1
            newState.addedItems = (itemToSub.quantity === 0) ?
                newState.addedItems.filter(item => item.id !== action.id && action.size !== item.size)
                : newState.addedItems
            return newState;
        case ADD_QUANTITY:
            if (action.id === "" || action.size === "") { return state }
            let itemToAdd = newState.addedItems.find(item => action.id === item.id && action.size === item.size);
            if (itemToAdd) { // If this item exists in the cart
                itemToAdd.quantity += 1;
                newState.newTotal = parseInt(state.total) + action.price
                //Delete the previous data of this product
                newState.addedItems = state.addedItems.filter(item => item.id !== action.id && action.size !== item.size)
                //And add the updated product data back to the state
                newState.addedItems.push(itemToAdd);
            }
            return newState;
        case ADD_SHIPPING:
            //shipping is 10 AUD for orders under 99AUD and free for orders above 99AUD.
            newState.total = parseInt(state.total) < 99 ? parseInt(state.total) : parseInt(state.total) + 10
            return newState;
        case CLEAR_CART:
            return {
                addedItems: [],
                total: 0,
                currency: "AUD"
            };
        default:
            return state;
    }
};

export default CartReducer;