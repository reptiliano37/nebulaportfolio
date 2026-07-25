import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageDetailClient from "@/components/PageDetailClient";

export function generateStaticParams() {
  return siteConfig.pages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = siteConfig.pages.find((p) => p.slug === slug);
  if (!page) return {};
  return { title: `${page.title} — ${siteConfig.name}`, description: page.subtitle };
}

export default async function PageDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const exists = siteConfig.pages.some((p) => p.slug === slug);
  if (!exists) notFound();

  return (
    <>
      <Nav />
      <PageDetailClient slug={slug} />
      <Footer />
    </>
  );
}
