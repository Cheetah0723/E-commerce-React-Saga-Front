import { SAVE_SEARCH_INPUT} from "./ActionTypes";

let initialState = {
    input: []
}

export default function SearchReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_SEARCH_INPUT:
            return { input: action.input };
        default:
            return state;
    }
}

