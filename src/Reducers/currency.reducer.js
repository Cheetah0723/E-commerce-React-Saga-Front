import { UPDATE_CURRENCY } from "../Actions/action.types"

let initialState = {
    currency: "AU"
}

const CurrencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CURRENCY:
            return { currency: action.data }
        default:
            return state;
    }
}

export default CurrencyReducer