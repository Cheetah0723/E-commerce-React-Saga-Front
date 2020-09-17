import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import { Router } from 'react-router-dom';
import Routes from './Routes';
import history from './history';
import './fonts/Montserrat/Montserrat-Regular.ttf';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div className="App">
        <Routes />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

