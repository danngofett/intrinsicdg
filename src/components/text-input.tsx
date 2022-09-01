import * as React from 'react'

export interface TextInputType {
  label: string
  footnote?: string
}

export default function TextInput({ label, footnote }) {
  return (
    <div>
      <label
        htmlFor="price"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="relative mt-1 rounded-md">
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-md border-gray-300 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="your@email.com"
        />

        {footnote && <small>{footnote}</small>}
      </div>
    </div>
  )
}
