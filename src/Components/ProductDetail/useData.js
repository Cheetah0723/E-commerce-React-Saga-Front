import { useCallback } from "react"
import { useDispatch } from 'react-redux'
import { ADD_TO_CART } from '../Cart/ActionTypes';

export default function useData(product, currency) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        //Validate to ensure the size is selected before adding to cart.
        if (product.size === undefined) {
            alert("Please select a size.");
        }
        else {
            dispatchAddToCart(); // Call the reducer to add the item the cart
        }
    }

    const dispatchAddToCart = useCallback(
        () => dispatch({
            type: ADD_TO_CART,
            product: product,
            currency: currency
        }),
        [dispatch]
    )

    return { handleAddToCart }
}