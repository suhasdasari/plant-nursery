import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar({ cartCount }) {
  return (
    <nav className="navigation-bar">
      <Link to="/" className="nav-logo">Paradise Nursery</Link>
      <div className="nav-sections">
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/cart" className="nav-link cart-link">
          Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
}

export default NavigationBar; 