import * as React from 'react'

import { Button } from '@components'

export interface CallToActionType {
  heading: string
  subheading: string
}

export default function CallToAction({
  heading,
  subheading,
}: CallToActionType) {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:py-32 lg:px-8">
      <div className="text-center lg:flex lg:items-center lg:justify-between lg:flex-col">
        <span className="block mb-4">{subheading}</span>

        <h2 className="text-6xl font-black tracking-tight text-gray-900 lg:mb-8">
          <span className="block text-primary">{heading}</span>
        </h2>

        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 justify-center">
          <div className="inline-flex rounded-md shadow">
            <Button
              label="Get started"
              href="https://github.com/"
              size="large"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
