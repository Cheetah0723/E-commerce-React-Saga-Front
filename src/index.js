import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import { Router } from 'react-router-dom';
import history from './history';
import App from "./App"
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/Montserrat/Montserrat-Regular.ttf';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

