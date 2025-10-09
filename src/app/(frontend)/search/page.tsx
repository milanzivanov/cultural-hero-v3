import AnimatedBorder from "@/components/AnimatedBorder";
import { Header } from "@/components/Header";
import { PostCard } from "@/components/PostCard";
import { searchPostsByTitleAction } from "@/sanity/lib/search";
import Link from "next/link";
import { FaArrowCircleLeft } from "react-icons/fa";

type SearchProps = {
  searchParams?: Promise<{ query?: string }>;
};

async function SearchPage({ searchParams }: SearchProps) {
  const { query = "" } = (await searchParams) ?? {};
  const q = query.trim();
  const posts = q ? await searchPostsByTitleAction(query) : [];

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto p-5 pt-0 md:p-0 py-6">
        {/* bg img */}
        <div className="rounded-3xl rounded-b-none relative w-full h-[30dvh] bg-[url('/knjige.webp')] bg-cover bg-right bg-no-repeat flex">
          <div className="absolute rounded-3xl rounded-b-none inset-0 bg-slate-700/40"></div>
        </div>

        {!query ? (
          <div className="bg-slate-200 dark:bg-slate-700 rounded-3xl rounded-t-none px-5 py-3 md:p-6">
            <h5 className="text-md md:text-xl font-semibold text-slate-700 dark:text-slate-50 tracking-wide text-pretty mb-8">
              Niste uneli nikakav pojam u polje za pretragu.
              <br /> Vratite se nazad i pokušajte ponovo.
            </h5>
            <Link
              href="/posts"
              className="flex justify-center md:justify-end items-center hover:text-blue-600 hover:dark:text-amber-200 transition-colors text-blue-600 dark:text-amber-200"
            >
              <FaArrowCircleLeft className="size-5 mr-2" />
              <span className=" hover:text-blue-600 hover:dark:text-amber-200 transition-colors text-blue-600 dark:text-amber-200 text-xs md:text-base">
                Nazad na naslove i pretragu
              </span>
            </Link>
          </div>
        ) : posts.length === 0 ? (
          <div className="bg-slate-200 dark:bg-slate-700 rounded-3xl rounded-t-none px-5 py-3 md:p-6">
            <h5 className="text-md md:text-xl font-semibold text-slate-700 dark:text-slate-50 tracking-wide text-pretty mb-8">
              Nema rezultata za pretragu:{" "}
              <span className="font-bold italic">&quot;{query}&quot;</span>
              . <br /> Vratite se nazad i pokušajte ponovo sa drugim terminom.
            </h5>
            <Link
              href="/posts"
              className="flex justify-center md:justify-end items-center hover:text-blue-600 hover:dark:text-amber-200 transition-colors text-blue-600 dark:text-amber-200"
            >
              <FaArrowCircleLeft className="size-5 mr-2" />
              <span className=" hover:text-blue-600 hover:dark:text-amber-200 transition-colors text-blue-600 dark:text-amber-200 text-xs md:text-base">
                Nazad na naslove i pretragu
              </span>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col">
            <h5 className="text-md md:text-xl font-semibold text-slate-700 dark:text-slate-50 tracking-wide text-pretty py-5">
              Rezultati pretrage za:{" "}
              <span className="font-bold italic">&quot;{query}&quot;</span>
            </h5>

            <AnimatedBorder timeout={0.1} />

            {posts.map((post, i) => (
              <PostCard
                key={post._id}
                {...post}
                isLast={i === posts.length - 1}
              />
            ))}
            <Link
              href="/posts"
              className="flex justify-center md:justify-end items-center hover:text-blue-600 hover:dark:text-amber-200 transition-colors text-blue-600 dark:text-amber-200 mb-8"
            >
              <FaArrowCircleLeft className="size-5 mr-2" />
              <span className=" hover:text-blue-600 hover:dark:text-amber-200 transition-colors text-blue-600 dark:text-amber-200 text-xs md:text-base">
                Nazad na naslove i pretragu
              </span>
            </Link>
          </div>
        )}
      </main>
    </>
  );
}
export default SearchPage;
