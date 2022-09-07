import * as React from 'react'
import { Link } from 'gatsby'

import { Logo, Container } from '@components'

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
      { name: 'About', href: '#about' },
      { name: 'Team', href: '#team' },
      { name: 'Products', href: '#products' },
      { name: 'Contact', href: '#contact' },
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
    <footer className="min-h-full bg-primary text-white pt-16 pb-8">
      <Container>
        <div className="grid lg:grid-cols-16 gap-4 pb-16">
          <div className="pb-12 lg:col-span-8">
            <div className="w-48 mb-8">
              <Link to="/" className="block">
                <Logo />
              </Link>
            </div>

            <div className="max-w-xs pr-8">
              <p className="text-base">
                Intrinsic development group is an Australian owned business with
                some example text displayed here
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

        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 my-12 pb-12 border-b-[1px] border-tertiary">
          <div className="flex space-x-4 shrink-0">
            <img src={AboriginalFlag} alt="Aboriginal flag" className="h-8" />
            <img
              src={TorresStraitIslanderFlag}
              alt="Torres Strait Islander flag"
              className="h-8"
            />
          </div>

          <p className="font-bold mt-4 md:mt-0 ">
            Intrinsic Development Group is located on the traditional lands of
            the Wurundjeri people of the Kulin Nation. We pay our respects to
            Elders both past and present and recognise Aboriginal and Torres
            Strait Islander people as the Traditional Custodians of the land.
          </p>
        </div>

        <ul className="md:flex md:gap-8">
          <li className="mr-auto md:mb-0 mb-4">
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
      </Container>
    </footer>
  )
}
