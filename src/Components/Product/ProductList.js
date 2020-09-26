import React, { Fragment } from 'react';
import ProductContainer from './ProductContainer';

export default function ProductList({ display }) {

    return (
        <Fragment>
            {display.map((item) =>
                <ProductContainer item={item} key={item.id} />
            )}
        </Fragment>
    )
}