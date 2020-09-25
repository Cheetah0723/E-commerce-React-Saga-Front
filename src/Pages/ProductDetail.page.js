import React, { useState, useEffect } from 'react';
import RightSideData from '../Components/ProductDetail/RightSideData'
import ProductImg from '../Components/ProductDetail/ProductImg'
import { Container, Row, Col } from 'reactstrap';
//import Recommendations from './Recommendations';

export default function ProductDetail(props) {

    return (
        <div className="product-detail-page">
            <Container>
                <Row>
                    <Col xs={12} md={9}>
                        <ProductImg id={parseInt(props.match.params.id)} />
                    </Col>
                    <Col xs={12} md={3}>
                        <RightSideData id={parseInt(props.match.params.id)} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

