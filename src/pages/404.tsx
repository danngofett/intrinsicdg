import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Default } from '@layout'
import { SEO } from '@components'

const NotFoundPage = () => {
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
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Default>
  )
}

export const Head = () => <SEO title="404: Not Found" />

export default NotFoundPage
