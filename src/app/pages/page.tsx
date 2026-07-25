import type { Metadata } from "next";
import { siteConfig } from "@/config";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PagesIndexClient from "@/components/PagesIndexClient";

export const metadata: Metadata = {
  title: `Pages — ${siteConfig.name}`,
  description: siteConfig.engineeringPages.description,
};

export default function PagesIndex() {
  return (
    <>
      <Nav />
      <PagesIndexClient />
      <Footer />
    </>
  );
}
