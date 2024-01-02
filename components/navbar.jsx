import React from "react";
import Features from "./features";

const Navbar = () => {
  return (
    <div className="h-[3rem] flex justify-between items-center p-5 font-epilogue">
      <div className="flex gap-x-20">
        <div className="text-4xl font-bold">snap</div>
        <div className="flex gap-x-8 items-center ">
          <Features />
          <h1>Company</h1>
          <h1 className="text-slate-500 cursor-pointer hover:text-black font-semibold">
            Careers
          </h1>
          <h1 className="text-slate-500 cursor-pointer hover:text-black font-semibold">
            About
          </h1>
        </div>
      </div>
      <div className="flex gap-x-6">
        <h1 className="text-slate-500 cursor-pointer hover:text-black font-semibold p-2 ">
          Login
        </h1>
        <h1 className="text-slate-500 cursor-pointer hover:text-black font-semibold border border-slate-500 hover:border-black  rounded-full p-2 ">
          Register
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
