import { BookOpen, Check, GitFork, Star } from "lucide-react";
import { Badge, Button, Card, CopyButton, GitHubIcon, Reveal, Section, SectionHeading } from "@/components/ui";
import { cloneCommand, ghUrl, ossBullets } from "@/lib/data";

const commits = [
  { hash: "a31f9c2", msg: "probe: jittered retry queue with local persistence", time: "2d ago" },
  { hash: "7be04d1", msg: "schema: add san_hash and region_meta to observation v3", time: "5d ago" },
  { hash: "c94e6aa", msg: "verify: merkle proof checker in Go + test vectors", time: "1w ago" },
];

export function OpenSourceSection() {
  return (
    <Section id="open-source" className="border-t border-slate-800/50 bg-slate-950/40">
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Open source"
            title="Built for open security research."
            sub="TLSweep is designed to be inspectable. Probe logic, observation schemas, reward formulas, and verification rules should be public so participants can understand what the software does and how credits are calculated."
          />

          <Reveal delay={120}>
            <ul className="mt-8 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {ossBullets.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-slate-300">
                  <Check className="h-4 w-4 shrink-0 text-cyan-400" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="secondary" href="/docs">
                <BookOpen className="h-4 w-4 text-cyan-300" />
                Read the technical notes
              </Button>
              <Button variant="ghost" href={ghUrl} external>
                <GitHubIcon className="h-4 w-4" />
                View GitHub
              </Button>
            </div>
          </Reveal>
        </div>

        {/* repo mock */}
        <Reveal delay={150}>
          <Card hover={false} className="overflow-hidden">
            <div className="flex items-center justify-between gap-3 border-b border-slate-800/80 px-5 py-4">
              <div className="flex min-w-0 items-center gap-2.5">
                <GitHubIcon className="h-4 w-4 shrink-0 text-slate-400" />
                <span className="truncate font-mono text-sm text-slate-200">
                  securitychain<span className="text-slate-600"> / </span>
                  <span className="font-semibold text-cyan-300">probe</span>
                </span>
              </div>
              <Badge tone="slate">Public</Badge>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-1 border-b border-slate-800/80 px-5 py-3 font-mono text-[11px] text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-cyan-400" aria-hidden="true" />
                Go 92.4%
              </span>
              <span>MIT</span>
              <span className="flex items-center gap-1">
                <Star className="h-3 w-3" /> 1,284
              </span>
              <span className="flex items-center gap-1">
                <GitFork className="h-3 w-3" /> 96
              </span>
            </div>

            <div className="space-y-1 px-5 py-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                recent commits
              </p>
              {commits.map((c) => (
                <div
                  key={c.hash}
                  className="flex items-baseline gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-slate-800/40"
                >
                  <span className="shrink-0 font-mono text-xs text-cyan-300">{c.hash}</span>
                  <span className="min-w-0 flex-1 truncate text-[13px] text-slate-300">{c.msg}</span>
                  <span className="shrink-0 font-mono text-[10px] text-slate-600">{c.time}</span>
                </div>
              ))}
            </div>

            <div className="mx-5 mb-5 flex items-center justify-between gap-3 rounded-xl border border-slate-800 bg-black/70 p-3.5">
              <code className="truncate font-mono text-[11px] text-emerald-300/90">{cloneCommand}</code>
              <CopyButton text={cloneCommand} label="clone" />
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
