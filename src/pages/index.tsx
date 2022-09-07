import * as React from 'react'
import { PageProps, HeadFC } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'

import { Default } from '@layout'
import {
  SEO,
  CallToAction,
  FeatureGrid,
  Team,
  Newsletter,
  Offset2x2Grid,
} from '@components'

type DataProps = {}

const IndexRoute = ({ data }: PageProps<DataProps>) => {
  const response = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Default siteMeta={response.site.siteMeta}>
      <section
        id="explore"
        className="py-16 md:py-20 lg:py-32 lg:mb-20 lg:mt-40"
      >
        <CallToAction
          heading="Explore the radical transparency mission statement"
          subheading="Explore now"
        />
      </section>

      <section id="about" className="py-16 md:py-20 lg:py-12">
        <FeatureGrid heading="Simplify everyday business tasks" />
      </section>

      <section id="team" className="py-16 md:py-20 lg:py-12">
        <Team
          heading="Meet our leadership"
          description="Aenean vulputate tempor ex non semper. Donec libero metus, egestas gravida mauris quis, tristique suscipit risus. Sed sed nibh pulvinar, ullamcorper nulla ut, laoreet metus. Donec elementum neque sed dolor."
          label="Read more"
          href="/team"
        />
      </section>

      <section id="products" className="py-16 md:py-20 lg:py-12">
        <Offset2x2Grid
          heading="Meet our leadership"
          description="Aenean vulputate tempor ex non semper. Donec libero metus, egestas gravida mauris quis, tristique suscipit risus. Sed sed nibh pulvinar, ullamcorper nulla ut, laoreet metus. Donec elementum neque sed dolor."
          label="Read more"
          href="#"
        />
      </section>
    </Default>
  )
}

export const Head: HeadFC<DataProps> = () => (
  <SEO title="Intrinsic" children={undefined} />
)

export default IndexRoute
