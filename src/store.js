import { createStore, compose, applyMiddleware } from "redux";
import RootReducer from './reducers/root.reducer';
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
        module.hot.accept('./reducers/root.reducer', () => {
            store.replaceReducer(require('./reducers/root.reducer').default);
        });
    }

    return store;
}


export default configureStore;

