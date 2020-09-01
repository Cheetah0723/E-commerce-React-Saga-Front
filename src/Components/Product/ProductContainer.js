import React from 'react';
import history from '../../history';
import {useSelector} from "react-redux"
import "./ProductContainer.css";

export default function ProductContainer({ item }) {
    const containerSize = { width: "100%" }

    const currency = useSelector(state => state.CurrencyReducer).currency

    const price = currency === "AU" ? item.AUprice : item.USprice

    const unit = currency === "AU" ? "AUD" : "USD"

    return (
        item !== undefined ?
            <div className="ProductContainer"
                style={{ paddingRight: 5 }}
                key={item.id}
            >
                <div>
                    <img className="card-image" src={require('../../' + item.img)} alt={item.name}
                        onClick={() => {
                            history.push("/product/" + item.id, item.id);
                        }}
                        style={containerSize} />
                    <p className="item-name" ><b>{item.name}</b></p>
                    <p className="item-color" ><b>{item.color}</b></p>
                    {item.salesRate === 1 && <p className="item-price">${price}{unit}
                    </p>}
                    {item.salesRate < 1 &&
                        <p className="sales-price">SALE ${price * item.salesRate}{unit}
                            ({100 - item.salesRate * 100} % off)</p>}
                </div>
            </div> : <div></div>)
}
