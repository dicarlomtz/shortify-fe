import { BrowserRouter } from 'react-router-dom'
import { ShortifyApp } from './ShortifyApp'
import ReactDOM from 'react-dom/client'
import React from 'react'

ReactDOM.createRoot(document.querySelector('#root')).render(
  <BrowserRouter>
    <ShortifyApp />
  </BrowserRouter>
)
