import React from "react";
import image from "../../assets/crew/image-douglas-hurley.png";

const CrewHero = () => {
  return (
    <div className="text-white my-[48px] mx-[150px] flex flex-col gap-[24px] border border-red-500">
      <header className="text-[28px]">
        <span className="text-gray-500 mr-2 !font-bellefair">02</span>MEET YOUR
        CREW
      </header>
      <div className="flex gap-[32px]">
        <div className="basis-1/2 flex flex-col justify-between">
          <div className="basis-5/6 flex flex-col justify-center">
            <h2 className="text-[32px] text-white/60">COMMANDER</h2>
            <p className="text-[56px]">Douglas Hurley</p>
            <p className="text-[19px] text-white/60">
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </p>
          </div>
          <div className=" basis-1/6 flex items-center">. . . .</div>
        </div>
        <div className="basis-1/2 flex items-center justify-center">
          <img
            className="w-[539px] h-[676px]"
            src={image}
            width={539}
            height={676}
            alt="Crew Image"
          />
        </div>
      </div>
    </div>
  );
};

export default CrewHero;
