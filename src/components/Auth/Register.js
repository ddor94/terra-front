import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return(
    <>
      <div>
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl text-pink-700 font-medium">Para criar sua conta, digite um nome de usuário, seu e-mail e uma senha segura!</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          ou{' '}
          <Link to="/login" className="font-medium text-pink-700 hover:text-pink-900">
            faça login em sua conta já existente
          </Link>
        </p>
      </div>
      <form className="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="username" className="sr-only">
              Nome de Usuário
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-700 focus:border-pink-700 focus:z-10 sm:text-sm"
              placeholder="Nome de Usuário"
            />
          </div>
          <div>
            <label htmlFor="email-address" className="sr-only">
              E-mail
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-pink-700 focus:border-pink-700 focus:z-10 sm:text-sm"
              placeholder="E-mail"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Senha
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-pink-700 focus:border-pink-700 focus:z-10 sm:text-sm"
              placeholder="Senha"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-700 hover:bg-pink-900 focus:outline-none"
          >
            Continuar
          </button>
        </div>
      </form>
    </>
  )
}

export default Register;
