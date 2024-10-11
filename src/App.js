import React, { useState } from 'react';
import ResumoLivros from './ResumoLivros';
import './App.css';

function App() {
  const [livros, setLivros] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');

  const adicionarLivro = () => {
    if (titulo && autor && genero) {
      setLivros([...livros, { titulo, autor, genero }]);
      setTitulo('');
      setAutor('');
      setGenero('');
    }
  };

  const excluirLivro = (index) => {
    const novosLivros = livros.filter((_, i) => i !== index);
    setLivros(novosLivros);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Gerenciador de Livros</h1>
      </header>

      <ResumoLivros livros={livros} />

      <div className="form">
        <label htmlFor="Titulo">Título</label>
        <input
          id="Titulo"
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <label htmlFor="Autor">Autor</label>
        <input
          id="Autor"
          type="text"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />

        <label htmlFor="Genero">Gênero</label>
        <input
          id="Genero"
          type="text"
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
        />

        <button onClick={adicionarLivro}>ADICIONAR</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Gênero</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((item, index) => (
            <tr key={index}>
              <td>{item.titulo}</td>
              <td>{item.autor}</td>
              <td>{item.genero}</td>
              <td>
                <button id="excluir" onClick={() => excluirLivro(index)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
