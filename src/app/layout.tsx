import type { Metadata } from "next";
import { siteConfig } from "@/config";
import { LanguageProvider } from "@/lib/i18n";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.seo.description,
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* FOUC prevention: apply dark class + language before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');if(s==='dark'){document.documentElement.classList.add('dark')}var l=localStorage.getItem('lang');if(l==='en'||l==='es'){document.documentElement.lang=l}}catch(e){}})();`,
          }}
        />
        {/* Inject accent colors from config as CSS custom properties */}
        <style
          dangerouslySetInnerHTML={{
            __html: `:root{--accent-color:${siteConfig.accentColorLight}}.dark{--accent-color:${siteConfig.accentColorDark}}`,
          }}
        />
      </head>
      <body className="bg-[#f9f9fb] dark:bg-[#111113] text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
        <LanguageProvider>
          {children}
          <ScrollReveal />
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
