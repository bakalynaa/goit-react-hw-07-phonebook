import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';

const root = document.getElementById('root');

const render = (Component) => {
  createRoot(root).render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Component />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
};

if (root.hasChildNodes()) {
  ReactDOM.unmountComponentAtNode(root);
}

render(App);
