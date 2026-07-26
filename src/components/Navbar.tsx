import { useEffect, useState } from "react";
import { Languages, Menu, X } from "lucide-react";
import { cn } from "@/utils/cn";
import { ghUrl } from "@/lib/data";
import { Button, GitHubIcon, Logo, containerCls } from "@/components/ui";
import { useLocale } from "@/lib/locales";

export function Navbar() {
  const { locale, setLang } = useLocale();
  const { navLinks } = locale;
  const [active, setActive] = useState("overview");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* scroll-spy */
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-38% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled || open
          ? "border-slate-800/80 bg-[#020617]/85 backdrop-blur-xl"
          : "border-slate-800/40 bg-[#020617]/60 backdrop-blur-md",
      )}
    >
      <div className={cn(containerCls, "flex h-16 items-center justify-between gap-4")}>
        <a href="#overview" className="flex shrink-0 items-center gap-2.5" aria-label="TLSweep — back to top">
          <Logo className="h-7 w-7" />
          <span className="font-display text-[17px] font-semibold tracking-tight text-slate-50">
            {locale.navbar.logo}<span className="text-cyan-400">{locale.navbar.logoAccent}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm transition-colors",
                  isActive ? "text-cyan-300" : "text-slate-400 hover:text-slate-100",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-px h-px bg-cyan-400 transition-opacity duration-300",
                    isActive ? "opacity-100" : "opacity-0",
                  )}
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            onClick={() => setLang(locale.lang === "en" ? "ko" : "en")}
            className="flex h-8 items-center gap-1.5 rounded-lg px-2.5 text-xs font-medium text-slate-400 transition-colors hover:text-cyan-300"
            aria-label={locale.languageSwitch.label}
          >
            <Languages className="h-3.5 w-3.5" />
            {locale.label}
          </button>
          <Button variant="ghost" size="sm" href={ghUrl} external>
            <GitHubIcon className="h-4 w-4" />
            {locale.navbar.github}
          </Button>
          <Button variant="primary" size="sm" href="#probe">
            {locale.navbar.runAProbe}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 text-slate-300 transition-colors hover:border-slate-600 hover:text-slate-100 lg:hidden"
          aria-expanded={open}
          aria-label={locale.navbar.toggleMenu}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-800/80 bg-[#020617]/95 backdrop-blur-xl lg:hidden">
          <nav className={cn(containerCls, "flex flex-col gap-1 py-4")} aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm transition-colors",
                  active === link.href.slice(1)
                    ? "bg-cyan-400/10 text-cyan-300"
                    : "text-slate-300 hover:bg-slate-800/60 hover:text-slate-100",
                )}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-slate-800/80 pt-4">
              <button
                type="button"
                onClick={() => { setLang(locale.lang === "en" ? "ko" : "en"); setOpen(false); }}
                className="flex items-center justify-center gap-1.5 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-300"
              >
                <Languages className="h-4 w-4" />
                {locale.label}
              </button>
              <div className="flex gap-2">
                <Button variant="secondary" href={ghUrl} external className="flex-1">
                  <GitHubIcon className="h-4 w-4" />
                  {locale.navbar.github}
                </Button>
                <Button href="#probe" className="flex-1" onClick={() => setOpen(false)}>
                  {locale.navbar.runAProbe}
                </Button>
              </div>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
