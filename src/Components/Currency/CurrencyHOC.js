import React, { useState,  Fragment } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectCurrency } from "../Selectors";
import { Button, Dialog } from '@material-ui/core';
import CurrencyForm from "./CurrencyForm"
import { updateCurrency } from "../../Actions/cart.action"

export function useCurrency() {
    const [openStatus, setOpen] = useState(false)
    const currency = useSelector(selectCurrency)

    const handleClick = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const dispatch = useDispatch()

    const handleSubmit = (value) => {
        dispatch(updateCurrency(value))
        handleClose()
    }

    return { openStatus, handleClick, handleClose, handleSubmit, currency }
}

export default function CurrencyHOC() {
    const { openStatus, handleClick, handleClose, handleSubmit, currency } = useCurrency()

    return (
        <Fragment >
            <Button id="switchCurrencyBtn" onClick={handleClick}>
                Currency: {currency}</Button>
            <Dialog
                open={openStatus}
                onClose={handleClose}
                aria-labelledby="max-width-dialog-title"
                maxWidth="lg"
                className="dialog-container"
                style={{ alignItems: "center", justifyContent: "center" }}
            >

                <CurrencyForm currency={currency} handleSubmit={handleSubmit} />
            </Dialog>
        </Fragment>
    )
}
