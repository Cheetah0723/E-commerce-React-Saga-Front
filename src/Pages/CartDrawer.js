import React from 'react';
import Cart from "../Components/Cart/Cart"
import HeaderContainer from "../Components/Header/HeaderContainer"
import Footer from "../Components/Footer/Footer"

export default function CartDrawer() {

    return (
        <div className="cart-page">
            <HeaderContainer />
            <Cart showButton={true} />
            <Footer />
        </div>
    )
}