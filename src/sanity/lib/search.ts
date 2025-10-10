import { sanityFetch } from "./live";
import { searchPostsByTerm } from "./queries";
import type { POSTS_QUERYResult } from "../types";

export const searchPostsAction = async (
  term: string
): Promise<POSTS_QUERYResult> => {
  const q = `*${term}*` || "";

  try {
    const { data } = await sanityFetch({
      query: searchPostsByTerm,
      params: { q }
    });
    return data || [];
  } catch (error) {
    console.error("Error fetching posts by title:", error);
    return [];
  }
};
