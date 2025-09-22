import { motion } from "framer-motion";

import Image from "next/image";
import type { ReactNode } from "react";

type PersonPanelProps = {
  title: string;
  jobTitle: string;
  isActive: boolean;
  onShow: () => void;
  children: ReactNode;
  imgSrc: string;
  altText: string;
};

export default function PersonPanel({
  title,
  jobTitle,
  isActive,
  onShow,
  children,
  imgSrc,
  altText
}: PersonPanelProps) {
  return (
    <section className="w-full">
      <div className="mb-3 flex items-center space-x-3">
        <Image
          className="w-16 rounded-full bg-[#222] shadow-md grayscale backdrop-grayscale-0 md:w-20"
          width={64}
          height={64}
          src={imgSrc}
          alt={altText}
        />
        <div>
          <h3 className="text-lg font-semibold italic text-gray-700 dark:text-amber-100 md:text-xl">
            {title}
          </h3>
          <h4 className="text-xs font-semibold italic text-gray-500 dark:text-slate-300 md:text-base mb-3">
            {jobTitle}
          </h4>
        </div>
      </div>

      {isActive ? (
        <motion.div
          className="bg-white shadow-sm rounded-3xl p-3"
          initial={{ opacity: 0, y: -20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={onShow}
        >
          {children}
        </motion.div>
      ) : (
        <div className="flex justify-end md:justify-start">
          <button
            className="flex items-center rounded-full text-xs text-white px-5 py-3 md:py-2 bg-blue-600 hover:bg-blue-700"
            onClick={onShow}
          >
            <span className="mr-1">Pročitajte više</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
