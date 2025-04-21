
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Logo from './Logo';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Logo />
        <nav className="header-nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/services" className="nav-link">
            Services
          </Link>
          <Link to="/packages" className="nav-link">
            Packages
          </Link>
          <Link to="/blog" className="nav-link">
            Blog
          </Link>
        </nav>
        <div className="header-buttons">
          <Button variant="outline" className="login-button">
            Login
          </Button>
          <Button className="get-started-button">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
