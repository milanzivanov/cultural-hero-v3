import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { PostCard } from "@/components/PostCard";
import BackToTopButton from "@/components/BackToTopButton";
import { Header } from "@/components/Header";

import Form from "next/form";

export const metadata = {
  title: "Kulturni heroj | Naslovi"
};

export default async function Page() {
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY });

  return (
    <>
      <Header />
      <main className=" grid grid-cols-1 px-0 pb-12">
        <div className="bg-slate-200 dark:bg-slate-700 px-5 py-3 md:p-6">
          <div className="max-w-7xl mx-auto">
            <Form
              action="/search"
              className="w-full sm:w-auto sm:flex-1 sm:mx-4 sm:mt-0"
            >
              <input
                type="text"
                name="query"
                placeholder="Pretražite naslove, kategorije i autore..."
                className="w-full bg-gray-100 text-gray-800 rounded-xl focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 focus:outline-none border border-gray-300 px-4 py-4"
              />
            </Form>
          </div>
        </div>
        <div className="max-w-6xl p-5 md:p-0 mx-auto flex flex-col gap-10 py-6 md:py-12">
          {posts.map((post, index) => (
            <PostCard
              key={post._id}
              {...post}
              isLast={index === posts.length - 1}
            />
          ))}
        </div>
        <BackToTopButton />
      </main>
    </>
  );
}
