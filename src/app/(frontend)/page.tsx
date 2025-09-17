import Slider from "@/components/Slider";
import Link from "next/link";
import { RECENT_POSTS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import About from "@/components/About";

export default async function Page() {
  const { data: posts } = await sanityFetch({ query: RECENT_POSTS_QUERY });

  return (
    <>
      <div className="relative max-w-7xl mx-auto rounded-3xl flex h-[46dvh] w-full items-center justify-center bg-[url('/fotelja.webp')] md:bg-none md:bg-slate-700 bg-cover bg-right bg-no-repeat md:bg-center">
        <div className="absolute inset-0 bg-slate-700/40 rounded-3xl"></div>
        <div className="flex flex-col w-full items-center">
          <div className="relative items-center z-10 flex flex-col">
            <h1
              className="font-robotoBlack mb-0 md:mb-5 text-[1.7rem] font-black uppercase tracking-widest text-stone-200 md:text-4xl lg:text-5xl xl:text-[3.7
            rem]"
            >
              Kulturni heroj
            </h1>
            <div className="flex items-center md:w-auto w-full">
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
      </div>

      <div className="mx-auto max-w-7xl py-0 md:py-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* left box */}
          <div className="relative md:col-span-2 rounded-none md:rounded-3xl hidden md:flex flex-col justify-end h-full bg-none md:bg-[url('/fotelja.webp')] bg-cover bg-right bg-no-repeat md:bg-center">
            <div className="absolute rounded-none md:rounded-3xl inset-0 bg-slate-700/30"></div>
            <div className="flex flex-col relative z-10 leading-relaxed max-w-lg bg-white p-5 rounded-none md:rounded-tr-3xl text-slate-600">
              <h2 className="text-lg md:text-xl font-bold mb-2 uppercase">
                Dobrošli na blog Kulturnog heroja
              </h2>
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
          <div className="md:col-span-1 px-5 py-2 md:p-5 rounded-none md:rounded-3xl flex flex-col h-full bg-slate-100">
            <div className="flex items-center">
              <h2 className="text-pretty pb-2 text-lg md:text-xl font-bold tracking-wide text-slate-700">
                Nedavno postavljeni naslovi
              </h2>
            </div>
            <Slider posts={posts || []} />
          </div>
        </div>
      </div>

      {/* // */}
      <div className="mx-auto max-w-7xl pt-5 pb-15">
        <About />
      </div>

      {/* // */}
      <section className="bg-slate-50 mb-5">
        <div className="max-w-7xl mx-auto flex flex-col py-12">
          <h2 className="mx-auto text-lg md:text-xl font-bold uppercase leading-6 tracking-wide text-gray-700 max-w-3xl">
            Naš fokus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 p-5">
            <div className="flex flex-col gap-4">
              <p className="text-md text-slate-600">
                Rukovodeći se mislima jednog od vodećih antropologa 20. veka
                Džozefa Kembela, da je „istina jedna, mudraci o njoj govore
                različitim imenima“, grupa koja (p)okreće ovaj sajt nastoji da
                reafirmiše kulturno i društveno iskustvo pojedinca i kolektiva u
                kojoj, ovaj, živi i stvara.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-md text-slate-600">
                Elektronski prostor („prozor“) otvoren je svima onima koji
                razmatraju ulogu Tehnologije u životu Čoveka, baš kao i naporima
                zajednice da u mudrostima „od Veda do Gugla“ sazna Istine
                ljudskog postojanja.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-md text-slate-600">
                Sajt, na osnovu rubrika{" "}
                <span className="font-semibold italic text-gray-700">
                  (Čas anatomije; Knjigohranilište; Manuskript; Vizuali;
                  Pomenik; Nova proza; Sakrali i Živa Reč...)
                </span>
                nastoji da (re)afirmiše{" "}
                <span className="italic font-semibold">
                  „vreme prošlo u vremenu sadašnjem za vreme buduće“
                </span>{" "}
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* // */}
      <div className="bg-slate-700 h-[300px] max-w-7xl mx-auto flex flex-col mb-5 md:rounded-3xl"></div>
    </>
  );
}
