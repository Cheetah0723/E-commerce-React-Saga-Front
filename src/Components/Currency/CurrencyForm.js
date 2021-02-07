import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import { Button, DialogTitle } from '@material-ui/core';
import { Row } from 'reactstrap';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    modal: {
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white",
    },
}));

export default function CurrencyForm({ currency, handleSubmit }) {
    const classes = useStyles();
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
                <MenuItem value="AU" selected={currency === "AU"}>Australia & New Zealand</MenuItem>
                <MenuItem value="US" selected={currency === "US"}>United States</MenuItem>
            </Select>
            <Button id="switchCurrencyBtn" onClick={() => handleSubmit(tempCurrency)}>CONFIRM</Button>
        </Fragment>
    );
}





