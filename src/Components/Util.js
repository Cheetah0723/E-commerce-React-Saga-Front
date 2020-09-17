
function getSum(total, num) {
    return total + num;
}

export const calculateTotal = addedItems => {
    //Map each product to its price and save to a list.
    let priceList = addedItems.map(each => each.price * each.salesRate);
    let total = priceList.reduce(getSum, 0);
    return total;
}

export const loadState = stateName => {
    try {
        const serializedState = localStorage.getItem(stateName);
        if (serializedState === null) {
            //return the default initial state
            return { addedItems: [], total: 0, id: 0, size: "", currency: "AUD" }
        }
        if (JSON.parse(serializedState).addedItems.length === 0) {
            localStorage.clear()
            return { addedItems: [], total: 0, id: 0, size: "", currency: "AUD" }
        }
        return JSON.parse(serializedState);
    } catch (err) {
        localStorage.clear()
        return { addedItems: [], total: 0, id: 0, size: "", currency: "AUD" }
    }
}

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("CartReducer", serializedState);
    } catch (err) {
        throw new Error("Can't save changes in local storage");
    }
}

export const validatePrice = (item, currency) => {
    const price = currency === "AU" ? item.AUprice : item.USprice
    return item.salesRate === 1 ? price : price * item.salesRate
}

export const getAverageRating = (list) => {
    const average = list.map(each => each.overallRating).reduce((a, b) => (a + b)) / list.length;
    return average
}
