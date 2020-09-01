import React, { Fragment } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            'Roboto',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

export default function Sorting({ onSort }) {
    const classes = useStyles();

    return (
        <Fragment key="sort-desktop">
            <FormControl className={classes.formControl} >
                <InputLabel id="sort-label" >Sort</InputLabel>
                <Select
                    labelId="sort-label"
                    id="demo-customized-select"
                    onChange={e => onSort(e.target.value)}
                    defaultValue="Popularity"
                    input={<BootstrapInput />}
                >
                    <MenuItem value={"price-high-to-low"}>Price: High to Low</MenuItem>
                    <MenuItem value={"price-low-to-high"}>Price: Low to High</MenuItem>
                    <MenuItem value={"newest"}>Newest</MenuItem>
                </Select>
            </FormControl>
        </Fragment>
    );
}