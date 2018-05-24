import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';

import rootReducer from '../reducers';

const middlewares = [
  thunk,
];

if (process.env.NODE_ENV !== 'production') {
  // we can push dev only middlewares here
  // middlewares.push(...)
}

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
);

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    enhancer
  );
}
