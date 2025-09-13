import { defineQuery } from "next-sanity";

export const POSTS_QUERY = defineQuery(
  `*[_type == "post" && defined(slug.current)][0...10]{_id, title, slug}`
);

export const POST_BY_SLUG_QUERY = defineQuery(
  `*[_type == "post" && slug.current == $slug][0]{title, mainImage, body}`
);

export const CATEGORIES_QUERY = defineQuery(`*[_type == "category"]`);
export const AUTHORS_QUERY = defineQuery(`*[_type == "author"]`);
