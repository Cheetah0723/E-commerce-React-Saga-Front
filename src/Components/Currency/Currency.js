import React from "react"
import CurrencyModalView from "./CurrencyModalView"
import { Button } from '@material-ui/core';
import useCurrency from "./useCurrency"

export default function Currency() {
    const { openStatus, handleClick, handleClose, handleSubmit, currency } = useCurrency()

    return (
        <div>
            <Button className="switchCurrencyBtn" onClick={handleClick}
                style={{
                    marginTop: "50px",
                    color: "white",
                    fontSize: "1.2rem",
                    backgroundColor: "black",
                    width: "260px",
                    marginLeft: "10px",
                    borderRadius: "25px",
                    fontFamily: "'Montserrat', sans-serif",
                }}>
              Select Currency: {currency}D</Button>
            <CurrencyModalView openStatus={openStatus} handleClose={handleClose}
                currency={currency} 
                handleSubmit={handleSubmit} />
        </div>
    )
}
