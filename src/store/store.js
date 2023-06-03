import { configureStore } from '@reduxjs/toolkit';
import { exchangesApi } from './exchangesAPI';
import { setupListeners } from '@reduxjs/toolkit/query';
import { currencyReducer } from './slice';

export const store = configureStore({
  reducer: {
    [exchangesApi.reducerPath]: exchangesApi.reducer,
    currency: currencyReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(exchangesApi.middleware),
});

setupListeners(store.dispatch);
