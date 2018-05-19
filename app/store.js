import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loggingMiddleware from './logging';
import rootReducer from './reducers';


const configureStore = (initialState) => {
  // use thunk for simplicity
  // TODO saga or observer to cancel/collect multiple responses
  const middleware = applyMiddleware(thunk, loggingMiddleware);

  return createStore(rootReducer, initialState, middleware);
};

export default configureStore;
