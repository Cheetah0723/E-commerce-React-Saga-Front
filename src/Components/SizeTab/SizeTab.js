import React, { useState, Fragment } from 'react';
import sizeList from '../../Data/sizeList';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import SizeTabController from "./SizeTabController"
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';
import CustomizedToggleButton from "./CustomizedToggleButton"

const initialClick = [false, false, false, false, false]
export default function SizeTab({ sizeDisplay, onChange }) {

    const [state, setState] = React.useState({
        open: false,
        Transition: Fade,
    });
    const [clickState, setClickState] = useState(initialClick)

    const { size, setSize, availability } = SizeTabController(sizeDisplay)

    const handleClose = () =>
        setState({
            ...state,
            open: false,
        })


    const changeSize = (index, value) => {
        const newClickState = Object.assign({}, initialClick)
        newClickState[index] = true
        console.log("new click", newClickState)
        setClickState(newClickState)
        setState({
            open: true,
            Fade,
        });
        setSize(value);
        onChange(value);
        setTimeout(handleClose(), 3000)
    }

    var list = sizeList.items.map(each => {
        let index = sizeList.items.indexOf(each);
        return (
            <CustomizedToggleButton key={each}  handleClick={() => changeSize(index, each)} disabled={!availability[index]}
                value={each} clicked={clickState[index]} />
        );
    })

    return (
        <Fragment>
            <ToggleButtonGroup className="SizeTabWithoutLabel" aria-label="outlined secondary button group"
                value={size} exclusive>
                {list}
            </ToggleButtonGroup>
            <Snackbar
                open={state.open}
                onClose={handleClose}
                TransitionComponent={state.Transition}
                message="Size Selected!"
                key={state.Transition.name}
            />
        </Fragment>
    );

}




