import React from 'react';
import './Register.css'
import { useState } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication';

const  Register = () => {

    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmePassword] = useState("")

    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const { error: authError, loading, CreateUser} = useAuthentication() 
    
    const HandleSubmit = async (e) => {
        e.preventDefault()

        setError("")
        
        const user = {
            displayName,
            email,
            password,
        }

        if (password !== confirmPassword) {
            setError("As senhas precisam ser iguais")
            return
        }

        const res = await CreateUser(user)

        console.log(res)
    }

  return (
    <div className='div-register'>

      <h1>Crie seu cadastro</h1>
      <p className='text-register'>
        Imagine-se conectando com pessoas que compartilham sua paixão por histórias, descobrindo novos autores e clássicos 
        imperdíveis, enquanto também dá uma nova vida aos livros que já cativaram seu coração.
      </p>
      
      <form onSubmit={HandleSubmit}>
        <label>
            <input
            type='name'
            value={displayName}
            name='displayName'
            onChange={(e) => setDisplayName(e.target.value)}
            required
            placeholder='Nome e Sobrenome'
            ></input>
        </label>

        <label>
            <input
            type='email'
            value={email}
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='E-mail'
            ></input>
        </label>

        <label>
            <input
            type='password'
            value={password}
            name='password'
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='Senha'
            ></input>
        </label>

        <label>
            <input
            type='password'
            value={confirmPassword}
            name='confirmPassword'
            required
            onChange={(e) => setConfirmePassword(e.target.value)}
            placeholder='Confirme sua senha'
            ></input>
        </label>
        {error && <span>{error}</span>}
        <button type='submit' className='btn btn-register'>Criar cadastro</button>
      </form>
    </div>
  );
};

export default Register;