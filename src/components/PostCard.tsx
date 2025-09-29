import { Author } from "@/components/Author";
import { Categories } from "@/components/Categories";
import { POSTS_QUERYResult } from "@/sanity/types";
import { PublishedAt } from "@/components/PublishedAt";

// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";

import Link from "next/link";

export function PostCard(props: POSTS_QUERYResult[0] & { isLast?: boolean }) {
  const { title, author, publishedAt, categories, isLast } = props;

  return (
    <Link className="group" href={`/posts/${props.slug!.current}`}>
      <article
        className={`flex flex-col-reverse gap-4 md:grid py-10 md:grid-cols-12 md:gap-0 border-slate-200 dark:border-slate-700 ${isLast ? "border-b-0" : "border-b-2"}`}
      >
        <div className="md:col-span-2 md:pt-1">
          <Categories categories={categories} />
        </div>
        <div className="md:col-span-8 md:w-full">
          <h2 className="text-md md:text-2xl lg:text-3xl text-pretty font-semibold text-slate-800 dark:text-slate-200 group-hover:text-slate-600 transition-colors relative">
            <span className="relative z-[1]">{title}</span>
            <span className="bg-slate-200 z-0 absolute inset-0 rounded-lg opacity-0 transition-all group-hover:opacity-100 group-hover:scale-y-110 group-hover:scale-x-105 scale-75" />
          </h2>
          <div className="flex items-center mt-2 md:mt-6 gap-x-6">
            <Author author={author} />
            <PublishedAt publishedAt={publishedAt} />
          </div>
        </div>
        {/* <div className="md:col-start-9 md:col-span-4 rounded-lg overflow-hidden flex">
          {mainImage?.asset ? (
            <Image
              className="rounded-lg"
              src={urlFor(mainImage).width(300).height(300).url()}
              width={300}
              height={300}
              alt={mainImage.alt || title || ""}
            />
          ) : null}
        </div> */}
      </article>
    </Link>
  );
}
