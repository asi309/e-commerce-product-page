import { configureStore } from '@reduxjs/toolkit';

import { productsReducer, cartReducer } from '../reducers';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});

export default store;
