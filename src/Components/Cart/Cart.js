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

    const handleCheckOut = (totalFromState) => {
        if (totalFromState > 0) {
            history.push("/checkoutInfo");
        }
    }

    const shipping = totalFromState >= 99 ? 0 : 10;

    return (
        (items && items.length > 0 ? <Fragment>
            {items ? items.map(each => <CartItem item={each} key={uuidv4()} />) : []}
            <br /><br />
            <Row className="align-center">
                <Col xs={2}>SUBTOTAL</Col>
                <Col xs={7}></Col>
                <Col xs={3}> ${totalFromState}.00<br /><br /> </Col>
            </Row>
            <Fragment>
                <Row className="align-center">
                    <Col xs={2}>SHIPPING</Col>
                    <Col xs={7}></Col>
                    <Col xs={3}>  ${shipping}.00<br /><br /></Col>
                </Row>
                <Row className="align-center">
                    <Col xs={2}>TOTAL</Col>
                    <Col xs={7}></Col>
                    <Col xs={3}>${shipping + totalFromState}.00<br /><br /> </Col>
                </Row>
            </Fragment>
            {showButton && <Button id="checkout-btn" onClick={handleCheckOut}>Check Out→</Button>}<br />
            {totalFromState > 0 && <Row className="align-center"><Paypal id="paypal-btn" total={totalFromState} /></Row>}
        </Fragment> : <p style={{ textAlign: "center", }} pl={1}>YOUR BAG IS CURRENTLY EMPTY.</p>)
    );
}
