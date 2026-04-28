import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const isActive = (path) =>
    location.pathname === path ? "active" : "";

  return (
    <div className="navbar">

      <div className="logo">
        🩸 Blood Donation
      </div>

      <div className="nav-links">

        <Link to="/dashboard" className={isActive("/dashboard")}>
          Dashboard
        </Link>

        <Link to="/add-donor" className={isActive("/add-donor")}>
          Add Donor
        </Link>

        <Link to="/donor-list" className={isActive("/donor-list")}>
          Donor List
        </Link>

        <Link to="/request" className={isActive("/request")}>
          Request
        </Link>

        <Link to="/request-list" className={isActive("/request-list")}>
          Requests
        </Link>

        <Link to="/notifications" className={isActive("/notifications")}>
          Notifications
        </Link>

      </div>

      <button className="logout-btn" onClick={logout}>
        Logout
      </button>

    </div>
  );
}