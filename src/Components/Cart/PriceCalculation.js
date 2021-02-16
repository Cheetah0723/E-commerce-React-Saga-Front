import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';

const PriceCalculation = ({ total = 0, shipping = 0 }) => {
    const RowInCart = ({ leftText, rightText }) => (
        <Row className="align-center">
            <Col xs={2}>{leftText}</Col>
            <Col xs={7}></Col>
            <Col xs={3}> {rightText}<br /><br /> </Col>
        </Row>
    )

    return (
        <Fragment>
            <RowInCart leftText="SUBTOTAL" rightText={"$" + total + ".00"} />
            <RowInCart leftText="SHIPPING" rightText={"$" + shipping + ".00"} />
            <RowInCart leftText="TOTAL" rightText={"$" + (shipping + total) + ".00"} />
        </Fragment>
    )
}

export default PriceCalculation