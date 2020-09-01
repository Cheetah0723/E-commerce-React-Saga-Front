import { CREATE_ORDER } from "./Components/Order/ActionTypes"
import { useDispatch } from "react-redux"
import React, { useCallback } from "react"

export default function Test() {
    const dispatch = useDispatch();

    const click = useCallback(
        () => {
            dispatch({
                type: CREATE_ORDER
            })
        },
        [dispatch],
    )

    return (
        <div className="checkout-page">
            <p style={{ color: "black" }} onClick={click}>CLICK ME </p>
        </div>
    )
}