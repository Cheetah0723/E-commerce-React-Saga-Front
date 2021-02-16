import React, { Fragment } from 'react';
import { useSelector } from "react-redux"
import { Button } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import CartItem from './CartItem';
import Paypal from '../Payment/Paypal';
import { selectTotal, selectProductsInCart } from "../Selectors"
import history from '../../history';
import { Row, Col } from 'reactstrap';

export default function Cart({ showButton }) {
    const totalFromState = useSelector(selectTotal)
    const items = useSelector(selectProductsInCart)

    const handleCheckOut = () => {
        if (totalFromState > 0) {
            history.push("/checkoutInfo");
        }
    }

    const shipping = totalFromState >= 99 ? 0 : 10;

    const RowInCart = ({ leftText, rightText }) => (
        <Row className="align-center">
            <Col xs={2}>{leftText}</Col>
            <Col xs={7}></Col>
            <Col xs={3}> {rightText}<br /><br /> </Col>
        </Row>
    )

    return (
        (items && items.length > 0 ? <Fragment>
            <div className="items-in-cart">
                {items ? items.map(each => <CartItem item={each} key={uuidv4()} />) : []}
                <RowInCart leftText="SUBTOTAL" rightText={"$" + totalFromState + ".00"} />
                <RowInCart leftText="SHIPPING" rightText={"$" + shipping + ".00"} />
                <RowInCart leftText="TOTAL" rightText={"$" + (shipping + totalFromState) + ".00"} />
            </div>
            {showButton && <Button id="checkout-btn" onClick={handleCheckOut}>Check Out→</Button>}<br />
            {totalFromState > 0 && <Paypal total={totalFromState} />}
        </Fragment> : <p style={{ textAlign: "center", }} pl={1}>YOUR BAG IS CURRENTLY EMPTY.</p>)
    );
}
