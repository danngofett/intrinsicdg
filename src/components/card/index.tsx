import * as React from 'react'

export default function Card({ title }) {
  return (
    <div className="shadow text-center p-4 bg-white rounded min-h-[280px]">
      <h3 className="text-xl text-primary font-black mb-0 text-center">
        {title}
      </h3>
    </div>
  )
}
