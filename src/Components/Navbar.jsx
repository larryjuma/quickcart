import React, { useState } from "react";
import { NavLink } from "react-router-dom"; 
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <h2>QuickCart</h2>
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Search Bar */}
      <div className="navbar-search">
        <input type="text" placeholder="Search for products..." />
        <button>Search</button>
      </div>

      {/* Links */}
      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" end activeclassname="active">
          Home
        </NavLink>
        <NavLink to="/products" activeclassname="active">
          Products
        </NavLink>
        <NavLink to="/cart" activeclassname="active">
          Cart 🛒
        </NavLink>
        <NavLink to="/checkout" activeclassname="active">
          Checkout
        </NavLink>
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
