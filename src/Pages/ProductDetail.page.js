import React,{useState} from 'react';
import RightSideData from '../Components/ProductDetail/RightSideData'
import ProductImg from '../Components/ProductDetail/ProductImg'
//import Recommendations from './Recommendations';

export default function ProductDetail(props) {
    const [id, setState] = useState(parseInt(props.match.params.id))

    return (
        <div className="product-detail-page">
            <div className="main">
                <ProductImg id={id} />
                <div className="blank"></div>
                <RightSideData id={id} />
                <div className="blank"></div>
            </div>
        </div>
    )
}

