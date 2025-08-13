import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import ScrollToTop from './components/ScrollToTop'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/pineapplepizza">
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)