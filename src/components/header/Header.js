import React from 'react';
import Menu from './Menu';
import MobileMenu from './MobileMenu';
import UserSection from './UserSection';
import { Popover } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline';

function Header({ loadingUser, user }) {
  return(
    <Popover className="relative bg-white border-b border-gray-200">
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-0">
          {/* Mobile menu bars */}
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-pink-50 text-pink-700 rounded-md p-2 inline-flex items-center justify-center focus:outline-none">
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          {/* Mobile menu bars END */}

          {/* Icon */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <div>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt=""
              />
            </div>
          </div>
          {/* Icon END */}

          <Menu />

          <UserSection
            loadingUser={loadingUser}
            user={user}
          />
        </div>
      </div>

      <MobileMenu />
    </Popover>
  )
}

export default Header;
