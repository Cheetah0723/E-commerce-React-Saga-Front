import React from 'react';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import FilterColorTab from './color.filter';
import SizeTab from './size.filter';
import useFilter from "./useFilter"

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 300,
        paddingLeft: theme.spacing(6),
        paddingRight: theme.spacing(6),
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default function FilterView({handleFilter}) {
    const classes = useStyles();
    const { findColor, findSize, clearAll, showClear } = useFilter({handleFilter})

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
            style={{ fontFamily: "'Roboto', sans-serif" }}
        >
            <FilterColorTab onSelect={findColor} />
            <SizeTab onSelect={findSize} />
            {showClear && <p style={{ marginTop: "1rem", cursor:"pointer" }} onClick={clearAll}>Clear Filter</p>}
        </List>)
}