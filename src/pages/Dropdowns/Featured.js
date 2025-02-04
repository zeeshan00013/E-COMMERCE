import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Featured() {
  return (
    <Menu as="div" className="relative inline-block text-left mr-10">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-20 rounded-full bg-white px-3 py-2 text-sm  text-gray-500 shadow-sm ring-1 ring-inset ring-gray-500">
          Featured
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    active ? 'bg-[#f2fbfd] text-[#64d3e4]' : 'text-[#64d3e4] bg-[#f2fbfd]',
                    'block w-full px-4 py-2 text-left text-sm  font-semibold'
                  )}
                >
                  Featured
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
            {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                        active ? 'bg-gray-100 text-gray-300' : 'text-gray-400 ',
                        'block w-full px-4 py-2 text-left text-sm font-semibold hover:text-[#64d3e4] hover:bg-[#f2fbfd] duration-500 '
                      )}
                >
                  Best Selling
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
            {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                        active ? 'bg-gray-100 text-gray-300' : 'text-gray-400 ',
                        'block w-full px-4 py-2 text-left text-sm font-semibold hover:text-[#64d3e4] hover:bg-[#f2fbfd] duration-500 '
                      )}
                >
                  Alphabetically,A-Z
                </button>
              )}
            </Menu.Item>
            
              <Menu.Item>
                
              {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                        active ? 'bg-gray-100 text-gray-300' : 'text-gray-400 ',
                        'block w-full px-4 py-2 text-left text-sm font-semibold hover:text-[#64d3e4] hover:bg-[#f2fbfd] duration-500 '
                      )}
                  >
                    Alphabetically,Z-A
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
              {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                        active ? 'bg-gray-100 text-gray-300' : 'text-gray-400 ',
                        'block w-full px-4 py-2 text-left text-sm font-semibold hover:text-[#64d3e4] hover:bg-[#f2fbfd] duration-500 '
                      )}
                  >
                    Price,Low to High
                  </button>
                )}
              </Menu.Item>

              <Menu.Item>
              {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                        active ? 'bg-gray-100 text-gray-300' : 'text-gray-400 ',
                        'block w-full px-4 py-2 text-left text-sm font-semibold hover:text-[#64d3e4] hover:bg-[#f2fbfd] duration-500 '
                      )}
                  >
                    Price,High to Low
                  </button>
                )}
              </Menu.Item>

              <Menu.Item>
              {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                        active ? 'bg-gray-100 text-gray-300' : 'text-gray-400 ',
                        'block w-full px-4 py-2 text-left text-sm font-semibold hover:text-[#64d3e4] hover:bg-[#f2fbfd] duration-500 '
                      )}
                  >
                    Date,New to Old
                  </button>
                )}
              </Menu.Item>

              <Menu.Item>
              {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                        active ? 'bg-gray-100 text-gray-300' : 'text-gray-400 ',
                        'block w-full px-4 py-2 text-left text-sm font-semibold hover:text-[#64d3e4] hover:bg-[#f2fbfd] duration-500 '
                      )}
                  >
                    Date,Old to New
                  </button>
                )}
              </Menu.Item>
              
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
