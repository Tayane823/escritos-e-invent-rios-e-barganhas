import React from 'react';
import './Login.css'
import BackToHome from '../../components/back/BackToHome';
import { useAuthentication } from '../../hooks/useAuthentication';

const Login = () => {

  const { error, login } = useAuthentication()
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

        <p>{error}</p>

        <button type='button' className='btn btn-primary' onClick={login}>Entrar</button>
      </form>
    </div>
  );
};

export default Login;