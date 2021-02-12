import React from 'react';
import { useSelector } from "react-redux"
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { usePaypal } from './CustomHooks';
import {selectCurrency, selectTotal} from "../Selectors"

const CLIENT = {
    sandbox: 'AUsHUsDNDqG5Hev6xTdRxuViWHAQU-xHqMahjGuI4pv3xL4JS1mAJVLhF_YXKkrRNPkfRp4v_1lJnMZt',
};

const env = 'sandbox'; // you can set here to 'production' for production

export default function Paypal() {
    const { onSuccess, onCancel, onError } = usePaypal()
    const currency = useSelector(selectCurrency)  //AU or US
    const total = useSelector(selectTotal)

    return (
        <PaypalExpressBtn id="paypal-btn" env={env} client={CLIENT} currency={currency}
            total={total > 99 ? total : (total + 10)} onError={onError}
            shipping={1} style={{size:"responsive", tagline:"false", }}
            onSuccess={onSuccess} onCancel={onCancel} />
    );
}
