import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from "./routes/App"
import { ValidationProvider } from './context'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={"/MoneyTracker"}>
      <ValidationProvider>
        <App />
      </ValidationProvider>
    
    </BrowserRouter>
   
  </React.StrictMode>,
)
