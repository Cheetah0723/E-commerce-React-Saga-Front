export const UPDATE_CURRENCY = "UPDATE_CURRENCY"

export const updateCurrency = data => {
    return {
        type: UPDATE_CURRENCY,
        data: data
    }
}