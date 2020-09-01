import React from 'react'
import GPayButton from 'react-google-pay-button'
import {usePaymentData, useGoogle} from "./CustomHooks"

export default function GooglePay() {
    const {  handlePayment } = useGoogle()
    const { total, currency, country } = usePaymentData()

    return (
        <GPayButton
            totalPriceStatus={'FINAL'}
            totalPrice={total.toString()}
            currencyCode={currency}
            countryCode={country}
            development={true}
            onLoadPaymentData={handlePayment}
        />
    )
}