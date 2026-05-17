import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa'
import './nav.css'
import logo from '../../assets/image/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [scroll, setScroll] = useState(false);



  const handleNavClick = (to) => {
    setIsOpen(false);
    if (location.pathname === to) {
     
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(to);
    }
  };

  const handleButtonClick = () => {
    handleNavClick('/contact');
  };

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


// In Navbar.jsx, update toggleMenu:
const toggleMenu = () => {
  const next = !isOpen;
  setIsOpen(next);
  // Prevent background scroll when menu open
  document.body.style.overflow = next ? 'hidden' : '';
};

// Also reset in useEffect cleanup:
useEffect(() => {
  setIsOpen(false);
  document.body.style.overflow = '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, [location.pathname]);

  const navItems = [
    { to: '/home',    label: '[Home]' },
    { to: '/about',   label: '[About]' },
    { to: '/resume',  label: '[Resume]' },
    { to: '/project', label: '[Project]' },
    { to: '/contact', label: '[Contact]' },
  ];

  return (
    <header className={scroll ? 'nav-scrolled' : ''}>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <ul className={isOpen ? 'nav-links active' : 'nav-links'}>
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive ? 'custom-link nav-active' : 'custom-link'
                }
                onClick={(e) => {
                  if (location.pathname === to) {
                    e.preventDefault(); // stop NavLink from doing nothing
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setIsOpen(false);
                  }
                }}
              >
                {label}
              </NavLink>
            </li>
          ))}

          <li className="mobile-only">
            <button type="button" onClick={handleButtonClick} className="contact-button">
              Contact Me <FaArrowRight />
            </button>
          </li>
        </ul>

        <button type="button" onClick={handleButtonClick} className="contact-button desktop-only">
          Contact Me <FaArrowRight className="arrow" />
        </button>

        <button className="nav-btn" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;