import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './css/App.css';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;