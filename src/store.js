import { createStore, compose, applyMiddleware } from "redux";
import RootReducer from './Reducers/root.reducer';
import throttle from 'lodash/throttle'
import { loadState, saveState } from './Components/Util'
import logger from 'redux-logger'
import thunk from 'redux-thunk';

const configureStore = () => {
    const persistedCart = loadState("CartReducer");
    const persistedState = {
        CartReducer: persistedCart,

    };
    let middleware = applyMiddleware(thunk, logger);

    if (process.env.NODE_ENV !== 'production') {
        const devToolsExtension = window.devToolsExtension;
        if (typeof devToolsExtension === 'function') {
            middleware = compose(middleware, devToolsExtension());
        }
    }

    const store = createStore(RootReducer, middleware);

    if (module.hot) {
        module.hot.accept('./Reducers/root.reducer', () => {
            store.replaceReducer(require('./Reducers/root.reducer').default);
        });
    }

    store.subscribe(throttle(() => {
        saveState({
            CartReducer: store.getState().CartReducer,
        })
    }, 1000))

    return store;
}


export default configureStore;

