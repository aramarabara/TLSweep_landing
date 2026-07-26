import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal, Section, SectionHeading } from "@/components/ui";
import { useLocale } from "@/lib/locales";
import { cn } from "@/utils/cn";

export function FAQ() {
  const { locale } = useLocale();
  const t = locale.faq;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <SectionHeading
        eyebrow={t.eyebrow}
        title={t.title}
        sub={t.sub}
        center
      />

      <div className="mx-auto mt-10 max-w-3xl space-y-3">
        {t.items.map((faq, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={faq.q} delay={i * 40}>
              <div
                className={cn(
                  "overflow-hidden rounded-xl border transition-colors duration-300",
                  isOpen
                    ? "border-cyan-400/40 bg-slate-900/80"
                    : "border-slate-800 bg-slate-900/50 hover:border-slate-700",
                )}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-[15px] font-medium text-slate-100">{faq.q}</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 shrink-0 text-cyan-400 transition-transform duration-300",
                        isOpen && "rotate-180",
                      )}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-slate-400">{faq.a}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
