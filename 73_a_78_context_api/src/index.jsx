import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import Home from './pages/Home';
import { CounterContextProvider } from './contexts/CounterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterContextProvider>
      <Home />
    </CounterContextProvider>
  </React.StrictMode>
);
