"use client";

import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full p-5">
      <div className="flex flex-col bg-slate-700 mx-auto w-full max-w-7xl p-10 text-slate-200 rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <h4 className="text-xl font-bold text-slate-200 dark:text-amber-100 pb-5 md:pb-0">
            Kulturni heroj
            {/* <br /> mesto gde se kultura okuplja */}
          </h4>

          <div className="grid grid-cols-2">
            {/* 1 */}
            <ul className="hidden md:flex flex-col items-start gap-5 font-semibold text-slate-200 ">
              <li>
                <Link
                  href="/"
                  className={`hover:text-slate-300 transition-colors`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/posts"
                  className={`hover:text-slate-300 transition-colors`}
                >
                  Naslovi
                </Link>
              </li>
            </ul>

            {/* 2 */}
            <ul className="flex flex-col items-start gap-5 font-semibold text-slate-200">
              <li className="">
                {" "}
                <Link
                  target="_blank"
                  href="#"
                  className="flex items-center gap-3 hover:text-red-200"
                >
                  {" "}
                  <span>LinkedIn</span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.33814 18.4507L14.8803 4.90855L2.79223 4.40488L2.89631 1.90705L18.9794 2.57718L19.6495 18.6603L17.1517 18.7644L16.648 6.67632L3.1059 20.2185L1.33814 18.4507Z"
                      fill="#ffffff"
                    ></path>
                  </svg>
                </Link>
              </li>
              <li className="">
                {" "}
                <Link
                  target="_blank"
                  href="#"
                  className="flex items-center gap-3 hover:text-red-200"
                >
                  {" "}
                  <span>Instagram</span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.33814 18.4507L14.8803 4.90855L2.79223 4.40488L2.89631 1.90705L18.9794 2.57718L19.6495 18.6603L17.1517 18.7644L16.648 6.67632L3.1059 20.2185L1.33814 18.4507Z"
                      fill="#ffffff"
                    ></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10">
          <div className="flex-1">
            <div className="bg-white flex items-center justify-center w-11 h-10 rounded-full">
              <Image
                src="/kh-logo.svg"
                alt="Kulturni heroj"
                width={50}
                height={50}
              />
            </div>
          </div>
          <div className="flex-1">
            <p className="text-xs text-amber-100 font-mono mt-2">
              &copy; 2025 Made by{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://milanzivanov.com"
              >
                milanzivanov.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
