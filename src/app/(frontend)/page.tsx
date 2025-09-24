import Slider from "@/components/Slider";
import Link from "next/link";
import { RECENT_POSTS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import Members from "@/components/Members";
import BackToTopButton from "@/components/BackToTopButton";
import Footer from "@/components/Footer";
import AnimatedBorder from "@/components/AnimatedBorder";

export default async function Page() {
  const { data: posts } = await sanityFetch({ query: RECENT_POSTS_QUERY });

  if (!posts) return null;

  return (
    <>
      <div className="grid grid-cols-2 px-5 pt-0 pb-5 gap-5 h-[calc(100dvh-88px)] w-full">
        {/* text */}
        <div className="flex flex-col rounded-3xl h-full w-full bg-gradient-to-r from-slate-200 to-slate-100  dark:from-slate-800 dark:to-slate-700">
          <div className="relative h-full max-w-3xl mx-auto items-start justify-center z-10 flex flex-col p-5">
            <h1 className="p-5 font-robotoBlack text-[1.7rem] font-black capitalize tracking-widest bg-gradient-to-r from-[#0071bc]  to-[#6366f1] bg-clip-text text-transparent md:text-4xl lg:text-5xl xl:text-[3.8rem] leading-tight">
              Kulturni heroj
            </h1>

            <AnimatedBorder timeout={0.1} />

            <p className="px-5 pb-5 text-base max-w-lg text-left text-stone-700 dark:text-slate-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
              ratione accusamus ducimus. Animi nihil perferendis voluptatum quae
              a ea voluptates?
            </p>

            <AnimatedBorder timeout={0.2} />

            <div className="p-5 pt-0 flex items-center md:w-auto w-full">
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
        <div className="rounded-3xl relative h-full w-full bg-[url('/fotelja.webp')] bg-cover bg-right bg-no-repeat">
          <div className="absolute rounded-3xl inset-0 bg-slate-700/40"></div>
        </div>
      </div>

      {/* manifest */}
      <div className="relative w-full mt-5">
        <div className="relative max-w-7xl mx-auto">
          <div className="relative z-10 mx-auto justify-center flex h-full items-center">
            <h2 className="text-center px-5 py-6 md:pt-8 text-xl font-bold uppercase leading-6 tracking-wide text-gray-700 dark:text-amber-100 md:px-0 md:text-2xl">
              <span className="mb-0 block">Manifest kulturnog heroja</span>
            </h2>
          </div>
          <div className="absolute md:rounded-3xl inset-0  bg-opacity-50 lg:bg-opacity-45"></div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl py-0 md:pb-5">
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
          <div className="md:col-span-1 px-5 py-2 md:p-5 rounded-none md:rounded-3xl flex flex-col h-full bg-slate-100 dark:bg-slate-700 shadow-sm">
            <div className="flex items-center">
              <h2 className="text-pretty pb-2 text-lg md:text-xl font-bold tracking-wide text-slate-700 dark:text-amber-100">
                Nedavno postavljeni naslovi
              </h2>
            </div>
            <Slider posts={posts || []} />
          </div>
        </div>
      </div>
      {/* // */}
      <div className="mx-auto max-w-7xl pt-5 pb-15">
        <Members />
      </div>
      {/* // */}
      <section className="mb-15">
        <div className="max-w-7xl bg-slate-100 dark:bg-slate-700 mx-auto flex flex-col pt-12 pb-5 px-5 rounded-3xl">
          <h2 className="mx-auto text-lg md:text-xl font-bold uppercase leading-6 tracking-wide text-gray-700 dark:text-amber-100 max-w-3xl mb-5">
            Naš fokus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="flex flex-col bg-white rounded-3xl p-5">
              <h4 className="text-slate-700 text-lg font-bold">Iskustvo</h4>
              <p className="text-md text-slate-600">
                Rukovodeći se mislima jednog od vodećih antropologa 20. veka
                Džozefa Kembela, da je „istina jedna, mudraci o njoj govore
                različitim imenima“, grupa koja (p)okreće ovaj sajt nastoji da
                reafirmiše kulturno i društveno iskustvo pojedinca i kolektiva u
                kojoj, ovaj, živi i stvara.
              </p>
            </div>
            <div className="flex flex-col bg-white rounded-3xl p-5">
              <h4 className="text-slate-700 text-lg font-bold">Otvorenost</h4>
              <p className="text-md text-slate-600">
                Elektronski prostor („prozor“) otvoren je svima onima koji
                razmatraju ulogu Tehnologije u životu Čoveka, baš kao i naporima
                zajednice da u mudrostima „od Veda do Gugla“ sazna Istine
                ljudskog postojanja.
              </p>
            </div>
            <div className="flex flex-col bg-white rounded-3xl p-5">
              <h4 className="text-slate-700text-lg font-bold">Afirmacija</h4>
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
      {/* footer */}
      <Footer />
      <BackToTopButton />
    </>
  );
}
