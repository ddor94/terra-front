import React, { Fragment } from 'react';
import Loader from '../commons/Loader';
import { Menu, Transition } from '@headlessui/react';
import { capitalize } from '../../utils/helpers/typography';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../apiCalls/auth';
import { removeToken } from '../../utils/helpers/auth';
import { useMutation } from '@apollo/client';
import {
  LogoutIcon,
  CogIcon,
} from '@heroicons/react/outline';

function UserSection({ loadingUser, user }) {
  const [handleLogout, {
    loading,
    error
  }] = useMutation(logoutUser);

  const logout = () => {
    handleLogout()
    .then((res) => removeToken())
    .then(() => window.location.reload())
    .catch((error) => console.log(error))
  };

  if (error) {
    console.log(error);
  }

  return(
    <div className="text-white md:flex items-center justify-end md:flex-1 lg:w-0">
      {
        loadingUser ?
        <Loader height={"1em"} isPrimary={true} /> :
        <Menu as="div" className="relative">
          <Menu.Button className="inline-block h-8 w-8 rounded-full ring-2 ring-pink-700 items-center flex justify-center bg-pink-50 cursor-pointer focus:outline-none text-pink-700">
            {capitalize(user.userName[0])}
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-200"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
              {({ active }) => (
                <div className="flex text-pink-700 rounded-t-md items-center justify-start text-medium px-2 py-3 bg-pink-50">
                  <p>
                    Olá, {user.userName}
                  </p>
                </div>
              )}
              </Menu.Item>

              <Menu.Item>
              {({ active }) => (
                <Link to="/settings" className="flex text-gray-500 items-center justify-start text-xs cursor-pointer px-2 py-3 hover:text-gray-900">
                  <CogIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                  <p>
                    Configurações da conta
                  </p>
                </Link>
              )}
              </Menu.Item>

              <Menu.Item>
              {({ active }) => (
                <div className="flex text-pink-700 items-center justify-start text-xs px-2 py-3 cursor-pointer hover:text-pink-900 rounded-b-md" onClick={() => logout()}>
                  <LogoutIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                  <p>
                    Sair
                  </p>
                  {
                    loading &&
                    <Loader height={"1em"} isPrimary={true} />
                  }
                </div>
              )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      }
    </div>
  )
};

export default UserSection;
