import React from 'react';
import { Button } from '@material-ui/core';
import { Row, Col } from 'reactstrap';

export default function CheckoutReview({ shippingFee, onBack, buyerInfo, paymentMethod }) {

    return (
        <div className="check-out-shipping-payment">
            <Col className="contact-confirm">
                <Row>Contact</Row>
                <Row> First Name: {buyerInfo ? buyerInfo.fName : ""}  </Row>
                <Row>  Last Name: {buyerInfo ? buyerInfo.lName : ""}</Row>
                <Row>Contact Number: {buyerInfo ? buyerInfo.phone : ""} </Row>
                <Row> Email: {buyerInfo ? buyerInfo.email : ""} </Row>
                <Row> Street Address:{buyerInfo ? buyerInfo.streetAddress : ""} </Row>
                <Row> Suburb:{buyerInfo ? buyerInfo.suburb : ""} </Row>
                <Row>State:{buyerInfo ? buyerInfo.state : ""}</Row>
                <Row> Postcode:{buyerInfo ? buyerInfo.postcode : ""} </Row>
                <Row>  Country:{buyerInfo ? buyerInfo.country : ""} </Row>
                <Row>Payment Method: {paymentMethod}</Row>
                <Row>Shipping・${shippingFee}.00</Row>
                <Button className="change-button" onClick={onBack}>Change</Button>
            </Col>
        </div>
    );
}
