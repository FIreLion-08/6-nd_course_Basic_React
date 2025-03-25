import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../src/App.css'
import { GlobalStyled } from './global.styled.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
