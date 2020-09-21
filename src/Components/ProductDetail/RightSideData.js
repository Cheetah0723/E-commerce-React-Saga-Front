import React from 'react';
import { useSelector } from "react-redux"
import { Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import ProductInstruction from '../ProductDetail/ProductInstructions';
import AddToCartButton from '../ProductDetail/AddToCartButton';
import SizeTab from '../SizeTab/SizeTab';
import useProduct from "./useProduct"
import ReviewTabContainer from "../Review/ReviewTabContainer"
import ReviewForm from "../Review/ReviewForm"
import useData from "./useData"
import { selectCurrency } from '../Selectors';

export default function RightSideData({ id }) {

    const currency = useSelector(selectCurrency)
    const { product, setProduct, sizeAvailability, colorCode,  reviews,
    } = useProduct(id)

    const { handleAddToCart } = useData(product, currency)

    const price = currency === "AUD" ? product.AUprice : product.USprice

    const handleChangeSize = value => {
        setProduct({...product, size: value })
    };

    let reviewsParsed = Array.isArray(reviews) ? reviews : []
    const reviewBody = reviewsParsed.length === 0 ? <p>There is no review yet.</p> :
        reviewsParsed.map(each => {
            return <ReviewForm productName="" initialState={each} />
        })


    return (
        <div className="description right-container" >
            <h4 className="product-name">{product.name}</h4>
            {product.salesRate === 1 && <p className="non-sales-price">${price} {currency}</p>}
            {
                product.salesRate < 1 &&
                <p className="sales-price">SALE ${price * product.salesRate} {currency} ({100 - product.salesRate * 100} % off)</p>
            }
            <Button className="color-btn" style={{ backgroundColor: colorCode }}> </Button>
            <p className="colors">{product.color}</p>
            <br />
            <div className="review-container">
                <ReviewTabContainer productName={product.name} productId={product.id} />
            </div>
            <FormControl variant="outlined"
                className="form">
                <p className="select-size">SELECT SIZE</p>
                <div className="size-tab">
                    <SizeTab onChange={size=>handleChangeSize(size)} sizeDisplay={sizeAvailability} />
                </div>
                <AddToCartButton onAddToCart={handleAddToCart} />
                <div className="review-list">
                    <p>Reviews</p>
                    {reviewBody}</div>
                <ProductInstruction reviews={reviews} />
            </FormControl>
        </div>
    )

}