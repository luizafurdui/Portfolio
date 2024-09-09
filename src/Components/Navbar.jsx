import { useState } from 'react';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';  // Adjust the path if necessary

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-[#0F0E11] text-white flex justify-between items-center p-5 z-50 border-b border-[#3F3E45]/50">
      <Link to="/">
        <img 
          src={logo} 
          alt="Logo" 
          className="w-[100px] h-[140px] mt-7 text-hover"
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 mr-12" >
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-ubuntu font-normal cursor-pointer text-[12px] text-hover ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            } text-gray-400 hover:text-white`}
          >
            <Link to={nav.path}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="sm:hidden flex items-center">
        <button
          className="text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="list-none flex flex-col items-center absolute top-20 left-0 w-full bg-[#090A12] sm:hidden">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className="font-ubuntu font-normal cursor-pointer text-[18px] my-4 text-gray-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Link to={nav.path}>{nav.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
