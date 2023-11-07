import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = document.getElementById('root');


createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
