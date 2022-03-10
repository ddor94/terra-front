import React, { Fragment } from 'react';
import { classnames } from '../../utils/helpers/classnames';
import { MENU_ITEMS } from '../../utils/variables/header';
import { Popover, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';

function Menu() {
  return(
    <Popover.Group as="nav" className="hidden md:flex space-x-10">
      {
        MENU_ITEMS.map((item) => {
          return(
            <Popover className="relative" key={item.key}>
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classnames(
                      open ? 'bg-pink-900' : 'bg-transparent',
                      "group rounded-md inline-flex items-center font-medium focus:outline-none text-lg text-white hover:bg-pink-900 px-4 py-1"

                    )}
                  >
                    <span>{item.title}</span>
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
                          {
                            item.sub_items.map((sub_item) => {
                              return(
                                <Link
                                  key={sub_item.key}
                                  to="#"
                                  className="-m-3 p-3 flex sub_items-start rounded-lg hover:bg-pink-50"
                                >
                                  <sub_item.icon className="flex-shrink-0 h-6 w-6 text-pink-700" aria-hidden="true" />

                                  <div className="ml-4">
                                    <p className="text-pink-700">
                                      {sub_item.title}
                                    </p>

                                    <p className="mt-1 text-sm text-gray-500">
                                      {sub_item.description}
                                    </p>
                                  </div>
                                </Link>
                              )
                            })
                          }
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          )
        })
      }
    </Popover.Group>
  )
};

export default Menu;
