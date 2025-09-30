"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import ThemeToggle from "./ThemeToggle";

import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="bg-white flex items-center justify-center w-11 h-10 rounded-full">
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
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex ml-auto items-center gap-6 font-semibold text-slate-700 dark:text-slate-200">
          <li>
            <Link
              href="/"
              className={`hover:text-blue-600 hover:dark:text-amber-200 transition-colors ${pathname === "/" ? "text-blue-600 dark:text-amber-200" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/posts"
              className={`hover:text-blue-600 hover:dark:text-amber-200 transition-colors ${pathname === "/posts" ? "text-blue-600 dark:text-amber-200" : ""}`}
            >
              Naslovi
            </Link>
          </li>
          <li>
            <Link
              className={`hover:text-blue-600 hover:dark:text-amber-200 transition-colors ${pathname === "/studio" ? "text-blue-600 dark:text-amber-200" : ""}`}
              href="/studio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Admin
            </Link>
          </li>
        </ul>

        <div className="flex items-center ml-7">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex text-slate-900 dark:text-slate-200 mr-3"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-8 transition-transform duration-200"
              style={{
                transform: isMobileMenuOpen ? "rotate(90deg)" : "rotate(0deg)"
              }}
            >
              {isMobileMenuOpen ? (
                // X icon when menu is open
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger icon when menu is closed
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              )}
            </svg>
          </button>

          <ThemeToggle />
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-100 md:hidden"
          onClick={closeMobileMenu}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* Menu Panel */}
          <div className="absolute rounded-3xl h-[95vh] w-[90%] md:w-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-100 dark:bg-slate-800 shadow-2xl">
            <div className="flex flex-col items-center justify-center rounded-3xl h-[95dvh]">
              {/* Menu Header */}
              <div className="flex items-center w-[90%] justify-end p-6 border-b border-slate-200 dark:border-slate-700">
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-lg text-slate-700 dark:text-slate-200 transition-colors"
                  aria-label="Close menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 p-6 flex flex-col justify-center">
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/"
                      className={`block px-4 py-3 rounded-lg font-semibold transition-colors ${
                        pathname === "/"
                          ? "text-blue-600 dark:text-amber-200 "
                          : "text-slate-700 dark:text-slate-200"
                      }`}
                      onClick={closeMobileMenu}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/posts"
                      className={`block px-4 py-3 rounded-lg font-semibold transition-colors ${
                        pathname === "/posts"
                          ? "text-blue-600 dark:text-amber-200 bg-blue-50 dark:bg-blue-900/20"
                          : "text-slate-700 dark:text-slate-200"
                      }`}
                      onClick={closeMobileMenu}
                    >
                      Naslovi
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/studio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block px-4 py-3 rounded-lg font-semibold transition-colors ${
                        pathname === "/studio"
                          ? "text-blue-600 dark:text-amber-200 bg-blue-50 dark:bg-blue-900/20"
                          : "text-slate-700 dark:text-slate-200"
                      }`}
                      onClick={closeMobileMenu}
                    >
                      Admin
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
