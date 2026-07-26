import { TriangleAlert } from "lucide-react";
import { Badge, Card, CountUp, Reveal, Section, SectionHeading } from "@/components/ui";
import { caTable, changeTypes, researchStats, statCards } from "@/lib/data";
import { useInView } from "@/lib/hooks";
import { cn } from "@/utils/cn";

const accents = [
  "border-t-cyan-400/60",
  "border-t-emerald-400/60",
  "border-t-indigo-400/60",
  "border-t-rose-400/60",
  "border-t-cyan-400/60",
  "border-t-amber-400/60",
];

function MeterBar({ pct, barClass, delay = 0 }: { pct: number; barClass: string; delay?: number }) {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
      <div
        className={cn("h-full rounded-full transition-[width] duration-1000 ease-out", barClass)}
        style={{ width: inView ? `${pct}%` : "0%", transitionDelay: `${delay}ms` }}
      />
    </div>
  );
}

export function ResearchSnapshot() {
  return (
    <Section id="research">
      <SectionHeading
        eyebrow="Research snapshot"
        badge={<Badge tone="amber">Preliminary</Badge>}
        title="Early H1/H2 snapshot"
        sub="Preliminary probe run across Tranco-derived domains. Numbers are internal research data and will be updated as longer observation windows complete."
      />

      <Reveal delay={100}>
        <p className="mt-6 flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs text-slate-500">
          <span>
            n = <span className="text-cyan-300">{researchStats.domainsObserved}</span> domains
          </span>
          <span>
            window <span className="text-cyan-300">{researchStats.observationWindow}</span>
          </span>
          <span>
            changes <span className="text-cyan-300">{researchStats.certChanges}</span>
          </span>
          <span>
            false positives <span className="text-emerald-300">{researchStats.falsePositives}</span>
          </span>
          <span>
            regions <span className="text-indigo-300">{researchStats.regions}</span>
          </span>
        </p>
      </Reveal>

      {/* stat cards */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {statCards.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 70} className="h-full">
            <Card className={cn("h-full border-t-2 p-6", accents[i % accents.length])}>
              <p className="font-display text-4xl font-bold tracking-tight text-slate-50">
                <CountUp to={stat.value} prefix={stat.prefix ?? ""} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-slate-300">{stat.label}</p>
              <p className="mt-1 font-mono text-[11px] text-slate-600">{stat.sub}</p>
            </Card>
          </Reveal>
        ))}
      </div>

      {/* ca table + change mix */}
      <div className="mt-6 grid gap-4 lg:grid-cols-5">
        <Reveal className="h-full lg:col-span-3">
          <Card hover={false} className="h-full p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-display text-base font-semibold text-slate-100">
                CA Top 5 — change count
              </h3>
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                intermediate · events · issuer
              </span>
            </div>
            <div className="mt-4">
              {caTable.map((row, i) => {
                const max = caTable[0].count;
                return (
                  <div
                    key={row.ca}
                    className="grid grid-cols-[52px_1fr_40px] items-center gap-3 border-b border-slate-800/60 py-2.5 last:border-0"
                  >
                    <span className="font-mono text-sm font-medium text-cyan-300">{row.ca}</span>
                    <div className="min-w-0">
                      <MeterBar
                        pct={(row.count / max) * 100}
                        barClass="bg-cyan-400"
                        delay={i * 90}
                      />
                      <p className="mt-1 truncate font-mono text-[10px] text-slate-600">{row.note}</p>
                    </div>
                    <span className="text-right font-mono text-sm text-slate-200">{row.count}</span>
                  </div>
                );
              })}
            </div>
          </Card>
        </Reveal>

        <Reveal delay={120} className="h-full lg:col-span-2">
          <Card hover={false} className="flex h-full flex-col p-6">
            <h3 className="font-display text-base font-semibold text-slate-100">Change type mix</h3>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-slate-600">
              share of confirmed events
            </p>
            <div className="mt-4 flex-1 space-y-4">
              {changeTypes.map((t, i) => (
                <div key={t.label} className="flex items-center gap-3">
                  <span className="w-28 shrink-0 font-mono text-xs text-slate-300">{t.label}</span>
                  <div className="flex-1">
                    <MeterBar pct={t.pct} barClass={t.barClass} delay={i * 90} />
                  </div>
                  <span className="w-10 shrink-0 text-right font-mono text-xs text-slate-500">
                    {t.pct}%
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-5 border-t border-slate-800/70 pt-4 text-xs leading-relaxed text-slate-500">
              Mostly key changes, not simple expiry churn — a distinct signal beyond basic expiry
              monitoring.
            </p>
          </Card>
        </Reveal>
      </div>

      {/* summary + caution */}
      <Reveal delay={100}>
        <p className="mt-8 max-w-3xl text-[15px] leading-relaxed text-slate-400">
          In the initial run, <strong className="font-medium text-slate-200">all observed changes</strong>{" "}
          were independently detected from Seoul, Tokyo, and London. The majority of events were{" "}
          <strong className="font-medium text-cyan-300">key changes</strong> rather than simple
          expiry updates, suggesting that certificate change intelligence is a distinct signal
          beyond basic expiry monitoring.
        </p>
      </Reveal>

      <Reveal delay={160}>
        <div className="mt-5 flex max-w-3xl items-start gap-3 rounded-xl border border-amber-400/25 bg-amber-400/5 p-4">
          <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-amber-300/80">
              observation note
            </p>
            <p className="mt-1 text-sm leading-relaxed text-amber-100/90">
              Longer observation windows are required to separate routine hyperscaler rotation from
              high-value anomalous changes.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
