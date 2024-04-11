import { Link } from 'react-router-dom';
import './Header.css'

import React from 'react';

const Header = () => {
  return (
    <div className='div-header'>
      <h1>Escritos e Inventário e Barganhas</h1>
      <ul>
        <li><Link to="/" className='header-link'>Livros</Link></li>
        <li><Link to="/" className='header-link'>Resenhas</Link></li>
        <li><Link to="/" className='header-link'>Desafio de Leitura</Link></li>
        <li><Link to="/" className='header-link'>Clube do Livro</Link></li>
        <li><Link to="/" className='header-link'>Quiz Literário</Link></li>
        <li><Link to="/login" className='link-Login'>Login</Link></li>
      </ul>

      
    </div>
  );
};

export default Header;