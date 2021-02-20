import React from "react"
import { useSelector } from "react-redux"
import { InputLabel } from '@material-ui/core';
import { selectOrderConfirmation } from "../Components/Selectors"
import { Row, Col } from 'reactstrap';

export default function OrderConfirmation() {
    const order = useSelector(selectOrderConfirmation)

    const productsInOrder = order.OrderProducts
    const productView = productsInOrder.map(item => {
        const price = order.currency === "AUD" ? item.AUprice : item.USprice
        return (
            <Row>
                <img className="card-image" src={require('../' + item.img)} alt={item.name}
                    style={{
                        width: '12rem',
                        height: '12rem',
                    }} />
                <div className="product-name">
                    {item.name}<br />
                    {item.size} / {item.color}
                </div>
                <div className="blank">      </div>
                ${item.salesRate === 1 ? price : price * item.salesRate} {order.currency}
            </Row>
        )
    })

    return (
        <div className="OrderConfirmation">
            <div className="container">
                <Row>
                    <p className="title">Your order has been confirmed</p>
                </Row>
                <Row>
                    <InputLabel id="state">Customer Name</InputLabel>
                    <p className="item">
                        {order.customerFName}  {order.customerLName}
                    </p>
                </Row>
                <Row>
                    <InputLabel id="state">Street Address</InputLabel>
                    <p className="item">  {order.shippingAddress} </p>
                </Row>
                <Row>
                    <InputLabel id="state">Suburb</InputLabel>
                    <p className="item"> {order.shippingSuburb} </p>
                </Row>
                <Row>
                    <Col sm={6}>
                        <InputLabel id="state">State</InputLabel>
                        <p className="item"> {order.shippingState} </p>
                    </Col>
                    <Col sm={6}>
                        <InputLabel id="state">Post Code</InputLabel>
                        <p className="item"> {order.shippingPostcode} </p>
                    </Col>
                </Row>
                <Row>
                    <InputLabel id="state">Country</InputLabel>
                    <p className="item">  {order.shippingCountry} </p>
                </Row>
                <Row>
                    <InputLabel id="state">Email</InputLabel>
                    <p className="item">  {order.customerEmail} </p>
                </Row>
                <Row>
                    <p className="title">Items</p>
                </Row>
                {productView}
            </div>
        </div>
    )
}