import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PasswordProtection from './PasswordProtection';
import './Navbar.css';
import './PasswordProtection.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [showPasswordProtection, setShowPasswordProtection] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handlePasswordProtectionToggle = () => {
    setShowPasswordProtection(!showPasswordProtection);
    closeMobileMenu();
  };

  const navMenuClass = click ? 'nav-menu active' : 'nav-menu';
  const navMenuStyle = click ? { left: 0 } : { left: '-100%' };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            Sydney Recipe <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={navMenuClass} style={navMenuStyle}>
            <li className='nav-item'>
              <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/recipe' className='nav-links' onClick={closeMobileMenu}>
                Recipe
              </Link>
            </li>
            <li className='nav-item'>
              <button className='nav-links-mobile' onClick={handlePasswordProtectionToggle}>
                Password
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {showPasswordProtection && <PasswordProtection />}
    </>
  );
};

export default Navbar;
