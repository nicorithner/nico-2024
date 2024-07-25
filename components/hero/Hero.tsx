import React from "react";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import MagicButton from "../buttons/MagickButton";
import { FaLocationArrow } from "react-icons/fa";
import { PatternBackground } from "../ui/PatternBackground";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/* Pattern Background */}
      <PatternBackground
        gridType="dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"
        styles="h-screen w-full dark:bg-black-100 bg-white  flex items-center justify-center absolute top-0 left-0"
      />

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-8xl"
            words="NICO RITHNER"
          />
          <h2 className="uppercase tracking-wider text-xs text-center text-blue-100 max-w-[80%] md:text-1xl lg:text-2xl mb-[2rem]">
            Full Stack Software Developer
          </h2>

          <a href="#about">
            <MagicButton
              title="Checkout My Work"
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
