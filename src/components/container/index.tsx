import * as React from 'react'

export interface ContainerType {
  children: React.ReactNode
  className?: string
  size?: 'lg' | 'md' | 'sm'
}

export default function Container({
  children,
  className,
  size = 'lg',
}: ContainerType) {
  const sizeClass = () => {
    if (size === 'md') {
      return `max-w-6xl`
    }

    if (size === 'sm') {
      return `max-w-5xl`
    }

    return `max-w-7xl`
  }

  return (
    <div className={`${sizeClass()} mx-auto px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  )
}
