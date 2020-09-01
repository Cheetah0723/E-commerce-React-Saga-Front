import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import { Button } from '@material-ui/core';

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

export default function CurrencyModal({ currency, openStatus, handleClose, handleSubmit }) {
    const classes = useStyles();
    const [tempCurrency, setCurrency] = useState(currency)

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={openStatus}
            onClose={handleClose}
        >
            <div className={classes.paper}>
                <div className="row">
                    The logo
                </div>
                <div className="row">
                    CHOOSE YOUR LOCATION
                </div>
                <div className="row">
                    SELECT COUNTRY
                </div>
                <div className="row">
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
                </div>
                <div className="row">
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
                </div>
            </div>
        </Modal>
    );
}





