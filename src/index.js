import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './Store/Store';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

