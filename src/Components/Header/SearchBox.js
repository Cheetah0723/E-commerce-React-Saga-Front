import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import SearchBoxController from "./SearchBoxController"

export default function SearchBox({ onClick }) {
    const { _handleKeyDown } = SearchBoxController()

    return (
        <div className="SearchBox" onClick={onClick}>
            <SearchIcon />
            <TextField onChange={_handleKeyDown}
                onKeyPress={_handleKeyDown} placeholder="Color or size" />
        </div>
    );
}