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
                <Button className="tab-btn dk-grey-btn"
                    onClick={(e) => onSelect(e.currentTarget.value)} value="dark grey">✓</Button>
                <Button className="tab-btn lt-grey-btn"
                    onClick={(e) => onSelect(e.currentTarget.value)} value="light grey">✓</Button>
                <Button className="tab-btn orange-btn" onClick={(e) => onSelect(e.currentTarget.value)} value="orange">✓</Button>
                <Button className="tab-btn pink-btn" onClick={(e) => onSelect(e.currentTarget.value)} value="pink">✓</Button>
            </ButtonGroup>
        </div>
    );


}