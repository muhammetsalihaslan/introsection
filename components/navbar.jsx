"use client";
import React, { useState } from "react";
import Features from "./features";
import Company from "./company";
import Image from "next/image";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  };
  return (
    <div className="lg:h-[3rem] flex  lg:items-center lg:p-5 lg:mt-5 font-epilogue justify-between lg:justify-normal lg:bg-[#FAFAFA]">
      <div className="text-4xl font-bold mb-2 ms-5 lg:ms-0">snap</div>
      {!menu ? (
        <div className="flex  h-screen  w-screen me-[2rem] lg:hidden  fixed items-end ">
          <div className="w-3/5 bg-black bg-opacity-60 h-screen"></div>
          <div className="w-2/5 bg-white h-screen">
            <div
              className="flex justify-end me-5 mt-5 cursor-pointer"
              onClick={handleClick}
            >
              <Image
                src="./images/icon-close-menu.svg"
                width={20}
                height={20}
              />
            </div>
            <div className="flex flex-col items-start ms-5  w-[170px] relative">
              <div className=" flex flex-col justify-center items-center ms-3  ">
                <Features />
                <Company />
                <h1 className="text-slate-500 cursor-pointer hover:text-black font-semibold mt-3 lg:mt-0 -ms-6 ">
                  Careers
                </h1>
                <h1 className="text-slate-500 cursor-pointer hover:text-black font-semibold mt-3 lg:mt-0 -ms-7">
                  About
                </h1>
              </div>
              <div className="flex flex-col items-center mt-3">
                <h1 className="text-slate-500 cursor-pointer hover:text-black font-semibold p-2 ">
                  Login
                </h1>
                <div className="text-slate-500 cursor-pointer hover:text-black font-semibold border border-slate-500 hover:border-black  rounded-full w-[10rem]  flex justify-center p-2  ">
                  Register
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="mt-3 lg:hidden cursor-pointer me-5"
          onClick={handleClick}
        >
          <Image src="./images/icon-menu.svg" width={40} height={40} />
        </div>
      )}
      <div className=" justify-between w-screen hidden lg:inline-flex ">
        <div className="flex gap-x-8 items-center ms-9 ">
          <Features />
          <Company />
          <h1 className="text-slate-500 cursor-pointer hover:text-black font-semibold">
            Careers
          </h1>

          <h1 className="text-slate-500 cursor-pointer hover:text-black font-semibold">
            About
          </h1>
        </div>
        <div className="flex gap-x-3 ">
          <h1 className="text-slate-500 cursor-pointer hover:text-black font-semibold p-2 ">
            Login
          </h1>
          <div className="text-slate-500 cursor-pointer hover:text-black font-semibold border border-slate-500 hover:border-black  rounded-full w-[6rem]  flex justify-center p-2  ">
            Register
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
