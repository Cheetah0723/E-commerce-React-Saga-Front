import React, { Fragment, useState, useEffect } from "react";
import { findById } from "../../Actions/search.action"
import { Row, Col } from 'reactstrap';

export default function ProductImg({ id }) {
    var product = findById(id);
    const [currentImg, setImg] = useState(product.img2)

    const changeImg = (e) => {
        setImg(e.target.name)
    }

    useEffect(() => {
        if (product.img2 !== undefined) {
            setImg(product.img2);
        }
        // eslint-disable-next-line
    }, [id]);

    return (
        <Fragment>
            <Row>
                <Col xs={4}>
                    <img className="sub-image-1" src={product.img2} alt="product2"
                        onClick={changeImg} name={product.img2} />
                    <img className="sub-image-2" src={product.img} alt="product1"
                        onClick={changeImg} name={product.img} />
                </Col>
                <Col xs={8}>
                    <img className="main-image" src={currentImg} alt="large"/>
                </Col>
            </Row>
        </Fragment>
    )

}