import { createContext, useContext, useState, type ReactNode } from "react";
import type { Locale } from "./types";
import en from "./en";
import ko from "./ko";

export type { Locale } from "./types";

const locales: Record<string, Locale> = { en, ko };

interface LocaleContextValue {
  locale: Locale;
  setLang: (lang: "en" | "ko") => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("tlsweep-lang") : null;
    return locales[saved ?? "en"] ?? en;
  });

  const setLang = (lang: "en" | "ko") => {
    setLocale(locales[lang] ?? en);
    if (typeof window !== "undefined") {
      localStorage.setItem("tlsweep-lang", lang);
    }
  };

  return (
    <LocaleContext.Provider value={{ locale, setLang }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
