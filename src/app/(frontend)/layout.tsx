import { SanityLive } from "@/sanity/lib/live";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="bg-slate-50 dark:bg-slate-900 min-h-screen">
      {children}
      <SanityLive />
    </section>
  );
}
