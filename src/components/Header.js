import React, { Fragment } from 'react';
import Loader from './commons/Loader';
import { Link } from 'react-router-dom';
import { Popover, Transition, Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { classnames } from '../utils/helpers/classnames';
import { capitalize } from '../utils/helpers/typography';
import { logoutUser } from '../apiCalls/auth';
import { removeToken } from '../utils/helpers/auth';
import { useMutation } from '@apollo/client';
import {
  LogoutIcon,
  CogIcon,
  GlobeIcon,
  MenuIcon,
  XIcon
} from '@heroicons/react/outline';

function Header({ loadingUser, user }) {
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
    <Popover className="relative bg-pink-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <div>
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-white.svg"
                alt=""
              />
            </div>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="group rounded-md inline-flex items-center font-medium focus:outline-none text-lg text-white"
                  >
                    <span>Doar</span>
                    <ChevronDownIcon
                      className={classnames(
                        open ? 'text-pink-900' : 'text-white',
                        'h-4 w-5 group-hover:text-pink-900'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          <Link
                            to="#"
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-pink-50"
                          >
                            <GlobeIcon className="flex-shrink-0 h-6 w-6 text-pink-700" aria-hidden="true" />

                            <div className="ml-4">
                              <p className="text-pink-700">
                                Encontrar Instituições
                              </p>

                              <p className="mt-1 text-sm text-gray-500">
                                Get a better understanding of where your traffic is coming from.
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="text-white hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {
              loadingUser ?
              <Loader height={"1em"} isPrimary={false} /> :
              <Menu as="div" className="relative">
                <Menu.Button className="inline-block h-8 w-8 rounded-full ring-2 ring-white items-center flex justify-center bg-pink-700 cursor-pointer focus:outline-none">
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
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link
                    to="#"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <GlobeIcon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                    <span className="ml-3 text-base font-medium text-gray-900">Encontrar Instituições</span>
                  </Link>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <Link
                  to="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Header;
