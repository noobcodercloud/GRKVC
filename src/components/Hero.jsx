import React from "react";
import HeroBanner from "../assets/GRKVC.jpg";
import DownArrow from "../assets/arrow.png";

function Hero() {
  return (
    <div className="">
      <div className="shadow-[0_6px_12px_rgba(0,0,0,0.3)]">
        <img src={HeroBanner} alt="alt" />
      </div>
      <div className="pt-15 flex items-center justify-center gap-2 sm:gap-10">
        <div className="text-3xl text-center sm:text-5xl flex items-center justify-center font-bold text-[#2C3E50]">
          Explore Courses
        </div>
        <div className="p-1.75">
          <img src={DownArrow} alt="arr" width={22} className="downArrow"/>
        </div>
      </div>
    </div>
  );
}

export default Hero;