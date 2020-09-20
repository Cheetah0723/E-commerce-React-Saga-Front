import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function CartIcon({ onClick }) {
    return (
        <div className="cart-icon" onClick={onClick}>
            <ShoppingCartIcon />
            <p>My Cart</p>
        </div>
    )
}