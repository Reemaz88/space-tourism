import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css';
import logo from '../assets/shared/logo.svg';
import hamburger from '../assets/shared/icon-hamburger.svg';
import close from '../assets/shared/icon-close.svg';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Space Tourism Logo" />
      </Link>
      <div className="nav-toggle" onClick={toggleNav}>
        {isNavOpen ? (
          <img src={close} alt="Close menu" />
        ) : (
          <img src={hamburger} alt="Hamburger menu" />
        )}
      </div>
      <nav className={`navigation ${isNavOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/destination">Destination</Link>
        <Link to="/crew">Crew</Link>
        <Link to="/technology">Technology</Link>
      </nav>
    </header>
  );
}

export default Header;