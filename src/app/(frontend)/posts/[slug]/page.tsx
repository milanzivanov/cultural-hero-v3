import { sanityFetch } from "@/sanity/lib/live";
import { POST_BY_SLUG_QUERY } from "@/sanity/lib/queries";

import { notFound } from "next/navigation";
import { Post } from "@/components/Post";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data: posts } = await sanityFetch({
    query: POST_BY_SLUG_QUERY,
    params
  });

  return {
    title: posts?.title ? `Kulturni heroj - ${posts.title}` : "Kulturni heroj"
  };
}

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: post } = await sanityFetch({
    query: POST_BY_SLUG_QUERY,
    params: await params
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="container max-w-7xl mx-auto grid grid-cols-1 gap-6 p-5 md:p-12">
      <Post {...post} />
    </main>
  );
}
