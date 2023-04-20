import React from "react";
import Image from "next/image";
import Link from "next/link";

const Eventcard = ({ img, title, author, desc, date }) => {
  return (
    <div className="card cursor-pointer font-inter col-span-6 lg:col-span-4 w-full flex flex-col items-center justify-center px-2">
      <div className="cardHeader w-full">
        <div className="imageDiv col-span-2">
          <Link href={`/`}>
            <Image src={img} alt="Blog image here." width={384} height={240} />
          </Link>
        </div>
        <div className="w-[350px] mt-8 font-inter font-[600]">
          <div className="flex ">
            <p className="font-mavenPro text-[#DD0C39] text-sm"> {author}</p>
            <p className="font-mavenPro text-[#DD0C39] text-sm mb-3">
              <span className="font-bold">.</span>
              {date}
            </p>
          </div>
          <div className="flex justify-between w-[90%] items-center">
            <Link href={`/`}>
              <h2 className="font-bold hover:underline font-mavenPro text-[20px] mb-2">
                {title}
              </h2>
            </Link>
            <Link href={`/`}>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 11L11 1M11 1H1M11 1V11"
                  stroke="#101828"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="text-base  w-full">{desc}</div>
    </div>
  );
};

export default Eventcard;
