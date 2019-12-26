import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <nav className="ui grid footer">
      <div className="footer-menu">
        <Link to='/' className="footer-link">Home</Link>
        <Link to='/about' className="footer-link">About</Link>
        <Link to='/catalog' className="footer-link">Catalog</Link>
        <Link to='/news' className="footer-link">News</Link>
        <Link to='/contacts' className="footer-link">Contacts</Link>
      </div>
    </nav>
  )
};

export default Footer;
