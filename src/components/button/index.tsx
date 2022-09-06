import * as React from 'react'
import { Link } from 'gatsby'

export interface ButtonType {
  label: string
  href?: string
  size?: 'small' | 'medium' | 'large'
}

const styles = `inline-flex items-center justify-center bg-primary text-white block text-base text-white font-semibold bg-primary hover:bg-secondary shrink-0 transition duration-250`

export default function Button({ label, href, size = 'medium' }: ButtonType) {
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return 'text-sm px-6 py-2 rounded-md'
      case 'large':
        return 'text-lg px-6 py-3 rounded-lg'
      default:
        return 'text-md px-4 py-2 rounded-md'
    }
  }

  if (href) {
    return (
      <Link
        to={href}
        target="_blank"
        className={`${styles} ${getSizeStyles()}`}
      >
        {label}
      </Link>
    )
  }

  return <button className={`${styles} ${getSizeStyles()}`}>{label}</button>
}
