import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import logos from '../assets/logos.jpeg';
import TopBar from './Slider/Topbar';

// Reusable component for navigation links with animated border on hover
const NavItem = ({ to, children, onClick }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        isActive
          ? 'relative text-black transition-all duration-500 border-b-4 border-black px-4 py-3 text-xl'
          : 'relative text-black group hover:text-black px-4 py-3 text-xl border-b-4 border-transparent'
      }
    >
      {children}
      {/* Border animation */}
      <span className="absolute inset-0 border-b-4 border-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
    </NavLink>
  );
};

// Adding PropTypes for prop validation
NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Effect to handle scroll and set sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
      const scrolled = window.scrollY;
      document.querySelector('.parallax').style.transform = `translateY(${scrolled * 0.3}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <TopBar />

      <nav
        className={`bg-white ${
          isSticky ? 'fixed top-0 left-0 w-full z-50 shadow-lg backdrop-blur-lg bg-opacity-90' : 'relative'
        } transition-all duration-500`}
      >
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
          <div className='flex h-23 items-center justify-between'>
            {/* Logo */}
            <div className='flex-shrink-0'>
              <img
                className=' h-30 w-28 border-2 border-black logo-hover transition-transform duration-300'
                src={logos}
                alt='Logo'
              />
            </div>

            {/* Centered Navigation Links */}
            <div className='flex-1 flex justify-center items-center'>
              <div className='hidden md:flex space-x-6'>
                <NavItem to='/'>Home</NavItem>
                <NavItem to='/kurumsal'>Kurumsal</NavItem>
                <NavItem to='/faliyet'>Faaliyet</NavItem>
                <NavItem to='/contact'>Contact</NavItem>
              </div>
            </div>

            {/* Hamburger Icon - Visible on small screens */}
            <div className='md:hidden'>
              <button
                onClick={toggleMenu}
                className='text-black focus:outline-none'
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? (
                  <FaTimes className='h-10 w-10' />
                ) : (
                  <FaBars className='h-10 w-10' />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className='md:hidden space-y-4 pt-6 animate-slideIn'>
              <NavItem to='/' onClick={toggleMenu}>Home</NavItem>
              <NavItem to='/kurumsal' onClick={toggleMenu}>Kurumsal</NavItem>
              <NavItem to='/faliyet' onClick={toggleMenu}>Faaliyet</NavItem>
              <NavItem to='/contact' onClick={toggleMenu}>Contact</NavItem>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
