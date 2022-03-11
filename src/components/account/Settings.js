import React,  { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '@headlessui/react';
import {
  UserCircleIcon,
  CurrencyDollarIcon,
  LockClosedIcon
} from '@heroicons/react/outline';

function Settings() {
  return(
    <div className="md:flex flex-col md:flex-row md:min-h-screen w-full">
      <Tab.Group>
        <Tab.List className="flex flex-col w-full md:w-64 text-gray-700 bg-pink-700 flex-shrink-0 pt-4 pb-4 px-5">
          <Tab className="block px-4 py-2 mt-2 text-medium text-white bg-transparent rounded-lg hover:text-pink-700 focus:text-pink-700 hover:bg-pink-50 focus:bg-pink-50 focus:outline-none focus:shadow-outline">
            <div className="flex items-center justify-start">
              <UserCircleIcon className="h-5 w-5 mr-2" />
              Meus dados
            </div>
          </Tab>
          <Tab className="block px-4 py-2 mt-2 text-medium text-white bg-transparent rounded-lg hover:text-pink-700 focus:text-pink-700 hover:bg-pink-50 focus:bg-pink-50 focus:outline-none focus:shadow-outline">
            <div className="flex items-center justify-start">
              <CurrencyDollarIcon className="h-5 w-5 mr-2" />
              Pagamento
            </div>
          </Tab>
          <Tab className="block px-4 py-2 mt-2 text-medium text-white bg-transparent rounded-lg hover:text-pink-700 focus:text-pink-700 hover:bg-pink-50 focus:bg-pink-50 focus:outline-none focus:shadow-outline">
            <div className="flex items-center justify-start">
              <LockClosedIcon className="h-5 w-5 mr-2" />
              Segurança
            </div>
          </Tab>
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel>Content 1</Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default Settings;
