import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './login.css';

const API_URL = import.meta.env.VITE_API_URL || "https://loanaptech-n5ia.onrender.com";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
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

        if (!formData.email || !formData.password) {
            setError("Please fill in all fields");
            return;
        };

        setLoading(true);

        try {
            const response = await fetch(`${API_URL}/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                })
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));
                navigate("/dashboard");
            } else {
                setError(data.error || "Login failed");
            }

        } catch (err) {
            console.error("Login error:", err);
            setError("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <h2>Welcome Back</h2>

            <form onSubmit={handleSubmit} className="auth-form">
                {error && <div className="error-message">{error}</div>}

                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <button type="submit" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                </button>

                <div className="signup-link">
                    <Link to="/signup">Don't have an account? Sign Up</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;