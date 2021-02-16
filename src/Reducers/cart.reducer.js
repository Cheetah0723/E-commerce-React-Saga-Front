import {
    CLEAR_CART, ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, UPDATE_CURRENCY,
    ADD_QUANTITY, ADD_SHIPPING, SAVE_ORDER_CONFIRMATION
} from '../Actions/action.types';

const initialState = { addedItems: [], total: 0, id: 0, size: "", currency: "AUD" }

function CartReducer(state = initialState, action) {
    if (action.id === "" || action.size === "") { return state }
    let newState = { ...state }
    switch (action.type) {
        case UPDATE_CURRENCY:
            newState.currency = action.data
            return newState
        case ADD_TO_CART:
            newState.total = parseInt(state.total) + action.price
            newState.addedItems.push({ ...action.data, size: action.size, quantity: 1 });
            return newState;
        case REMOVE_ITEM:
            if (state.addedItems.length === 0) { return state }
            //TODO here I need to set it.
            let itemToRemove = state.addedItems.find(item => action.id === item.id && action.size === item.size);
            if (!itemToRemove) { return state }
            //calculating the total
            newState.total = parseInt(state.total) - action.price
            newState.addedItems = newState.addedItems.filter(item => action.id !== item.id && action.size !== item.size);
            return newState;
        case SUB_QUANTITY:
            if (state.addedItems.length === 0) { return }
            let itemToSub = newState.addedItems.find(item => action.id === item.id && action.size === item.size);
            if (itemToSub && itemToSub.quantity > 0) {
                newState.total = parseInt(state.total) - action.price
                itemToSub.quantity -= 1
            }
            newState.addedItems = newState.addedItems.filter(item => item.quantity !== 0)
            return newState;
        case ADD_QUANTITY:
            let itemToAdd = newState.addedItems.find(item => action.id === item.id && action.size === item.size);
            if (itemToAdd) {
                itemToAdd.quantity += 1
                newState.total = parseInt(state.total) + action.price
            }
            return newState;
        case ADD_SHIPPING:
            //shipping is 10 AUD for orders under 99AUD and free for orders above 99AUD.
            newState.total = parseInt(state.total) < 99 ? parseInt(state.total) : parseInt(state.total) + 10
            return newState;
        case SAVE_ORDER_CONFIRMATION:
            return { ...newState, order: action.data }
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