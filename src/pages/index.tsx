import * as React from 'react'
import { PageProps, HeadFC } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '@layout/default'
import { SEO, CallToAction, Team, Card, Newsletter } from '@components'

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
    <Layout siteMeta={response.site.siteMeta}>
      <CallToAction
        heading="Explore the radical transparency mission statement"
        subheading="Explore now"
      />

      <div className="grid lg:grid-cols-3 gap-12 mx-auto max-w-xl lg:max-w-5xl my-32">
        <Card title="Transparency" />
        <Card title="Community" />
        <Card title="Experience" />
      </div>

      <Team
        heading="Meet our leadership"
        description="Aenean vulputate tempor ex non semper. Donec libero metus, egestas gravida mauris quis, tristique suscipit risus. Sed sed nibh pulvinar, ullamcorper nulla ut, laoreet metus. Donec elementum neque sed dolor."
        label="Read more"
        href="#"
      />

      <Newsletter
        heading="Explore the radical transparency mission statement"
        description="Aenean vulputate tempor ex non semper. Donec libero metus, egestas gravida mauris quis, tristique suscipit risus. Sed sed nibh pulvinar, ullamcorper nulla ut, laoreet metus lorem ipsum."
      />
    </Layout>
  )
}

export const Head: HeadFC<DataProps> = () => (
  <SEO title="Intrinsic" children={undefined} />
)

export default IndexRoute
