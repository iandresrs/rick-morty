import imagenRickMorty from './img/rick-morty.png';
import Characteres from './componentes/Characters.js';
import './App.css';
import { useState } from 'react';

function App() {

  const [characters, setCharacters] = useState(null);
  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const caracterApi = await api.json();

    setCharacters(caracterApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters ? (
          <Characteres characters={characters} setCharacters={setCharacters}/>
        ) : (
          <>
            <img src={imagenRickMorty} alt='Rick & Morty'className='img-home' />
            <button onClick={reqApi} className='btn-search'>
              Buscar Personajes
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
