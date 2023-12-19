// store.js
import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../services/cryptoApi' 

export const Store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    // Add other reducers if needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware),
});

export default Store;
