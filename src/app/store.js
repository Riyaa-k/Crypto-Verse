// // store.js
import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../services/cryptoApi' ;
// import { cryptoNewsApi } from '../services/CryptoNewsApi';

export const Store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    // [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    // Add other reducers if needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware),
    
});

export default Store;

// store.js
// import { configureStore } from '@reduxjs/toolkit';
// import { cryptoApi } from '../services/cryptoApi';
// import { cryptoNewsApi } from '../services/cryptoNewsApi';
// import { setupListeners } from '@reduxjs/toolkit/query/react';

// export const store = configureStore({
//   reducer: {
//     [cryptoApi.reducerPath]: cryptoApi.reducer,
//     [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
//     // Add other reducers if needed
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(cryptoApi.middleware, cryptoNewsApi.middleware), // Include cryptoNewsApi.middleware
// });

// // Add setupListeners for cryptoApi and cryptoNewsApi
// // setupListeners(store.dispatch, [cryptoApi, cryptoNewsApi]);

// export default store;

