import React, { Fragment, useState, useEffect } from "react";
import { findById } from "../Search/Actions"

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
    }, [id]);

    return (
        <Fragment>
            <div className="sub-img-container">
                <img className="sub-image-1" src={require('../../' + product.img2)} alt="product2"
                    onClick={changeImg} name={product.img2} />

                <img className="sub-image-2" src={require('../../' + product.img)} alt="product1"
                    onClick={changeImg} name={product.img} />
            </div>
            <div className="main-img-container">
                <img className="main-image" src={require('../../' + currentImg)} alt="large"
                />
            </div>
        </Fragment>
    )

}