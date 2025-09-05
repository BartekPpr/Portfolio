import React from 'react';
import '../css/Contact.css';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <div className="contact-info">
        <p className="email">Email: bartoszpolak.pr@gmail.com</p>
      </div>

      <div className="social-links">
        <a href="https://github.com/BartekPpr" target="_blank" rel="">
          <FaGithub size={50} />
        </a>
        <a href="https://www.linkedin.com/in/bartosz-polak-80663737a/" target="_blank" rel="">
          <FaLinkedin size={50} />
        </a>
        <a href="https://www.facebook.com/henry.wicek" target="_blank" rel="">
          <FaFacebook size={50} />
        </a>
      </div>

    </section>
  );
};

export default Contact;