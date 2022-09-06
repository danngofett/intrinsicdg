/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'

import { SiteHeader, SiteFooter } from '@components'

export default function Layout({ siteMeta, children }) {
  return (
    <>
      <SiteHeader siteTitle={siteMeta?.title || `Title`} />

      <main>{children}</main>

      <SiteFooter />

      <div className="absolute w-full inset-0 -z-10 h-screen opacity-20 bg-hero-light bg-cover" />
    </>
  )
}
