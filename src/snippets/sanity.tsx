import { graphql } from 'gatsby'
import { PortableText, PortableTextReactComponents } from '@portabletext/react'

type DataProps = {
  allSanityPost: {
    edges: [
      {
        node: {
          title: string
          body: [
            {
              _rawChildren: PortableTextReactComponents
            }
          ]
        }
      }
    ]
  }
}

export default function Sanity() {
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
    <>
      {data.allSanityPost.edges.map((item, index: number) => {
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
    </>
  )
}

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
