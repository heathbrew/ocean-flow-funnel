
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white py-4 px-6 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-primary font-medium">
            Home
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-primary font-medium">
            Services
          </Link>
          <Link to="/packages" className="text-gray-700 hover:text-primary font-medium">
            Packages
          </Link>
          <Link to="/blog" className="text-gray-700 hover:text-primary font-medium">
            Blog
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden md:inline-flex">
            Login
          </Button>
          <Button className="bg-primary hover:bg-primary-light text-white">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
