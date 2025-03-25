import React from "react";
import logo from "../assets/shared/logo.svg";
import { navMenuData } from "../constants/constants.js";

const Nav = () => {
  console.log(navMenuData);

  return (
    <div className="h-[136px] w-full flex flex-col justify-end">
      <nav className="flex justify-between items-center h-[96px]">
        <div className="pl-[50px]">
          <img src={logo} alt="Logo" />
        </div>
        <div className="bg-white/20 block h-[2px] w-[650px] absolute left-[150px] z-2"></div>
        <ul className="flex items-center gap-[30px] h-full backdrop-blur-2xl pr-[50px] pl-[150px] bg-white/5">
          {navMenuData.map((item) => (
            <li key={item.id} className="text-white h-full border-solid border-b-3 border-transparent hover:border-white/80">
              <a href={`#${item.title.toLocaleLowerCase()}`} className="flex h-full items-center gap-2">
                <p className="font-bold">{item.number}</p>
                <p className="opacity-70">{item.title}</p>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
