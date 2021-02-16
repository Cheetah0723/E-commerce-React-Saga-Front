import React, { Fragment } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export default function Sorting({ onSort }) {

    return (
        <Fragment >
            <InputLabel id="sort" >Sort</InputLabel>
            <Select
                className="sorting"
                labelId="sort-label"
                id="sort"
                defaultValue="Popularity"
                onChange={e => onSort(e.target.value)}
            >
                <MenuItem value={"price-high-to-low"}>Price: High to Low</MenuItem>
                <MenuItem value={"price-low-to-high"}>Price: Low to High</MenuItem>
                <MenuItem value={"newest"}>Newest</MenuItem>
            </Select>
        </Fragment>
    );
}