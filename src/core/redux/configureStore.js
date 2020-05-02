import { applyMiddleware, createStore, compose } from 'redux';
import reducers from './reducers';
import customMiddleware from './middleware';

const initialState = {};
const middlewares = [customMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);
const composeEhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, initialState, composeEhancers(middlewareEnhancer));

export default store;
