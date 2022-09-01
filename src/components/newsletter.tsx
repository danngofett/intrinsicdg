import * as React from 'react'

import TextInput from './text-input'
export interface NewsletterType {
  heading: string
  description: string
}

export default function Newsletter({ heading, description }: NewsletterType) {
  return (
    <div className="grid gap-4 lg:grid-cols-12 py-12 lg:py-16 relative">
      <div className="lg:flex gap-4 lg:justify-between lg:flex-col lg:col-span-6">
        <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl mb-4 lg:mb-0">
          <span className="block text-primary">{heading}</span>
        </h2>

        <p>{description}</p>

        <TextInput
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
