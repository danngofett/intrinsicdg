/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'

import { SiteHeader, SiteFooter } from '@components'
import useScrollDirection from '@hooks/scroll-direction'

const ScrollDirectionContext = React.createContext('at-top')

export default function Layout({ siteMeta, children }) {
  const scrollDirection = useScrollDirection({
    initialDirection: 'at-top',
    offset: 200,
    thresholdPixels: 50,
  })

  return (
    <>
      <ScrollDirectionContext.Provider value={scrollDirection}>
        <SiteHeader
          siteTitle={siteMeta?.title || `Title`}
          direction={scrollDirection}
        />

        <main className="py-48">{children}</main>

        <SiteFooter />

        <div className="absolute w-full inset-0 -z-10 h-screen opacity-20 bg-hero-light bg-cover" />
      </ScrollDirectionContext.Provider>
    </>
  )
}
