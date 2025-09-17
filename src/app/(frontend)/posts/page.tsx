import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { Title } from "@/components/Title";
import { PostCard } from "@/components/PostCard";

export default async function Page() {
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY });

  return (
    <main className=" grid grid-cols-1 gap-6 px-0 pb-12">
      <div className="bg-slate-100 dark:bg-slate-700 p-6">
        <div className="max-w-7xl mx-auto">
          <Title>Naslovi</Title>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col gap-24 py-12">
        {posts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>
    </main>
  );
}
