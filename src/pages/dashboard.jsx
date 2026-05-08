import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

const API_URL = import.meta.env.VITE_API_URL || "https://loanaptech-n5ia.onrender.com";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState(null);
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      const headers = {
        "Authorization": `Bearer ${token}`
      };

      // Fetch current user
      const userResponse = await fetch(`${API_URL}/api/auth/me`, { headers });

      if (!userResponse.ok) {
        navigate("/login");
        return;
      }
      const userData = await userResponse.json();
      setUser(userData.user);

      // Fetch stats
      const statsResponse = await fetch(`${API_URL}/api/loans/dashboard/stats`, { headers });
      if (statsResponse.ok) {
        const statsData = await statsResponse.json();
        setStats(statsData.stats);
      }

      // Fetch loans
      const loanResponse = await fetch(`${API_URL}/api/loans/my-loans`, { headers });
      if (loanResponse.ok) {
        const loanData = await loanResponse.json();
        setLoans(loanData.loans || []);
      }

    } catch (err) {
      console.error("Dashboard fetch error:", err);
      setError("Failed to load dashboard data");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleApplyLoan = () => {
    navigate("/applyloan");
  };

  if (loading) {
    return (
      <div className="dashboard-container">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          {user && <div className="user-info">Welcome, {user.name}</div>}
        </div>
        <button onClick={handleLogout}>Logout</button>
      </div>

      {error && <div className="error-message">{error}</div>}

      {stats && (
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Loans</h3>
            <div className="stat-value">{stats.totalLoans}</div>
          </div>
          <div className="stat-card">
            <h3>Pending</h3>
            <div className="stat-value">{stats.pendingLoans}</div>
          </div>
          <div className="stat-card">
            <h3>Approved</h3>
            <div className="stat-value">{stats.approvedLoans}</div>
          </div>
          <div className="stat-card">
            <h3>Active</h3>
            <div className="stat-value">{stats.activeLoans}</div>
          </div>
          <div className="stat-card">
            <h3>Total Borrowed</h3>
            <div className="stat-value">${stats.totalBorrowed?.toLocaleString()}</div>
          </div>
          <div className="stat-card">
            <h3>Total Repayment</h3>
            <div className="stat-value">${stats.totalRepayment?.toLocaleString()}</div>
          </div>
        </div>
      )}

      <div className="dashboard-content">
        <h2>My Loans</h2>

        <button className="apply-loan-btn" onClick={handleApplyLoan}>
          Apply for a New Loan
        </button>

        {loans.length > 0 ? (
          <table className="loans-table">
            <thead>
              <tr>
                <th>Amount</th>
                <th>Purpose</th>
                <th>Duration</th>
                <th>Monthly Payment</th>
                <th>Status</th>
                <th>Applied Date</th>
              </tr>
            </thead>
           <tbody>
               {loans.map((loan) => (
                <tr key={loan._id} onClick={() => navigate(`/loans/${loan._id}`)} style={{cursor: 'pointer'}}>
                <td>${loan.amount?.toLocaleString()}</td>
                <td>{loan.purpose}</td>
                <td>{loan.duration} months</td>
                <td>${loan.monthlyPayment?.toLocaleString()}</td>
                <td>
                <span className={`status-badge status-${loan.status}`}>
               {loan.status}
                </span>
               </td>
                <td>{new Date(loan.appliedDate).toLocaleDateString()}</td>
                </tr>
            ))}
           </tbody>
          </table>
        ) : (
          <div className="no-loans">
            You have not applied for any loans yet. Click the button above to get started!
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;