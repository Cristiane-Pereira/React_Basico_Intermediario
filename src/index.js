import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterContextProvider } from './contexts/CounterContext';
import './index.css';
import App from './pages/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterContextProvider>
      <App />
    </CounterContextProvider>
  </React.StrictMode>,
);
