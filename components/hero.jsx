import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="flex justify-center w-screen ">
        <Image
          src="/images/image-hero-mobile.png"
          width={500}
          height={500}
          className="w-screen p-5 object-contain  "
        />
      </div>
    </div>
  );
};

export default Hero;
