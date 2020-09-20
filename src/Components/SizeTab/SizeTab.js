import React, { useState, useEffect, Fragment } from 'react';
import sizeList from '../../Data/sizeList';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import SizeTabItem from "./SizeTabItem"

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
            <ToggleButtonGroup className="SizeTabWithoutLabel" aria-label="outlined secondary button group"
                value={size} exclusive>
                {sizeList.items.map(each => {
                    let index = sizeList.items.indexOf(each);
                    return (
                        <SizeTabItem key={each} handleClick={() => changeSize(index, each)} disabled={!availability[index]}
                            value={each} clicked={clickState[index]} />
                    );
                })}
            </ToggleButtonGroup>
        </Fragment>
    );

}




