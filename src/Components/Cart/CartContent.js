import React, { Fragment } from 'react';
import { useSelector } from "react-redux"
import { Button } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import CartItem from './CartItem';
import Paypal from '../Payment/Paypal';
import { selectTotal, selectProductsInCart } from "../Selectors"
import history from '../../history';
import PriceCalculation from "./PriceCalculation"

export default function Cart({ showButton }) {
    const total = useSelector(selectTotal)
    const items = useSelector(selectProductsInCart)
    const shipping = total >= 99 ? 0 : 10;

    const handleCheckOut = () => {
        if (total > 0) {
            history.push("/checkoutInfo");
        }
    }

    return (
        (items && items.length > 0 ? <Fragment>
            <div className="items-in-cart">
                {items.map(each => <CartItem item={each} key={uuidv4()} />)}
                <PriceCalculation total={total} shipping={shipping} />
            </div>
            {showButton && <Button id="checkout-btn" onClick={handleCheckOut}>Check Out→</Button>}<br />
            {total > 0 && <Paypal total={total} />}
        </Fragment> : <p style={{ textAlign: "center" }}>YOUR BAG IS CURRENTLY EMPTY.</p>)
    );
}
