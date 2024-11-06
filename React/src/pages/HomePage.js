import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => (
  <>
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="navbar-brand">MyStore</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>

    <div className="homepage">
      <div className="homepage-content">
        <h1>Welcome to Our Store</h1>
        <Link to="/products">
          <button className="btn-main">Shop Now</button>
        </Link>
      </div>
    </div>
  </>
);

export default HomePage;
