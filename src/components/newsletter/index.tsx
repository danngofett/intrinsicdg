import * as React from 'react'

import AbstractSVG from '@assets/sprites/abstract-1.svg'

import { TextInput, Container } from '@components'
export interface NewsletterType {
  heading: string
  description: string
}

export default function Newsletter({ heading, description }: NewsletterType) {
  return (
    <div className="relative lg:py-12">
      <Container className="grid gap-4 lg:grid-cols-12 py-12 lg:py-16 relative">
        <div className="lg:flex gap-4 lg:justify-between lg:flex-col lg:col-span-6 max-w-[455px]">
          <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl mb-4 lg:mb-0">
            <span className="block text-primary">{heading}</span>
          </h2>

          <p>{description}</p>

          <TextInput
            className="mt-8"
            label="Sign up to get notified when it’s ready"
            footnote="We care about your protection of data. Read our privacy policy."
          />
        </div>
      </Container>

      <div className="absolute right-0 bottom-0 -z-10 lg:w-720 lg:h-720 md:w-520 md:h-520 w-360 h-360">
        <img src={AbstractSVG} alt="Grid of grey dots" />
      </div>
    </div>
  )
}
