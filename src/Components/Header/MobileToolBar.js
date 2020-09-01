import React from 'react';
import './MobileToolBar.css';
import Cart from "../Cart/CartIcon";
import { Button } from 'semantic-ui-react';
import SearchIcon from '@material-ui/icons/Search';
import ToolBarController from "./ToolBarController"

export default function MobileToolBar({ openDrawer, closeDrawer }) {

    //TODO update the view to add 
    //: submit search
    // invalid search 
    // sales

    const {
        openAll, openSales, openHP,
        handleInvalidSearch, submitSearch
    } = ToolBarController()

    return (
        <header className="mobile_toolbar">
            <nav className="mobile_toolbar_navigation">
                <div className="mobile_toolbar_logo" onClick={openHP}>The LOGO</div>
                <div className="spacer" />
                <div className="spacer" />
                <div className="mobile_toolbar_right">
                    <SearchIcon />
                    <Cart onClick={openDrawer} close={closeDrawer} />
                </div>
            </nav>
            <div className="mobile_toolbar_navigation_items">
                <Button className="left-button" onClick={openAll}>SHOP ALL</Button>
                <Button className="right-button" onClick={openSales}>SALES</Button>
            </div>
        </header>
    );
}