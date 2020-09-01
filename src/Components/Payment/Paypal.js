import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { usePaypal, usePaymentData } from './CustomHooks';


const CLIENT = {
    sandbox: 'AUsHUsDNDqG5Hev6xTdRxuViWHAQU-xHqMahjGuI4pv3xL4JS1mAJVLhF_YXKkrRNPkfRp4v_1lJnMZt',
};

const env = 'sandbox'; // you can set here to 'production' for production

export default function Paypal() {
    const { onSuccess, onCancel, onError } = usePaypal()
    const { total, currency } = usePaymentData()

    return (
        <PaypalExpressBtn env={env} client={CLIENT} currency={currency}
            total={total > 99 ? total : (total + 10)} onError={onError}
            shipping={1}
            onSuccess={onSuccess} onCancel={onCancel} />
    );
}
