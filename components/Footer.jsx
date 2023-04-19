import React from 'react'
import Link from 'next/link'
import {  AiOutlineTwitter,AiFillLinkedin  } from "react-icons/Ai";
import { BsFacebook } from "react-icons/Bs";
const footer = () => {
  return (
    <div className='text-white bg-[#03286B] pt-[64px] pb-[48px] px-[100px] '>
      <div className='firstcontainer flex justify-between p-3'>
       <div>
        <h3 className='text-3xl font-bold pb-2'>NAS-IT</h3>
        <p>Nepal Association of Software Services and IT Companies </p>
       </div>
       <div className=''>
        <Link href={'/'}><button className='bg-white text-black p-2'>Contact Us</button></Link>
        <Link href={'/'}><button className=' ml-5 bg-[#DD0C39] p-2'>Become a Member</button></Link>
       </div>
       
      </div>
      <div className='border border-[#475467] h-0 w-full'>
       </div>
      <div className="secondcontainer border border-black flex justify-between pt-4 pb-5">
        <div className='mt-4'>
        <svg width="261" height="49" viewBox="0 0 897 244" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M137.501 156.324L189.28 79.9846L137.486 3.60382C134.222 -1.20127 127.148 -1.20127 123.885 3.60382L1.43284 184.147C-2.27096 189.619 1.63528 197 8.23305 197H109.927L120.443 181.488L128.229 169.996L73.7704 139.84V124.47L141.285 87.9851H141.297V105.858L93.5995 131.958L137.501 156.324ZM223.209 62.3023C226.473 57.4972 233.547 57.4972 236.81 62.3023L303.705 160.92C305.432 163.46 305.432 166.81 303.705 169.35L287.187 193.709C285.793 195.772 283.471 197 280.982 197H131.852L191.256 109.411L201.272 94.6503L223.209 62.3023ZM200.105 96.3791L190.089 111.14L237.382 137.05L189.696 162.255V181.023L257.211 144.907V128.262L200.105 96.3791Z" fill="white"/>
<path d="M384.394 197H358.474V77.1201H384.394L443.038 165.572H434.938V77.1201H460.858V197H434.938L376.294 108.71H384.394V197ZM498.95 197H471.572L514.34 77.1201H539.936L582.542 197H554.678L546.254 171.728H507.536L498.95 197ZM523.736 124.1L515.15 149.696H538.802L530.216 124.1C529.568 122.048 528.92 119.942 528.272 117.782C527.624 115.622 527.192 113.84 526.976 112.436C526.76 113.84 526.328 115.622 525.68 117.782C525.14 119.834 524.492 121.94 523.736 124.1ZM586.612 111.95C586.612 104.714 588.502 98.3421 592.282 92.8341C596.062 87.2181 601.246 82.8441 607.834 79.7121C614.53 76.4721 622.144 74.8521 630.676 74.8521C639.316 74.8521 646.768 76.3641 653.032 79.3881C659.296 82.4121 664.102 86.6781 667.45 92.1861C670.906 97.694 672.634 104.228 672.634 111.788H646.552C646.552 107.576 645.094 104.282 642.178 101.906C639.262 99.4221 635.32 98.1801 630.352 98.1801C625.06 98.1801 620.794 99.3141 617.554 101.582C614.422 103.85 612.856 106.982 612.856 110.978C612.856 114.65 613.828 117.458 615.772 119.402C617.716 121.346 620.794 122.75 625.006 123.614L642.988 127.34C653.68 129.5 661.618 133.28 666.802 138.68C671.986 143.972 674.578 151.37 674.578 160.874C674.578 168.542 672.688 175.292 668.908 181.124C665.128 186.848 659.782 191.276 652.87 194.408C646.066 197.54 638.074 199.106 628.894 199.106C620.038 199.106 612.262 197.594 605.566 194.57C598.978 191.546 593.848 187.28 590.176 181.772C586.612 176.156 584.83 169.622 584.83 162.17H610.912C610.912 166.49 612.478 169.838 615.61 172.214C618.742 174.59 623.224 175.778 629.056 175.778C634.996 175.778 639.694 174.698 643.15 172.538C646.606 170.27 648.334 167.246 648.334 163.466C648.334 160.118 647.47 157.526 645.742 155.69C644.122 153.854 641.314 152.558 637.318 151.802L619.012 148.076C608.32 145.916 600.22 141.812 594.712 135.764C589.312 129.716 586.612 121.778 586.612 111.95ZM685.979 164.276V142.244H741.383V164.276H685.979ZM786.567 77.1201V197H760.323V77.1201H786.567ZM859.37 89.7561V197H833.126V89.7561H859.37ZM799.106 101.42V77.1201H893.39V101.42H799.106Z" fill="white"/>
</svg>

        </div>
        <div>
        <ul className='grid grid-cols-5'>
            <li className='px-8 py-2'>About</li>
            <li className='px-8 py-2'>Members</li>
            <li className='px-8 py-2'>Resources</li>
            <li className='px-8 py-2'>Events</li>
            <li className='px-8 py-2'>Collaborations</li>
            <li className='px-8 py-2'>Home</li>
            <li className='px-8 py-2'>Partnership</li>
            <li className='px-8 py-2'>Legal</li>
            <li className='px-8 py-2'>News</li>
          </ul>
        </div>
       </div>
       <div className='border border-[#475467] h-0 w-full'>
       </div>
       <div className='text-[#475467] pt-5 flex justify-between'>
        <div><p>© 2023 NAS-IT. All rights reserved.</p></div>
        <div className='flex '>
        <div className='px-2'><Link href="/"><AiOutlineTwitter size={20} /></Link></div>
        <div className='px-2'><Link href="/"><AiFillLinkedin size={20} /></Link></div>
        <div className='px-2'><Link href="/"><BsFacebook size={20} /></Link></div>
                   
                    
        </div>
       </div>
    </div>
  )
}

export default footer
