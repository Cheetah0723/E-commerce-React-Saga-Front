import { useCallback } from 'react';
import { CLEAR_CART } from '../Cart/ActionTypes';
import { useDispatch } from "react-redux"

export default function Model() {

    const dispatch = useDispatch()

    const clearCart = useCallback(
        () => {
            dispatch({
                type: CLEAR_CART,
            })
        },
        [dispatch],
    )

    return { clearCart }
}