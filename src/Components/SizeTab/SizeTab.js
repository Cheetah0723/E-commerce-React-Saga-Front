import React, { useState, useEffect, Fragment } from 'react';
import sizeList from '../../data/size.data';
import {ToggleButtonGroup,ToggleButton} from '@material-ui/lab';

export function useSizeTab(sizeDisplay) {
    const [size, setSize] = useState('');
    const [availability, setAvailalibity] = useState([true, true, true, true, true])

    useEffect(() => {
        if (sizeDisplay !== undefined) {
            setAvailalibity(sizeDisplay)
        }
    }, [sizeDisplay])

    return { size, setSize, availability }

}

export default function SizeTab({ sizeDisplay, onChange }) {
    const [clickState, setClickState] = useState([false, false, false, false, false])

    const { size, setSize, availability } = useSizeTab(sizeDisplay)

    const changeSize = (index, value) => {
        let newClickState = [false, false, false, false, false]
        newClickState[index] = true
        setClickState(newClickState)
        setSize(value);
        onChange(value);
    }

    return (
        <Fragment>
            <ToggleButtonGroup size="medium" className="SizeTabWithoutLabel" aria-label="outlined secondary button group"
                value={size} exclusive>
                {sizeList.items.map(each => {
                    let index = sizeList.items.indexOf(each);
                    return (
                        <ToggleButton className={clickState[index] ? "button-group-item-clicked" : availability[index] ? "button-group-item" : "disabledTab"}
                            value={each} key={each} onClick={() => changeSize(index, each)} aria-label={each}
                            disabled={!availability[index]}>{each}</ToggleButton>
                    );
                })}
            </ToggleButtonGroup>
        </Fragment>
    )
}




