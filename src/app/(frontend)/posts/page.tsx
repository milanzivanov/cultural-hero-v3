import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { Title } from "@/components/Title";
import { PostCard } from "@/components/PostCard";
import BackToTopButton from "@/components/BackToTopButton";
import { Header } from "@/components/Header";

export default async function Page() {
  // Add delay to see loader
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const { data: posts } = await sanityFetch({ query: POSTS_QUERY });

  return (
    <>
      <Header />
      <main className=" grid grid-cols-1 px-0 pb-12">
        <div className="bg-slate-200 dark:bg-slate-700 pl-5 py-3 md:p-6">
          <div className="max-w-7xl mx-auto">
            <Title>Naslovi</Title>
          </div>
        </div>
        <div className="max-w-7xl p-5 md:p-0 mx-auto flex flex-col gap-10 py-6 md:py-12">
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
