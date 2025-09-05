import React from 'react';
import '../css/Home.css';
import AboutMe from './AboutMe';
import Skills from './Skills';

const Home = () => {
  return (
    <section id="home" className="home">
      <h1>Welcome to My Portfolio</h1>
      <div className="home-container">
        <AboutMe />
        <Skills />
      </div>
    </section>
  );
};

export default Home;
