import React, { useState, useEffect } from "react"
import ToggleButton from '@material-ui/lab/ToggleButton';

export default function SizeTabItem({ value, disabled, clicked, handleClick }) {
    const [isClicked, setClicked] = useState(clicked)

    useEffect(() => { setClicked(clicked) }, [clicked])

    return (
        <ToggleButton className={isClicked ? "button-group-item-clicked" : !disabled ? "button-group-item" : "disabledTab"}
            value={value} key={value} onClick={handleClick}
            disabled={disabled}>{value}</ToggleButton>);
}