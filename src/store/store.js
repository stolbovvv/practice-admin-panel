import { configureStore } from '@reduxjs/toolkit';
import { Provider as StoreProvider } from 'react-redux';
import reducerHeroes from '../slices/heroes';
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
    heroes: reducerHeroes,
    filters: reducerFilters,
  },

  devTools: import.meta.env.MODE === 'development',

  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), stringMiddleware],
});

export { store, StoreProvider };
