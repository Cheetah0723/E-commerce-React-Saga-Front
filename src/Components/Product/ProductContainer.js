import React from 'react';
import history from '../../history';
import { useSelector } from "react-redux"
import Card from '@material-ui/core/Card';   
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function ProductContainer({ item }) {
    const currency = useSelector(state => state.CurrencyReducer).currency

    const price = currency === "AU" ? item.AUprice : item.USprice

    const unit = currency === "AU" ? "AUD" : "USD"

    if (item === undefined) {
        return <div></div>
    }

    return (
        <Card className="ProductContainer" key={item.id}>
            <img className="card-image" src={require('../../' + item.img)} alt={item.name}
                onClick={() => {
                    history.push("/product/" + item.id, item.id);
                }} />
            <CardContent>
                {item.salesRate < 1 && <div className="row">
                    <p className="sales-price-label">SALE</p>
                    <p className="sales-price"> ${price * item.salesRate}{unit}</p>
                </div>}
                {item.salesRate === 1 && <div className="row">
                    <p className="new-price-label">New</p>
                    <p className="new-price">${price}{unit}</p>
                </div>}

                <Typography className="item-name" variant="subtitle1" gutterBottom>
                    {item.name}
                </Typography>
                <p className="item-color" >{item.color}</p>
            </CardContent>
        </Card>
    );
}