import { useDispatch } from 'react-redux'
import { addToCartThunk } from '../../Actions/cart.action';

export default function useAddToCart(product, size, currency) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        if (size === undefined || size === "") {
            alert("Please select a size.");
        }
        else {
            const price = currency === "AUD" ? product.AUprice : product.USprice
            dispatch(addToCartThunk(product, size, price))
        }
    }

    return { handleAddToCart }
}