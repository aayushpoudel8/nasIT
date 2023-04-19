import React from 'react'
import Image from 'next/image'
import Link from "next/link";

const Eventcard = ({ img, title,author, desc, date }) => {


    return (
        <div className="card   cursor-pointer">

            <div className="cardHeader ">
                <div className="imageDiv col-span-2">
                    <Link href={`/`}>
                        <Image
                            src={img}
                            alt="Blog image here."
                            width={384}
                            height={240}
                        />
                    </Link>
                </div>
                <div className="w-[350px]">
                <div className='flex '>
                    <p className="font-mavenPro text-[#DD0C39] text-sm"> {author}</p>
                    <p className="font-mavenPro text-[#DD0C39] text-sm mb-3"><span className='font-bold'>.</span>
                     {date}
                    </p>
                    <p>
                    </p>
                    </div>
                    <div className='flex justify-between '>
                    <Link href={`/`}>
                        <h2 className="font-bold hover:underline font-mavenPro text-[20px] mb-2">
                            {title}
                        </h2>
                    </Link>
                    <Link href={`/`}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 11L11 1M11 1H1M11 1V11" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </Link>
                    </div>
                </div>

            </div>

            <div
                className="text-base 2xl:text-base">{desc}</div>
        </div>

    )
}

export default Eventcard
