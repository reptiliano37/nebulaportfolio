"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  defaultLocale,
  locales,
  translations,
  type Locale,
  type SiteConfig,
} from "@/config";

const STORAGE_KEY = "lang";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: SiteConfig;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLocale(value: string | null): value is Locale {
  return value !== null && (locales as string[]).includes(value);
}

function resolveInitialLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) return stored;
    const browser = window.navigator.language.slice(0, 2).toLowerCase();
    if (isLocale(browser)) return browser;
  } catch {
    /* ignore storage/access errors */
  }
  return defaultLocale;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Render the default locale during SSR and the first client paint so that
  // hydration matches, then reconcile with the persisted preference on mount.
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    setLocaleState(resolveInitialLocale());
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore storage errors */
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((current) => {
      const index = locales.indexOf(current);
      const next = locales[(index + 1) % locales.length];
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignore storage errors */
      }
      return next;
    });
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, setLocale, toggleLocale, t: translations[locale] }),
    [locale, setLocale, toggleLocale]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

/** Returns the active-locale SiteConfig. Primary hook for content components. */
export function useTranslation(): SiteConfig {
  return useLanguage().t;
}
