import React from 'react';
import '../css/NavBar.css';


const NavBar = () => {
  return (
    <nav className="navbar">
  <ul className="nav-links">
    <li><a href="#aboutme">About</a></li>
    <li><a href="#portfolio">Projects</a></li>
    <li><a href="#skills">Skills</a></li>
  </ul>
  <a href="#contact" className="contact-button">Contact Me</a>
</nav>
  );
};

export default NavBar;