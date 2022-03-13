import React from 'react';
import { UserCircleIcon } from '@heroicons/react/outline';

function AccountInfo() {
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
        <form>
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label for="first-name" className="block text-sm text-gray-500">Nome</label>
              <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="mt-1 focus:ring-pink-700 focus:border-pink-700 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md text-gray-500" />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label for="last-name" className="block text-sm text-gray-500">Sobrenome</label>
              <input type="text" name="last-name" id="last-name" autocomplete="family-name" className="mt-1 focus:ring-pink-700 focus:border-pink-700 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md text-gray-500" />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label for="email-address" className="block text-sm text-gray-500">E-mail</label>
              <input type="text" name="email-address" id="email-address" autocomplete="email" className="mt-1 focus:ring-pink-700 focus:border-pink-700 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md text-gray-500" />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label for="username" className="block text-sm text-gray-500">Nome de usuário</label>
              <input type="text" name="username" id="username" autocomplete="user-name" className="mt-1 focus:ring-pink-700 focus:border-pink-700 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md text-gray-500" />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label for="country" className="block text-sm text-gray-500">País</label>
              <select id="country" name="country" autocomplete="country-name" className="mt-1 block w-full py-2 px-3 border border-gray-200 bg-white rounded-md shadow-sm focus:outline-none focus:ring-pink-700 focus:border-pink-700 sm:text-sm text-gray-500">
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label for="street-address" className="block text-sm text-gray-500">Endereço</label>
              <input type="text" name="street-address" id="street-address" autocomplete="street-address" className="mt-1 focus:ring-pink-700 focus:border-pink-700 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md text-gray-500" />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <label for="city" className="block text-sm text-gray-500">Cidate</label>
              <input type="text" name="city" id="city" autocomplete="address-level2" className="mt-1 focus:ring-pink-700 focus:border-pink-700 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md text-gray-500" />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label for="region" className="block text-sm text-gray-500">Estado</label>
              <input type="text" name="region" id="region" autocomplete="address-level1" className="mt-1 focus:ring-pink-700 focus:border-pink-700 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md text-gray-500" />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label for="postal-code" className="block text-sm text-gray-500">CEP</label>
              <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" className="mt-1 focus:ring-pink-700 focus:border-pink-700 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md text-gray-500" />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AccountInfo;
