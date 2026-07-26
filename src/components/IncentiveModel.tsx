import { ArrowRight, Check, KeyRound, ShieldCheck } from "lucide-react";
import { Card, Reveal, Section, SectionHeading } from "@/components/ui";
import { creditsUnlock, incentiveSteps, safeguards } from "@/lib/data";
import { cn } from "@/utils/cn";

const hairline = ["from-cyan-400/60", "from-emerald-400/60", "from-indigo-400/60"];
const numTone = ["text-cyan-400/70", "text-emerald-400/70", "text-indigo-400/70"];

export function IncentiveModel() {
  return (
    <Section id="incentive" className="border-t border-slate-800/50 bg-slate-950/40">
      <SectionHeading eyebrow="Incentive model" title="Contribution becomes access." />

      <Reveal delay={80}>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg">
          TLSweep uses credits to align participation and data access. Verified probe
          observations earn credits. Credits can be used to query history, subscribe to watchlists,
          or refresh domains.
        </p>
      </Reveal>

      <Reveal delay={140}>
        <div className="mt-5 max-w-3xl border-l-2 border-cyan-400/70 pl-4">
          <p className="text-[15px] leading-relaxed text-slate-300">
            Credits are <span className="font-medium text-cyan-300">utility access rights</span>{" "}
            inside the TLSweep network. They are designed for security data usage, not
            financial speculation.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {incentiveSteps.map((step, i) => (
          <Reveal key={step.n} delay={i * 100} className="h-full">
            <Card className="relative h-full overflow-hidden p-6">
              <span
                className={cn("absolute inset-x-0 top-0 h-px bg-gradient-to-r to-transparent", hairline[i])}
                aria-hidden="true"
              />
              <div className="flex items-center justify-between">
                <span className={cn("font-mono text-xs", numTone[i])}>/ {step.n}</span>
                {i < incentiveSteps.length - 1 ? (
                  <ArrowRight className="hidden h-4 w-4 text-slate-700 md:block" aria-hidden="true" />
                ) : null}
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-slate-50">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.body}</p>
            </Card>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Reveal className="h-full">
          <Card hover={false} className="h-full p-6">
            <h3 className="font-display text-base font-semibold text-slate-100">
              What credits unlock
            </h3>
            <ul className="mt-4 space-y-2.5">
              {creditsUnlock.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-slate-300">
                  <KeyRound className="h-4 w-4 shrink-0 text-cyan-400" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-slate-800/70 pt-4 font-mono text-[11px] text-slate-600">
              usage-based access · no yield · not an investment product
            </p>
          </Card>
        </Reveal>

        <Reveal delay={120} className="h-full">
          <Card hover={false} className="h-full border-emerald-400/20 p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-400/10">
                <ShieldCheck className="h-5 w-5 text-emerald-300" />
              </span>
              <h3 className="font-display text-base font-semibold text-slate-100">
                Built-in safeguards
              </h3>
            </div>
            <ul className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {safeguards.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-slate-300">
                  <Check className="h-4 w-4 shrink-0 text-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-emerald-400/10 pt-4 text-xs leading-relaxed text-slate-500">
              Abuse resistance is a design constraint, not an afterthought — rewards follow
              verified, cross-region work.
            </p>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
