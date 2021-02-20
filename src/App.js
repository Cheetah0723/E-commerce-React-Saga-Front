import React from 'react';
import Homepage from './pages/home.page';
import Footer from './components/footer/footer';
import './assets/stylesheets/main.scss';
//import ReviewForm from "./components/review/reviewForm"
import { Router, Switch, Route } from "react-router-dom";
import history from './history';
import ProductDetail from "./pages/productDetail.page";
import ProductListPage from "./pages/productList.page";
import Checkout from './pages/checkout.page';
import Sales from './pages/sales.page';
import OrderConfirmation from "./pages/orderConfirmation.page"
import Header from "./components/header/header"
import { withRouter } from 'react-router';

// BUG
//import ReviewModal from "./components/review/reviewModal"

//      <ReviewForm/>
//     <Homepage />
//<Footer />

export default function App() {

  return (
    <div className="App">
      <Header />
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={withRouter(Homepage)} />
          <Route exact path="/all" component={withRouter(ProductListPage)} />
          <Route exact path="/sales" component={withRouter(Sales)} />
          <Route exact path="/product/:id" component={withRouter(ProductDetail)} />
          <Route exact path='/checkoutInfo' component={withRouter(Checkout)} />
          <Route exact path='./orderConfirmation' component={withRouter(OrderConfirmation)} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
