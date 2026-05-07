import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./signup.css";

const API_URL = import.meta.env.VITE_API_URL || "https://loanaptech-n5ia.onrender.com";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.phone || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          password: formData.password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Registration failed");
      }

      // Store token and user, go straight to dashboard
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/dashboard");

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h1>Create your account</h1>
      <p>Sign up to start your loan application journey</p>

      <form onSubmit={handleSubmit}>
        {error && <div className="error-message" role="alert">{error}</div>}

        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input id="name" type="text" name="name" placeholder="John Doe"
            value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" placeholder="john@example.com"
            value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" type="tel" name="phone" placeholder="+1 (555) 123-4567"
            value={formData.phone} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" placeholder="Minimum 6 characters"
            value={formData.password} onChange={handleChange} required />
          <small>Minimum 6 characters</small>
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input id="confirmPassword" type="password" name="confirmPassword" placeholder="Confirm Password"
            value={formData.confirmPassword} onChange={handleChange} required />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </button>

        <div className="login-link">
          <Link to="/login">Already have an account? Login here.</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;