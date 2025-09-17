import { sanityFetch } from "@/sanity/lib/live";
import { POST_BY_SLUG_QUERY } from "@/sanity/lib/queries";
// import { urlFor } from "@/sanity/lib/image";
// import { PortableText } from "next-sanity";

// import { components } from "@/sanity/portableTextComponents";

import { notFound } from "next/navigation";
// import Link from "next/link";
import { Post } from "@/components/Post";
// import Image from "next/image";

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
    <main className="container max-w-7xl mx-auto grid grid-cols-1 gap-6 p-12">
      <Post {...post} />
    </main>
  );
}
