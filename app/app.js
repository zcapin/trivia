import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import Navigation from './navigation';

const store = configureStore({});

const app = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default app;
