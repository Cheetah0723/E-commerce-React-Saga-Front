import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

export default function PaymentForm({ handleChange, onContinue }) {

    return (
        <div className="PaymentMethod">
            <FormLabel component="legend">Payment Method</FormLabel>
            <RadioGroup defaultValue="Stripe" aria-label="Select a payment method" name="paymentMethod"
                onChange={e => handleChange(e.target.value)}>
                <FormControlLabel value="Stripe" control={<Radio />} label="Credit Card" />
                <FormControlLabel value="PayPal" control={<Radio />} label="PayPal" />
            </RadioGroup>
            <Button className="submit-btn" onClick={onContinue}>CONTINUE</Button>
        </div>
    )
}
