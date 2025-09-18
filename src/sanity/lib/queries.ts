import { defineQuery } from "next-sanity";

export const POSTS_QUERY = defineQuery(
  `*[_type == "post" && defined(slug.current)]|order(publishedAt desc){_id, title, slug,body, mainImage, publishedAt, "categories": coalesce(categories[]->{title, "color": color.hex, slug, _id}, []),  author->{
    name,
    image
  }}`
);

export const RECENT_POSTS_QUERY = /* groq */ `
*[_type == "post"] | order(_createdAt desc) [0...3]{
  _id,
  title,
  body,
  publishedAt,
  slug,
  mainImage,
  "categories": coalesce(categories[]->{title, "color": color.hex, slug, _id}, []),
  author->{
    name,
    image
  }
}
`;

export const POSTS_SLUGS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)]{ 
  "slug": slug.current
}`);

export const POST_BY_SLUG_QUERY = defineQuery(
  `*[_type == "post" && slug.current == $slug][0]{_id,title,body,mainImage,publishedAt, "categories": coalesce(categories[]->{title, "color": color.hex, slug, _id}, []), author->{
    name,
    image
  }}`
);
