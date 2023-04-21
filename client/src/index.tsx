import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/style.scss'
import App from './routes/App';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import store from './store';
import { persistor } from './store';

import './i18n'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
