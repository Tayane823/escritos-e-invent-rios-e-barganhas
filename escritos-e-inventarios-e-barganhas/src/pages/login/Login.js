import React from 'react';
import './Login.css'
import BackToHome from '../../components/back/BackToHome';

const Login = () => {
  return (
    <div className='div-login'>

        <BackToHome />
      <form className='form-login'>

        <h1>Login</h1>
        <p>Entre em sua conta, e comece a navegar imediatamente.</p>
        <label>
            <input
            type='email'
            name='email'
            required
            placeholder='E-mail'
            ></input>
        </label>

        <label>
            <input
            type='password'
            name='password'
            required
            placeholder='Senha'
            ></input>
        </label>

        <button type='submit' className='btn btn-primary'>Entrar</button>
      </form>
    </div>
  );
};

export default Login;