import { useState, useEffect, useCallback } from "react"
//import { selectCurrency, selectTotal } from "../Selectors"
import { useDispatch } from "react-redux"
import Model from "./Model"
import { CREATE_ORDER } from "../../Actions/action.types"

export function usePaypal() {
    const [successful, setSuccessful] = useState(false)
    const { clearCart } = Model()

    const dispatch = useDispatch()
    const createOrder = useCallback(
        () => {
            dispatch({
                type: CREATE_ORDER
            })
        },
        [dispatch],
    )

    useEffect(() => {
        if (successful) {
            createOrder()
        }
        // eslint-disable-next-line 
    }, [successful])

    const onSuccess = (payment) => {
        setSuccessful(true)
        clearCart(); //TODO bug
    }

    const onCancel = (data) => {
        setSuccessful(false)
        // User pressed "cancel" or close Paypal's popup!
        console.log('The payment was cancelled!', data);
        // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
    }

    const onError = (err) => {
        setSuccessful(false)
        // The main Paypal's script cannot be loaded or somethings block the loading of that script!
        console.log("Error!", err);
        // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
        // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
    }

    // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

    return { onSuccess, onCancel, onError }
}

export function useStripe() {

}