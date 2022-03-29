import React from 'react';
import { UserCircleIcon } from '@heroicons/react/outline';
import { useForm } from "react-hook-form";
import { required, invalidEmail } from '../../utils/variables/forms';
import { classnames } from '../../utils/helpers/classnames';
import Loader from '../commons/Loader';
import { STATES } from '../../utils/variables/states';
import { useQuery } from '@apollo/client';
import { listCities } from '../../apiCalls/cities';

function AccountInfo({ loadingUser, user }) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { loading, error, data } = useQuery(listCities, {
    variables: { uf: watch("state") }
  });

  const isCityDisabled = watch("state") == "-- Selecione --" ? true : false;
  const cities = data ? data.listCities.cities : [];

  return(
    <div>
      <div className="text-pink-700 flex items-center">
        <UserCircleIcon className="h-8 w-8 mr-2" />
        <h1 className="text-3xl">Meus Dados</h1>
      </div>
      <p className="text-gray-500 mt-2">
        Altere seus dados gerais como e-mail, nome de usuário e informações adicionais.
      </p>

      <div className="mt-10">
        {
          loadingUser ?
          <div className="flex justify-center">
            <Loader height={"5em"} isPrimary={true} />
          </div> :
          <form>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm text-gray-500">Nome</label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="mt-1 focus:ring-pink-700 focus:border-pink-700 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md text-gray-500"
                  defaultValue={user.name}
                  {...register("name")}
                  onBlur={() => console.log(watch("name"))}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm text-gray-500">Sobrenome</label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="mt-1 focus:ring-pink-700 focus:border-pink-700 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md text-gray-500"
                  defaultValue={user.surname}
                  {...register("surname")}
                  onBlur={() => console.log(watch("surname"))}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm text-gray-500">E-mail</label>
                <input
                  type="text"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  className="mt-1 focus:ring-pink-700 focus:border-pink-700 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md text-gray-500"
                  defaultValue={user.email}
                  {...register("email")}
                  onBlur={() => console.log(watch("email"))}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm text-gray-500">Nome de usuário</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="user-name"
                  className="mt-1 focus:ring-pink-700 focus:border-pink-700 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md text-gray-500"
                  defaultValue={user.userName}
                  {...register("userName")}
                  onBlur={() => console.log(watch("userName"))}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm text-gray-500">Estado</label>
                <select
                  id="state"
                  name="state"
                  autoComplete="state-name"
                  className="mt-1 block w-full py-2 px-3 border border-gray-200 bg-white rounded-md shadow-sm focus:outline-none focus:ring-pink-700 focus:border-pink-700 sm:text-sm text-gray-500"
                  {...register("state")}
                >
                  <option>-- Selecione --</option>
                  {
                    STATES.map((state) => {
                      return(
                        <option
                          value={state.uf}
                          key={state.uf}
                        >
                          {state.name}
                        </option>
                      )
                    })
                  }
                </select>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm text-gray-500 flex items-center">
                  Cidade
                  { loading && <Loader height={".8em"} isPrimary={true} /> }
                </label>
                <select
                  id="city"
                  name="city"
                  autoComplete="city-name"
                  className={classnames(
                    isCityDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
                    'mt-1 block w-full py-2 px-3 border border-gray-200 bg-white rounded-md shadow-sm focus:outline-none focus:ring-pink-700 focus:border-pink-700 sm:text-sm text-gray-500'
                  )}
                  disabled={isCityDisabled}
                >
                  <option>-- Selecione --</option>
                  {
                    cities.map((city) => {
                      return(
                        <option
                          value={city.id}
                          key={city.id}
                        >
                          {city.name}
                        </option>
                      )
                    })
                  }
                </select>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm text-gray-500">Endereço completo</label>
                <input type="text" name="street-address" id="street-address" autoComplete="street-address" className="mt-1 focus:ring-pink-700 focus:border-pink-700 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md text-gray-500" />
              </div>
            </div>
          </form>
        }
      </div>
    </div>
  )
}

export default AccountInfo;
