import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

export default function FilterColorTab({ onSelect }) {

    return (
        <div className="FilterColorTab" style={{ marginTop: "10px" }}>
            <p style={{ fontSize: "14px", fontFamily: "'Montserrat', sans-serif" }}>FILTER BY COLOR</p>
            <Divider />
            <ButtonGroup aria-label="outlined secondary button group">
                <Button onClick={(e) => onSelect(e.currentTarget.value)}
                    value="blue"
                    style={{
                        color: "transparent", marginRight: "10px",
                        backgroundColor: "#3399FF", width: "10px"
                    }} >✓</Button>
                <Button style={{ marginRight: "10px", color: "transparent", backgroundColor: "#808080", width: "10px" }} 
                onClick={(e) => onSelect(e.currentTarget.value)}value="dark grey">✓</Button>
                <Button style={{ marginRight: "10px", color: "transparent", backgroundColor: "#C0C0C0", width: "10px" }} 
                onClick={(e) => onSelect(e.currentTarget.value)} value="light grey">✓</Button>
                <Button style={{ marginRight: "10px", color: "transparent", backgroundColor: "#FF9900", width: "10px" }} 
                onClick={(e) => onSelect(e.currentTarget.value)} value="orange">✓</Button>
                <Button style={{ marginRight: "10px", color: "transparent", backgroundColor: "#FF99CC", width: "10px" }} 
                onClick={(e) => onSelect(e.currentTarget.value)} value="pink">✓</Button>
            </ButtonGroup>
        </div>
    );


}