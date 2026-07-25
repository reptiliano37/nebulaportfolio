"use client";
import { notFound } from "next/navigation";
import { useTranslation } from "@/lib/i18n";
import { parseMarkdown } from "@/lib/markdown";

export default function PageDetailClient({ slug }: { slug: string }) {
  const { navigation, pages } = useTranslation();
  const page = pages.find((p) => p.slug === slug);
  if (!page) notFound();

  const html = parseMarkdown(page.markdownContent);

  return (
    <main className="min-h-screen pt-24 pb-16 bg-[#f9f9fb] dark:bg-[#111113]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8">

        {/* Back breadcrumb */}
        <div className="mb-6 animate-fade-in-up">
          <a
            href="/pages"
            className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase text-gray-400 dark:text-gray-500 hover:text-[var(--accent-color)] transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 6l-6 6 6 6" />
            </svg>
            {navigation.pages}
          </a>
        </div>

        {/* Header */}
        <div className="mb-10 animate-fade-in-up" style={{ animationDelay: "0.05s" }}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            {page.title}
          </h1>
          <p className="mt-5 text-base sm:text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            {page.subtitle}
          </p>
        </div>

        {/* Full-width article */}
        <article
          className="prose-content animate-fade-in-up"
          style={{ animationDelay: "0.12s" }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </main>
  );
}
