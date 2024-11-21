import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
import Provider from './Provider';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode> 
    <Provider>
    <App />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
