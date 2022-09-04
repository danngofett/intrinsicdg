/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'

import { Header, SiteFooter } from '@components'

export default function Layout({ siteMeta, children }) {
  return (
    <>
      <Header siteTitle={siteMeta?.title || `Title`} />

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <main>{children}</main>
        </div>
      </div>

      <SiteFooter />

      <div className="absolute w-full inset-0 -z-10 h-screen opacity-10 bg-hero-light bg-cover" />
    </>
  )
}
