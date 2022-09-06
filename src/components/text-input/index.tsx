import * as React from 'react'

export interface TextInputType {
  label: string
  footnote?: string
  className?: string
}

export default function TextInput({
  label,
  footnote,
  className,
}: TextInputType) {
  return (
    <div className={className}>
      <label htmlFor="price" className="block text-sm font-bold text-gray-700">
        {label}
      </label>

      <div className="relative mt-2 rounded-md flex">
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-md border-gray-300 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="your@email.com"
        />

        <button className="flex items-center bg-primary text-white rounded-md px-6 shrink-0 ml-4 text-sm">
          Notify me
        </button>
      </div>

      {footnote && <small className="mt-4 block">{footnote}</small>}
    </div>
  )
}
