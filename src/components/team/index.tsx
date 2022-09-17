import * as React from 'react'

import { Profile, Container } from '@components'

import DanielNgoImage from '@assets/images/team/small/daniel-ngo.jpg'
import RomanKennedyImage from '@assets/images/team/small/roman-kennedy.jpg'
import MarkShieldsImage from '@assets/images/team/small/mark-shields.jpg'
import GeorgiaReaderImage from '@assets/images/team/small/georgia-reader.jpg'

export interface TeamType {
  heading: string
  description: string
  label?: string
  href?: string
}

export default function Team({ heading, description, label, href }: TeamType) {
  return (
    <Container className="">
      <div className="grid gap-4 grid-cols-8 lg:grid-cols-16 py-12 lg:py-16">
        <div className="lg:flex gap-4 lg:justify-between lg:flex-col col-span-full lg:col-span-6">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl mb-4 lg:mb-0 mt-0 text-primary">
            {heading}
          </h2>

          <p>{description}</p>

          <div className="mt-4 flex lg:mt-0 lg:flex-shrink-0">
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
          <Profile name="Daniel Ngo" role="Position" imgSrc={DanielNgoImage} />

          <Profile
            name="Mark Shields"
            role="Position"
            imgSrc={MarkShieldsImage}
          />

          <Profile
            name="Roman Kennedy"
            role="Position"
            imgSrc={RomanKennedyImage}
          />

          <Profile
            name="Georgia Reader"
            role="Position"
            imgSrc={GeorgiaReaderImage}
          />
        </div>
      </div>
    </Container>
  )
}
