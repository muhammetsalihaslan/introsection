"use client";
import Image from "next/image";
import React, { useState } from "react";

const Company = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="lg:relative mt-3 lg:mt-0 ms-1 lg:ms-0">
      <div
        className="flex gap-x-2 justify-center cursor-pointer "
        onClick={handleClick}
      >
        <div className="text-slate-500 font-semibold hover:text-black">
          Company
        </div>

        {open ? (
          <Image
            src="./images/icon-arrow-down.svg"
            width={10}
            height={10}
            className="object-contain mt-1"
          />
        ) : (
          <Image
            src="./images/icon-arrow-up.svg"
            width={10}
            height={10}
            className="object-contain mt-1"
          />
        )}
      </div>
      {open && (
        <div className="lg:absolute  lg:mt-2 w-[100px] lg:border  flex flex-col justify-start gap-y-2  rounded-md lg:shadow-2xl  lg:p-2 ">
          <div className="flex gap-x-2 ms-2  ">
            <h1 className="text-sm text-slate-500">History</h1>
          </div>
          <div className="flex gap-x-2 ms-2  ">
            <h1 className="text-sm text-slate-500">Our Team</h1>
          </div>
          <div>
            <h1 className="text-sm text-slate-500 ms-2">Blog</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Company;
