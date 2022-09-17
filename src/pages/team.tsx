import * as React from 'react'
import { PageProps, HeadFC } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'

import { Default } from '@layout'
import { SEO, Container } from '@components'

import DanielNgoImage from '@assets/images/team/large/daniel-ngo.jpg'
import RomanKennedyImage from '@assets/images/team/large/roman-kennedy.jpg'
import MarkShieldsImage from '@assets/images/team/large/mark-shields.jpg'
import GeorgiaReaderImage from '@assets/images/team/large/georgia-reader.jpg'

type DataProps = {}

const people = [
  {
    name: 'Daniel Ngo',
    role: 'Senior Designer',
    imageUrl: DanielNgoImage,
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Roman Kennedy',
    role: 'Senior Front-end Developer',
    imageUrl: RomanKennedyImage,
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Mark Shields',
    role: 'Co-Founder / CEO',
    imageUrl: MarkShieldsImage,
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Georgia Reader',
    role: 'Copywriter',
    imageUrl: GeorgiaReaderImage,
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },
]

const TeamRoute = ({ data }: PageProps<DataProps>) => {
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
      <Container>
        <div className="py-12 lg:py-24">
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl mb-4 lg:mb-0 mt-0 text-primary">
                Our Team
              </h2>
              <p className="text-xl text-gray-500">
                Nulla quam felis, enim faucibus proin velit, ornare id pretium.
                Augue ultrices sed arcu condimentum vestibulum suspendisse.
                Volutpat eu faucibus vivamus eget bibendum cras.
              </p>
            </div>
            <div className="lg:col-span-2">
              <ul
                role="list"
                className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
              >
                {people.map(person => (
                  <li key={person.name}>
                    <div className="space-y-4">
                      <div className="aspect-w-3 aspect-h-2">
                        <img
                          className="rounded-lg object-cover shadow-lg"
                          src={person.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>{person.name}</h3>
                        <p className="text-indigo-600">{person.role}</p>
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-500">{person.bio}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Default>
  )
}

export const Head: HeadFC<DataProps> = () => (
  <SEO title="Intrinsic" children={undefined} />
)

export default TeamRoute
