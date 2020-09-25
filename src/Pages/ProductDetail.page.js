import React, { useState, useEffect } from 'react';
import RightSideData from '../Components/ProductDetail/RightSideData'
import ProductImg from '../Components/ProductDetail/ProductImg'
//import Recommendations from './Recommendations';

export default function ProductDetail(props) {

    return (
        <div className="product-detail-page">
            <div className="main">
                <ProductImg id={parseInt(props.match.params.id)} />
                <div className="blank"></div>
                <RightSideData id={parseInt(props.match.params.id)} />
                <div className="blank"></div>
            </div>
        </div>
    )
}

