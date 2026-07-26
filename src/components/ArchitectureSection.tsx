import { Fragment } from "react";
import { ArrowRight, Database, Link2 } from "lucide-react";
import { Card, Reveal, Section, SectionHeading } from "@/components/ui";
import { useLocale } from "@/lib/locales";
import { cn } from "@/utils/cn";

const nodeTone: Record<string, string> = {
  cyan: "border-cyan-400/30 bg-cyan-400/5 text-cyan-200",
  emerald: "border-emerald-400/30 bg-emerald-400/5 text-emerald-200",
  indigo: "border-indigo-400/30 bg-indigo-400/5 text-indigo-200",
};

interface ArchNode {
  label: string;
  sub: string;
  tone: "cyan" | "emerald" | "indigo";
}

const archFlow: ArchNode[] = [
  { label: "Probes", sub: "edge regions", tone: "cyan" },
  { label: "Gateway API", sub: "off-chain", tone: "cyan" },
  { label: "Consensus", sub: "off-chain", tone: "cyan" },
  { label: "TimescaleDB", sub: "off-chain", tone: "cyan" },
  { label: "Merkle batcher", sub: "bridge", tone: "emerald" },
  { label: "Anchor", sub: "on-chain", tone: "indigo" },
];

export function ArchitectureSection() {
  const { locale } = useLocale();
  const t = locale.architecture;

  return (
    <Section id="architecture">
      <SectionHeading
        eyebrow={t.eyebrow}
        title={t.title}
        sub={t.sub}
      />

      <Reveal delay={100} className="mt-10">
        <Card hover={false} className="overflow-x-auto p-5">
          <div className="flex min-w-max items-center gap-2">
            {archFlow.map((node, i) => (
              <Fragment key={node.label}>
                <div
                  className={cn(
                    "flex min-w-[112px] flex-col items-center rounded-xl border px-4 py-3 text-center",
                    nodeTone[node.tone],
                  )}
                >
                  <span className="font-mono text-xs font-medium">{node.label}</span>
                  <span className="mt-0.5 font-mono text-[9px] uppercase tracking-widest opacity-60">
                    {node.sub}
                  </span>
                </div>
                {i < archFlow.length - 1 ? (
                  <ArrowRight className="h-4 w-4 shrink-0 text-slate-700" aria-hidden="true" />
                ) : null}
              </Fragment>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 border-t border-slate-800/70 pt-3 font-mono text-[10px] text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" aria-hidden="true" /> {t.legendOffChain}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" /> {t.legendBridge}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" aria-hidden="true" /> {t.legendOnChain}
            </span>
          </div>
        </Card>
      </Reveal>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Reveal className="h-full">
          <Card hover={false} className="h-full p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10">
                <Database className="h-5 w-5 text-cyan-300" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-slate-50">{t.offChainTitle}</h3>
                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                  {t.offChainSub}
                </p>
              </div>
            </div>
            <ul className="mt-5 grid grid-cols-2 gap-2">
              {t.offChainStack.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 font-mono text-xs text-slate-300 transition-colors duration-200 hover:border-cyan-400/40 hover:text-cyan-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>

        <Reveal delay={120} className="h-full">
          <Card hover={false} className="h-full p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-indigo-400/30 bg-indigo-400/10">
                <Link2 className="h-5 w-5 text-indigo-300" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-slate-50">{t.onChainTitle}</h3>
                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                  {t.onChainSub}
                </p>
              </div>
            </div>
            <ul className="mt-5 grid grid-cols-2 gap-2">
              {t.onChainStack.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 font-mono text-xs text-slate-300 transition-colors duration-200 hover:border-indigo-400/40 hover:text-indigo-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </div>

      <Reveal delay={140} className="mt-6">
        <Card hover={false} className="relative overflow-hidden p-6 text-center sm:p-10">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(129,140,248,0.08),transparent_65%)]"
            aria-hidden="true"
          />
          <p className="relative mx-auto max-w-2xl font-display text-xl font-semibold leading-snug text-slate-100 sm:text-2xl">
            {t.callout}{" "}
            <span className="text-slate-400">{t.calloutAccent}</span>
          </p>
        </Card>
      </Reveal>
    </Section>
  );
}
