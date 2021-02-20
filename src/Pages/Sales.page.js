import React from 'react';
import ProductListPage from "./productList.page"

export default function Sales() {

    return (
        <div className="Sales">
            <ProductListPage sales={true}/>
        </div>
    );
}

