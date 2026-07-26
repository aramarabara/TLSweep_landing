import { cn } from "@/utils/cn";
import { researchStats } from "@/lib/data";
import { useLocale } from "@/lib/locales";
import { Logo, containerCls } from "@/components/ui";

export function Footer() {
  const { locale } = useLocale();
  const t = locale.footer;

  return (
    <footer className="relative border-t border-slate-800/70 bg-slate-950/80">
      <div className={cn(containerCls, "grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr] lg:grid-cols-[1.5fr_repeat(4,1fr)]")}>
        <div>
          <a href="#overview" className="flex items-center gap-2.5" aria-label="TLSweep — back to top">
            <Logo className="h-7 w-7" />
            <span className="font-display text-[17px] font-semibold tracking-tight text-slate-50">
              {locale.navbar.logo}<span className="text-cyan-400">{locale.navbar.logoAccent}</span>
            </span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
            {t.description}
          </p>
          <p className="mt-5 flex items-center gap-2 font-mono text-[11px] text-slate-600">
            <span className="pulse-soft h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
            {t.networkLabel} {researchStats.regions}
          </p>
        </div>

        {t.columns.map((col) => (
          <nav key={col.title} aria-label={`Footer — ${col.title}`}>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) =>
                link.note ? (
                  <li key={link.label} className="max-w-[230px] text-xs leading-relaxed text-slate-600">
                    {link.label}
                  </li>
                ) : (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-cyan-300"
                      {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-slate-800/70">
        <div
          className={cn(
            containerCls,
            "flex flex-col items-start justify-between gap-3 py-6 sm:flex-row sm:items-center",
          )}
        >
          <p className="text-sm text-slate-500">
            {t.description}
          </p>
          <div className="flex items-center gap-5 font-mono text-[11px] text-slate-600">
            <span>{t.copyright}</span>
            <a href="#overview" className="transition-colors hover:text-cyan-300">
              {t.backToTop}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
