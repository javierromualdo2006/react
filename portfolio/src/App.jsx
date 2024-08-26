import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className="Header">
        <h1>Javier Romualdo</h1>
        <nav>
          <a href="#about">Acerca de mi</a>
          <a href="#projects">Projectos</a>
          <a href="#contact">Contactos</a>
        </nav>
        <button className="theme-toggle" onClick={toggleDarkMode}>
          {darkMode ? 'Cambiar al modo claro' : 'Cambiar al modo obscuro'}
        </button>
      </header>
      <section id="about" className="About">
        <h2>Acerca de mí</h2>
        <p>This is the about section where you can describe yourself.</p>
      </section>
      <section id="projects" className="Projects">
        <h2>Projectos</h2>
        <div className="card-container">
          <div className="card">
            <h3>Conversor de Monedas</h3>
            <p>Conversor de Monedas que te da
               el calculo de el valor de una moneda a 
               cualquier otra .</p>
            <div>
              <img src="/imgs/conversor.png" alt="Conversor de Monedas"/>
            </div>
          </div>
          <div className="card">
            <h3>App Rick y Morty</h3>
            <p>Description of the second project.</p>
            <div>
              <img src="/imgs/rickandmorty.png" alt="App Rick y Morty"/>
            </div>
          </div>
          <div className="card">
            <h3>Tarjetas Pokémon</h3>
            <p>Tarjetas de Pokemons con la imagen del
               respectivo pokemon y sus dos tipos debajo.</p>
            <div>
              <img src="/imgs/pokemon_app.png" alt="Tarjetas Pokémon"/>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="Contact">
        <h2>Contactos</h2>
        <div>
          <a href="https://github.com/javierromualdo2006">GITHUB</a> 
        </div>
        <div>
          <a href="https://github.com/javierromualdo2006">WHATSAPP</a> 
        </div>
      </section>
    </div>
  );
}

export default App;
