import * as React from 'react'

export interface ContainerType {
  children: React.ReactNode
  className?: string
}

export default function Container({ children, className }: ContainerType) {
  return (
    <div className={`max-w-7xl mx-auto px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  )
}
