import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  stega: {
    enabled: process.env.NODE_ENV === "development",
    studioUrl: `${siteUrl}/studio`
  }
});
