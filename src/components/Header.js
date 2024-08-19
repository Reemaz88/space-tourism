import React from 'react';
import logo from '../assets/shared/logo.svg';


function Header() {
  return (
    <header className='header'>
      <div className='logo'>
      <img src={logo} alt="Space Tourism Logo" />
    </div>
      <nav className='navigation'>
        <a href='#'>Home</a>
        <a href='#'>Destination</a>
        <a href='#'>Crew</a>
        <a href='#'>Technology</a>
      </nav>
    </header>
  );
}

export default Header;
