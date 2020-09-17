import { categoryData } from '../Data/category';
import { stockData } from '../Data/stockData';
import colorList from '../Data/colorList';
import { instaData } from '../Data/instaData';
import { SAVE_SEARCH_INPUT } from './action.types';

export function findById(id) {
    let result = categoryData.find(item => item.id === id)
    return result;
}

export function findBySingleColor(color) {
    let colorLowerCase = color.toLowerCase();
    let result = categoryData.filter(product =>
        product.color === colorLowerCase
    )
    return result;
}

export function findBySingleSize(size) {
    //TODO get the index of the size in the sizeList
    let upperCaseSize = size.toUpperCase();
    //let stock = stockData.map(product => product.stock).filter(stockStatus => stockStatus.quantity >0);
    let result = stockData.map(product => {
        let availbleProduct = product.stock.find(item => item.size === upperCaseSize && item.quantity > 0)
        if (availbleProduct !== undefined && availbleProduct !== null) {
            return (findById(product.productId))
        }
    }
    )
    result = result.filter(item => item !== undefined)
    return result;
}

export function showStockStatus(id) {
    let item = stockData.find(product => product.productId === id)
    let availableStock = item.stock.map(each => each.quantity > 0 ? true : false)
    return availableStock;
}

export function findBackgroundColor(color) {
    let result = colorList.items.find(item => item.value === color)
    return result.backgroundColor
}

export function findByColor(colorList) {
    //TODO result returned, but the program crashed.

    let lowerCaseColorList = colorList.map(color => color.toLowerCase());
    let resultList = [];
    let midresult = [];
    lowerCaseColorList.forEach(color => {
        midresult = categoryData.filter(product =>
            product.color === color
        )
        // midresult is correct but this is wrong
        resultList = resultList.concat(midresult);
    });
    return resultList;
}

export function findByName(name) {
    let nameLowerCase = name.toLowerCase();
    let resultList = categoryData.filter(product => product.name === nameLowerCase)
    return resultList;
}

export function findByHeel(heelList) {
    //TODO result returned, but the program crashed.


    let resultList = [];
    let midresult = [];
    heelList.forEach(heel => {
        midresult = categoryData.filter(product => product.heel.toString() === heel)
        // midresult is correct but this is wrong
        resultList = resultList.concat(midresult);
    });
    return resultList;
}

export function findByColorAndHeel(colorList, heelList) {
    const lowerCaseColorList = colorList.map(color => color.toLowerCase());
    const resultList = categoryData.filter(product => product.color in lowerCaseColorList && product.heel in heelList);
    return resultList;
}

export function findNewReleases() {
    const resultList = categoryData.filter(product => product.new === true);
    return resultList;
}

export function findSalesItems() {
    const resultList = categoryData.filter(product => product.salesRate < 1);
    return resultList;
}

export const saveSearchInput = (input) => {
    return {
        type: SAVE_SEARCH_INPUT,
        input: input
    }
}


export function findInstaRecordById(id) {
    let result = instaData.find(each => each.id===id)
    return result;
}