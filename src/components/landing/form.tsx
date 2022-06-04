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

const select1Change = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
};
const select2Change = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
};

const select3Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
};

const select4Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
};

const select5Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
};


const select6Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
};
const select7Change = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
};

export default function Form() {
    return (
        <div className="bg-white mx-auto py-12 lg:py-24">
            <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8 pb-16">
                <div className="space-y-12">
                    <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                        <div className="rounded-md bg-yellow-500 p-4">
                            <div className="flex">
                                <div className="ml-3">
                                    <form className="space-y-8 divide-y divide-gray-200">
                                        <div className="space-y-8 divide-y divide-gray-200">
                                            <div className="pt-8">
                                                <div>
                                                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Điền thông tin</h2>
                                                </div>
                                                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                                    <div className="sm:col-span-12">
                                                        <label htmlFor="first-name" className="block text-sm font-medium ">
                                                            Chọn văn phòng bạn ứng tuyển (Ưu tiên số 1)
                                                        </label>
                                                        <div className="mt-1">
                                                            <select
                                                                id="country"
                                                                name="country"
                                                                autoComplete="country-name"
                                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                onChange={select1Change}
                                                            >
                                                                <option value="1" >Văn phòng YODY Hải Dương</option>
                                                                <option value="2" >Văn phòng YODY Hà Nội</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-12">
                                                        <label htmlFor="first-name" className="block text-sm font-medium ">
                                                            Chọn văn phòng bạn ứng tuyển (Ưu tiên số 2)
                                                        </label>
                                                        <div className="mt-1">
                                                            <select
                                                                id="country"
                                                                name="country"
                                                                autoComplete="country-name"
                                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                onChange={select2Change}
                                                            >
                                                                <option value="1" >Văn phòng YODY Hải Dương</option>
                                                                <option value="2" >Văn phòng YODY Hà Nội</option>
                                                            </select>
                                                        </div>
                                                    </div>



                                                    <div className="sm:col-span-12">
                                                        <label htmlFor="email" className="block text-sm font-medium ">
                                                            Thời gian di chuyển đến văn phòng ưu tiên số 1
                                                        </label>
                                                        <div className="mt-1">
                                                            <input
                                                                id="email"
                                                                name="email"
                                                                type="email"
                                                                autoComplete="email"
                                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                onChange={select3Change}

                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-12">
                                                        <label htmlFor="email" className="block text-sm font-medium ">
                                                            Thời gian di chuyển đến văn phòng ưu tiên số 2
                                                        </label>
                                                        <div className="mt-1">
                                                            <input
                                                                id="email"
                                                                name="email"
                                                                type="email"
                                                                autoComplete="email"
                                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                onChange={select4Change}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-4">
                                                        <label htmlFor="email" className="block text-sm font-medium ">
                                                            Chiều cao
                                                        </label>
                                                        <div className="mt-1">
                                                            <input
                                                                id="email"
                                                                name="email"
                                                                type="email"
                                                                autoComplete="email"
                                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                onChange={select5Change}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-4">
                                                        <label htmlFor="email" className="block text-sm font-medium ">
                                                            Cân nặng
                                                        </label>
                                                        <div className="mt-1">
                                                            <input
                                                                id="email"
                                                                name="email"
                                                                type="email"
                                                                autoComplete="email"
                                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                onChange={select6Change}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-12">
                                                        <label htmlFor="first-name" className="block text-sm font-medium ">
                                                            Sẵn sàng làm việc thay ca
                                                        </label>
                                                        <div className="mt-1">
                                                            <select
                                                                id="country"
                                                                name="country"
                                                                autoComplete="country-name"
                                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                onChange={select7Change}
                                                            >
                                                                <option value="1">Sẵn sàng</option>
                                                                <option value="2">Không sẵn sàng</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
        </div >
    )
}
