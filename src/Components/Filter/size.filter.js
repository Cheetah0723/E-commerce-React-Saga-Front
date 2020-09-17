import React from 'react';
import SizeTab from '../SizeTab/SizeTab';

export default function FilterSizeTab({ onSelect }) {

    return (
        <div className="FilterTab">
            <p className="filter-label">FILTER BY SIZE</p>
            <SizeTab onChange={(size) => onSelect(size)} />
        </div>
    );
}
