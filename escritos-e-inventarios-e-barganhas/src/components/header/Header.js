import { Link, NavLink } from 'react-router-dom';
import './Header.css'

import useAuthentication from '../../hooks/useAuthentication'
import { UseAuthValue } from '../../context/AuthContext'

import React from 'react';

const Header = () => {

  const { user } = UseAuthValue();

  return (
    <div className='div-header'>
      <h1 className='title-header'><Link to="/">Escritos e Inventário e Barganhas</Link></h1>
      <nav>
        <ul>
          {user && (
            <>
              <li><NavLink to="/books" className='header-link'>Livros</NavLink></li>
              <li><NavLink to="/review" className='header-link'>Resenhas</NavLink></li>
              <li><NavLink to="/challenge" className='header-link'>Desafio de Leitura</NavLink></li>
              <li><NavLink to="/club" className='header-link'>Clube do Livro</NavLink></li>
              <li><NavLink to="/quiz" className='header-link'>Quiz Literário</NavLink></li>
            </>
          )}
          {!user && (
            <>
              <li><NavLink to="/login" className='link-Login'>Login</NavLink></li>
            </>
          )}
        </ul>
      </nav>
     

      
    </div>
  );
};

export default Header;