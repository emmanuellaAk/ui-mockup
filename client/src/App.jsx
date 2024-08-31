import React from 'react'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Portfolio from './pages/portfolio'
import Services from './pages/Services'
import Contact from './pages/Contact'
function App() {
 return (
  <BrowserRouter>
  <Routes>
   <Route path='/' element={<Landing/>}/>
   <Route path='/portfolio' element={<Portfolio/>} />
   <Route path='/services' element={<Services/>} />
   <Route path='/contact' element={<Contact/>} />
  </Routes>
  </BrowserRouter>
  )
}

export default App
