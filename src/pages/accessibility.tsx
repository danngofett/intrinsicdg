import * as React from 'react'
import { PageProps, HeadFC } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'

import { Default } from '@layout'
import { SEO, Container } from '@components'

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
      <Container className="prose prose-slate lg:prose-l" size="sm">
        <h1>Accessibility</h1>

        <p>
          Intrinsic Development Group is committed to providing a website that
          is accessible to the widest possible audience, regardless of
          technology or ability.
        </p>

        <p>
          This website aims to meet level AA of the{' '}
          <a href="https://www.w3.org/TR/WCAG20/" target="_blank">
            World Wide Web Consortium (W3C) Web Content Accessibility Guidelines
            2.0
          </a>
          .
        </p>

        <p>
          If there is information on this website that you can't access, or have
          any suggestions on how we can improve the accessibility of this
          website, please email us via{' '}
          <a href="mailto:support@intrinsicdg.com.au">
            support@intrinsicdg.com.au
          </a>
        </p>

        <p>
          All constructive feedback regarding the accessibility or usability of
          this website is welcome and will be carefully considered.
        </p>
      </Container>
    </Default>
  )
}

export const Head: HeadFC<DataProps> = () => (
  <SEO title="Intrinsic" children={undefined} />
)

export default IndexRoute
