
import { CLEAR_CART } from '../../actions/action.types';
import { useDispatch } from "react-redux"

export default function Model() {

    const dispatch = useDispatch()

    const clearCart =   () => {
            dispatch({
                type: CLEAR_CART,
            })
        }

    return { clearCart }
}