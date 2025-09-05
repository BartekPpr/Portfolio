import React from 'react';
import '../css/Portfolio.css';
import weatherAppImage from '../assets/weatherapp.png';
import diceImage from '../assets/dice.png';
import movieAppImage from '../assets/movieapp.png';


const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2>Projects</h2>
      <div className="portfolio-container">
        <div className="project">
          <h3>WeatherApp</h3>
          <img src={weatherAppImage} alt="WeatherApp Preview" className="project-image" />
          <a href="https://github.com/BartekPpr/WeatherApp" target="_blank" rel="">View on GitHub</a>
        </div>
        <div className="project">
          <h3>Dice</h3>
          <img src={diceImage} alt="Dice Preview" className="project-image" />
          <a href="https://github.com/BartekPpr/Dice" target="_blank" rel="">View on GitHub</a>
        </div>
        <div className="project">
          <h3>MovieApp</h3>
          <img src={movieAppImage} alt="MovieApp Preview" className="project-image" />
          <a href="https://github.com/BartekPpr/MovieApp" target="_blank" rel="">View on GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;