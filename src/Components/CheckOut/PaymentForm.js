import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import { Row } from 'reactstrap';

const PaymentForm = ({ handleChange, onContinue, onBack }) => (
    <div className="PaymentMethod">
            <FormLabel component="legend">Payment Method</FormLabel>
            <div className="payment-radio-group" onChange={e => handleChange(e.target.value)}>
                <Row> <input type="radio" value="Stripe" name="Stripe" /> Stripe </Row>
                <Row> <input type="radio" value="PayPal" name="PayPal" /> PayPal </Row>
            </div>
            <Row>
                <Button className="submit-btn" onClick={onContinue}>CONTINUE</Button>
                <Button id="payment-cancel-btn" onClick={onBack}> Back </Button>
            </Row>
    </div>)

export default PaymentForm