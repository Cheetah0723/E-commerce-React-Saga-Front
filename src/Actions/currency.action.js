import {UPDATE_CURRENCY} from "./action.types"

export const updateCurrency = data => {
    return {
        type: UPDATE_CURRENCY,
        data: data
    }
}