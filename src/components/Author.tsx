import { POST_BY_SLUG_QUERYResult, POSTS_QUERYResult } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

type AuthorFromList = NonNullable<POSTS_QUERYResult[0]["author"]>;
type AuthorFromDetail = NonNullable<
  NonNullable<POST_BY_SLUG_QUERYResult>["author"]
>;
type AuthorProps = {
  author: AuthorFromList | AuthorFromDetail | null;
};

export function Author({ author }: AuthorProps) {
  return author?.image || author?.name ? (
    <div className="flex items-center gap-2">
      {author?.image ? (
        <Image
          src={urlFor(author.image).width(80).height(80).url()}
          width={80}
          height={80}
          alt={author.name || ""}
          className="bg-slate-700 dark:bg-slate-100 size-10 shadow-inner rounded-full"
        />
      ) : null}
      {author?.name ? (
        <p className="text-base text-slate-700 dark:text-amber-100">
          {author.name}
        </p>
      ) : null}
    </div>
  ) : null;
}
