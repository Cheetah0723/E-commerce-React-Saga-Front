import React from "react"
import ToggleButton from '@material-ui/lab/ToggleButton';

export default function SizeTabItem({ value, disabled, clicked, handleClick }) {

    return (
        <ToggleButton className={clicked ? "button-group-item-clicked" : !disabled ? "button-group-item" : "disabledTab"}
            value={value} key={value} onClick={handleClick}
            disabled={disabled}>{value}</ToggleButton>);
}