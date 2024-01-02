"use client";
import Image from "next/image";
import React, { useState } from "react";

const Features = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="relative ">
      <div
        className="flex gap-x-2 justify-center cursor-pointer "
        onClick={handleClick}
      >
        <div className="text-slate-500 hover:text-black">Features</div>

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
        <div className="absolute -ms-[57px] mt-2 w-[120px] border flex flex-col items-center  rounded-md shadow-2xl -gap-y-2 p-2">
          <div className="flex gap-x-2  ">
            <Image
              src="./images/icon-todo.svg"
              width={10}
              height={10}
              className="object-contain"
            />
            <h1 className="text-sm text-slate-500">Todo List</h1>
          </div>
          <div className="flex gap-x-2  ">
            <Image
              src="./images/icon-calendar.svg"
              width={10}
              height={10}
              className="object-contain"
            />
            <h1 className="text-sm text-slate-500">Calendar</h1>
          </div>
          <div className="flex gap-x-2 ms-1 ">
            <Image
              src="./images/icon-reminders.svg"
              width={10}
              height={10}
              className="object-contain"
            />
            <h1 className="text-sm text-slate-500">Reminders</h1>
          </div>
          <div className="flex gap-x-2 ">
            <Image
              src="./images/icon-planning.svg"
              width={10}
              height={10}
              className="object-contain"
            />
            <h1 className="text-sm text-slate-500">Planning</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Features;
