import { configureStore } from '@reduxjs/toolkit';
import { Provider as StoreProvider } from 'react-redux';
import { apiSlice } from '../api/api';

import reducerFilters from '../slices/filters';

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === 'string') {
    return next({ type: action });
  } else {
    return next(action);
  }
};

const store = configureStore({
  reducer: {
    filters: reducerFilters,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  devTools: import.meta.env.MODE === 'development',

  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), stringMiddleware, apiSlice.middleware],
});

export { store, StoreProvider };
