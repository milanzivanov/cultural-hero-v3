import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { Title } from "@/components/Title";
import { PostCard } from "@/components/PostCard";

export default async function Page() {
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY });

  return (
    <main className="max-w-7xl mx-auto grid grid-cols-1 gap-6 px-0 pb-12">
      <div className="bg-slate-50 rounded-lg p-6">
        <Title>Naslovi</Title>
      </div>
      <div className="flex flex-col gap-24 py-12">
        {posts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>
    </main>
  );
}
