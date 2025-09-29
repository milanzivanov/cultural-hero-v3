import { POST_BY_SLUG_QUERYResult } from "@/sanity/types";
import dayjs from "dayjs";

type PublishedAtProps = {
  publishedAt: NonNullable<POST_BY_SLUG_QUERYResult>["publishedAt"];
};

export function PublishedAt({ publishedAt }: PublishedAtProps) {
  return publishedAt ? (
    <p className="text-xs md:text-balance text-slate-700 dark:text-slate-200">
      {dayjs(publishedAt).format("D MMMM YYYY")}
    </p>
  ) : null;
}
