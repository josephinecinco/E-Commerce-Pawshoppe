import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import Logo from "../assets/Logo.png";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart(); 

  return (
    <div className="navbar-container">
      <img src={Logo} alt="Logo" className="navbar-logo" />
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/products">Shop</Link>
        <Link to="/AboutUs">About</Link>
        {/* Cart icon with badge */}
        <Link to="/cart" className="cart-link">
          🛒
          {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
        </Link>
        

      </nav>
    </div>
  );
};

export default Navbar;
