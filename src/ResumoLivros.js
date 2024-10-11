// ResumoLivros.js
import React from 'react';

const ResumoLivros = ({ livros }) => {
  return (
    <div className="resumo">
      <h2>Total de Livros: {livros.length}</h2>
    </div>
  );
};

export default ResumoLivros;
