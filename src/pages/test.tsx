/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

export default function Example() {
    return (
        <div className="rounded-md bg-yellow-50 p-4">
            <div className="flex">
                <div className="ml-3">
                    <h3 className="text-sm font-medium text-yellow-800">Attention needed</h3>
                    <div className="mt-2 text-sm text-yellow-700">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo
                            totam eius aperiam dolorum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
