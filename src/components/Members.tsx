import { sanityFetch } from "@/sanity/lib/live";
import { MEMBERS_QUERY } from "@/sanity/lib/queries";

import MembersAccordion from "./MembersAccordion";

export default async function About() {
  const { data: members } = await sanityFetch({ query: MEMBERS_QUERY });

  if (!members) return null;

  return (
    <>
      <div className="relative">
        <div className="mx-auto flex h-full max-w-7xl flex-col">
          <div className="relative z-10">
            <h2 className="text-center text-lg md:text-2xl font-bold uppercase leading-6 tracking-wide text-gray-700 dark:text-amber-100 px-5 md:px-0 pb-2 md:pb-3">
              Kulturno-herojsku posadu čine
            </h2>

            <MembersAccordion members={members} />
          </div>
        </div>
      </div>
    </>
  );
}
