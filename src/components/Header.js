import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';


function Header() {
  return (
    <header className='header'>
      <div className='logo'>
        <img src={logo} alt="Space Tourism Logo" />
      </div>
      <nav className='navigation'>
        <Link to="/">Home</Link>
        <Link to="/destination">Destination</Link>
        <Link to="/crew">Crew</Link>
        <Link to="/technology">Technology</Link>   

      </nav>
    </header>
  );
}

export default Header;
