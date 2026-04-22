import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./signup.css";

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
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
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

      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
        <h2>Create your account</h2>

        <form onSubmit={handleSubmit}>
            {error && <p className="error-message">{error}</p>}
            
            <input
             type="text" 
             name="name"
             placeholder="Full Name"
             value={formData.name}
             onChange={handleChange}
             required/>

             <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required />

              <input type="tel"
              name="phone"
              placeholder="Phone number" 
              value={formData.phone}
              onChange={handleChange}
              required/>

              <input type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required />

              <input type="password"
              name="confirmPassword"
              placeholder="Confirm Password" 
              value={formData.confirmPassword}
              onChange={handleChange}
              required/>

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