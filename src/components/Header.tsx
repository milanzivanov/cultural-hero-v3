"use client";

import Link from "next/link";
import Image from "next/image";

import ThemeToggle from "./ThemeToggle";

import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <div className="px-6">
      <header className=" flex items-center justify-between p-6 rounded-lg max-w-7xl mx-auto">
        <Link href="/">
          <Image
            src="/kh-logo.svg"
            alt="Kulturni heroj"
            width={38}
            height={38}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
        <ul className="flex ml-auto items-center gap-6 font-semibold text-slate-700">
          <li>
            <Link
              href="/"
              className={`hover:text-blue-600 transition-colors ${pathname === "/" ? "text-blue-600" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/posts"
              className={`hover:text-blue-600 transition-colors ${pathname === "/posts" ? "text-blue-600" : ""}`}
            >
              Naslovi
            </Link>
          </li>
          <li>
            <Link
              className={`hover:text-blue-600 transition-colors ${pathname === "/studio" ? "text-blue-600" : ""}`}
              href="/studio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Studio admin
            </Link>
          </li>
        </ul>
        <div className="flex items-center ml-5">
          <ThemeToggle />
        </div>
      </header>
    </div>
  );
}
