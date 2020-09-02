import React from 'react';
import ProductContainer from '../Product/ProductContainer';

// Display the layout of product lists.
export default function ProductList({ display }) {

    return (
        <div className="hp-product-list">
            {display.map((item) =>
                <ProductContainer item={item} key={item.id} />
            )}
        </div>
    )
}