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
      <label
        htmlFor="price"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="relative mt-2 rounded-md">
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-md border-gray-300 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="your@email.com"
        />

        <button className="absolute inset-y-0 right-0 flex items-center bg-primary text-white rounded-r px-8">
          Sign up
        </button>
      </div>

      {footnote && <small className="mt-4 block">{footnote}</small>}
    </div>
  )
}
