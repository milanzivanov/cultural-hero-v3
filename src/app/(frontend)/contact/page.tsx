import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";
import Link from "next/link";
import { FaArrowCircleLeft, FaFacebook } from "react-icons/fa";

function page() {
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

        <Link
          href="/"
          className="flex justify-between items-center text-blue-600 dark:text-amber-200 hover:text-blue-600 hover:dark:text-amber-200 transition-colors  ml-auto"
        >
          <FaArrowCircleLeft className="size-5 mr-2" />
          <span className=" hover:text-blue-600 hover:dark:text-amber-200 transition-colors text-blue-600 dark:text-amber-200">
            Nazad na home
          </span>
        </Link>
        <div className="pl-5">
          <ThemeToggle />
        </div>
      </header>

      <div className="flex flex-col items-center justify-between max-w-7xl mx-auto px-5 pb-5">
        <div className="rounded-3xl relative h-[50dvh] w-full bg-[url('/fotelja2.webp')] bg-cover bg-right bg-no-repeat overflow-hidden">
          <div className="absolute rounded-3xl inset-0 bg-slate-700/40 dark:bg-slate-700/40"></div>
        </div>
      </div>
      {/* text box*/}
      <div className="flex flex-col md:flex-row justify-center mx-auto max-w-7xl gap-5 px-5">
        {/* left box */}
        <div className="flex-1 flex justify-center items-center">
          <p className="relative z-20 leading-relaxed text-sm md:text-base text-slate-700 dark:text-slate-200">
            Vidovi kulturnog herojstva današnjice ogledaju se i na digitalnim
            platformama. Mit(ovi) o Prometeju i(li) o Argonautima nisu, nisu baš
            kako se često čini savremenim istraživačima, daleko od kulturne
            stvarnosti digitalizovanog okruženja u kojem živimo.
          </p>
        </div>
        {/* right box */}
        <div className="flex-1">
          <div className="flex flex-col items-center bg-slate-200 dark:bg-slate-700 rounded-3xl">
            <h3 className="flex flex-col justify-center space-y-2 text-left rounded-none p-5 font-extrabold tracking-wide text-slate-700 dark:text-slate-300 md:space-y-4 md:rounded-md text-sm md:text-xl">
              <span className="block">Kontaktiraj</span>
              <span className="block ">kulturnog heroja</span>
              <span className="block">kulturniheroj@gmail.com</span>
            </h3>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between max-w-7xl mx-auto p-5">
        <div className="flex-1">
          <p className="text-xs text-slate-700 dark:text-amber-100 font-mono mt-2">
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
        <Link
          href="https://www.facebook.com/profile.php?id=61581500142378"
          target="_blank"
          className="flex-1 flex justify-end items-center"
        >
          <FaFacebook size={40} className="text-blue-700 dark:text-amber-100" />
        </Link>
      </div>
    </>
  );
}
export default page;
