import React from 'react';
import ProductListDisplay from "./ProductListDisplay"

export default function Sales() {

    return (
        <div className="Sales">
            <ProductListDisplay sales={true}/>
        </div>
    );
}