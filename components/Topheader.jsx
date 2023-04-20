import Link from "next/link";
import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/Ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/Fa";

const Topheader = () => {
  return (
    <div className="bg-[#03286B] text-white h-[46px] z-50 font-inter font-[400] fixed w-full top-0 left-0">
      <div className="flex justify-between text-center items-center px-14 h-full">
        <div>
          {" "}
          <p>Nepal Association of Sotware Services and IT Companies</p>
        </div>
        <div className="flex">
          <div className="px-2">
            <Link href="/">
              <AiOutlineInstagram size={20} />
            </Link>
          </div>
          <div className="px-2">
            <Link href="/">
              <FaFacebookF size={20} />
            </Link>
          </div>
          <div className="px-2">
            <Link href="/">
              <FaLinkedinIn size={20} />
            </Link>
          </div>
          <div className="px-2">
            <Link href="/">
              <AiOutlineTwitter size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topheader;
