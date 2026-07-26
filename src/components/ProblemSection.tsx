import { Card, Reveal, Section, SectionHeading } from "@/components/ui";
import { useLocale } from "@/lib/locales";
import { cn } from "@/utils/cn";

const hairline: Record<string, string> = {
  cyan: "from-cyan-400/60",
  emerald: "from-emerald-400/60",
  indigo: "from-indigo-400/60",
};

const numberTone: Record<string, string> = {
  cyan: "text-cyan-400/70",
  emerald: "text-emerald-400/70",
  indigo: "text-indigo-400/70",
};

interface ProblemCard {
  n: string;
  accent: "cyan" | "emerald" | "indigo";
}

const cards: ProblemCard[] = [
  { n: "01", accent: "cyan" },
  { n: "02", accent: "emerald" },
  { n: "03", accent: "indigo" },
];

function Glyph({ accent }: { accent: "cyan" | "emerald" | "indigo" }) {
  const stroke = accent === "cyan" ? "#22d3ee" : accent === "emerald" ? "#34d399" : "#818cf8";
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
      aria-hidden="true"
    >
      {accent === "cyan" ? (
        <>
          <circle cx="12" cy="12" r="8.5" strokeDasharray="4 3.2" />
          <path d="M12 7.5V12l3 2" />
        </>
      ) : null}
      {accent === "emerald" ? (
        <>
          <circle cx="12" cy="12" r="8.5" />
          <ellipse cx="12" cy="12" rx="3.8" ry="8.5" />
          <path d="M3.5 12h17" />
        </>
      ) : null}
      {accent === "indigo" ? (
        <>
          <path d="M12 3 5 5.8v5.4c0 4.4 3 7.7 7 9.3 4-1.6 7-4.9 7-9.3V5.8L12 3Z" />
          <path d="m9 12 2.2 2.2L15.5 10" />
        </>
      ) : null}
    </svg>
  );
}

export function ProblemSection() {
  const { locale } = useLocale();
  const t = locale.problem;

  return (
    <Section id="problem" className="pt-16 sm:pt-20">
      <SectionHeading
        eyebrow={t.eyebrow}
        title={
          <>
            <span className="block">{t.title1}</span>
            <span className="block text-slate-400">{t.title2}</span>
          </>
        }
      />

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {cards.map((card, i) => (
          <Reveal key={card.n} delay={i * 110} className="h-full">
            <Card className="relative h-full overflow-hidden p-6">
              <span
                className={cn(
                  "absolute inset-x-0 top-0 h-px bg-gradient-to-r to-transparent",
                  hairline[card.accent],
                )}
                aria-hidden="true"
              />
              <div className="flex items-center justify-between">
                <Glyph accent={card.accent} />
                <span className={cn("font-mono text-xs", numberTone[card.accent])}>/ {card.n}</span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-slate-50">{t.cards[i].title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-400">{t.cards[i].body}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
