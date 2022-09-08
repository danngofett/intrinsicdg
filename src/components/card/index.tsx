import * as React from 'react'

export interface CardType {
  title: string
  imageSrc?: string
  imageAlt?: string
}

export default function Card({ title, imageSrc, imageAlt }: CardType) {
  return (
    <div className="shadow text-center p-4 bg-white rounded min-h-[280px]">
      <h3 className="text-xl text-primary font-black mb-0 text-center">
        {title}
      </h3>

      {imageSrc && <img src={imageSrc} alt={imageAlt} />}
    </div>
  )
}
