import * as React from 'react'

import Profile from '../profile'

export default function Team({ heading, description, label, href }) {
  return (
    <div className="grid gap-4 grid-cols-8 lg:grid-cols-16 py-12 lg:py-16">
      <div className="lg:flex gap-4 lg:justify-between lg:flex-col col-span-full lg:col-span-6">
        <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl mb-4 lg:mb-0">
          <span className="block text-primary">{heading}</span>
        </h2>

        <p>{description}</p>

        <div className="mt-4 lg:mt-0 flex lg:mt-0 lg:flex-shrink-0">
          <a
            href={href}
            className="text-base font-semibold text-primary hover:underline"
          >
            {label}
            <span className="inline-block ml-2" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:col-span-10 lg:px-12 col-span-full sm:px-8">
        <Profile
          name="Daniel Ngo"
          role="Developer/Designer"
          imgSrc="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />

        <Profile
          name="Mark Shields"
          role="Developer/Designer"
          imgSrc="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />

        <Profile
          name="Roman Kennedy"
          role="Developer/Designer"
          imgSrc="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />

        <Profile
          name="Georgia Reader"
          role="Developer/Designer"
          imgSrc="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
      </div>
    </div>
  )
}
