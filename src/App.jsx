import React from "react";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";      
import Contact from "./components/contact";    
import Privacy from "./components/privacy";    
import Term from "./components/term";          
import Faq from "./components/faq";          
import Navbar from "./components/navbar";
import ErrorBoundary from "./components/ErrorBoundary";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Signup from "./pages/signup";
import ApplyLoan from "./pages/applyloan";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import LoanDetails from "./pages/loandetails";

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="APP">
          <Navbar />
          <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/term" element={<Term />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/applyloan" element={<ApplyLoan />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/loans/:_id" element= {<LoanDetails/>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}