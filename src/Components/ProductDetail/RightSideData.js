import React, { useState } from 'react';
import { useSelector } from "react-redux"
import { Button } from '@material-ui/core';
import ProductInstruction from './productInstructions'
import SizeTab from '../sizeTab/sizeTab';
import ReviewTabContainer from "../review/reviewTabContainer"
import ReviewForm from "../review/reviewForm"
import useAddToCart from "./useAddToCart"
import { selectCurrency } from '../selectors';
import { showStockStatus, findById } from "../../actions/search.action"

export default function RightSideData({ id }) {
    const [size, setSize] = useState("")
    const product = findById(id)
    // eslint-disable-next-line 
    const [reviews, setReviews] = useState([])  //TODO
    const sizeAvailability = showStockStatus(id)
    const currency = useSelector(selectCurrency)

    const { handleAddToCart } = useAddToCart(product, size, currency)

    const price = currency === "AUD" ? product.AUprice : product.USprice

    const handleChangeSize = value => {
        setSize(value)
    };

    let reviewsParsed = Array.isArray(reviews) ? reviews : []
    const reviewBody = reviewsParsed.length === 0 ? <p>There is no review yet.</p> :
        reviewsParsed.map(each => {
            return <ReviewForm productName="" initialState={each} />
        })


    return (
        <div className="description" >
            <h4 className="product-name">{product.name}</h4>
            {product.salesRate === 1 && <p className="non-sales-price">${price} {currency}</p>}
            {
                product.salesRate < 1 &&
                <p className="sales-price">SALE ${price * product.salesRate} {currency} ({100 - product.salesRate * 100} % off)</p>
            }
            <p className="colors">{product.color}</p>
            <br />
            <ReviewTabContainer productName={product.name} productId={product.id} />
            <p className="select-size">SELECT SIZE</p>
            <SizeTab onChange={size => handleChangeSize(size)} sizeDisplay={sizeAvailability} />
            <Button variant="outlined" id="add-to-cart-btn" onClick={handleAddToCart}><b>Add to Cart</b> </Button>
            <ProductInstruction reviews={reviewBody} />
        </div>
    )

}