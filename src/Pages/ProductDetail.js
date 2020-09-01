import React from 'react';
import HeaderContainer from '../Components/Header/HeaderContainer';
import RightSideData from '../Components/ProductDetail/RightSideData'
import Footer from '../Components/Footer/Footer';
import ProductImg from '../Components/ProductDetail/ProductImg'
import "./ProductDetail.css"
//import Recommendations from './Recommendations';

export default function ProductDetail(props) {
    let id = parseInt(props.match.params.id);

    return (
        <div className="product-detail-page">
            <HeaderContainer />
            <div className="main">
                <ProductImg id={id} />
                <div className="blank"></div>
                    <RightSideData id={id} />
                <div className="blank"></div>
            </div>
            <Footer />
        </div>
    )
}

