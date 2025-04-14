
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="text-2xl font-bold">
        <span className="text-primary">Resume</span>
        <span className="text-secondary">Ocean</span>
      </div>
    </Link>
  );
};

export default Logo;
