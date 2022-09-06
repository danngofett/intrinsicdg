import * as React from 'react'
import { Container, Card } from '@components'

export interface FeatureGridType {
  heading?: string
}

export default function FeatureGrid({ heading }: FeatureGridType) {
  return (
    <div className="text-center">
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl mb-4 lg:mb-0 text-primary">
            {heading}
          </h2>

          <p className="mt-4 text-l">
            Because you’d probably be a little confused if we suggested you
            complicate your everyday business tasks instead.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mx-auto max-w-xl lg:max-w-5xl lg:my-16">
          <Card title="Transparency" />
          <Card title="Community" />
          <Card title="Experience" />
        </div>
      </Container>
    </div>
  )
}
