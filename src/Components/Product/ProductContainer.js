import React from 'react';
import history from '../../history';
import { useSelector } from "react-redux"
import Card from '@material-ui/core/Card';   
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { selectCurrency } from '../Selectors';

export default function ProductContainer({ item }) {
    const currency = useSelector(selectCurrency)
    const price = currency === "AUD" ? item.AUprice : item.USprice

    if (item === undefined) {
        return <div></div>
    }

    return (
        <Card className="ProductContainer" key={item.id}  onClick={() => {
            history.push("/product/" + item.id, item.id);
        }}>
            <img className="card-image" src={require('../../' + item.img)} alt={item.name} />
            <CardContent>
                {item.salesRate < 1 && <div className="row">
                    <p className="sales-price-label">SALE</p>
                    <p className="sales-price"> ${price * item.salesRate}{currency}</p>
                </div>}
                {item.salesRate === 1 && <div className="row">
                    <p className="new-price-label">New</p>
                    <p className="new-price">${price}{currency}</p>
                </div>}

                <Typography className="item-name" variant="subtitle1" gutterBottom>
                    {item.name}
                </Typography>
                <p className="item-color" >{item.color}</p>
            </CardContent>
        </Card>
    );
}