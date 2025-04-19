import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="company-name">Paradise Nursery</h1>
        <p className="company-description">
          Welcome to Paradise Nursery, your one-stop destination for beautiful, healthy houseplants. 
          We carefully select and nurture each plant in our collection to bring the beauty and benefits 
          of nature into your home. From air-purifying varieties to low-maintenance succulents, 
          we have the perfect plant to match your lifestyle and space.
        </p>
        <button className="get-started-btn" onClick={() => navigate('/products')}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default LandingPage; 