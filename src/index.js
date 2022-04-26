import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './store/store';
import App from './App';
import data from './data/data.json';
import { cartActions, productActions } from './actions';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

for (let product of data.products) {
  store.dispatch(productActions.addProduct(product.id, product));
}
store.dispatch(cartActions.addToCart({ id: 'product1', quantity: 2 }));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
