import * as React from 'react'

export default function Profile({ name, role, imgSrc }) {
  return (
    <div className="flex gap-4 items-center">
      <img
        className="inline-block h-20 w-20 rounded-full ring-2 ring-white"
        src={imgSrc}
        alt=""
      />

      <div className="">
        <h3 className="text-base font-semibold">{name}</h3>
        <h4 className="text-base font-semibold text-primary">{role}</h4>
      </div>
    </div>
  )
}
