import * as React from 'react'
import { PageProps, Link, graphql, HeadFC } from 'gatsby'
import { PortableText } from '@portabletext/react'

import Layout from '../components/layout'
import Seo from '../components/seo'

type DataProps = {
  allSanityPost: [
    edges: {
      node: Post
    }
  ]
}

type Post = {
  title: string
}

const IndexRoute = ({ data, location }: PageProps<DataProps>) => {
  const myPortableTextComponents = {
    types: {
      span: ({ value }) => <span>{value.text}</span>,
      image: ({ value }) => <img src={value.imageUrl} />,
      callToAction: ({ value, isInline }) =>
        isInline ? (
          <a href={value.url}>{value.text}</a>
        ) : (
          <div className="callToAction">{value.text}</div>
        ),
    },

    marks: {
      link: ({ children, value }) => {
        const rel = !value.href.startsWith('/')
          ? 'noreferrer noopener'
          : undefined
        return (
          <a href={value.href} rel={rel}>
            {children}
          </a>
        )
      },
    },
  }

  return (
    <Layout>
      <h1>
        Gatsby supports <b>TypeScript by default</b>
      </h1>
      <p>
        This means that you can create and write <code>.ts/.tsx</code> files for
        your pages, components, and <code>gatsby-*</code> configuration files
        (for example <code>gatsby-config.ts</code>).
      </p>
      <p>
        For type checking you'll want to install <code>typescript</code> via npm
        and run <code>tsc --init</code> to create a <code>tsconfig</code> file.
      </p>
      {data.allSanityPost.edges.map((item: Post, index: number) => {
        return (
          <div key={index}>
            <p>{item.node.title}</p>
            <div>
              <PortableText
                value={item.node.body[0]._rawChildren}
                components={myPortableTextComponents}
              />
            </div>
          </div>
        )
      })}
      <p>
        To learn more, head over to our{' '}
        <a href="https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/">
          documentation about TypeScript
        </a>
        .
      </p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const Head: HeadFC<DataProps> = () => (
  <Seo title="Using TypeScript" children={undefined} />
)

export default IndexRoute

export const query = graphql`
  query PostsQuery {
    allSanityPost {
      edges {
        node {
          title
          body {
            _rawChildren
          }
          author {
            name
            image {
              asset {
                url
              }
            }
            bio {
              _rawChildren
            }
          }
        }
      }
    }
  }
`
