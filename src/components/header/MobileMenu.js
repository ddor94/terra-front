import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { MENU_ITEMS } from '../../utils/variables/header';
import { Popover, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';

function MobileMenu() {
  return(
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
            <div className="flex items-center justify-start">
              <div className="-mr-2">
                <Popover.Button className="bg-pink-50 rounded-md p-2 inline-flex items-center justify-center text-pink-700 focus:outline-none">
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            {
              MENU_ITEMS.map((item) => {
                return(
                  <div className="mt-6" key={item.key}>
                    <div>
                      <nav>
                        <div
                          className="p-3 flex items-center rounded-md bg-pink-50"
                        >
                          <span className="ml-3 text-pink-700 font-medium">{item.title}</span>
                        </div>
                      </nav>
                    </div>

                    {
                      item.sub_items.map((sub_item) => {
                        return(
                          <div key={sub_item.key}>
                            <nav>
                              <Link
                                to="#"
                                className="p-3 flex items-center rounded-md"
                              >
                                <sub_item.icon className="flex-shrink-0 h-6 w-6 text-pink-700" aria-hidden="true" />
                                <span className="ml-3 text-pink-700 font-medium">{sub_item.title}</span>
                              </Link>
                            </nav>
                          </div>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  )
};

export default MobileMenu;
