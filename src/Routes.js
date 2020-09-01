import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import App from './App';
import ProductDetail from "./Pages/ProductDetail";
import ProductListDisplay from "./Pages/ProductListDisplay";
import history from './history';
import Checkout from './Pages/Checkout';
import Sales from './Pages/Sales';
import Cart from "./Pages/CartDrawer"
import OrderConfirmation from "./Pages/OrderConfirmation"

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/all" exact component={ProductListDisplay} />
                    <Route path="/sales" exact component={Sales} />
                    <Route path="/product/:id" exact component={ProductDetail} />
                    <Route path='/checkoutInfo' exact component={Checkout} />
                    <Route path='./cart' exact component={Cart} />
                    <Route path='./orderConfirmation' exact omponent={OrderConfirmation} />
                </Switch>
            </Router>
        )
    }
}