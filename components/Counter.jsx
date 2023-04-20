import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const Counter = () => {
  const sectionRef = useRef(null);
  const [countryCounter, setCounterCounter] = useState(0);
  const [startUpcounter, setStartUpcounter] = useState(0);
  const [thirdCounter, setThirdCounter] = useState(0);
  const [fourthCounter, setFourthCounter] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
            setCounterCounter(40);
            setStartUpcounter(28);
            setThirdCounter(4);
            setFourthCounter(2.8);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.unobserve(sectionRef.current);
    };
  }, []);
  return (
    <>
      <div
        ref={sectionRef}
        className="counter mb-8 grid sm:grid-cols-6  md:grid-cols-12 grid-cols-3 gap-5 md:gap-3 bg-[#03286B] text-white px-[40px] lg:px-[100px] py-[72px] w-full h-auto font-inter border border-black"
      >
        <div className="item col-span-3 text-center">
          <p className="text-[60px] font-[600]">
            <CountUp end={countryCounter} />+
          </p>
          <p className="font-[500] text-[18px]">Companies</p>
        </div>
        <div className="item col-span-3 text-center">
          <p className="text-[60px] font-[600]">
            <CountUp delay={0.5} end={startUpcounter} />%
          </p>
          <p className="font-[500] text-[18px]">Startups</p>
        </div>
        <div className="item col-span-3 text-center">
          <p className="text-[60px] font-[600]">
            <CountUp delay={1} end={thirdCounter} />
            K+
          </p>
          <p className="font-[500] text-[18px]">People Trained</p>
        </div>
        <div className="item col-span-3 text-center">
          <p className="text-[60px] font-[600]">
            <CountUp delay={1.5} decimals={1} end={fourthCounter} />B
          </p>
          <p className="font-[500] text-[18px]">Generated</p>
        </div>
      </div>
    </>
  );
};

export default Counter;
