import React, {useCallback } from "react"
import CheckoutStepper from "../Components/CheckOut/CheckoutStepper"
import PaymentForm from "../Components/CheckOut/PaymentForm"
import CheckOutReivew from "../Components/CheckOut/CheckoutReivew"
import { useStep } from "../Components/CheckOut/CustomHooks"
import CheckoutForm from "../Components/CheckOut/CheckoutForm"
import { useDispatch, useStore } from "react-redux"
import { ADD_BUYER_INFO, SET_PAYMENT_METHOD } from "../Actions/action.types"
import { selectTotal, selectPaymentMethod } from "../Components/Selectors"
import GooglePay from "../Components/Payment/GooglePay"
import Paypal from "../Components/Payment/Paypal"
import Stripe from "../Components/Payment/Stripe"
import Button from '@material-ui/core/Button';


const steps = ['Shipping Address', 'Secure Payment', 'Review Order', 'Order Complete']

export default function Checkout() {
    const dispatch = useDispatch();
    const store = useStore().getState()
    const total = selectTotal(store)
    const { activeStep, handleNext, handleBack, goToCart } = useStep()
    const paymentMethod = selectPaymentMethod(store)

    const addBuyerInfo = useCallback(
        (data) => {
            dispatch({
                type: ADD_BUYER_INFO,
                data: data
            })
            handleNext()
        },
        [dispatch],
    )

    const addPaymentMethod = useCallback(
        (data) => {
            dispatch({
                type: SET_PAYMENT_METHOD,
                paymentMethod: data,
                total: total
            })
        },
        [dispatch],
    )

    return (
        <div className="checkout-page">
            <CheckoutStepper activeStep={activeStep} steps={steps} handleNext={handleNext} handleBack={handleBack} />
            {activeStep === 0 && <CheckoutForm onContinue={addBuyerInfo} onBack={goToCart} />}
            {activeStep === 1 && <PaymentForm handleChange={addPaymentMethod} />}
            {activeStep === 2 && <CheckOutReivew onBack={handleBack} />}
            {activeStep === 2 && paymentMethod === "GooglePay" && <GooglePay />}
            {activeStep === 2 && paymentMethod === "PayPal" && <Paypal total={100} />}
            {activeStep === 2 && paymentMethod === "Stripe" && <Stripe />}
            <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
                </Button>
            {(activeStep === 1) &&
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                >
                    {activeStep === steps.length - 1 ? 'Finish' : 'CONTINUE'}
                </Button>
            }
        </div>
    )
}
