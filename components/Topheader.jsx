import Link from 'next/link'
import React from 'react'
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/Ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/Fa";

const Topheader = () => {
    return (
        <div className="bg-[#03286B] text-white  w-full h-auto md:h-9 my-auto z-0  ">
            <div className=" flex justify-between text-center items-center px-10 p-2">
                <div> <p>Nepal Association of Sotware Services and IT Companies</p></div>
                <div className='flex  '>
                    <div className='px-2'><Link href="/"><AiOutlineInstagram  size={20}/></Link></div>
                    <div className='px-2'><Link href="/"><FaFacebookF size={20} /></Link></div>
                    <div className='px-2'><Link href="/"><FaLinkedinIn size={20} /></Link></div>
                    <div className='px-2'><Link href="/"><AiOutlineTwitter size={20} /></Link></div>
                </div>
            </div>
        </div>
    )
}

export default Topheader
