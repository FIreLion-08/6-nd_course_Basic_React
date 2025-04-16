import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../src/App.css'

import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/UserContext.jsx'
import { CardProvider } from './context/cardContext.jsx'

// import { GlobalStyled } from './global.styled.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <CardProvider>
            <UserProvider>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </UserProvider>
        </CardProvider>
    </BrowserRouter>,
)
