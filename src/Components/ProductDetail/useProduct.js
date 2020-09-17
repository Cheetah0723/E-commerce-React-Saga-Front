import { useState, useEffect, useCallback } from 'react';
import { useStore } from 'react-redux'
import { findById, showStockStatus, findBackgroundColor } from '../../Actions/search.action';
import { selectCurrency } from '../Selectors';
import { getReviewsByProductId } from "../Review/ApiCalls"


export default function ProductDetailController(id) {
    var initialProduct = findById(id);

    const [product, setProduct] = useState(initialProduct);
    const [reviews, setReviews] = useState([])

    const store = useStore().getState()
    let currency = selectCurrency(store)

    useEffect(() => {
        if (id === undefined) { return }
        const results = getReviews(id)
        setReviews(results)
    }, [id])

    const getReviews = useCallback((id) => {
        let result = []
        try {
            result = getReviewsByProductId(id)
            return result
        } catch (err) {
            return []
        }
    })

    const sizeAvailability = showStockStatus(id);

    const colorCode = findBackgroundColor(product.color);

    const price = currency === "AU" ? product.AUprice : product.USprice

    return {
     product, sizeAvailability, colorCode , price, reviews,setProduct
    }
}