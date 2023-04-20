import Image from "next/image";
import React, { useRef } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper";

const Slider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <div className="mainContainer relative">
        <Swiper
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="mySwiper relative"
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          modules={[Navigation]}
        >
          <div className="slideImage relative z-10 h-[650px] w-full">
            <SwiperSlide className="slideImage z-10 h-[650px] w-full">
              <div className="image slideImage z-10 h-[650px] w-full">
                <Image
                  src={"/../public/images/slider.jpg"}
                  height={400}
                  width={1440}
                  alt="Image here"
                  className="image w-auto object-cover md:w-full h-full"
                />
                <div className="absolute flex capitalize  flex-col justify-center items-start bottom-[103px] left-[20px] lg:left-[103px] bg-[#000] opacity-60 h-[209px] w-[82%] lg:w-[896px] z-40 px-4 border-2 border-white"></div>
                <div className="data absolute flex capitalize flex-col justify-center items-start bottom-[103px] left-[20px] lg:left-[103px] opacity-100 text-white h-[209px] w-[82%] lg:w-[896px] z-40 px-4 gap-4">
                  <h2 className="text-[#DD0C39] font-inter font-[500] text-[16px] lg:text-[22px] z-50 opacity-100">
                    {" "}
                    Learn About The Upcoming Events
                  </h2>
                  <p className="text-white text-[24px] lg:text-[38px]">
                    NAS-IT - INNOVATE NEPAL HACKATHON
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slideImage relative z-10 h-[650px] w-full">
              <div className="image slideImage z-10 h-[650px] w-full">
                <Image
                  src={"/../public/images/slider.jpg"}
                  height={400}
                  width={1440}
                  alt="Image here"
                  className="image w-auto object-cover md:w-full h-full"
                />
                <div className="absolute flex capitalize  flex-col justify-center items-start bottom-[103px] left-[20px] lg:left-[103px] bg-[#000] opacity-60 h-[209px] w-[82%] lg:w-[896px] z-40 px-4 border-2 border-white"></div>
                <div className="data absolute flex capitalize flex-col justify-center items-start bottom-[103px] left-[20px] lg:left-[103px] opacity-100 text-white h-[209px] w-[82%] lg:w-[896px] z-40 px-4 gap-4">
                  <h2 className="text-[#DD0C39] font-inter font-[500] text-[16px] lg:text-[22px] z-50 opacity-100">
                    {" "}
                    Learn About The Upcoming Events
                  </h2>
                  <p className="text-white text-[24px] lg:text-[38px]">
                    NAS-IT - INNOVATE NEPAL HACKATHON
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slideImage relative z-10 h-[650px] w-full !important">
              <div className="image slideImage z-10 h-[650px] w-full">
                <Image
                  src={"/../public/images/slider.jpg"}
                  height={400}
                  width={1440}
                  alt="Image here"
                  className="image w-auto object-cover md:w-full h-full"
                />
                <div className="absolute flex capitalize  flex-col justify-center items-start bottom-[103px] left-[20px] lg:left-[103px] bg-[#000] opacity-60 h-[209px] w-[82%] lg:w-[896px] z-40 px-4 border-2 border-white"></div>
                <div className="data absolute flex capitalize flex-col justify-center items-start bottom-[103px] left-[20px] lg:left-[103px] opacity-100 text-white h-[209px] w-[82%] lg:w-[896px] z-40 px-4 gap-4">
                  <h2 className="text-[#DD0C39] font-inter font-[500] text-[16px] lg:text-[22px] z-50 opacity-100">
                    {" "}
                    Learn About The Upcoming Events
                  </h2>
                  <p className="text-white text-[24px] lg:text-[38px]">
                    NAS-IT - INNOVATE NEPAL HACKATHON
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>

        <div className="sliderButton absolute bottom-[90px] left-[20px] lg:left-[103px] flex justify-center gap-3 items-center z-20">
          <div
            ref={prevRef}
            className="left cursor-pointer text-[#667085] border-2 rounded-full p-4 bg-[#EAECF0]"
          >
            <BiLeftArrowAlt />
          </div>
          <div
            ref={nextRef}
            className="right cursor-pointer  text-[#667085] border-2 rounded-full p-4 bg-[#EAECF0]"
          >
            <BiRightArrowAlt />
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
