import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router } from 'react-router-dom';
import HomeContextProvider from './components/HomeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HomeContextProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </HomeContextProvider>
);

reportWebVitals();
