"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const messages = [
  {
    date: "25/11/2024",
    time: "10:00 AM",
    message:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
  },
  {
    date: "25/11/2024",
    time: "10:00 AM",
    message:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
  },
  {
    date: "25/11/2024",
    time: "10:00 AM",
    message:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
  },
  {
    date: "25/11/2024",
    time: "10:00 AM",
    message:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
  },
  {
    date: "25/11/2024",
    time: "10:00 AM",
    message:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
  },
  {
    date: "25/11/2024",
    time: "10:00 AM",
    message:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
  },
  {
    date: "25/11/2024",
    time: "10:00 AM",
    message:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
  },
  {
    date: "25/11/2024",
    time: "10:00 AM",
    message:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
  },
  {
    date: "25/11/2024",
    time: "10:00 AM",
    message:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
  },
];

const Conversations = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            onEnter: () => {
              gsap.fromTo(
                ".message-item",
                { opacity: 0, x: -30 },
                {
                  opacity: 1,
                  x: 0,
                  duration: 1,
                  ease: "power3.out",
                  stagger: 0.3,
                }
              );
            },
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <h2>Recent Conversations</h2>
      <div className="px-12">
        <div className="border-t-2 border-[#DEDEDE] w-full">
          {messages.map((message, index) => (
            <div
              key={index}
              className="message-item group flex items-center justify-between border-b-2 border-[#DEDEDE] hover:border-cblack-100 transition-colors duration-300 cursor-pointer"
            >
              <div className="flex flex-col gap-2 w-full max-w-[15%] text-cblack-100 border-r-2 border-[#DEDEDE] items-start py-8 min-w-[200px]">
                <p className="text-[20px]">{message.date}</p>
                <p className="text-[20px]">{message.time}</p>
              </div>
              <div className="relative flex items-center gap-2 w-full text-cblack-100 pl-14">
                <p className="text-2xl">{message.message}</p>
                <Image
                  src="/icons/ArrowUpRight.svg"
                  width={36}
                  height={36}
                  className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  alt="Icon"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Conversations;
