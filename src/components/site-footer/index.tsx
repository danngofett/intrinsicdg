import * as React from 'react'
import { Link } from 'gatsby'

import { Logo } from '@components'

import AboriginalFlag from '@assets/images/aboriginal-flag.png'
import TorresStraitIslanderFlag from '@assets/images/torres-strait-islander-flag.png'

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

          <div className="flex items-center space-x-4 my-12 pb-12 border-b-[1px] border-tertiary">
            <img src={AboriginalFlag} alt="Aboriginal flag" className="h-9" />
            <img
              src={TorresStraitIslanderFlag}
              alt="Torres Strait Islander flag"
              className="h-9"
            />

            <p className="font-bold">
              Intrinsic Development Group is located on the traditional lands of
              the Wurundjeri-willam people of the Kulin Nation. We pay our
              respects to Elders both past and present and recognise Aboriginal
              and Torres Strait Islander people as the Traditional Custodians of
              the land.
            </p>
          </div>

          <ul className="flex gap-8">
            <li className="mr-auto">
              <span>Copyright © 2022 Intrinsic Development Group</span>
            </li>

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
