"use client";
import {
  AmazonwebservicesOriginalWordmark,
  Css3Plain,
  GithubOriginal,
  GitPlain,
  JavaOriginal,
  JavascriptOriginal,
  JiraPlain,
  PostgresqlPlain,
  RailsPlain,
  ReactOriginal,
  RspecOriginal,
  RubyPlain,
  SassOriginal,
  SentryOriginal,
  SpringOriginal,
  SqldeveloperOriginal,
  TailwindcssOriginal,
  TypescriptPlain,
} from "devicons-react";

const stack = [
  ["Ruby on Rails", <RailsPlain key={1} />],
  ["Ruby", <RubyPlain key={2} />],
  ["ReactJS/TS", <ReactOriginal key={3} />],
  ["JavaScript", <JavascriptOriginal key={4} />],
  ["TypeScript", <TypescriptPlain key={5} />],
  ["Springboot", <SpringOriginal key={6} />],
  ["JAVA", <JavaOriginal key={7} />],
  ["SQL", <SqldeveloperOriginal key={8} />],
  ["PostgreSQL", <PostgresqlPlain key={9} />],
  ["SASS", <SassOriginal key={10} />],
  ["StyledComponents", <SiStyledcomponents key={19} />],
  ["TailwindCSS", <TailwindcssOriginal key={11} />],
  ["CSS", <Css3Plain key={12} />],
  ["AWS", <AmazonwebservicesOriginalWordmark key={13} />],
  ["Sentry", <SentryOriginal key={14} />],
  ["Rspec", <RspecOriginal key={15} />],
  ["Jira", <JiraPlain key={16} />],
  ["GIT", <GitPlain key={17} />],
  ["Github", <GithubOriginal key={18} />],
];
import React from "react";
import { motion } from "framer-motion";
import { SiStyledcomponents } from "react-icons/si";

export default function TechStackCard() {
  const bulletedPillStyle =
    "flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] items-center gap-1 bg-white dark:bg-black max-h-fit max-w-fit max-h-[3rem] py-1 px-2";

  return (
    <motion.div className="flex items-center justify-center flex-row flex-wrap gap-2 mt-5 relative">
      {stack.map((tech, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.2 }}
          className={bulletedPillStyle}
        >
          {tech[1]}
          <p className="w-full text-base font-bold leading-relaxed text-left">
            {tech[0]}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
