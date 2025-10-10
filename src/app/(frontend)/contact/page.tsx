import { Header } from "@/components/Header";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";

export const metadata = {
  title: "Kulturni heroj | Kontakt"
};

function page() {
  return (
    <>
      <Header />

      {/* bg img */}
      <div className="flex flex-col items-center justify-between max-w-7xl mx-auto px-5 pb-5">
        <div className="rounded-3xl rounded-t-none relative h-[50dvh] w-full bg-[url('/fotelja2.webp')] bg-cover bg-right bg-no-repeat overflow-hidden">
          <div className="absolute rounded-3xl rounded-t-none inset-0 bg-slate-700/40 dark:bg-slate-700/40"></div>
        </div>
      </div>

      {/* text box*/}
      <div className="flex flex-col md:flex-row justify-center mx-auto max-w-7xl gap-5 px-5">
        {/* left box */}
        <div className="flex-1 flex justify-center items-center max-w-xl">
          <p className="relative z-20 leading-relaxed text-sm md:text-base text-slate-700 dark:text-slate-200">
            Vidovi kulturnog herojstva današnjice ogledaju se i na digitalnim
            platformama. Mit(ovi) o Prometeju i(li) o Argonautima nisu, nisu baš
            kako se često čini savremenim istraživačima, daleko od kulturne
            stvarnosti digitalizovanog okruženja u kojem živimo.
          </p>
        </div>

        {/* right box */}
        <div className="flex-1">
          <div className="flex flex-col items-start md:items-center bg-slate-200 dark:bg-slate-700 rounded-3xl">
            <h3 className="flex flex-col justify-center space-y-2 text-left rounded-none  font-extrabold tracking-wide text-slate-700 dark:text-slate-300 md:space-y-4 md:rounded-md text-sm md:text-xl px-5 py-10">
              <span className="block">Kontaktiraj</span>
              <span className="block ">kulturnog heroja</span>
              <span className="block">
                <a href="mailto:kulturniheroj@gmail.com">
                  kulturniheroj@gmail.com
                </a>
              </span>
            </h3>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between max-w-7xl mx-auto p-5">
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

        <Link
          href="https://www.facebook.com/profile.php?id=61581500142378"
          target="_blank"
        >
          <FaFacebook size={40} className="text-blue-700 dark:text-amber-200" />
        </Link>
      </div>
    </>
  );
}
export default page;
