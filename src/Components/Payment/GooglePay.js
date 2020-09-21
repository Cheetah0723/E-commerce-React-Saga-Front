import React from 'react'
import { useSelector } from "react-redux"
import GPayButton from 'react-google-pay-button'
import { useGoogle } from "./CustomHooks"
import {selectCurrency, selectTotal} from "../Selectors"

export default function GooglePay() {
    const { handlePayment } = useGoogle()
    const currency = useSelector(selectCurrency)  //AUD or USD
    const total = useSelector(selectTotal)

    return (
        <GPayButton
            totalPriceStatus={'FINAL'}
            totalPrice={total.toString()}
            currencyCode={currency}
            countryCode={ currency.substring(0,-1)}
            development={true}
            onLoadPaymentData={handlePayment}
        />
    )
}