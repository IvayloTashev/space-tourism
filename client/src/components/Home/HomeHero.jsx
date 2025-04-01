import React from "react";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <div className="mb-[128px] mt-[300px] mx-[165px] flex items-center">
      <div className="basis-1/2 flex flex-col gap-[24px]">
        <p className="text-[28px] text-white/80">SO, YOU WANT TO TRAVEL TO</p>
        <p className="text-[144px] text-white leading-none">SPACE</p>
        <p className="text-[18px] text-white/80 font-[100]">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on edge of it. Well sit back
          and relax because we'll give you a truly out of this world experience!
        </p>
      </div>
      <div className="flex justify-end basis-1/2 ">
        <div className="hover:text-black/50">
        <div className="relative group">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[250px] w-[250px] bg-white opacity-0 scale-100 rounded-full transition-all duration-200 ease-in group-hover:opacity-20 group-hover:scale-150"></div>
          </div>
          <Link
            to={"/destination"}
            className="relative h-[250px] w-[250px] flex items-center justify-center bg-white rounded-full text-[32px] font-[100] z-10"
          >
            EXPLORE
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
