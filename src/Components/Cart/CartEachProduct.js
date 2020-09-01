import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import useCartData from "./useCartData"

export default function CartEachProduct({ item }) {

    const { addQuantity, subQuantity, currency } = useCartData(item)

    const price = currency === "AU" ? item.AUprice : item.USprice

    return (
        <div className="product-outer-container" key={item.name + item.color}>
            <div key="1">
                <img className="card-image" src={require('../../' + item.img)} alt={item.name}
                    style={{
                        width: '4.375rem',
                        height: '4.375rem',
                    }} />
            </div>
            <div key="2">
                <div key="3">
                    <div className="product-name">
                        {item.name}<br />
                        {item.size} / {item.color}
                        <ButtonGroup aria-label="outlined secondary button group">
                            <Button data-test="add-quantity-btn" onClick={addQuantity}
                                style={{ width: "0.625rem" }}>+</Button>
                            <Button disabled>{item.quantity}</Button>
                            <Button data-test="sub-quantity-btn" onClick={subQuantity}
                                className="subQuantity">-</Button>
                        </ButtonGroup>
                    </div>
                    <br /><br /><br /> ${item.salesRate === 1 ? price : price * item.salesRate}
                </div>
            </div>
        </div>
    );

}