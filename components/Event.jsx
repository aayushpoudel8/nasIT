import React, { useRef } from "react";
import Eventcard from "./Eventcard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import { BsArrowLeft, BsArrowRight } from "react-icons/Bs";

const Event = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div>
      <div className="px-[20px] xl:px-[142px] py-[60px] ">
        <div className="header flex justify-between items-center">
          <div className="text-2xl md:text-3xl flex justify-start flex-col items-start mb-6">
            <div className="mb-3">
              <span className=" font-bold bg-[#DD0C39] text-white px-4 p-2">
                Events
              </span>
              <span className=" font-bold  mx-4">News</span>
            </div>
          </div>
        </div>
        <Swiper
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="mySwiper mt-12"
          slidesPerView={1}
          spaceBetween={10}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 18,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1536: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation]}
        >
          <div className="blogcontent grid grid-cols-6 lg:grid-cols-12 gap-6">
            <SwiperSlide>
              <Eventcard
                img="/../public/images/Image.png"
                title="UX review presentations"
                author="Olivia Rhye "
                date=" 20 Jan 2022"
                desc="
                  How do you create compelling presentations that wow your colleagues and impress your managers?
                "
              />
            </SwiperSlide>
            <SwiperSlide>
              <Eventcard
                img="/../public/images/Image (1).png"
                title="Migrating to Linear 101"
                author="Phoenix Baker "
                date="  19 Jan 2022"
                desc="
                  Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.
                "
              />
            </SwiperSlide>
            <SwiperSlide>
              <Eventcard
                img="/../public/images/Image (2).png"
                title="Building your API Stack"
                author="Lana Steiner  "
                date="  18 Jan 2022"
                desc="
                  The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.
                "
              />
            </SwiperSlide>
          </div>
        </Swiper>
        <div className="button">
          <div className="button flex items-center text-[#667085] gap-8 text-2xl my-10">
            <button
              className="left hover:bg-slate-200 hover:text-black cursor-pointer border border-[#EAECF0] h-10 w-10 rounded-full p-2"
              ref={prevRef}
            >
              <BsArrowLeft />
            </button>
            <button
              className="right hover:bg-slate-200 hover:text-black cursor-pointer border border-[#EAECF0] h-10 w-10 rounded-full p-2"
              ref={nextRef}
            >
              <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
