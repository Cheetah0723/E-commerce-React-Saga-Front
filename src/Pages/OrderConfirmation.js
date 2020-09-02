import React from "react"
import { useSelector } from "react-redux"
import { InputLabel } from '@material-ui/core';

export default function OrderConfirmation() {
    const order = useSelector(state => state.OrderReducer)
    const productsInOrder = order.OrderProducts
    const productView = productsInOrder.map(item => {
        const price = order.currency === "AUD" ? item.AUprice : item.USprice
        return <div>
            <div className="row">
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
            </div>
        </div>
    })

    return (
        <div className="OrderConfirmation">
            <div className="container">
                <div className="row">
                    <p className="title">Your order has been confirmed</p>
                </div>
                <div className="row">
                    <InputLabel className="col" id="state">Customer Name</InputLabel>
                    <p className="item">
                        {order.customerFName}  {order.customerLName}
                    </p>
                </div>
                <div className="row">
                    <InputLabel className="col" id="state">Street Address</InputLabel>
                    <p className="item">  {order.shippingAddress} </p>
                </div>
                <div className="row">
                    <InputLabel className="col" id="state">Suburb</InputLabel>
                    <p className="item"> {order.shippingSuburb} </p>
                </div>
                <div className="row">
                    <div className="col-left">
                        <InputLabel className="col" id="state">State</InputLabel>
                        <p className="item"> {order.shippingState} </p>
                    </div>
                    <div className="col-right">
                        <InputLabel className="col" id="state">Post Code</InputLabel>
                        <p className="item"> {order.shippingPostcode} </p>
                    </div>
                </div>
                <div className="row">
                    <InputLabel className="col" id="state">Country</InputLabel>
                    <p className="item">  {order.shippingCountry} </p>
                </div>
                <div className="row">
                    <InputLabel className="col" id="state">Email</InputLabel>
                    <p className="item">  {order.customerEmail} </p>
                </div>
                <div className="row">
                    <p className="title">Items</p>
                </div>
                {productView}
            </div>
        </div>
    )
}