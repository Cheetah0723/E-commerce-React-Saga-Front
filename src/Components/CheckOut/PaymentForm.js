import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function PaymentForm({ handleChange }) {

    return (
        <FormControl className="PaymentMethod" component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup defaultValue="Stripe" aria-label="Select a payment method" name="paymentMethod"
                onChange={e => handleChange(e.target.value)}>
                <FormControlLabel value="Stripe" control={<Radio />} label="Credit Card" />
                <FormControlLabel value="PayPal" control={<Radio />} label="PayPal" />
                <FormControlLabel value="GooglePay" control={<Radio />} label="Google Pay" />
            </RadioGroup>
        </FormControl>
    )
}
