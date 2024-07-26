import React from "react";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import MagicButton from "../buttons/MagickButton";
import { FaLocationArrow } from "react-icons/fa";
import { PatternBackground } from "../ui/PatternBackground";
import Image from "next/image";
import { TypewriterEffect } from "../ui/TypewriterEffect";

const Hero = () => {
  const words = [
    {
      text: "Fullstack",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Software",
    },
    {
      text: "Developer",
    },
  ];

  return (
    <div className="pb-20 pt-36">
      {/* Pattern Background */}
      <PatternBackground
        gridType="dark:bg-dot-white/[0.4] bg-dot-black/[0.2]"
        styles="h-screen w-full dark:bg-black-100 bg-white  flex items-center justify-center absolute top-0 left-0"
      />

      <div className="flex justify-center lg:justify-start relative my-20 z-10">
        <div className="max-w[89vw] md:max-w-2xl lg:ml-20 lg:max-w-[60vw] flex flex-col items-center justify-center pb-5 overflow-hidden">
          <img
            className="absolute  sm:z-10 sm:w-[15rem] sm:h-[15rem] sm:max-w-full lg:z-0 sm:mx-0 sm:mb-[22rem] lg:-mr-[60rem] lg:-mb-[14rem]  lg:h-auto lg:w-auto"
            src="/nico-circle.png"
            alt="headshot of Nico"
          />

          <TextGenerateEffect
            className="text-center text-[50rem] sm:text-2xl md:text-5xl lg:text-8xl z-10"
            words="NICO RITHNER"
          />

          <TypewriterEffect words={words} className="z-10" />

          <a href="#about">
            <MagicButton
              title="Experience"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
