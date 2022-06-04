/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { useRouter } from 'next/router';
export default function Team() {
  const router = useRouter();
  const people = [
    {
      name: 'Nguyễn Phương Anh',
      role: 'UX UI Designer',
      imageUrl:
        'https://scontent.fhan12-1.fna.fbcdn.net/v/t39.30808-6/271916497_2015493911957737_7971776272806648597_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Mam5v90jkb8AX9R0rGX&_nc_ht=scontent.fhan12-1.fna&oh=00_AT81j2KPCr_Cz9ENQV-kqhJSZMh_iHx4bfRqci1uC5HrdA&oe=629F88BB',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Hoàng Thị Thanh Nguyên',
      role: 'Data scientist',
      imageUrl: `${router.basePath}/nguyengaos.jpg`,
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Nguyễn Thị Hồng Nhung',
      role: 'Project Manager',
      imageUrl:
        'https://scontent.fhan12-1.fna.fbcdn.net/v/t39.30808-6/239969033_1571760333164178_2779386083961248804_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=0Q0S-8HjLCYAX_zH60x&_nc_ht=scontent.fhan12-1.fna&oh=00_AT-mtKq3OoqVx6N16wb8d3fyWAhLxrL5K9n3h3b0eAOYQw&oe=629EC643',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Nguyễn Trọng Tuấn',
      role: 'AI Member',
      imageUrl:
        'https://storage.techainer.com/photo-restoration/profile/po.jpeg',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Nguyễn Trí Hiếu',
      role: 'Frontend Developer',
      imageUrl:
        'https://storage.techainer.com/photo-restoration/profile/hubert.jpeg',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Nguyễn Quốc Cường',
      role: 'Backend Deverloper',
      imageUrl:
        'https://scontent.xx.fbcdn.net/v/t1.15752-9/283255853_1779324865741658_189264319504245158_n.jpg?stp=dst-jpg_p403x403&_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=1vBWZYHdv2IAX_xjWAq&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIlLXynP8WeOyEfKYfLtIYP1aLCn7BA1OuFsEBYARRZTA&oe=62C00C0A',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
  ]
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-indigo-900">Team chúng tôi</h2>
            <p className="text-xl text-gray-700">Những con người này đã cố gắng ngày đêm để tạo sản phẩm phục vụ cộng đồng!</p>
          </div>
          <div className="lg:col-span-2">
            <ul role="list" className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
              {people.map((person) => (
                <li>
                  <div className="flex items-center space-x-4 lg:space-x-6">
                    <img className="w-16 h-16 rounded-full lg:w-20 lg:h-20" src={person.imageUrl} alt="" />
                    <div className="font-medium text-lg leading-6 space-y-1">
                      <h3>{person.name}</h3>
                      <p className="text-indigo-600">{person.role}</p>
                    </div>
                  </div>
                </li>

              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}




{/* // <div classNameName="bg-white">
    //   <div classNameName="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8 pb-16">
    //     <div classNameName="space-y-12">
    //       <div classNameName="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
    //         <h2 classNameName="text-3xl font-extrabold tracking-tight sm:text-4xl text-indigo-900">Team chúng tôi</h2>
    //         <p classNameName="text-xl text-gray-700">
    //           Những con người này đã cố gắng ngày đêm để tạo sản phẩm phục vụ cộng đồng!
    //         </p>
    //       </div>
    //       <ul
    //         role="list"
    //         classNameName="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
    //       >
    //         {people.map((person) => (
    //           <li key={person.name}>
    //             <div classNameName="space-y-4">
    //               <div classNameName="aspect-w-3 aspect-h-2">
    //                 <img classNameName="object-cover shadow-lg rounded-lg" src={person.imageUrl} alt="" />
    //               </div>

    //               <div classNameName="space-y-2">
    //                 <div classNameName="text-lg leading-6 font-medium space-y-1">
    //                   <h3>{person.name}</h3>
    //                   <p classNameName="text-indigo-600">{person.role}</p>
    //                 </div>
    //                 <ul role="list" classNameName="flex space-x-5">
    //                   <li>
    //                     <a href={person.twitterUrl} classNameName="text-gray-400 hover:text-gray-500">
    //                       <span classNameName="sr-only">Twitter</span>
    //                       <svg classNameName="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
    //                         <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
    //                       </svg>
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <a href={person.linkedinUrl} classNameName="text-gray-400 hover:text-gray-500">
    //                       <span classNameName="sr-only">LinkedIn</span>
    //                       <svg classNameName="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
    //                         <path
    //                           fillRule="evenodd"
    //                           d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
    //                           clipRule="evenodd"
    //                         />
    //                       </svg>
    //                     </a>
    //                   </li>
    //                 </ul>
    //               </div>
    //             </div>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    // </div> */}