import Slider from "@/components/Slider";
import Link from "next/link";
import { RECENT_POSTS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import Members from "@/components/Members";
import BackToTopButton from "@/components/BackToTopButton";
import Footer from "@/components/Footer";
import AnimatedBorder from "@/components/AnimatedBorder";
import { Header } from "@/components/Header";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap"
});

export const metadata = {
  title: "Kulturni heroj",
  description:
    "Kulturni heroj je portal za kulturne heroje i koji to zele da postanu..."
};

export default async function Page() {
  const { data: posts } = await sanityFetch({ query: RECENT_POSTS_QUERY });

  if (!posts) return null;

  return (
    <>
      <section
        className="grid grid-cols-1 md:grid-cols-2 h-dvh w-full px-5 py-5 gap-5"
        id="home"
      >
        {/* text */}
        <div className="flex flex-col rounded-3xl h-full w-full bg-gradient-to-r from-slate-200 to-slate-100  dark:from-slate-800 dark:to-slate-700">
          <div>
            <Header />
          </div>
          <div className="relative h-full max-w-3xl mx-auto items-end justify-center z-10 flex flex-col p-5">
            <h1
              className={`${poppins.className} p-5 text-[1.9rem] font-extrabold tracking-widest bg-gradient-to-r from-[#0071bc]  to-[#6366f1] bg-clip-text text-transparent md:text-4xl lg:text-5xl xl:text-[3.8rem] leading-tight`}
            >
              Kulturni heroj
            </h1>

            <AnimatedBorder timeout={0.1} />

            <div className="max-w-md mx-auto text-stone-700 dark:text-slate-200 px-6 pb-5">
              <p className="text-base md:text-lg ">
                Sve vredno što se pojavilo na svetu, treba zahvaliti
                pojedincima.
              </p>
              <span className="block text-right font-bold">
                <i>Kenet Klark</i>
              </span>
            </div>

            <AnimatedBorder timeout={0.2} />

            <div className="flex items-center md:w-auto w-full p-5 pt-0">
              <Link
                href="/posts"
                className="flex items-center justify-center md:w-auto w-full rounded-full bg-blue-600 hover:bg-blue-700 px-6 py-2 text-[0.85rem] tracking-widest text-stone-200 transition-colors duration-300 focus:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-blue-600 md:text-md"
              >
                <span className="text-bold mr-3">Duh pokreće tvar</span>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* img */}
        <div className="rounded-3xl relative h-full w-full bg-[url('/fotelja.webp')] bg-cover bg-right bg-no-repeat hidden md:block">
          <div className="absolute rounded-3xl inset-0 bg-slate-700/40"></div>
        </div>
      </section>

      {/* manifest */}
      <section className="mx-auto max-w-7xl pt-11 pb-10">
        <h2 className="text-center font-bold uppercase leading-6 tracking-wide text-gray-700 dark:text-amber-100 text-lg md:text-xl lg:text-2xl pb-2 md:pb-3">
          Manifest kulturnog heroja
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* left box */}
          <div className="relative md:col-span-2 rounded-none md:rounded-3xl h-full w-full bg-[url('/knjige.webp')] bg-cover bg-right bg-no-repeat hidden md:flex flex-col justify-end md:bg-slate-200 dark:bg-slate-700 shadow-sm">
            <div className="absolute rounded-3xl inset-0 bg-slate-700/50"></div>
            <div
              className="flex flex-col relative z-10 leading-relaxed max-w-lg bg-white p-5 rounded-none md:rounded-tr-3xl md:rounded-bl-3xl text-slate-600 shadow-sm
            "
            >
              <h3 className="text-lg md:text-xl font-bold mb-2 uppercase">
                Dobrošli na blog Kulturnog heroja
              </h3>
              <p className="relative z-20 leading-relaxed text-sm md:text-base">
                Vidovi kulturnog herojstva današnjice ogledaju se i na
                digitalnim platformama. Mit(ovi) o Prometeju i(li) o Argonautima
                nisu, nisu baš kako se često čini savremenim istraživačima,
                daleko od kulturne stvarnosti digitalizovanog okruženja u kojem
                živimo.
              </p>
            </div>
          </div>
          {/* right box */}
          <div className="md:col-span-1 px-5 py-2 md:p-5 rounded-none md:rounded-3xl flex flex-col h-full bg-gradient-to-r from-slate-200 to-slate-100  dark:from-slate-800 dark:to-slate-700 shadow-sm">
            <div className="flex items-center justify-center md:justify-start">
              <h2 className="text-pretty text-md md:text-xl font-bold tracking-wide text-slate-700 dark:text-amber-100 pt-5 md:pt-0 pb-2 md:pb-3">
                Nedavno postavljeni naslovi
              </h2>
            </div>
            <Slider posts={posts || []} />
          </div>
        </div>
      </section>

      {/* members */}
      <section className="mx-auto max-w-7xl pt-7 pb-11">
        <Members />
      </section>

      {/* focus */}
      <section className="max-w-7xl mx-auto pt-7 pb-0 md:pb-11">
        <h2 className="w-full text-center text-lg md:text-2xl font-bold uppercase leading-6 tracking-wide text-gray-700 dark:text-amber-100  pb-2 md:pb-3">
          Naš fokus
        </h2>
        <div className="max-w-7xl bg-gradient-to-r from-slate-200 to-slate-100  dark:from-slate-800 dark:to-slate-700 mx-auto flex flex-col md:rounded-3xl pt-5 pb-15 px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="group relative flex flex-col rounded-3xl p-5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-100 ring-1 ring-slate-200/70 dark:ring-slate-700/60 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
              <h4 className="flex items-center text-sm md:text-lg font-bold">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
                <span>Iskustvo</span>
              </h4>
              <p className="mt-1 text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Rukovodeći se mislima jednog od vodećih antropologa 20. veka
                Džozefa Kembela, da je „istina jedna, mudraci o njoj govore
                različitim imenima“, grupa koja (p)okreće ovaj sajt nastoji da
                reafirmiše kulturno i društveno iskustvo pojedinca i kolektiva u
                kojoj, ovaj, živi i stvara.
              </p>
            </div>
            <div className="group relative flex flex-col rounded-3xl p-5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-100 ring-1 ring-slate-200/70 dark:ring-slate-700/60 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
              <h4 className="flex items-center text-sm md:text-lg font-bold">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
                <span>Tehnologija</span>
              </h4>
              <p className="mt-1 text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Elektronski prostor („prozor“) otvoren je svima onima koji
                razmatraju ulogu Tehnologije u životu Čoveka, baš kao i naporima
                zajednice da u mudrostima „od Veda do Gugla“ sazna Istine
                ljudskog postojanja.
              </p>
            </div>
            <div className="group relative flex flex-col rounded-3xl p-5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-100 ring-1 ring-slate-200/70 dark:ring-slate-700/60 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
              <h4 className="flex items-center text-sm md:text-lg font-bold">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
                <span>Rubrike</span>
              </h4>
              <p className="mt-1 text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Sajt, na osnovu rubrika{" "}
                <span className="font-semibold italic text-gray-700 dark:text-slate-200">
                  (Čas anatomije; Knjigohranilište; Manuskript; Vizuali;
                  Pomenik; Nova proza; Sakrali i Živa Reč...)
                </span>{" "}
                nastoji da (re)afirmiše{" "}
                <span className="italic font-semibold">
                  „vreme prošlo u vremenu sadašnjem za vreme buduće“
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* footer */}
      <Footer />
      <BackToTopButton />
    </>
  );
}
