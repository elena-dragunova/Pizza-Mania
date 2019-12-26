import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <nav className="ui grid navbar">
      <Link to='/' className="four wide column home-page">Home</Link>
      <div className="ui grid twelve wide column main-menu">
        <Link to='/about' className="four wide column">About</Link>
        <Link to='/catalog' className="four wide column">Catalog</Link>
        <Link to='/news' className="four wide column">News</Link>
        <Link to='/contacts' className="four wide column">Contacts</Link>
      </div>
    </nav>
  )
};

export default Header;
