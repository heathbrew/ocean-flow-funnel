
import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = () => {
  return (
    <Link to="/" className="logo-container">
      <div className="logo-text">
        <span className="logo-primary">Resume</span>
        <span className="logo-secondary">Ocean</span>
      </div>
    </Link>
  );
};

export default Logo;
