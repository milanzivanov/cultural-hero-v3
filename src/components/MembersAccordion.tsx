"use client";

import { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import { motion, AnimatePresence } from "framer-motion";

import type { MEMBERS_QUERYResult } from "@/sanity/types";

export default function MembersAccordion({
  members
}: {
  members: MEMBERS_QUERYResult;
}) {
  const [activeId, setActiveId] = useState<string | null>(
    members[0]?._id ?? null
  );

  return (
    <div className="max-w-7xl bg-gradient-to-r from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-700 md:rounded-3xl mx-auto py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 sm:px-6 gap-4 sm:gap-6">
        {members.map((member) => {
          const isOpen = activeId === member._id;
          return (
            <motion.article
              key={member._id}
              initial={false}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="rounded-2xl bg-white/90 dark:bg-slate-800/80 shadow-sm ring-1 ring-slate-200/70 dark:ring-slate-700/60 overflow-hidden"
            >
              <button
                type="button"
                className="group flex w-full items-center justify-between gap-4 px-4 sm:px-5 py-4 text-left cursor-pointer transition-colors hover:bg-slate-50 dark:hover:bg-slate-700/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 dark:focus-visible:ring-slate-300"
                onClick={() => setActiveId(member._id)}
                aria-expanded={isOpen}
                aria-controls={`panel-${member._id}`}
                id={`control-${member._id}`}
              >
                <div className="flex items-center gap-4">
                  {member?.image ? (
                    <Image
                      src={urlFor(member.image).width(60).height(60).url()}
                      width={60}
                      height={60}
                      alt={member.name || ""}
                      className="bg-slate-300 dark:bg-slate-200 shadow-inner rounded-full ring-1 ring-slate-300/60 dark:ring-slate-600/60"
                    />
                  ) : (
                    <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-300 text-sm font-medium">
                      {member?.name?.[0]?.toUpperCase() ?? "?"}
                    </div>
                  )}
                  <div>
                    <h3 className="text-base md:text-xl text-slate-800 dark:text-slate-100 font-semibold capitalize">
                      {member.name}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                      {member.title}
                    </p>
                  </div>
                </div>

                <span
                  className={`shrink-0 transition-transform duration-200 text-slate-500 dark:text-slate-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                >
                  {/* Chevron Down Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-80 group-hover:opacity-100"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    key="content"
                    id={`panel-${member._id}`}
                    role="region"
                    aria-labelledby={`control-${member._id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                    className="px-4 sm:px-5 pb-5"
                  >
                    <div className="text-sm md:text-base mt-2 rounded-2xl bg-slate-50 dark:bg-slate-700/60 p-4 sm:p-5 ring-1 ring-slate-200/70 dark:ring-slate-700/60 text-slate-700 dark:text-slate-100 leading-relaxed">
                      {member?.bio ? <PortableText value={member.bio} /> : null}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
