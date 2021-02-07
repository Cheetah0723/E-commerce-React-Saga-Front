import { useDispatch } from 'react-redux'
import { addToCart } from '../../Actions/cart.action';

export default function useAddToCart(product, size, currency) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        if (size === undefined || size === "") {
            alert("Please select a size.");
        }
        else {
            dispatchAddToCart(product);
        }
    }

    const dispatchAddToCart = () => {
        console.log("size", size)
        const price = currency === "AUD" ? product.AUprice : product.USprice
        dispatch(addToCart(product, size, price))
    }

    return { handleAddToCart }
}