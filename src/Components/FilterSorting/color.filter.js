import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

export default function FilterColorTab({ onSelect }) {

    return (
        <div className="FilterTab">
            <p className="filter-label">FILTER BY COLOR</p>
            <ButtonGroup aria-label="outlined secondary button group">
                <Button className="tab-btn blue-btn"
                    onClick={(e) => onSelect(e.currentTarget.value)}
                    value="blue" >✓</Button>
                <Button className="tab-btn black-btn"
                    onClick={(e) => onSelect(e.currentTarget.value)} value="black">✓</Button>
                <Button className="tab-btn lt-grey-btn"
                    onClick={(e) => onSelect(e.currentTarget.value)} value="light grey">✓</Button>
                <Button className="tab-btn red-btn" onClick={(e) => onSelect(e.currentTarget.value)} value="red">✓</Button>
                <Button className="tab-btn pink-btn" onClick={(e) => onSelect(e.currentTarget.value)} value="pink">✓</Button>
            </ButtonGroup>
        </div>
    );


}