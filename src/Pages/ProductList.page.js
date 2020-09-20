import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux"
import { findSalesItems } from "../Actions/search.action"
import Sorting from '../Components/Sorting/Sorting';
import FilterView from "../Components/Filter/container.filter"
import ProductList from "../Components/ProductList/ProductList"
import HeaderContainer from '../Components/Header/HeaderContainer';
import Footer from '../Components/Footer/Footer';
import { categoryData, categoryDataHighToLow, categoryDataLowToHigh, newest } from "../Data/category"

export function useDisplay(filter) {
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

export default function ProductListPage({ sales }) {
    const filter = sales ? "sales" : "all"
    const { displayData, sortDisplayList, handleFilter } = useDisplay(filter)

    return (
        <div className="AllProducts">
            <HeaderContainer />
            <div className="main">
                <div className="sort-select">
                    <Sorting onSort={sortDisplayList} />
                </div>
                <div className="filters">
                    <FilterView handleFilter={handleFilter} />
                </div>
                <div className="list-container">
                    <ProductList display={displayData} />
                </div>
            </div>
            <Footer />
        </div>
    );
}