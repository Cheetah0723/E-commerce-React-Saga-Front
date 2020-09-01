import React, { Fragment } from 'react';
import ProductContainer from '../Product/ProductContainer';
//import "./ProductList.css"

// Display the layout of product lists.
export default function ProductList({ display }) {

    return (
        <Fragment>
            {display.map((item) =>
                <ProductContainer item={item} key={item.id} />
            )}
        </Fragment>
    )
}