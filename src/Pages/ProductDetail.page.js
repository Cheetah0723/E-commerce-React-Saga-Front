import React from 'react';
import RightSideData from '../Components/ProductDetail/RightSideData'
import ProductImg from '../Components/ProductDetail/ProductImg'
import { Container, Row, Col } from 'reactstrap';

export default function ProductDetail(props) {

    return (
        <div className="product-detail-page">
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <ProductImg id={parseInt(props.match.params.id)} />
                    </Col>
                    <Col xs={12} md={4}>
                        <RightSideData id={parseInt(props.match.params.id)} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

