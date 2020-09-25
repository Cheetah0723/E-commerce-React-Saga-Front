import React from 'react';
import useSearchBox from './CustomHook';
import {  FormControl, Button } from 'react-bootstrap';

export default function SearchBox({ onClick }) {
    const { _handleKeyDown } = useSearchBox()

    return (
        <div className="SearchBox">
            <FormControl type="text" placeholder="Search" className="mr-sm-3" onChange={_handleKeyDown} onKeyPress={_handleKeyDown} />
            <Button variant="outline-primary" onClick={onClick}>Search</Button>
        </div>
    );
}

