import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";

const API_URL = import.meta.env.VITE_API_URL || "https://loanaptech.onrender.com";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, [location.pathname]);

  const checkAuth = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      if (!token) {
        setUser(null);
        return;
      }

      const response = await fetch(`${API_URL}/api/auth/me`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch (_error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  if (loading) return null;

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar-container">

        <Link to="/" className="navbar-logo" aria-label="LoanAptech home">
          LoanAptech
        </Link>

        <ul className="navbar-menu" role="menubar">
          <li role="none">
            <Link to="/" className={isActive("/") ? "nav-link active" : "nav-link"} role="menuitem">
              Home
            </Link>
          </li>

          <li role="none">
            <Link to="/dashboard" className={isActive("/dashboard") ? "nav-link active" : "nav-link"} role="menuitem">
              Loans
            </Link>
          </li>

          <li role="none">
            <Link to="/about" className={isActive("/about") ? "nav-link active" : "nav-link"} role="menuitem">
              About
            </Link>
          </li>

          <li role="none">
            <Link to="/contact" className={isActive("/contact") ? "nav-link active" : "nav-link"} role="menuitem">
              Contact
            </Link>
          </li>

          {user && (
            <li role="none">
              <Link to="/applyloan" className={isActive("/applyloan") ? "nav-link active" : "nav-link"} role="menuitem">
                Apply Now
              </Link>
            </li>
          )}

          {user && (
            <li role="none">
              <Link to="/dashboard" className="nav-cta" role="menuitem">
                Dashboard
              </Link>
            </li>
          )}

          {!user && (
            <>
              <li role="none">
                <Link to="/login" className="nav-link" role="menuitem">
                  Login
                </Link>
              </li>
              <li role="none">
                <Link to="/signup" className="nav-cta" role="menuitem">
                  Sign Up
                </Link>
              </li>
            </>
          )}

          {user && (
            <li role="none">
              <button onClick={handleLogout} className="logout-btn" role="menuitem">
                Logout
              </button>
            </li>
          )}
        </ul>

        <button
          className="navbar-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <Link to="/" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
        <Link to="/dashboard" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Loans</Link>
        <Link to="/about" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>About</Link>
        <Link to="/contact" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Contact</Link>

        {user && (
          <Link to="/applyloan" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
            Apply Now
          </Link>
        )}

        {user && (
          <Link to="/dashboard" className="mobile-cta" onClick={() => setMobileMenuOpen(false)}>
            Dashboard
          </Link>
        )}

        {!user && (
          <>
            <Link to="/login" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Login</Link>
            <Link to="/signup" className="mobile-cta" onClick={() => setMobileMenuOpen(false)}>Sign Up</Link>
          </>
        )}

        {user && (
          <button
            className="mobile-logout"
            onClick={() => { handleLogout(); setMobileMenuOpen(false); }}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;