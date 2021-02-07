
function getSum(total, num) {
    return total + num;
}

export const calculateTotal = addedItems => {
    //Map each product to its price and save to a list.
    let priceList = addedItems.map(each => each.price * each.salesRate);
    let total = priceList.reduce(getSum, 0);
    return total;
}

export const validatePrice = (item, currency) => {
    const price = currency === "AU" ? item.AUprice : item.USprice
    return item.salesRate === 1 ? price : price * item.salesRate
}

export const getAverageRating = (list) => {
    const average = list.map(each => each.overallRating).reduce((a, b) => (a + b)) / list.length;
    return average
}
