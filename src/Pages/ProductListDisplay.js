import React from 'react';
import Sorting from '../Components/Sorting/Sorting';
import FilterView from "../Components/Filter/FilterView"
import ProductList from "../Components/ProductList/ProductList"
import ProductListController from "../Components/ProductList/ProductListController"
import HeaderContainer from '../Components/Header/HeaderContainer';
import Footer from '../Components/Footer/Footer';


export default function ProductListDisplay({ sales }) {

    const filter = sales ? "sales" : "all"
    const { displayData, sortDisplayList, handleFilter } = ProductListController(filter)

    return (
        <div className="AllProducts">
            <HeaderContainer />
            <div className="main">
                <div className="right-2">
                    <Sorting onSort={sortDisplayList} />
                </div>
                <div className="left-2">
                    <FilterView handleFilter={handleFilter} />
                </div>
                <div className="right-10">
                    <ProductList display={displayData} />
                </div>
            </div>
            <Footer />
        </div>
    );
}