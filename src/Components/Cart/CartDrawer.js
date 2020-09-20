import React from 'react';
import Cart from "./Cart"
import HeaderContainer from "../Header/HeaderContainer"
import Footer from "../Footer/Footer"

export default function CartDrawer() {

    return (
        <div className="cart-page">
            <HeaderContainer />
            <Cart showButton={true} />
            <Footer />
        </div>
    )
}