import React from 'react';
import AuthForm from './AuthForm';
import { Link } from 'react-router-dom';

function Login() {
  const onSubmit = data => console.log(data);

  return(
    <div>
      <img
        className="mx-auto h-12 w-auto"
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        alt="Workflow"
      />
      <h2 className="mt-6 text-center text-3xl text-pink-700 font-medium">Olá, digite seu e-mail e senha parar entrar em sua conta</h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        ou{' '}
        <Link to="/register" className="font-medium text-pink-700 hover:text-pink-900">
          crie uma nova conta
        </Link>
      </p>

      <AuthForm isRegister={false} onSubmit={onSubmit} />
    </div>
  )
}

export default Login;
