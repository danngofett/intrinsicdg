import * as React from 'react'
import { Link } from 'gatsby'

import Logo from '../logo'

const navigation = [
  {
    category: 'Resources',
    links: [
      { name: 'Articles', href: '#' },
      { name: 'FAQ', href: '#' },
    ],
  },
  {
    category: 'Company',
    links: [
      { name: 'About', href: '#' },
      { name: 'Team', href: '#' },
      { name: 'Products', href: '#' },
      { name: 'Contact', href: '#' },
    ],
  },
]

const disclaimer = {
  category: 'Disclaimer',
  links: [
    { name: 'Privacy statement', href: '#' },
    { name: 'Accessibility', href: '#' },
  ],
}

export default function Footer() {
  return (
    <>
      <footer className="min-h-full bg-primary text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-16 gap-4 pb-16">
            <div className="pb-12 lg:col-span-8">
              <div className="w-48 mb-8">
                <Link to="/" className="block">
                  <Logo />
                </Link>
              </div>

              <div className="max-w-xs pr-8">
                <p className="text-base">
                  Intrinsic development group is an Australian owned business
                  with some example text displayed here
                </p>
              </div>
            </div>

            {navigation.map((item, index) => {
              return (
                <div className="hidden md:block lg:col-span-3" key={index}>
                  <h2 className="text-xl font-bold mb-4">{item.category}</h2>

                  <ul className="links-baseline">
                    {item.links.map(item => (
                      <li className="mx-0 my-2" key={item.name}>
                        <a href={item.href} className="text-md hover:underline">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          <ul className="flex gap-8">
            {disclaimer.links.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.href} className="hover:underline">
                    {item.name}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </footer>
    </>
  )
}
