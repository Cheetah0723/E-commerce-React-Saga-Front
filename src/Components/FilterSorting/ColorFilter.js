import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

export default function FilterColorTab({ onSelect }) {

    const colorBtns = [{ className: "tab-btn blue-btn", value: "blue" },
    { className: "tab-btn black-btn", value: "black" },
    { className: "tab-btn lt-grey-btn", value: "light grey" },
    { className: "tab-btn red-btn", value: "red" },
    { className: "tab-btn pink-btn", value: "pink" }]

    return (
        <div className="FilterTab">
            <p className="filter-label">FILTER BY COLOR</p>
            <ButtonGroup aria-label="outlined secondary button group">
                {colorBtns.map(each => (<Button className={each.className}
                    onClick={(e) => onSelect(e.currentTarget.value)} key={each.value}
                    value={each.value}>✓</Button>))}
            </ButtonGroup>
        </div>
    );


}