import React, { useEffect } from "react"
import CheckoutStepper from "../Components/CheckOut/CheckoutStepper"
import PaymentForm from "../Components/CheckOut/PaymentForm"
import CheckOutReivew from "../Components/CheckOut/CheckoutReivew"
import { useStep } from "../Components/CheckOut/CustomHooks"
import CheckoutForm from "../Components/CheckOut/CheckoutForm"
import {  useSelector } from "react-redux"
import { selectTotal, selectCurrency, selectProductsInCart } from "../Components/Selectors"
import Paypal from "../Components/Payment/Paypal"
import Stripe from "../Components/Payment/Stripe"
import history from "../history"

const steps = ['Shipping Address', 'Secure Payment', 'Review Order', 'Order Complete']

export default function Checkout() {
    const [buyerInfo, setBuyerInfo] = useState()
    const [paymentMethod, setPaymentMethod] = useState()
    const total = useSelector(selectTotal)
    const { activeStep, handleNext, handleBack } = useStep()
    const currency = useSelector(selectCurrency)
    const itemInCart = useSelector(selectProductsInCart)

    // eslint-disable-next-line
    useEffect(() => {
        if (!itemInCart || itemInCart.length === 0)
            history.push("/")
    }, [])

    const addBuyerInfo = (data) => {
        setBuyerInfo({ ...data, currency: currency })
        handleNext()
    }

    const addPaymentMethod = () => {
        setPaymentMethod(paymentMethod)
    }

    return (
        <div className="checkout-page">
            <CheckoutStepper activeStep={activeStep} steps={steps} handleNext={handleNext} handleBack={handleBack} />
            {activeStep === 0 && <CheckoutForm onContinue={addBuyerInfo} />}
            {activeStep === 1 && <PaymentForm handleChange={addPaymentMethod} onContinue={handleNext} onBack={handleBack} />}
            {activeStep === 2 && <CheckOutReivew onBack={handleBack} onContinue={handleNext} buyerInfo={buyerInfo} paymentMethod={paymentMethod} shippingFee={total > 99 ? 0 : 10} />}
            {activeStep === 2 && paymentMethod === "PayPal" && <Paypal total={100} />}
            {activeStep === 2 && paymentMethod === "Stripe" && <Stripe />}
            }
        </div>
    )
}

