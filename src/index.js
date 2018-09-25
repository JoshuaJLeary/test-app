import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducer from './Redux/SignUpReducer';
import './index.css';
import App from './App';

const storeInstance = createStore(Reducer);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>, document.getElementById('root'));
