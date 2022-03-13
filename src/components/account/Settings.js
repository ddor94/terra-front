import React from 'react';
import AccountInfo from './AccountInfo';
import { Tab } from '@headlessui/react';
import { classnames } from '../../utils/helpers/classnames';
import {
  UserCircleIcon,
  CurrencyDollarIcon,
  LockClosedIcon
} from '@heroicons/react/outline';

function Settings() {
  return(
    <div className="md:flex flex-col md:flex-row md:min-h-screen w-full">
      <Tab.Group>
        <Tab.List className="flex flex-col w-full md:w-64 flex-shrink-0 pt-4 pb-4 px-5 border-r border-gray-200">
          <Tab
            className={({ selected }) =>
              classnames(
                'block px-4 py-2 mt-2 text-medium text-pink-700 rounded-lg hover:text-pink-700 focus:text-pink-700 hover:bg-pink-50 focus:bg-pink-50 focus:outline-none focus:shadow-outline',
                selected ? 'bg-pink-50' : 'bg-transparent'
              )
            }
          >
            <div className="flex items-center justify-start">
              <UserCircleIcon className="h-5 w-5 mr-2" />
              Meus dados
            </div>
          </Tab>
          <Tab
            className={({ selected }) =>
              classnames(
                'block px-4 py-2 mt-2 text-medium text-pink-700 rounded-lg hover:text-pink-700 focus:text-pink-700 hover:bg-pink-50 focus:bg-pink-50 focus:outline-none focus:shadow-outline',
                selected ? 'bg-pink-50' : 'bg-transparent'
              )
            }
          >
            <div className="flex items-center justify-start">
              <CurrencyDollarIcon className="h-5 w-5 mr-2" />
              Pagamento
            </div>
          </Tab>
          <Tab
            className={({ selected }) =>
              classnames(
                'block px-4 py-2 mt-2 text-medium text-pink-700 rounded-lg hover:text-pink-700 focus:text-pink-700 hover:bg-pink-50 focus:bg-pink-50 focus:outline-none focus:shadow-outline',
                selected ? 'bg-pink-50' : 'bg-transparent'
              )
            }
          >
            <div className="flex items-center justify-start">
              <LockClosedIcon className="h-5 w-5 mr-2" />
              Segurança
            </div>
          </Tab>
        </Tab.List>

        <Tab.Panels className="h-full w-full p-5">
          <Tab.Panel>
            <AccountInfo />
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default Settings;
