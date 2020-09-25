import React from 'react';
import { Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default function CreditCardIcons() {
    return (
        <div style={{ display: "flex" }}>
            <Icon style={{ marginRight: "20px" }} name='cc visa' size='big' />
            <Icon style={{ marginRight: "20px" }} name='cc mastercard' size='big' />
            <Icon style={{ marginRight: "20px" }} name='cc jcb' size='big' />
            <Icon style={{ marginRight: "20px" }} name='cc amex' size='big' />
            <Icon style={{ marginRight: "20px" }} name='cc paypal' size='big' />
        </div>);

}