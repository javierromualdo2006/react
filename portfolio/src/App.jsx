import React, { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className="Header">
        <h1>My Portfolio</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="theme-toggle" onClick={toggleDarkMode}>
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </header>
      <section id="about" className="About">
        <h2>About Me</h2>
        <p>This is the about section where you can describe yourself.</p>
      </section>
      <section id="projects" className="Projects">
        <h2>Projects</h2>
        <div className="card-container">
          <div className="card">
            <p>Project 1: Description of the first project.</p>
            <a href="https://github.com/javierromualdo2006">ver mas</a> 
          </div>
          <div className="card">
            <p>Project 2: Description of the second project.</p>
            <a href="https://github.com/javierromualdo2006">ver mas</a> 
          </div>
          <div className="card">
            <p>Project 3: Description of the third project.</p>
            <a href="https://github.com/javierromualdo2006">ver mas</a> 
          </div>
        </div>
      </section>
      <section id="contact" className="Contact">
        <h2>Contact</h2>
        <p>
          <div>
            <a href="https://github.com/javierromualdo2006">GITHUB</a> 
          </div>
          <div>
           <a href="https://github.com/javierromualdo2006">WHATSAPP</a> 
          </div>
        </p>
      </section>
    </div>
  );
}

export default App;
