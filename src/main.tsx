import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import React from 'react'
import { BurgerMenuProvider } from './context/BurgerButtonContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BurgerMenuProvider>

      <App />
    </BurgerMenuProvider>
  </React.StrictMode>,
)
