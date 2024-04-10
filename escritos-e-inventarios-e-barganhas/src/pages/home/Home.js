import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom'
import Register from '../register/Register'
 
const Home = () => {
  return (
    <div className='content div-home'>

      <div className='home-text'>
        <h1>Crie seu cadastro e navegue pelo App para comprar, vender, ou trocar livros!</h1>
        <p className='text-to-user'>        
          Seja bem-vindo ao nosso novo aplicativo dedicado aos amantes da leitura e dos livros! Aqui, proporcionamos uma plataforma dinâmica e envolvente 
          onde os usuários podem mergulhar no mundo da literatura de maneiras diversas e emocionantes. Nossa comunidade vibrante oferece a oportunidade única 
          de trocar livros com outros apaixonados pela leitura, explorar uma vasta seleção de obras oferecidas por outros usuários e até mesmo vender seus 
          próprios tesouros literários. Junte-se a nós e embarque nessa jornada literária extraordinária, 
          onde cada página é uma nova aventura esperando para ser descoberta!"
        </p>
        <p>Já é cadastrado? então<Link to="/login"> faça seu login</Link> e aproveite!</p>
      </div>

      <div className='home-register-link'>
        <Register />
      </div> 

    </div>
  );
};

export default Home;