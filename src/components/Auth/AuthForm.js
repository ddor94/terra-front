import React from 'react';
import Loader from '../commons/Loader';
import PasswordStrengthMeter from './PasswordStrengthMeter';
import { required, invalidEmail } from '../../utils/variables/forms';
import { classnames } from '../../utils/helpers/classnames';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import zxcvbn from 'zxcvbn';

function AuthForm({ isRegister, onSubmit, loading, dbErrors }) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const passwordStrength = zxcvbn(watch("password") ? watch("password") : '');

  const disableBtn = isRegister ? watch("username") && watch("email") && watch("password") && passwordStrength.score >= 2 ? false : true : watch("email") && watch("password") ? false : true;

  return(
    <form className="mt-8 space-y-6 max-w-xs m-auto" onSubmit={handleSubmit(onSubmit)}>
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
              type="text"
              autoComplete="username"
              required
              className={classnames(
                errors.username ? "border-red-600" : 'border-gray-300',
                "appearance-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-pink-100 focus:border-pink-700 focus:z-10 sm:text-sm"
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
              errors.email ? "border-red-500" : 'border-gray-300',
              "appearance-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-pink-100 focus:border-pink-700 focus:z-10 sm:text-sm"
            )}
            placeholder="E-mail"
            {...register("email", {
              required: {
                value: true,
                message: required
              },
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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
            required
            className={classnames(
              errors.password ? "border-red-500" : 'border-gray-300',
              "appearance-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-pink-100 focus:border-pink-700 focus:z-10 sm:text-sm"
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
        dbErrors &&
        <div className="text-red-600 border border-red-600 p-3 rounded-md">
          <ul className="list-disc ml-4 p-0">
            {
              dbErrors.message.split(",").map((m, i) => {
                return(
                  <li key={i}>
                    <small>{m}</small>
                  </li>
                )
              })
            }
          </ul>
        </div>
      }

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

      {
        isRegister &&
        <PasswordStrengthMeter passwordStrength={passwordStrength} />
      }

      <div>
        <button
          disabled={disableBtn}
          type="submit"
          className={classnames(
            disableBtn ? "hover:none cursor-not-allowed" : "hover:bg-pink-100",
            "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-pink-700 bg-pink-50 focus:outline-none disabled:opacity-50"
          )}
        >
          {
            loading ?
            <Loader
              height={"1.5em"}
              isPrimary={true}
            /> :
            'Continuar'
          }
        </button>
      </div>
    </form>
  )
}

export default AuthForm;
