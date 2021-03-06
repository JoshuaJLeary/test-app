import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import Reducer from './Redux/SignUpReducer';
import './index.css';
import App from './App';

const storeInstance = createStore(Reducer, composeWithDevTools(applyMiddleware(logger)));

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>, document.getElementById('root'));
