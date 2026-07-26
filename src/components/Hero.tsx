import { ArrowRight, FlaskConical } from "lucide-react";
import { Badge, Button, Container, Reveal, ScrambleText } from "@/components/ui";
import { NetworkMapMock } from "@/components/NetworkMapMock";
import { TerminalPanel } from "@/components/TerminalPanel";

export function Hero() {
  return (
    <section id="overview" className="relative overflow-hidden">
      {/* ambient glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 left-1/2 h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(34,211,238,0.13),transparent_70%)] blur-2xl" />
        <div className="absolute -right-40 top-40 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(52,211,153,0.09),transparent_70%)] blur-2xl" />
        <div className="absolute -left-40 top-24 h-[380px] w-[380px] rounded-full bg-[radial-gradient(closest-side,rgba(129,140,248,0.08),transparent_70%)] blur-2xl" />
      </div>

      <Container className="relative grid items-start gap-12 pb-16 pt-14 sm:pt-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:pb-24 lg:pt-16">
        {/* copy */}
        <div>
          <Reveal>
            <div className="flex flex-wrap gap-2">
              <Badge tone="cyan">Open-source probes</Badge>
              <Badge tone="emerald">Threshold consensus = 3</Badge>
              <Badge tone="indigo">Off-chain data, on-chain proofs</Badge>
              <Badge tone="slate">TLS + DNS intelligence</Badge>
            </div>
          </Reveal>

          <h1 className="mt-7 font-display text-[2.1rem] font-bold leading-[1.06] tracking-tight text-slate-50 sm:text-5xl lg:text-[3.1rem]">
            <ScrambleText text="Cross-region certificate intelligence," className="block" />
            <ScrambleText text="verified by probes." className="block text-cyan-400" delay={350} />
          </h1>

          <Reveal delay={150}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              TLSweep tracks public TLS certificate and DNS changes across regions, verifies
              observations through independent probes, and anchors confirmed events with
              tamper-evident Merkle proofs.
            </p>
          </Reveal>

          <Reveal delay={250}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" href="#probe">
                Run a Probe
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="secondary" href="#research">
                <FlaskConical className="h-4 w-4 text-cyan-300" />
                Explore the Research Snapshot
              </Button>
            </div>
          </Reveal>

          <Reveal delay={350}>
            <p className="mt-7 font-mono text-xs leading-relaxed text-slate-500">
              <span className="text-emerald-400">●</span> v0.4.2-research · 3 regions live · 78K
              domains under observation ·{" "}
              <span className="text-slate-400">not an investment product</span>
            </p>
          </Reveal>
        </div>

        {/* dashboard visual */}
        <Reveal delay={200} className="relative">
          <div
            className="animate-float-y absolute -top-5 right-2 z-20 hidden items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/95 px-3 py-2 font-mono text-[10px] shadow-xl shadow-cyan-950/30 sm:flex"
            aria-hidden="true"
          >
            <span className="text-slate-500">batch #4821</span>
            <span className="text-indigo-300">root 0x9f3a…c21d</span>
            <span className="text-emerald-400">anchored ✓</span>
          </div>

          <NetworkMapMock />

          <TerminalPanel className="relative z-10 mt-4" />
        </Reveal>
      </Container>
    </section>
  );
}
