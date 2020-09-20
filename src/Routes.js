import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './history';
import App from './App';
import ProductDetail from "./Pages/ProductDetail.page";
import ProductListPage from "./Pages/ProductList.page";
import Checkout from './Pages/Checkout.page';
import Sales from './Pages/Sales.page';
import Cart from "./Components/Cart/CartDrawer"
import OrderConfirmation from "./Pages/OrderConfirmation.page"

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/all" exact component={ProductListPage} />
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