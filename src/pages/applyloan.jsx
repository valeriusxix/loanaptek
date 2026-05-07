import React, { useState } from "react";
import "../components/navbar.jsx";
import "./applyloan.css";

const API_URL = import.meta.env.VITE_API_URL || " https://loanaptech-n5ia.onrender.com";

const ApplyLoan = () => {
  const [formData, setFormData] = useState({
    amount: '',
    tenure: '',
    purpose: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.amount) {
      setError('Please enter a loan amount');
      return;
    }
    if (!formData.tenure) {
      setError('Please select a loan tenure');
      return;
    }
    if (!formData.purpose.trim()) {
      setError('Please describe the purpose of the loan');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/loans/apply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: formData.amount,
          duration: formData.tenure,
          purpose: formData.purpose,
        }),
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError(data.error || "Submission failed. Please try again.");
      }
    } catch (err) {
      console.error("Application error:", err);
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({ amount: '', tenure: '', purpose: '' });
    setIsSubmitted(false);
    setError("");
  };

  if (isSubmitted) {
    return (
      <div className="apply-container">
        <div className="apply-card">
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🎉</div>
            <h2 style={{ color: '#10b981', marginBottom: '16px', fontSize: '2.2rem', fontWeight: '700' }}>
              Application Submitted Successfully!
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.15rem', lineHeight: '1.6', maxWidth: '420px', margin: '0 auto 40px' }}>
              Your loan application has been received. Our team will review it and get back to you within 24 hours.
            </p>
            <button
              onClick={resetForm}
              style={{ padding: '16px 40px', background: '#4f46e5', color: 'white', fontSize: '1.1rem', fontWeight: '600', border: 'none', borderRadius: '12px', cursor: 'pointer' }}
            >
              Submit Another Application
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">Aptech</div>
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#" className="active">Loans</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
          <div className="auth-buttons">
            <a href="#" className="login-btn">Login</a>
            <a href="#" className="signup-btn">Sign Up</a>
          </div>
        </div>
      </nav>

      <div className="apply-container">
        <div className="apply-card">
          <h1 className="apply-title">Apply for a Loan</h1>

          <form className="apply-form" onSubmit={handleSubmit}>
            {error && <div className="error-message">{error}</div>}

            <div className="input-group">
              <label htmlFor="amount">Loan Amount ($)</label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="e.g., 5000"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="tenure">Loan Tenure</label>
              <select id="tenure" name="tenure" value={formData.tenure} onChange={handleChange} required>
                <option value="">Select tenure</option>
                <option value="3">3 Months</option>
                <option value="6">6 Months</option>
                <option value="12">12 Months</option>
                <option value="18">18 Months</option>
                <option value="24">24 Months</option>
                <option value="36">36 Months</option>
                <option value="48">48 Months</option>
                <option value="60">60 Months</option>
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="purpose">Purpose of Loan</label>
              <textarea
                id="purpose"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                placeholder="e.g., Home renovation, Business expansion, Education..."
                rows="5"
                required
              />
            </div>

            <button type="submit" className="apply-submit-btn" disabled={isLoading}>
              {isLoading ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ApplyLoan;