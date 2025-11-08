import { useState } from 'react'
import './App.css'
import MainLayout from './layout/LayoutComponent'
import Home from './pages/Home'
import Articles from './pages/Articles'
import Preview from './pages/preview'
import Pricing from './pages/Pricing'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    // <BrowserRouter>
     <Router>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="articles" element={<Articles/>}/>
          <Route path="preview" element={<Preview/>}/>
          <Route path="Pricing" element={<Pricing/>}/>
        </Route>
      </Routes>
    </Router>
    // </BrowserRouter>
  )
}

export default App
