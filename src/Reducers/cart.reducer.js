import {
    CLEAR_CART, SAVE_DATA, ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY,
    ADD_QUANTITY, ADD_SHIPPING
} from '../Actions/action.types';
import { loadState, validatePrice } from '../Components/Util';

//TODO intial state should be from the local storage???
const initialState = loadState("CartReducer");

function CartReducer(state = initialState, action) {
    let newTotal = 0; //instantialize the new total amount
    let new_items;
    let newState = Object.assign({}, state);
    let targetItem;

    switch (action.type) {
        case UPDATE_CURRENCY:
            newState.currency = action.data
            return newState
        case ADD_TO_CART:

            //move the price to action
            newState.total = parseInt(newState.total) + validatePrice(action.data, newState.currency)
            let existed_item;
            if (newState.addedItems.length > 0) {
                existed_item = newState.addedItems.find(item => newState.id === item.id && item.size === newState.size);
                if (existed_item !== undefined) {
                    existed_item.quantity += 1
                }
            }
            if (existed_item === undefined) {
                targetItem = Object.assign({}, action.data);
                targetItem.quantity = 1;
                newState.addedItems.push(targetItem);
            }
            return newState;
        case REMOVE_ITEM:
            if (action.id === "" || action.size === "" || state.addedItems.length === 0) { return state }
            //TODO here I need to set it.
            let itemToRemove = state.addedItems.find(item => action.id === item.id && action.size === item.size);
            if (itemToRemove === undefined) { return state }
            new_items = state.addedItems.filter(item => action.id !== item.id && action.size !== item.size);
            //calculating the total
            newTotal = parseInt(state.total) - validatePrice(itemToRemove) * parseInt(itemToRemove.quantity)
            newState = Object.assign({}, state, {
                addedItems: new_items,
                total: newTotal
            })
            return newState;

        case SUB_QUANTITY:
            if (action.id === "" || action.size === "" || state.addedItems.length === 0) { return }
            newState = Object.assign({}, state)
            let itemToSub = newState.addedItems.find(item => action.id === item.id && action.size === item.size);
            if (itemToSub === undefined) {
                return state;
            }
            //Upate total price
            newState.total = parseInt(state.total) - validatePrice(itemToSub)
            newState.total = newState.total >= 0 ? newState.total : 0
            //Update quantity
            itemToSub.quantity -= 1
            newState.addedItems = (itemToSub.quantity == 0) ?
                newState.addedItems.filter(item => item.id !== action.id && action.size !== item.size)
                : newState.addedItems
            return newState;
        case ADD_QUANTITY:
            if (action.id === "" || action.size === "") { return state }
            //TODO "state.addedItems.find" is wrong lol.
            let itemToAdd = state.addedItems.find(item => action.id === item.id && action.size === item.size);
            if (itemToAdd !== undefined && itemToAdd !== null) { // If this item exists in the cart
                newTotal = parseInt(state.total) + validatePrice(itemToAdd);
                newState = Object.assign({}, state, { addedItems: new_items, total: newTotal });
                itemToAdd.quantity += 1;
                //Delete the previous data of this product
                newState.addedItems = state.addedItems.filter(item => item.id !== action.id && action.size !== item.size)
                //And add the updated product data back to the state
                newState.addedItems.push(itemToAdd);
                return newState;
            }
            return state;


        case ADD_SHIPPING:
            //shipping is 10 AUD for orders under 99AUD and free for orders above 99AUD.
            let result = (parseInt(state.total)) < 99 ? {
                ...state,
                total: parseInt(state.total) + 10
            } : state;
            return result;

        case CLEAR_CART:
            return {
                addedItems: [],
                total: 0,
            };

        default:
            return state;
    }


};

export default CartReducer;