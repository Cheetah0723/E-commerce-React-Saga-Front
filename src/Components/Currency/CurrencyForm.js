import React, { useState, Fragment } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Button, DialogTitle } from '@material-ui/core';

export default function CurrencyForm({ currency, handleSubmit }) {
    const [tempCurrency, setCurrency] = useState(currency)

    return (
        <Fragment>
            <DialogTitle id="currency-dialog-title">CHOOSE YOUR LOCATION</DialogTitle>
            <DialogTitle id="currency-dialog-title">SELECT COUNTRY</DialogTitle>
            <Select
                className="currency-select"
                labelId="select-country"
                id="select-country"
                value={tempCurrency}
                onChange={e => setCurrency(e.target.value)}
            >
                <MenuItem value="AUD" selected={currency === "AUD"}>Australia & New Zealand</MenuItem>
                <MenuItem value="USD" selected={currency === "USD"}>United States</MenuItem>
            </Select>
            <Button id="switchCurrencyBtn" onClick={() => handleSubmit(tempCurrency)}>CONFIRM</Button>
        </Fragment>
    );
}





