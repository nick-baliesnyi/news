import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'

console.log(process.env.REACT_APP_BACKEND_BASE_URL)
if (process.env.REACT_APP_BACKEND_BASE_URL) {
  axios.defaults.baseURL = process.env.REACT_APP_BACKEND_BASE_URL
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
