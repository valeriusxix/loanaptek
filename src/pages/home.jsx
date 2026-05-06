import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  return (
    <div className="home-container">

      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">Fast, Simple & Transparent Loans</h1>
        <p className="hero-subtitle">
          Get instant personal loans up to $50,000 with low interest rates
          and flexible repayment options.
        </p>
        <div className="hero-buttons">
          <Link to="/signup" className="hero-cta-btn">Get Started</Link>
          <Link to="/login" className="hero-secondary-btn">Login</Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2>Why Choose LoanAptech?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>⚡ Lightning Fast</h3>
            <p>Get approved in under 10 minutes with our instant review process.</p>
          </div>
          <div className="feature-card">
            <h3>📄 No Paperwork</h3>
            <p>100% digital and hassle-free. Apply entirely online.</p>
          </div>
          <div className="feature-card">
            <h3>💰 Low Interest Rates</h3>
            <p>Competitive rates starting from just 8.99% per annum.</p>
          </div>
          <div className="feature-card">
            <h3>🔒 Secure & Private</h3>
            <p>Your data is encrypted and never shared with third parties.</p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps-grid">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Apply Online</h3>
            <p>Fill out our simple application form in minutes.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Get Approved</h3>
            <p>Our team reviews your application instantly.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Receive Funds</h3>
            <p>Money is deposited directly into your account.</p>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="cta-banner">
        <h2>Ready to get started?</h2>
        <p>Join thousands of customers who trust LoanAptech.</p>
        <Link to="/signup" className="hero-cta-btn">Apply Now</Link>
      </div>

    </div>
  );
}

export default Home;