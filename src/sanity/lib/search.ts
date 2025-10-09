import { sanityFetch } from "./live";
import { searchPostsByTitle } from "./queries";
import type { POSTS_QUERYResult } from "../types";

export const searchPostsByTitleAction = async (
  searchTerm: string
): Promise<POSTS_QUERYResult> => {
  try {
    const { data } = await sanityFetch({
      query: searchPostsByTitle,
      params: { searchTerm: `*${searchTerm}*` }
    });
    return data || [];
  } catch (error) {
    console.error("Error fetching posts by title:", error);
    return [];
  }
};
