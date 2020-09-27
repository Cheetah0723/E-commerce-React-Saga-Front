import { useCallback } from "react"
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Actions/cart.action';

export default function useAddToCart(product, currency) {
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

    const dispatchAddToCart = useCallback(() => {
        const price = currency === "AUD" ? product.AUprice : product.USprice
        dispatch(addToCart(product, product.size, price))
    }, [dispatch])

    return { handleAddToCart }
}