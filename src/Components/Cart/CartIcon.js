import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function CartIcon({onClick}) {
    return (
            <ShoppingCartIcon onClick={onClick}
                style={{ cursor: "pointer"}}
            />
    )
}