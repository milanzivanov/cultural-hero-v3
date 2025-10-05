import { Author } from "@/components/Author";
import { Categories } from "@/components/Categories";
import { components } from "@/sanity/portableTextComponents";
import { PortableText } from "next-sanity";
import { POST_BY_SLUG_QUERYResult } from "@/sanity/types";
import { PublishedAt } from "@/components/PublishedAt";
import { Title } from "@/components/Title";
import BackToTopButton from "./BackToTopButton";
import BackTo from "./BackTo";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

import { RelatedPosts } from "@/components/RelatedPosts";

import { FaArrowCircleLeft } from "react-icons/fa";

export function Post(props: NonNullable<POST_BY_SLUG_QUERYResult>) {
  const { _id, title, author, body, publishedAt, categories, relatedPosts } =
    props;

  return (
    <>
      <article className="container mx-auto max-w-5xl grid grid-cols-1 gap-y-6 md:gap-y-12">
        <header className="flex justify-between items-center">
          <Link
            href="/posts"
            className="flex justify-between items-center hover:text-blue-600 hover:dark:text-amber-200 transition-colors text-blue-600 dark:text-amber-200"
          >
            <FaArrowCircleLeft className="size-5 mr-2" />
            <span className=" hover:text-blue-600 hover:dark:text-amber-200 transition-colors text-blue-600 dark:text-amber-200 text-xs md:text-base">
              Nazad na naslove
            </span>
          </Link>
          <ThemeToggle />
        </header>
        <header className="lg:col-span-12 flex flex-col gap-4 items-start">
          <div className="flex gap-4 items-center">
            <Categories categories={categories} />
            <PublishedAt publishedAt={publishedAt} />
          </div>
          <Title>{title}</Title>
          <Author author={author} />
        </header>
        {body ? (
          <div className="prose max-w-none w-full prose-img:mx-0 dark:prose-invert">
            <PortableText value={body} components={components} />
            <RelatedPosts
              relatedPosts={relatedPosts}
              documentId={_id}
              documentType="post"
            />
          </div>
        ) : null}
      </article>

      <div className="flex justify-end">
        <BackTo />
      </div>
      <BackToTopButton />
    </>
  );
}
