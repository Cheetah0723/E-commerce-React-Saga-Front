import history from "../../history"
import { useSelector } from 'react-redux';


export default function useCart() {
    const cartReducer = useSelector(state => state.CartReducer)
    const totalFromState = cartReducer.total

    const handleCheckOut = (totalFromState) => {
        //Validate the cart to ensure it is not empty.
        if (totalFromState === 0) {
            return
        }
        history.push("/checkoutInfo");
    }

    const shipping = totalFromState >= 99 ? 0 : 10;

    const items = cartReducer.addedItems

    return { items, totalFromState, handleCheckOut, shipping }
}