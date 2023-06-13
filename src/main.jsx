import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from "./routes/App"
import { validationProvider } from './context'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={"/MoneyTracker"}>
      <validationProvider>
        <App />
      </validationProvider>
    
    </BrowserRouter>
   
  </React.StrictMode>,
)
