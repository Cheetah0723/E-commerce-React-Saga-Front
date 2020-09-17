import React, { useState } from 'react';
import SearchBox from "./SearchBox";
import Cart from "../Cart/CartIcon";
import ToolBarController from "./ToolBarController"

export default function ToolBar({ openDrawer, closeDrawer }) {
    const {
        openAll, openSales, openHP,
        handleInvalidSearch, submitSearch
    } = ToolBarController()

    return (
        <header className="toolbar">
            <nav className="toolbar_navigation">
                <div className="toolbar_logo" onClick={openHP}>The LOGO</div>
                <div className="spacer" />
                <div className="toolbar_navigation_items">
                    <ul>
                        <li onClick={openAll}>SHOP ALL</li>
                        <li onClick={openSales}>SALES</li>
                    </ul>
                </div>
                <div className="spacer" />
                <div className="toolbar_right">
                    <SearchBox onInvalidSearch={handleInvalidSearch} onSubmit={submitSearch} />
                    <Cart onClick={openDrawer} close={closeDrawer} />
                </div>
            </nav>
        </header>
    );
}