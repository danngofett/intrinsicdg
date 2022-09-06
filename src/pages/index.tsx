import * as React from 'react'
import { PageProps, HeadFC } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'

import { Default } from '@layout'
import { SEO, CallToAction, FeatureGrid, Team, Newsletter } from '@components'

type DataProps = {}

const IndexRoute = ({ data }: PageProps<DataProps>) => {
  const response = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Default siteMeta={response.site.siteMeta}>
      <section id="explore" className="my-16 md:my-20 lg:my-32 lg:mb-64">
        <CallToAction
          heading="Explore the radical transparency mission statement"
          subheading="Explore now"
        />
      </section>

      <section id="about" className="my-16 md:my-20 lg:my-24">
        <FeatureGrid heading="Simplify everyday business tasks" />
      </section>

      <section id="team" className="my-16 md:my-20 lg:my-24">
        <Team
          heading="Meet our leadership"
          description="Aenean vulputate tempor ex non semper. Donec libero metus, egestas gravida mauris quis, tristique suscipit risus. Sed sed nibh pulvinar, ullamcorper nulla ut, laoreet metus. Donec elementum neque sed dolor."
          label="Read more"
          href="#"
        />
      </section>

      <section id="contact" className="my-16 md:my-20 lg:my-24">
        <Newsletter
          heading="Explore the radical transparency mission statement"
          description="Aenean vulputate tempor ex non semper. Donec libero metus, egestas gravida mauris quis, tristique suscipit risus. Sed sed nibh pulvinar, ullamcorper nulla ut, laoreet metus lorem ipsum."
        />
      </section>
    </Default>
  )
}

export const Head: HeadFC<DataProps> = () => (
  <SEO title="Intrinsic" children={undefined} />
)

export default IndexRoute
