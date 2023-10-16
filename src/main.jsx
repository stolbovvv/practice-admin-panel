import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.jsx';
import { StoreProvider, store } from './store/store.js';

import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
);
