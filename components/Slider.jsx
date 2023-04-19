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
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // breakpoints={{
          //   0: {
          //     slidesPerView: 1,
          //     spaceBetween: 10,
          //   },
          //   768: {
          //     slidesPerView: 1,
          //     spaceBetween: 18,
          //   },
          //   1024: {
          //     slidesPerView: 1,
          //     spaceBetween: 20,
          //   },
          //   1280: {
          //     slidesPerView: 1,
          //     spaceBetween: 20,
          //   },
          //   1536: {
          //     slidesPerView: 1,
          //     spaceBetween: 30,
          //   },
          // }}
          modules={[Navigation]}
        >
          <div className="slideImage relative z-10 h-[600px] w-full">
            <SwiperSlide className="slideImage z-10 h-[600px] w-full">
              <div className="image slideImage z-10 h-[600px] w-full">
                <Image
                  src={"/../public/images/slider.jpg"}
                  height={400}
                  width={1440}
                  alt="Image here"
                  className="image w-full h-full"
                />
                <div className="absolute flex capitalize  flex-col justify-center items-start bottom-[103px] left-[103px] bg-[#000] opacity-60 h-[209px] w-[896px] z-40 px-4"></div>
                <div className="data absolute flex capitalize  flex-col justify-center items-start bottom-[103px] left-[103px] opacity-100 text-white  h-[209px] w-[896px] z-40 px-4 gap-4">
                  <h2 className="text-[#DD0C39] font-inter font-[500] text-[22px] z-50 opacity-100">
                    {" "}
                    Learn About The Upcoming Events
                  </h2>
                  <p className="text-white text-[38px]">
                    NAS-IT - INNOVATE NEPAL HACKATHON
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slideImage relative z-10 h-[600px] w-full">
              <div className="image slideImage z-10 h-[600px] w-full">
                <Image
                  src={"/../public/images/slider.jpg"}
                  height={400}
                  width={1440}
                  alt="Image here"
                  className="image w-full h-full"
                />
                <div className="absolute flex capitalize  flex-col justify-center items-start bottom-[103px] left-[103px] bg-[#000] opacity-60 h-[209px] w-[896px] z-40 px-4"></div>
                <div className="data absolute flex capitalize  flex-col justify-center items-start bottom-[103px] left-[103px] opacity-100 text-white  h-[209px] w-[896px] z-40 px-4 gap-4">
                  <h2 className="text-[#DD0C39] font-inter font-[500] text-[22px] z-50 opacity-100">
                    {" "}
                    Learn About The Upcoming Events
                  </h2>
                  <p className="text-white text-[38px]">
                    NAS-IT - INNOVATE NEPAL HACKATHON
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slideImage relative z-10 h-[600px] w-full !important">
              <div className="image slideImage z-10 h-[600px] w-full">
                <Image
                  src={"/../public/images/slider.jpg"}
                  height={400}
                  width={1440}
                  alt="Image here"
                  className="image w-full h-full"
                />
                <div className="absolute flex capitalize  flex-col justify-center items-start bottom-[103px] left-[103px] bg-[#000] opacity-60 h-[209px] w-[896px] z-40 px-4"></div>
                <div className="data absolute flex capitalize  flex-col justify-center items-start bottom-[103px] left-[103px] opacity-100 text-white  h-[209px] w-[896px] z-40 px-4 gap-4">
                  <h2 className="text-[#DD0C39] font-inter font-[500] text-[22px] z-50 opacity-100">
                    {" "}
                    Learn About The Upcoming Events
                  </h2>
                  <p className="text-white text-[38px]">
                    NAS-IT - INNOVATE NEPAL HACKATHON
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>

        <div className="sliderButton absolute bottom-[90px] left-[103px] flex justify-center gap-3 items-center z-50">
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
