import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center text-black">
      <div>
        <Image
          src="/images/hero.png"
          alt="Hero Image"
          width={1440}
          height={400}
        />
      </div>
      <div className="relative">
        <Button className="absolute -top-[30px] left-1/2 transform -translate-x-1/2 px-9 py-6 text-white rounded-sm">
          <Image
            src="/icons/ChatTeardrop.svg"
            alt="Coin Vertical Logo"
            width={20}
            height={20}
          />
          CHAT NOW
        </Button>
        <h1 className="text-4xl uppercase font-bold mb-2 py-24">
          The AI That Thinks Along Side Us All
        </h1>
      </div>
    </div>
  );
};

export default Hero;
