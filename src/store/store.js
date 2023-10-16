import { createStore } from 'redux';
import { Provider as StoreProvider } from 'react-redux';
import { reduser } from '../redusers/reduser';

const store = createStore(reduser, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export { store, StoreProvider };
