import { Apple, CheckCircle2, Download, Fingerprint, XCircle } from "lucide-react";
import { Badge, Button, Card, CopyButton, CountUp, Reveal, Section, SectionHeading } from "@/components/ui";
import { dockerCommand, probeFeatures } from "@/lib/data";
import { useInView } from "@/lib/hooks";

function DockerGlyph({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="9" width="18" height="11" rx="1.5" />
      <path d="M7 9V5.5M12 9V4M17 9V5.5" />
      <path d="M7 13h.01M12 13h.01M17 13h.01M7 16.5h.01M12 16.5h.01M17 16.5h.01" />
    </svg>
  );
}

function WindowsGlyph({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M3 5.6 10.5 4.5v7H3v-5.9ZM11.5 4.3 21 3v8.5h-9.5V4.3ZM3 12.5h7.5v7L3 18.4v-5.9ZM11.5 12.5H21V21l-9.5-1.3v-7.2Z" />
    </svg>
  );
}

function StatusRow({ label, value, tone }: { label: string; value: string; tone?: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt className="text-slate-500">{label}</dt>
      <dd className={tone ?? "text-slate-200"}>{value}</dd>
    </div>
  );
}

export function ProbeSection() {
  return (
    <Section id="probe" className="border-t border-slate-800/50 bg-slate-950/40">
      <SectionHeading
        eyebrow="Run a probe"
        title={
          <>
            <span className="block">Run a lightweight probe.</span>
            <span className="block text-emerald-300">Earn access credits.</span>
          </>
        }
        sub="A TLSweep probe is a small Go client that observes assigned domains, signs results, queues safely during outages, and retries with jitter to avoid burst traffic."
      />

      {/* download cards */}
      <div id="download" className="mt-12 grid scroll-mt-24 gap-4 lg:grid-cols-3">
        <Reveal className="h-full">
          <Card className="flex h-full flex-col p-6">
            <div className="flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
                <DockerGlyph />
              </span>
              <Badge tone="cyan">recommended</Badge>
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold text-slate-50">Docker Probe</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
              Best for servers, homelabs, VPS, and researchers.
            </p>
            <div className="mt-4 flex-1 rounded-xl border border-emerald-400/15 bg-black/70 p-4">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                  shell
                </span>
                <CopyButton text={dockerCommand} />
              </div>
              <pre className="mt-2 overflow-x-auto font-mono text-[11px] leading-5 text-emerald-300/90">
                {dockerCommand}
              </pre>
            </div>
            <p className="mt-3 font-mono text-[11px] text-slate-600">
              image · securitychain/probe:latest
            </p>
          </Card>
        </Reveal>

        <Reveal delay={100} className="h-full">
          <Card className="flex h-full flex-col p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-800/60 text-slate-200">
              <Apple className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold text-slate-50">macOS Probe</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
              Menu bar client with simple connected / retrying / offline states.
            </p>
            <div className="flex-1" />
            <Button variant="secondary" href="/downloads/securitychain-probe-macos" className="mt-6 w-full">
              <Download className="h-4 w-4" />
              Download for macOS
            </Button>
            <p className="mt-3 font-mono text-[11px] text-slate-600">universal · macOS 13+ · ~14 MB</p>
          </Card>
        </Reveal>

        <Reveal delay={200} className="h-full">
          <Card className="flex h-full flex-col p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-800/60 text-slate-200">
              <WindowsGlyph />
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold text-slate-50">Windows Probe</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
              System tray client with lightweight background scanning.
            </p>
            <div className="flex-1" />
            <Button
              variant="secondary"
              href="/downloads/securitychain-probe-windows.exe"
              className="mt-6 w-full"
            >
              <Download className="h-4 w-4" />
              Download for Windows
            </Button>
            <p className="mt-3 font-mono text-[11px] text-slate-600">x64 · Windows 10+ · tray client</p>
          </Card>
        </Reveal>
      </div>

      {/* features + live status */}
      <div className="mt-6 grid gap-4 lg:grid-cols-5">
        <Reveal className="h-full lg:col-span-3">
          <Card hover={false} className="h-full p-6">
            <h3 className="font-display text-base font-semibold text-slate-100">
              What the probe does — and never does
            </h3>
            <ul className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {probeFeatures.map((f) => (
                <li key={f.label} className="flex items-center gap-2.5 text-sm text-slate-300">
                  {f.tone === "yes" ? (
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                  ) : null}
                  {f.tone === "no" ? <XCircle className="h-4 w-4 shrink-0 text-rose-400" /> : null}
                  {f.tone === "only" ? (
                    <Fingerprint className="h-4 w-4 shrink-0 text-cyan-400" />
                  ) : null}
                  {f.label}
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-slate-800/70 pt-4 font-mono text-[11px] text-slate-600">
              passive observation only — TLS handshakes and DNS lookups, nothing else
            </p>
          </Card>
        </Reveal>

        <Reveal delay={120} className="h-full lg:col-span-2">
          <Card hover={false} className="flex h-full flex-col p-6">
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-[11px] text-slate-500">probe tray — seoul-01</span>
              <span className="flex items-center gap-1.5 font-mono text-xs text-emerald-300">
                <span className="pulse-soft h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                Connected
              </span>
            </div>
            <dl className="mt-4 space-y-2 font-mono text-xs">
              <StatusRow label="Region" value="Seoul" />
              <StatusRow label="Consensus participation" value="active" tone="text-emerald-300" />
              <StatusRow label="Queued events" value="0" />
            </dl>
            <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[11px] text-slate-500">Credits earned today</span>
                <span className="font-display text-2xl font-bold text-cyan-300">
                  <CountUp to={128} duration={1200} />
                </span>
              </div>
              <CreditsMeter />
              <p className="mt-2 font-mono text-[10px] text-slate-600">rolling 24h · verified observations only</p>
            </div>
            <p className="mt-auto pt-4 font-mono text-[10px] text-slate-600">
              signed with probe key · region slot sel-07
            </p>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}

function CreditsMeter() {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-800">
      <div
        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-[width] duration-1000 ease-out"
        style={{ width: inView ? "64%" : "0%" }}
      />
    </div>
  );
}
