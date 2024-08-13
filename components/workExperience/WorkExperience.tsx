import React from "react";
import MovingBorderCard from "../ui/MovingBorderCard";
import { experience } from "../../data";

export default function WorkExperience() {
  const currentJob = experience[0];
  return (
    <div className="relative py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        <MovingBorderCard
          key={currentJob.id}
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
          <div className="flex flex-col p-3 py-6 md:p-5 lg:p-10 gap-4">
            <img
              src={currentJob.thumbnail}
              alt={currentJob.thumbnail}
              className="lg:w-full md:w-auto w-16"
            />
            <div className="lg:ms-5 text-left space-y-4">
              <h1 className="text-start lg:text-4xl font-bold">
                {currentJob.company}
              </h1>
              <h2 className="text-start text-lg md:text-xl font-bold">
                {currentJob.title}
              </h2>
              <ul className="list-none text-left">
                {currentJob.desc.map((str, index): React.ReactNode => {
                    return <li key={index + 1}>{str}</li>;
                })}
              </ul>
              <div className="flex gap-2 flex-wrap mt-2">
                {currentJob.stack.map((str, index): React.ReactNode => {
                    return <span className="text-yellow-200 font-semibold" key={index + 1}>{str}</span>;
                })}
              </div>
            </div>
          </div>
        </MovingBorderCard>
      </div>
    </div>
  );
}
