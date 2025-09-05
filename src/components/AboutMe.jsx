import React from 'react';
import '../css/AboutMe.css';

const AboutMe = () => {
  return (
    <section className="aboutme" id="aboutme">
      <div className="aboutme-content">
        <h1>About Me</h1>
        <p className="description">
    I'm a Web Developer with a passion for coding. I enjoy solving problems and continuously expanding my knowledge in the field of development.
    My goal is to build efficient and intuitive web applications that deliver a great user experience. 
    I've spent a lot of time experimenting, learning by doing, and figuring things out as I go. I like working through challenges, understanding how things work. 
    I'm not afraid to admit when I don't know something, and I'm always motivated to learn what I need to get the job done right.  </p>
        <p className="interest">
        I'm always looking to improve and learn new skills.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;