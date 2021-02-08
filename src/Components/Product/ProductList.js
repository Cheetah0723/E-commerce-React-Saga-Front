import React from 'react';
import ProductContainer from './ProductContainer';

export default function ProductList({ display }) {

    return (
        <div className="product-list">
            {display.map((item) =>
                <ProductContainer item={item} key={item.id} />
            )}
        </div>
    )
}