import { Author } from "@/components/Author";
import { Categories } from "@/components/Categories";
import { components } from "@/sanity/portableTextComponents";
import { PortableText } from "next-sanity";
import { POST_BY_SLUG_QUERYResult } from "@/sanity/types";
import { PublishedAt } from "@/components/PublishedAt";
import { Title } from "@/components/Title";
import BackToTopButton from "./BackToTopButton";
import BackTo from "./BackTo";

export function Post(props: NonNullable<POST_BY_SLUG_QUERYResult>) {
  const { title, author, body, publishedAt, categories } = props;

  return (
    <>
      <article className="container mx-auto max-w-5xl grid grid-cols-1 gap-y-12">
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
          </div>
        ) : null}
        <hr />
      </article>
      <hr />
      <div className="flex justify-end">
        <BackTo />
      </div>
      <BackToTopButton />
    </>
  );
}
