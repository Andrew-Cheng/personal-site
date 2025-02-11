import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  const isActiveLink = (path: string) => {
    return location.pathname === path ? "text-blue-600" : "text-gray-600 hover:text-blue-600";
  };

  return (
    <nav className="mb-8">
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className={`${isActiveLink('/')} transition-colors duration-200`}>
            Home
          </Link>
        </li>
        {/* <li>
          <Link to="/about" className={`${isActiveLink('/about')} transition-colors duration-200`}>
            About
          </Link>
        </li> */}
        <li>
          <Link to="/projects" className={`${isActiveLink('/projects')} transition-colors duration-200`}>
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;