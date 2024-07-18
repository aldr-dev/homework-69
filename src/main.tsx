import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import {store} from './app/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ToastContainer position="bottom-right" theme="light" autoClose={3000} />
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
);