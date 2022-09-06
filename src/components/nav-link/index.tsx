import * as React from 'react'
import { Link } from 'gatsby'

export interface NavLinkType {
  href: string
  label: string
}

const styles = `
inline-block py-2 text-md font-semibold lowercase text-primary relative after:content after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:bg-primary after:h-[2px] after:opacity-0 hover:after:opacity-100 hover:after:w-full after:transition-all after:duration-500 after:origin-center after:mx-auto after:right-0
`

export default function NavLink({ href, label }: NavLinkType) {
  return (
    <Link to={href} target="_blank" className={styles}>
      {label}
    </Link>
  )
}
