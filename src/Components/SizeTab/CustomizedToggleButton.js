import React, { useState, useEffect } from "react"
import ToggleButton from '@material-ui/lab/ToggleButton';

export default function CustomizedToggleButton({ value, disabled, handleClick, clicked }) {
    const [hover, setHover] = useState(false)
    const [localClicked, setClicked] = useState(clicked)

    useEffect(() => {
        setClicked(clicked)
    }, [clicked])

    return (
        <div className={!disabled && hover ? "button-group-item tab" :!disabled && localClicked?"button-group-item tab":"disabledTab"}>
            <ToggleButton className={hover && !disabled ? "button-group-item tab" : "disabledTab"}
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
                value={value} key={value} disabled={disabled}
                onClick={e => handleClick(e.target.value)}>{value}</ToggleButton>
        </div>);
}