import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import app from './Firebase.js'

console.log("Firebase connected:", app);
createRoot(document.getElementById('root')).render(

    <App />
  
)
