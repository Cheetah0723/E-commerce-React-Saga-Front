import { createStore, compose, applyMiddleware } from "redux";
import RootReducer from './Reducers/root.reducer';
import throttle from 'lodash/throttle'
import { loadState, saveState } from './Components/Util'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import RootSaga from './Sagas/RootSaga';

const configureStore = () => {
    const persistedCart = loadState("CartReducer");
    const persistedState = {
        CartReducer: persistedCart,

    };

    const sagaMiddleware = createSagaMiddleware()

    let middleware = applyMiddleware(sagaMiddleware, logger);

    if (process.env.NODE_ENV !== 'production') {
        const devToolsExtension = window.devToolsExtension;
        if (typeof devToolsExtension === 'function') {
            middleware = compose(middleware, devToolsExtension());
        }
    }

    const store = createStore(RootReducer, persistedState,
        middleware);

    sagaMiddleware.run(RootSaga);

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

