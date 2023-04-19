import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='bg-white h-auto border py-2'>
      <div className="flex px-10 justify-between">
        <div className="">
        <Image
                src="/../public/images/Group 85.png"
                alt=""
                height={58}
                width={120}
                className="h-full w-full"
              />
      </div>
        <div >
          <ul className='flex text-black justify-around p-4 font-bold font-inter'>
            <li className='px-4'>About</li>
            <li className='px-4'>Members</li>
            <li className='px-4'>Events</li>
            <li className='px-4'>Impact</li>
            <li className='px-4'>Contact</li>
            <li className='px-4 text-[#DD0C39]'>Become a Member</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
