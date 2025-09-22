import { Header } from "@/components/Header";
import { SanityLive } from "@/sanity/lib/live";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="bg-slate-50 dark:bg-slate-900 min-h-screen">
      <Header />
      {children}
      <SanityLive />
    </section>
  );
}
