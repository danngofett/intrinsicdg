import * as React from 'react'

import { Button } from '@components'

export interface CallToActionType {
  heading: string
  subheading: string
  label: string
}

export default function CallToAction({
  heading,
  subheading,
  label,
}: CallToActionType) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center lg:flex lg:items-center lg:justify-between lg:flex-col">
        <span className="block mb-4">{subheading}</span>

        <h2 className="text-3xl lg:text-6xl font-black tracking-tight text-gray-900 lg:mb-8">
          <span className="block text-primary">{heading}</span>
        </h2>

        {label && (
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 justify-center">
            <div className="inline-flex rounded-md shadow">
              <Button label={label} href="https://github.com/" size="large" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
