import React, { useEffect } from "react"
import CheckoutStepper from "../Components/CheckOut/CheckoutStepper"
import PaymentForm from "../Components/CheckOut/PaymentForm"
import CheckOutReivew from "../Components/CheckOut/CheckoutReivew"
import { useStep } from "../Components/CheckOut/CustomHooks"
import CheckoutForm from "../Components/CheckOut/CheckoutForm"
import { useDispatch, useSelector } from "react-redux"
import { ADD_BUYER_INFO, SET_PAYMENT_METHOD } from "../Actions/action.types"
import { selectTotal, selectPaymentMethod, selectBuyerInfo, selectCurrency, selectProductsInCart } from "../Components/Selectors"
import Paypal from "../Components/Payment/Paypal"
import Stripe from "../Components/Payment/Stripe"
import history from "../history"

const steps = ['Shipping Address', 'Secure Payment', 'Review Order', 'Order Complete']

export default function Checkout() {
    const dispatch = useDispatch();
    const total = useSelector(selectTotal)
    const { activeStep, handleNext, handleBack } = useStep()
    const paymentMethod = useSelector(selectPaymentMethod)
    const buyerInfo = useSelector(selectBuyerInfo)
    const currency = useSelector(selectCurrency)
    const itemInCart = useSelector(selectProductsInCart)

    // eslint-disable-next-line
    useEffect(() => {
        if (!itemInCart || itemInCart.length === 0)
            history.push("/")
    }, [])

    const addBuyerInfo = (data) => {
        dispatch({
            type: ADD_BUYER_INFO,
            data: { ...data, currency: currency }
        })
        handleNext()
    }

    const addPaymentMethod = (data) => {
        dispatch({
            type: SET_PAYMENT_METHOD,
            paymentMethod: data,
            total: total
        })
        handleNext()
    }

    return (
        <div className="checkout-page">
            <CheckoutStepper activeStep={activeStep} steps={steps} handleNext={handleNext} handleBack={handleBack} />
            {activeStep === 0 && <CheckoutForm onContinue={addBuyerInfo} />}
            {activeStep === 1 && <PaymentForm handleChange={addPaymentMethod} onContinue={addPaymentMethod} onBack={handleBack} />}
            {activeStep === 2 && <CheckOutReivew onBack={handleBack} onContinue={handleNext} buyerInfo={buyerInfo} paymentMethod={paymentMethod} />}
            {activeStep === 2 && paymentMethod === "PayPal" && <Paypal total={100} />}
            {activeStep === 2 && paymentMethod === "Stripe" && <Stripe />}
            }
        </div>
    )
}

