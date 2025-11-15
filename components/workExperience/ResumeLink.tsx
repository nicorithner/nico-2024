import React from "react";
import { cn } from "@/lib/utils";
import { MdPictureAsPdf } from "react-icons/md";

export default function ResumeLink({ title, url }: { title: string; url: string }) {
  const urlParam: string = url;
  const titleParam: string = title;
  const slideRightStyle: string =
    "group-hover/feature:translate-x-2 transition duration-200";
  return (
    <main className="lg:border-2 relative group/feature bg-gradient-to-r from-slate-900 to-slate-800 active:border-blue-500 cursor-pointer p-2 w-full lg:w-fit rounded-lg">
      <a
        href={urlParam}
        target="_blank"
      >
        <div className="flex items-center gap-3 text-lg font-bold relative z-10">
          <div className="absolute left-0 inset-y-0 h-fit group-hover/feature:min-h-[100%] w-2 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
          <span
            className={cn(
              "flex-shrink-0 text-neutral-800 dark:text-neutral-100",
              slideRightStyle
            )}
          >
            {<MdPictureAsPdf style={{ height: "100%", width: "3rem" }} />}
          </span>
          <span
            className={cn(
              "flex-1 text-neutral-800 dark:text-neutral-100",
              slideRightStyle
            )}
          >
            {titleParam}
          </span>
        </div>
      </a>
    </main>
  );
}
