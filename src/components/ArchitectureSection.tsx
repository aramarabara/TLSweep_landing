import { Fragment } from "react";
import { ArrowRight, Database, Link2 } from "lucide-react";
import { Card, Reveal, Section, SectionHeading } from "@/components/ui";
import { archFlow, offChainStack, onChainStack } from "@/lib/data";
import { cn } from "@/utils/cn";

const nodeTone: Record<string, string> = {
  cyan: "border-cyan-400/30 bg-cyan-400/5 text-cyan-200",
  emerald: "border-emerald-400/30 bg-emerald-400/5 text-emerald-200",
  indigo: "border-indigo-400/30 bg-indigo-400/5 text-indigo-200",
};

export function ArchitectureSection() {
  return (
    <Section id="architecture">
      <SectionHeading
        eyebrow="Architecture"
        title="Pragmatic architecture, not blockchain theater."
        sub="Heavy data stays in a normal warehouse. The chain only ever sees accounting state and compact commitments."
      />

      {/* flow diagram */}
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
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" aria-hidden="true" /> off-chain
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" /> bridge
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" aria-hidden="true" /> on-chain
            </span>
          </div>
        </Card>
      </Reveal>

      {/* two columns */}
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Reveal className="h-full">
          <Card hover={false} className="h-full p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10">
                <Database className="h-5 w-5 text-cyan-300" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-slate-50">Off-chain</h3>
                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                  the data warehouse
                </p>
              </div>
            </div>
            <ul className="mt-5 grid grid-cols-2 gap-2">
              {offChainStack.map((item) => (
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
                <h3 className="font-display text-lg font-semibold text-slate-50">On-chain</h3>
                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                  the accounting ledger
                </p>
              </div>
            </div>
            <ul className="mt-5 grid grid-cols-2 gap-2">
              {onChainStack.map((item) => (
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

      {/* callout */}
      <Reveal delay={140} className="mt-6">
        <Card hover={false} className="relative overflow-hidden p-6 text-center sm:p-10">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(129,140,248,0.08),transparent_65%)]"
            aria-hidden="true"
          />
          <p className="relative mx-auto max-w-2xl font-display text-xl font-semibold leading-snug text-slate-100 sm:text-2xl">
            The blockchain layer does not store the whole internet.{" "}
            <span className="text-slate-400">It stores accounting state and compact proofs.</span>
          </p>
        </Card>
      </Reveal>
    </Section>
  );
}
