import React from 'react';
import SizeTab from '../SizeTab/SizeTab';

export default function FilterSizeTab({ onSelect }) {

    return (
        <div className="SizeTab" style={{ marginTop: "20px" }}>
            <p style={{ fontSize: "14px", fontFamily: "'Montserrat', sans-serif" }}>FILTER BY SIZE</p>
            <SizeTab onChange={(size) => onSelect(size)} />
        </div>
    );
}
