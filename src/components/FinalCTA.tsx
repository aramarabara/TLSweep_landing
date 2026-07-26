import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button, Card, Container, GitHubIcon, Reveal } from "@/components/ui";
import { ghUrl } from "@/lib/data";

export function FinalCTA() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim()) setJoined(true);
  };

  return (
    <section className="relative py-20 sm:py-24">
      <Container>
        <Reveal>
          <Card hover={false} className="relative overflow-hidden">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.1),transparent_60%)]"
              aria-hidden="true"
            />
            <div className="relative border-b border-slate-800/80 px-6 py-3 sm:px-10">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan-400">
                // join the network
              </span>
            </div>
            <div className="relative px-6 py-10 text-center sm:px-10 sm:py-14">
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-slate-50 sm:text-4xl">
                Help build the certificate intelligence layer.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-400">
                Run a probe, watch your domains, or follow the research as we scale from thousands
                to millions of observations.
              </p>

              {joined ? (
                <p
                  role="status"
                  className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 rounded-xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  Confirmed — you're on the research waitlist. Milestones only, no spam.
                </p>
              ) : (
                <form onSubmit={onSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-2 sm:flex-row">
                  <label htmlFor="waitlist-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="waitlist-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.example"
                    className="h-12 flex-1 rounded-lg border border-slate-700 bg-slate-950/80 px-4 text-sm text-slate-100 transition-colors placeholder:text-slate-600 focus:border-cyan-400/60 focus:outline-none"
                  />
                  <Button size="lg" type="submit">
                    Join Waitlist
                  </Button>
                </form>
              )}

              <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button variant="secondary" href="#probe">
                  Run a Probe
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="ghost" href={ghUrl} external>
                  <GitHubIcon className="h-4 w-4" />
                  View GitHub
                </Button>
              </div>

              <p className="mt-8 font-mono text-xs text-slate-500">
                Open-source probe <span className="text-slate-700">·</span> Public schemas{" "}
                <span className="text-slate-700">·</span> Verifiable history
              </p>
            </div>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}
