import React from 'react';
import ProductList from '../Components/Product/ProductList';
import { Button } from '@material-ui/core';
import { findNewReleases } from '../Actions/search.action';
import history from '../history';
import { Row, Col } from 'reactstrap';

export default function Homepage() {
    const displayData = findNewReleases()

    return (
        <div className="Homepage">
            <div className="hp-promotion-image">
                <div className="centered-title" ><b>BUILD YOUR LEGACY</b></div>
                <div className="centered-text" >Lift like the legends in authentic bodybuilding cuts.</div>
                <Button className="view-all-btn" onClick={() => history.push("/all")}><b>SHOP</b></Button>
                <img className="sub-image" src="https://my-ec-react.s3-ap-southeast-2.amazonaws.com/product-photos/hp-photo-3.JPG" alt="hp-top" />
                <img className="mobile-sub-image" src="https://my-ec-react.s3-ap-southeast-2.amazonaws.com/product-photos/hp-photo-3-mobile.JPG" alt="hp-top" />
            </div>
            <div>
                <Row className="hp-new-release">
                    <Col sm={4} md={4}>
                        <b className="womens"> WOMENS</b>
                        <br />
                        <b className="new-release">NEW RELEASES</b>
                    </Col>
                    <Col className="ml-auto" ><p className="view-all-link" onClick={() => history.push("/all")}>View All</p></Col>
                </Row>
                <ProductList display={displayData} />
            </div>
        </div>
    );
}

/**
 *             <div className="insta-area">
                    <p style={{ fontSize: "1.563rem" }} >AS SEEN ON INSTAGRAM</p>
                    <p style={{ fontSize: "1rem" }}>Shop our favourite looks here</p></div>
                <InstaController />
 */