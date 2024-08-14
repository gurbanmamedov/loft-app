import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { BurgerMenuProvider } from './context/BurgerButtonContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <BurgerMenuProvider>
        <App />
      </BurgerMenuProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
