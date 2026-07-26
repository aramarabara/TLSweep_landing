import { ChevronRight, Database, Link2 } from "lucide-react";
import { Card, Reveal, Section, SectionHeading } from "@/components/ui";
import { howSteps, pipelineStages } from "@/lib/data";
import { cn } from "@/utils/cn";

function stageTone(i: number): string {
  if (i === 5) return "border-indigo-400/40 bg-indigo-400/10 text-indigo-200";
  if (i === 6) return "border-emerald-400/40 bg-emerald-400/10 text-emerald-200";
  return "border-slate-700 bg-slate-950/70 text-slate-300";
}

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <SectionHeading
        eyebrow="How it works"
        title="Simple pipeline. Verifiable output."
        sub="Observations flow from lightweight edge probes to a tamper-evident anchor — every stage is inspectable."
      />

      {/* pipeline strip */}
      <Reveal delay={120} className="mt-10">
        <Card hover={false} className="overflow-x-auto p-4">
          <div className="flex min-w-max items-center gap-1.5" role="list" aria-label="Data pipeline stages">
            {pipelineStages.map((stage, i) => (
              <div key={stage} className="flex items-center gap-1.5" role="listitem">
                <span
                  className={cn(
                    "flex items-center gap-2 whitespace-nowrap rounded-lg border px-3.5 py-2 font-mono text-xs",
                    stageTone(i),
                  )}
                >
                  <span className="text-slate-600">{String(i + 1).padStart(2, "0")}</span>
                  {stage}
                </span>
                {i < pipelineStages.length - 1 ? (
                  <ChevronRight className="h-4 w-4 shrink-0 text-slate-700" aria-hidden="true" />
                ) : null}
              </div>
            ))}
          </div>
        </Card>
      </Reveal>

      {/* steps */}
      <div className="relative mt-14">
        <span
          className="absolute bottom-4 left-[19px] top-2 w-px bg-gradient-to-b from-cyan-400/40 via-slate-800 to-transparent"
          aria-hidden="true"
        />
        {howSteps.map((step, i) => (
          <Reveal key={step.title} delay={i * 90} className="relative pb-10 pl-14 last:pb-0 sm:pl-16">
            <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-slate-950 font-mono text-xs font-medium text-cyan-300 shadow-[0_0_24px_-8px_rgba(34,211,238,0.5)]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="pt-1.5 font-display text-xl font-semibold text-slate-50">
              <span className="text-slate-500">Step {i + 1} — </span>
              {step.title}
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-[15px]">
              {step.body}
            </p>
          </Reveal>
        ))}
      </div>

      {/* ledger callout */}
      <Reveal delay={120} className="mt-14">
        <Card hover={false} className="grid gap-6 p-6 sm:grid-cols-2 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-indigo-400/30 bg-indigo-400/10">
              <Link2 className="h-5 w-5 text-indigo-300" />
            </span>
            <p className="font-display text-lg font-semibold leading-snug text-slate-100">
              <span className="text-indigo-300">On-chain</span> is the accounting ledger.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10">
              <Database className="h-5 w-5 text-cyan-300" />
            </span>
            <p className="font-display text-lg font-semibold leading-snug text-slate-100">
              <span className="text-cyan-300">Off-chain</span> is the data warehouse.
            </p>
          </div>
        </Card>
      </Reveal>
    </Section>
  );
}
