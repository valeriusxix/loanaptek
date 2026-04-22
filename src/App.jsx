import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar'

import Home from './pages/home'
import Signup from './pages/signup'
import Apply from './components/apply'
import Contact from './components/contact'
import About from './components/About'
import Privacy from './components/privacy'
import Faq from './components/faq'
import Footer from './components/footer'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <main style={{minHeight: '100vh', paddingTop: '80px'}}></main>
      <Routes>
        {/*public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/loan-products" element={<LoanProducts />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </div>

    </Router>
  )
}


export default App
