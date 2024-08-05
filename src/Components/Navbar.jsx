import { navLinks } from '../constants';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';  // Adjust the path if necessary

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-[#090A12leac] text-white flex justify-around items-center p-10 z-50 border-b border-[#3F3E45]/50">
      <Link to="/">
        <img 
          src={logo} 
          alt="Logo" 
          className="w-[120px] h-[170px] mt-7 text-hover"
        />
      </Link>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-ubuntu font-normal cursor-pointer text-[16px] text-hover ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            } text-gray-400 hover:text-white`}
          >
            <Link to={nav.path}>{nav.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
