import * as React from 'react'

export default function CallToAction({ heading, subheading }) {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="max-w-md mx-auto text-center lg:flex lg:items-center lg:justify-between lg:flex-col">
        <span className="block mb-4">{subheading}</span>

        <h2 className="text-3xl font-black tracking-tight text-gray-900 lg:mb-8 sm:text-4xl">
          <span className="block text-primary">{heading}</span>
        </h2>

        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 justify-center">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-semibold rounded-md text-white bg-primary hover:bg-primary"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
