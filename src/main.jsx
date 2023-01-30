import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Login from './components/Login'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>

     <App /> 
      {/* <Login /> */}

   

    </BrowserRouter>

  </React.StrictMode>,
)
