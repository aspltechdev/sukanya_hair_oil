import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'


function App() {
  return (
    <HelmetProvider>
      <Router>
   
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes as needed */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/order" element={<Order />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  )
}

export default App