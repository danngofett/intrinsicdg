import * as React from 'react'
import { Link } from 'gatsby'

import { Logo, Button, NavLink } from '@components'

import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

export interface HeaderType {
  siteTitle: string
}

const navigation = [
  { name: 'About', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Products', href: '#', current: false },
  { name: 'Contact', href: '#', current: false, cta: true },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Header({ siteTitle }: HeaderType) {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                  <div className="w-48 py-8">
                    <Link
                      to="/"
                      className="block text-primary"
                      title={siteTitle}
                    >
                      <Logo />
                    </Link>
                  </div>

                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-8">
                      {navigation.map(item => {
                        if (item.cta) {
                          return (
                            <Button
                              key={item.name}
                              href={item.href}
                              label={item.name}
                            />
                          )
                        }

                        return (
                          <NavLink
                            key={item.name}
                            href={item.href}
                            label={item.name}
                          />
                        )
                      })}
                    </div>
                  </div>

                  {/* Mobile menu button */}
                  <div className="-mr-2 flex md:hidden fixed z-10 right-12">
                    <Disclosure.Button className="bg-primary inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="mt-32 px-2 pt-2 pb-3 space-y-1 sm:px-3 fixed inset-0 bg-white">
                  {navigation.map(item => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-primary hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-semibold'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  )
}
