import { tickerEvents } from "@/lib/data";
import { cn } from "@/utils/cn";
import { useLocale } from "@/lib/locales";

const tagTone: Record<string, string> = {
  SEL: "text-cyan-400/80",
  TYO: "text-emerald-400/80",
  LON: "text-indigo-400/80",
  ANC: "text-amber-400/80",
};

const typeTone: Record<string, string> = {
  key_change: "text-cyan-300",
  san_update: "text-emerald-300",
  issuer_change: "text-indigo-300",
  chain_change: "text-cyan-300",
  merkle_batch: "text-amber-300",
  expiry_warn: "text-rose-300",
  regional_variant: "text-indigo-300",
};

export function Ticker() {
  const { locale } = useLocale();
  return (
    <div
      className="ticker relative overflow-hidden border-y border-slate-800/70 bg-slate-950/80"
      aria-label={locale.ticker.label}
    >
      <div className="ticker-track flex w-max items-center">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center gap-10 pr-10" aria-hidden={dup === 1}>
            {tickerEvents.map((e, i) => (
              <span
                key={`${dup}-${i}`}
                className="flex items-center gap-2 whitespace-nowrap font-mono text-[11px]"
              >
                <span className={cn("font-semibold", tagTone[e.tag])}>[{e.tag}]</span>
                <span className={typeTone[e.type]}>{e.type}</span>
                <span className="text-slate-300">{e.domain}</span>
                <span className="text-slate-600">{e.detail}</span>
                <span className="text-slate-800">//</span>
              </span>
            ))}
          </div>
        ))}
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#020617] to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#020617] to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}
