import * as React from 'react'

import TextInput from '../text-input'
export interface NewsletterType {
  heading: string
  description: string
  className?: string
}

export default function Newsletter({
  heading,
  description,
  className,
}: NewsletterType) {
  return (
    <div
      className={`grid gap-4 lg:grid-cols-12 py-12 lg:py-16 relative ${className}`}
    >
      <div className="lg:flex gap-4 lg:justify-between lg:flex-col lg:col-span-6 max-w-[455px]">
        <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl mb-4 lg:mb-0">
          <span className="block text-primary">{heading}</span>
        </h2>

        <p>{description}</p>

        <TextInput
          className="mt-2"
          label="Sign up to get notified when it’s ready"
          footnote="We care about your protection of data. Read our privacy policy."
        />
      </div>

      <div className="absolute right-0 top-0 -z-10">
        <div className="bg-grey-200 h-720 w-720 opacity-10 rounded-full" />
      </div>
    </div>
  )
}
