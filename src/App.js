import React from 'react';
import Homepage from './Pages/Home.page';
import Footer from './Components/Footer/Footer';
import './App.scss';
import ReviewForm from "./Components/Review/ReviewForm"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import history from './history';
import ProductDetail from "./Pages/ProductDetail.page";
import ProductListPage from "./Pages/ProductList.page";
import Checkout from './Pages/Checkout.page';
import Sales from './Pages/Sales.page';
import Cart from "./Components/Cart/CartDrawer"
import OrderConfirmation from "./Pages/OrderConfirmation.page"
import HeaderContainer from "./Components/Header/HeaderContainer"


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
          <Route path="/" exact component={Homepage} />
          <Route path="/all" exact component={ProductListPage} />
          <Route path="/sales" exact component={Sales} />
          <Route path="/product/:id" exact component={ProductDetail} />
          <Route path='/checkoutInfo' exact component={Checkout} />
          <Route path='./cart' exact component={Cart} />
          <Route path='./orderConfirmation' exact omponent={OrderConfirmation} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
