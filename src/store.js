import { createStore, compose, applyMiddleware } from "redux";
import RootReducer from './Reducers/root.reducer';
import thunk from 'redux-thunk';

const configureStore = () => {
    let middleware = applyMiddleware(thunk);

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

    return store;
}


export default configureStore;

