"use client";

import { useTranslation } from "@/lib/i18n";

export default function DownloadResumeButton({ label }: { label: string }) {
  const resumeUrl = useTranslation().hero.resumeUrl;

  const handleDownload = () => {
    if (!resumeUrl) return;
    const fallbackName = "resume.pdf";
    const pathname = resumeUrl.split("?")[0];
    const filename = pathname.split("/").pop() || fallbackName;
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = filename;
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <button
      onClick={handleDownload}
      disabled={!resumeUrl}
      aria-label={label}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold border tracking-wide transition-all duration-200 hover:-translate-y-px active:translate-y-0 glass-card disabled:opacity-60 disabled:cursor-not-allowed"
      style={{ color: "var(--accent-color)", borderColor: "color-mix(in srgb, var(--accent-color) 40%, transparent)" }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
        <path d="M7 11l5 5 5-5" />
        <path d="M12 4v12" />
      </svg>
      {label}
    </button>
  );
}
