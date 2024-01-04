import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="lg:flex lg:flex-row-reverse lg:justify-center lg:items-center ">
      <div className="flex justify-center w-screen lg:hidden ">
        <Image
          src="/images/image-hero-mobile.png"
          width={500}
          height={500}
          className="w-screen p-5 object-contain  "
        />
      </div>
      <div className="hidden lg:inline-flex  ">
        <Image
          src="/images/image-hero-desktop.png"
          width={500}
          height={500}
          className="h-3/5"
        />
      </div>

      <div className="lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:h-screen lg:items-start ">
        <div className="flex flex-col justify-center items-center p-5 lg:p-0 lg:w-fit lg:justify-normal ">
          <div className="flex lg:flex-col lg:-ms-[11rem]  lg:-mt-5 ">
            <h1 className="text-4xl font-bold lg:text-7xl">Make </h1>
            <h1 className="text-4xl font-bold lg:text-8xl ms-2 lg:ms-0">
              remote work
            </h1>
          </div>
          <p className="text-xl lg:mt-10 lg:w-2/3 lg:-ms-[15rem] ">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar
          </p>
        </div>
        <div className="flex w-screen justify-center items-center lg:w-1/2 lg:justify-start">
          <button className="text-xl border w-[10rem] bg-black text-white h-[3rem] rounded-xl lg:mt-10">
            Learn more
          </button>
        </div>
        <div className="flex justify-around  p-5 lg:p-0 lg:gap-x-8 lg:mt-[7rem]">
          <Image
            src="./images/client-databiz.svg"
            width={80}
            height={80}
            className="object-contain"
          />
          <Image
            src="./images/client-audiophile.svg"
            width={80}
            height={80}
            className="object-contain"
          />
          <Image
            src="./images/client-meet.svg"
            width={80}
            height={80}
            className="object-contain"
          />
          <Image
            src="./images/client-maker.svg"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
