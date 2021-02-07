import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import { Button } from '@material-ui/core';
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
        <div>
            <Row>
                The logo
                </Row>
            <Row>
                CHOOSE YOUR LOCATION
                </Row>
            <Row>
                SELECT COUNTRY
                </Row>
            <Row>
                <FormControl className={classes.formControl}>
                    <Select
                        labelId="select-country"
                        id="select-country"
                        value={tempCurrency}
                        onChange={e => setCurrency(e.target.value)}
                    >
                        <MenuItem value="AU" selected={currency === "AU"}>Australia & New Zealand</MenuItem>
                        <MenuItem value="US" selected={currency === "US"}>United States</MenuItem>
                    </Select>
                </FormControl>
            </Row>
            <Row>
                <Button className="switchCurrencyBtn"
                    style={{
                        position: "absolute",
                        top: "58%",
                        left: "10%",
                        color: "white",
                        fontSize: "1rem",
                        backgroundColor: "black",
                        width: "7.5rem",
                        marginLeft: "0.625rem",
                        borderRadius: "1.5625rem",
                        fontFamily: "'Montserrat', sans-serif",
                    }}
                    onClick={() => handleSubmit(tempCurrency)}>CONFIRM</Button>
            </Row>
        </div>
    );
}





