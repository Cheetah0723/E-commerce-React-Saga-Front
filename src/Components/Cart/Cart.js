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
            <Row>
                <Col xs={2} id="left">SUBTOTAL</Col>
                <Col xs={7} id="middle"></Col>
                <Col xs={3} id="right"> ${totalFromState}.00<br /><br /> </Col>
            </Row>
            {shipping === 0 ? <Row>SHIPPING CALCULATED AT <br />CHECKOUT<br /> </Row>
                : <Fragment>
                    <Row>
                        <Col xs={2} id="left">SHIPPING</Col>
                        <Col xs={7} id="middle"></Col>
                        <Col xs={3} id="right">  ${shipping}.00<br /><br /></Col>
                    </Row>
                    <Row>
                        <Col xs={2} id="left">TOTAL</Col>
                        <Col xs={7} id="middle"></Col>
                        <Col xs={3} id="right">${shipping + totalFromState}.00<br /><br /> </Col>
                    </Row>
                </Fragment>
            }
            {showButton && <Button id="checkout-btn" onClick={handleCheckOut}>Check Out→</Button>}<br />
            {totalFromState > 0 && <Paypal id="paypal-btn" total={totalFromState} />}
        </Fragment> : <p style={{ textAlign: "center", }} pl={1}>YOUR BAG IS CURRENTLY EMPTY.</p>)
    );
}


