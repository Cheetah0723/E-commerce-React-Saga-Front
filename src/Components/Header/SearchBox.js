import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { TextField, ClickAwayListener, IconButton, InputAdornment } from '@material-ui/core';
import SearchBoxController from "./SearchBoxController"

export default function SearchBox({ onClick }) {
    const { _handleKeyDown } = SearchBoxController()

    return (
        <div className="SearchBox" onClick={onClick}>
                <TextField id="standard-search" placeholder="Color or size" type="search"
                    variant="outlined"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment>
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    onChange={_handleKeyDown}
                    onKeyPress={_handleKeyDown}
                />
        </div>
    );
}