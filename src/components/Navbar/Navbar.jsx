import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleLinkClick = () => {
    setMenuOpen(false);
  };
  const handleRegisterClick = () => {
    navigate('/register');
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={handleLinkClick}>
        <div className="logo-icon">🩸</div>
        <span className="logo-text">Donify</span>
      </Link>
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/requests" onClick={handleLinkClick}>
            Requests
          </Link>
        </li>
        <li>
          <Link to="/donors" onClick={handleLinkClick}>
            Donors
          </Link>
        </li>
        <li>
          <Link to="/find-match" onClick={handleLinkClick}>
            Find Match
          </Link>
        </li>
        <button className="donor-btn mobile-btn" onClick={handleRegisterClick}>
          Register as Donor
        </button>
      </ul>

      <button className="donor-btn desktop-btn" onClick={handleRegisterClick}>
        Register as Donor
      </button>
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;