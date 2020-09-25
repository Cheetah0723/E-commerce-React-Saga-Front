import React, { Fragment } from 'react';
import history from '../../history';
import { useSelector } from "react-redux"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { selectCurrency } from '../Selectors';
import { Col } from 'reactstrap';


export default function ProductContainer({ item }) {
    const currency = useSelector(selectCurrency)
    const price = currency === "AUD" ? item.AUprice : item.USprice

    if (item === undefined) {
        return <div></div>
    }

    return (
        <Card className="ProductContainer" key={item.id} onClick={() => {
            history.push("/product/" + item.id, item.id);
        }}>
            <img className="card-image" src={require('../../' + item.img)} alt={item.name} />
            <CardContent>
                <Col>
                    {item.salesRate < 1 && <Fragment>
                        <p className="sales-price-label">SALE</p>
                        <p className="sales-price"> ${price * item.salesRate}{currency}</p>
                    </Fragment>}
                    {item.salesRate === 1 && <Fragment>
                        <p className="new-price-label">New</p>
                        <p className="new-price">${price}{currency}</p>
                    </Fragment>
                    }

                    <Typography className="item-name" variant="subtitle1" gutterBottom>
                        {item.name}
                    </Typography>
                    <p className="item-color" >{item.color}</p>
                </Col>
            </CardContent>
        </Card>
    );
}