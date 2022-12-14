import React from 'react';
import ReactDOM from 'react-dom/client';
import normalize from 'normalize.css';
import './index.css';
import App from './app';
import { AppProvider } from './context/appContext';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);


