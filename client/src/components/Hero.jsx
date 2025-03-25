import React from "react";

const Hero = () => {
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
          <a
            href="#EXPLORE"
            className="h-[250px] w-[250px] flex items-center justify-center bg-white rounded-full text-[32px] font-[100]  "
          >
            EXPLORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
