import { useState, useEffect } from 'react';
import { useSelector } from "react-redux"
import { findSalesItems } from "../Search/Actions"
import {categoryData, categoryDataHighToLow, categoryDataLowToHigh, newest} from "../../Data/newCategoryData"

export default function DisplayController(filter) {
    let initialData = filter === "sales" ? findSalesItems() : categoryData

    const [displayData, setDisplay] = useState(initialData);

    const searchResult = useSelector(state => state.SearchReducer).input;

    const sortData = (option) => {
        switch (option) {
            case "price-high-to-low":
                return categoryDataHighToLow
            case "price-low-to-high":
                return categoryDataLowToHigh
            case "newest":
                return newest
            default:
                return categoryData
        }
    }

    useEffect(() => {
        setDisplay(searchResult.length === 0 ? initialData : searchResult)
    }, [searchResult])

    function sortDisplayList(option) {
        setDisplay(sortData(option) !== "" ? sortData(option) : initialData)
    }

    const handleFilter = (filteredProducts) => {
        setDisplay(filteredProducts.length > 0 ? filteredProducts : initialData)
    }

    return { displayData, sortDisplayList, handleFilter }

}