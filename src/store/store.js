import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider as StoreProvider } from 'react-redux';
import { reducers } from '../reducers/reducer';

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === 'string') {
    return next({ type: action });
  } else {
    return next(action);
  }
};

const store = createStore(
  combineReducers(reducers),
  compose(applyMiddleware(ReduxThunk, stringMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
);

export { store, StoreProvider };
