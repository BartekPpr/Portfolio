import React from 'react';
import NavBar from './NavBar'; 
import '../css/Footer.css';


const Footer = () => {
  return (
    <footer className="footer" id="contact">

  <ul className="nav-links">
    <li><a href="#aboutme">About</a></li>
    <li><a href="#portfolio">Projects</a></li>
    <li><a href="#skills">Skills</a></li>
  </ul>

    </footer>
  );
};

export default Footer;