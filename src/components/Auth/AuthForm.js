import React from 'react';
import { required, invalidEmail } from '../../utils/variables/forms';
import { classnames } from '../../utils/helpers/classnames';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

function AuthForm({ isRegister, onSubmit }) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  return(
    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="rounded-md ">
        {
          isRegister && 
          <div className="mb-3">
            <label htmlFor="username" className="sr-only">
              Nome de usuário
            </label>
            <input
              id="username"
              name="username"
              type="username"
              autoComplete="username"
              required
              className={classnames(
                errors.username ? "border-red-600" : 'border-gray-300',
                "appearance-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-pink-700 focus:border-pink-700 focus:z-10 sm:text-sm"
              )}
              placeholder="Nome de usuário"
              {...register("username", {
                required: {
                  value: true,
                  message: required
                },
              })}
            />

            {
              errors.username &&
              <small className="text-red-600 ml-2">
                { errors.username.message }
              </small>
            }
          </div>
        }

        <div className="mb-3">
          <label htmlFor="email-address" className="sr-only">
            E-mail
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={classnames(
              errors.email ? "border-red-600" : 'border-gray-300',
              "appearance-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-pink-700 focus:border-pink-700 focus:z-10 sm:text-sm"
            )}
            placeholder="E-mail"
            {...register("email", {
              required: {
                value: true,
                message: required
              },
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: invalidEmail,
              },
            })}
          />

          {
            errors.email &&
            <small className="text-red-600 ml-2">
              { errors.email.message }
            </small>
          }
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

            className={classnames(
              errors.password ? "border-red-600" : 'border-gray-300',
              "appearance-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-pink-700 focus:border-pink-700 focus:z-10 sm:text-sm"
            )}
            placeholder="Senha"
            {...register("password", {
              required: {
                value: true,
                message: required
              }
            })}
          />

          {
            errors.password &&
            <small className="text-red-600 ml-2">
              { errors.password.message }
            </small>
          }
        </div>
      </div>

      {
        !isRegister &&
        <div className="flex items-center justify-end">
          <div className="text-sm">
            <Link to="#" className="font-medium text-pink-700 hover:text-pink-900">
              Esqueceu sua senha?
            </Link>
          </div>
        </div>
      }

      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-700 hover:bg-pink-900 focus:outline-none"
        >
          Continuar
        </button>
      </div>
    </form>
  )
}

export default AuthForm;