import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/images/np-logo.png';
import CartWidget from './cart-widget';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className='container'>
        <ul>
          <NavLink to={'/category/Men Watches'} className={({isActive}) => (isActive ? 'active' : 'no-active')}>
            <li className="Man">MEN</li>
          </NavLink>
          <NavLink to={'/'} className={({isActive}) => (isActive ? 'active' : 'no-active')}>
           <li>|</li>
          </NavLink>
          <NavLink to={'/category/Woman Watches'} className={({isActive}) => (isActive ? 'active' : 'no-active')}>
            <li className="Woman">WOMAN</li>
          </NavLink>
        </ul>
        
        <Link to='/' className='logo'>
          <img src={logo} alt="Logo" />
        </Link>
        
        <div className="search-cart-container">
          <div className="search-box">
            <input type="text" placeholder='Search' />
          </div>

          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

