import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { selectCurrency } from "../Selectors"
import { addQuantity, subQuantity } from "../../Actions/cart.action"
import { Row, Col } from 'reactstrap';

export default function CartItem({ item }) {
    const currency = useSelector(selectCurrency)
    const dispatch = useDispatch();
    const price = currency === "AUD" ? item.AUprice : item.USprice

    const add = () => dispatch(addQuantity(item.id, item.size, price))
    const sub = () => dispatch(subQuantity(item.id, item.size, price))

    return (
        <Row className="align-center">
            <Col xs={4}>
                <img className="cart-product-image" src={item.img} alt={item.name} />
            </Col>
            <Col xs={6}>
                {item.name} <br />{item.color} / {item.size}
                <ButtonGroup aria-label="outlined secondary button group">
                    <Button data-test="add-quantity-btn" onClick={add}>+</Button>
                    <Button disabled>{item.quantity}</Button>
                    <Button data-test="sub-quantity-btn" onClick={sub}>-</Button>
                </ButtonGroup>
                <br /><br /><br />
            </Col>
            <Col xs={2} className="price">
                ${item.salesRate === 1 ? price : price * item.salesRate}
            </Col>
        </Row>
    );

}