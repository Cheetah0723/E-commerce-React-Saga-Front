import React from 'react';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import FilterColorTab from './ColorFilter';
import SizeTab from './SizeFilter';
import useFilter from "./useFilter"
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 300
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default function FilterView({ handleFilter }) {
    const classes = useStyles();
    const { findColor, findSize, clearAll, showClear } = useFilter({ handleFilter })

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
            style={{ fontFamily: "'Roboto', sans-serif" }}
        >
                <FilterColorTab onSelect={findColor} />
                <SizeTab onSelect={findSize} />
            {showClear && <Button id="clear-filter-btn" onClick={clearAll}>Clear Filter</Button>}
        </List>)
}