import React from 'react';
import Homepage from './Pages/Home.page';
import Footer from './Components/Footer/Footer';
import './App.scss';
//import ReviewForm from "./Components/Review/ReviewForm"
import { Router, Switch, Route } from "react-router-dom";
import history from './history';
import ProductDetail from "./Pages/ProductDetail.page";
import ProductListPage from "./Pages/ProductList.page";
import Checkout from './Pages/Checkout.page';
import Sales from './Pages/Sales.page';
import Cart from "./Components/Cart/CartDrawer"
import OrderConfirmation from "./Pages/OrderConfirmation.page"
import HeaderContainer from "./Components/NavBar/HeaderContainer"
import {withRouter} from 'react-router';

// BUG
//import ReviewModal from "./Components/Review/ReviewModal"

//      <ReviewForm/>
//     <Homepage />
//<Footer />

export default function App() {

  return (
    <div className="App">
      <HeaderContainer />
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={withRouter(Homepage)} />
          <Route exact path="/all" component={withRouter(ProductListPage)} />
          <Route exact path="/sales" component={withRouter(Sales)} />
          <Route exact path="/product/:id" component={withRouter(ProductDetail)} />
          <Route exact path='/checkoutInfo' component={withRouter(Checkout)} />
          <Route exact path='./cart' component={withRouter(Cart)} />
          <Route exact path='./orderConfirmation' component={withRouter(OrderConfirmation)} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
