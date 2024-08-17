import React from "react";
import { cn } from "@/lib/utils";
import { MdPictureAsPdf } from "react-icons/md";

export default function ResumeLink() {
  const url: string = "https://drive.google.com/file/d/1ncNRoWOo-jnHhANPa7lrZU7r2TUMZMAh/view?usp=drive_link";
  const title: string = "Grab My Resume";
  const slideRightStyle: string =
    "group-hover/feature:translate-x-2 transition duration-200";
  return (
    <main className="lg:border-2 relative group/feature bg-gradient-to-r from-slate-900 to-slate-800 active:border-blue-500  w-[15rem] cursor-pointer p-2 max-w-fit rounded-lg">
      <a
        href={url}
        target="_blank"
      >
        <div className="grid grid-cols-4 gap-2 text-lg font-bold relative z-10 justify-center items-center">
          <div className="absolute left-0 inset-y-0 h-fit group-hover/feature:min-h-[100%] w-2 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
          <span
            className={cn(
              "col-span-1 inline-block text-neutral-800 dark:text-neutral-100",
              slideRightStyle
            )}
          >
            {<MdPictureAsPdf style={{ height: "100%", width: "3rem" }} />}
          </span>
          <span
            className={cn(
              "col-span-3 inline-block text-neutral-800 dark:text-neutral-100",
              slideRightStyle
            )}
          >
            {title}
          </span>
        </div>
      </a>
    </main>
  );
}
