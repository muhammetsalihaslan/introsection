"use client";
import React, { useState } from "react";
import Features from "./features";
import Company from "./company";
import Image from "next/image";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="lg:hidden flex justify-between">
        <div className="text-4xl font-bold">snap</div>
        {!menu ? (
          <div className="flex flex-col me-5 gap-y-6 bg-red-500 ">
            <div className="flex justify-end">
              <Image
                src="./images/icon-close-menu.svg"
                width={20}
                height={20}
              />
            </div>
            <div className="bg-green-500">
              <Features />
              <Company />
              <h1 className="text-slate-500 cursor-pointer hover:text-black font-semibold">
                Careers
              </h1>
              <h1 className="text-slate-500 cursor-pointer hover:text-black font-semibold">
                About
              </h1>
            </div>
            <div>
              <h1 className="text-slate-500 cursor-pointer hover:text-black font-semibold p-2 ">
                Login
              </h1>
              <div className="text-slate-500 cursor-pointer hover:text-black font-semibold border border-slate-500 hover:border-black  rounded-full w-[6rem]  flex justify-center p-2  ">
                Register
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-3">
            <Image src="./images/icon-menu.svg" width={40} height={40} />
          </div>
        )}
      </div>
      <div className="h-[3rem] flex justify-between items-center p-5 font-epilogue hidden ">
        <div className="flex gap-x-20">
          <div className="text-4xl font-bold">snap</div>
          <div className="flex gap-x-8 items-center ">
            <Features />
            <Company />
            <h1 className="text-slate-500 cursor-pointer hover:text-black font-semibold">
              Careers
            </h1>
            <h1 className="text-slate-500 cursor-pointer hover:text-black font-semibold">
              About
            </h1>
          </div>
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
    </>
  );
};

export default Navbar;
