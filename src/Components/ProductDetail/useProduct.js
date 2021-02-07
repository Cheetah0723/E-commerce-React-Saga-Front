import { useState, useCallback } from 'react';
import { findById, showStockStatus, findBackgroundColor } from '../../Actions/search.action';
//import { selectCurrency } from '../Selectors';
//import { getReviewsByProductId } from "../Review/ApiCalls"


export default function ProductDetailController(id) {
    const [product, setProduct] = useState(findById(id))
    const [reviews, setReviews] = useState([])
    const sizeAvailability = useCallback(() => showStockStatus(id))
    const colorCode = useCallback(() => findBackgroundColor(product.color))


    /**  useEffect(() => {
          if (id) { setReviews(getReviews(id)) }
      }, [id])
  
      //TODO weird
      const getReviews = useCallback((id) => {
          try {
              return getReviewsByProductId(id)
          } catch (err) {
              return []
          }
      })*/

    return {
        product, sizeAvailability, colorCode, reviews, setProduct
    }
}