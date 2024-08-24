import React from "react";
import MovingBorderCard from "../ui/MovingBorderCard";
import { currentJob } from "../../data";
import ResumeLink from "./ResumeLink";
import PreviousExperienceExpandable from "./PreviousExperienceExpandable";

export default function WorkExperience() {
  return (
    <div
      id="experience"
      className="relative grid grid-cols-1 py-5 gap-4 lg:py-20 w-full lg:w-[70%] mx-auto"
    >
      <h1 className="heading">
        My <span className="text-purple">Experience</span>
      </h1>

      <div className="w-full mt-12 gap-2 lg:gap-10">
        <MovingBorderCard
          key={currentJob[0].id}
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            borderRadius: `calc(1.75rem* 0.96)`,
          }}
          className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          <div className="flex flex-col p-3 py-6 md:p-5 lg:p-10 gap-4 w-full">
            <img
              src={currentJob[0].thumbnail}
              alt={currentJob[0].thumbnail}
              className="w-full lg:w-auto w-16"
            />
            <div className="lg:ms-5 text-left space-y-4">
              <h1 className="text-start text-xl lg:text-4xl font-bold">
                {currentJob[0].company}
              </h1>
              <h2 className="text-start text-base lg:text-xl font-bold">
                {currentJob[0].title}
              </h2>
              <h3 className="text-left text-sm lg:text-base">
                {`${currentJob[0].location} - ${currentJob[0].years[0]} to ${currentJob[0].years[1]}`}
              </h3>
              <div className="flex gap-2 flex-wrap mt-2">
                {currentJob[0].stack.map((str, index): React.ReactNode => {
                  return (
                    <span
                      className="text-yellow-200 font-semibold"
                      key={index + 1}
                    >
                      {str}
                    </span>
                  );
                })}
              </div>
              <ul className="mt-1 list-none text-left text-xs lg:text-base">
                {currentJob[0].desc.map((str, index): React.ReactNode => {
                  return <li key={index + 1}>{str}</li>;
                })}
              </ul>
            </div>
          </div>
        </MovingBorderCard>
      </div>
      <PreviousExperienceExpandable />
      <div className="flex justify-center items-center p-10">
        <ResumeLink />
      </div>
    </div>
  );
}
