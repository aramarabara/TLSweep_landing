import { History, MapPinned, Network, Radar, TimerReset, FileCheck2, type LucideIcon } from "lucide-react";
import { Card, Reveal, Section, SectionHeading } from "@/components/ui";
import { useLocale } from "@/lib/locales";

interface DataProduct {
  icon: "history" | "map" | "timer" | "radar" | "network" | "proof";
  endpoint: string;
}

const products: DataProduct[] = [
  { icon: "history", endpoint: "GET /v1/domains/{domain}/history" },
  { icon: "map", endpoint: "GET /v1/domains/{domain}/variants?regions=sel,tyo,lon" },
  { icon: "timer", endpoint: "GET /v1/risk/expiring?window=14d" },
  { icon: "radar", endpoint: "GET /v1/anomalies?key=issuer,rotation" },
  { icon: "network", endpoint: "GET /v1/domains/{domain}/dns" },
  { icon: "proof", endpoint: "GET /v1/proofs/{event_id}" },
];

const icons: Record<DataProduct["icon"], LucideIcon> = {
  history: History,
  map: MapPinned,
  timer: TimerReset,
  radar: Radar,
  network: Network,
  proof: FileCheck2,
};

export function DataProducts() {
  const { locale } = useLocale();
  const t = locale.dataProducts;

  return (
    <Section id="data">
      <SectionHeading
        eyebrow={t.eyebrow}
        title={t.title}
        sub={t.sub}
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, i) => {
          const Icon = icons[product.icon];
          return (
            <Reveal key={product.icon} delay={(i % 3) * 90} className="h-full">
              <Card className="group flex h-full flex-col p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-950/60 text-cyan-300 transition-colors duration-300 group-hover:border-cyan-400/40">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-slate-50">
                  {t.products[i].title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{t.products[i].body}</p>
                <code className="mt-4 block truncate rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2 font-mono text-[11px] text-cyan-300/80 transition-colors duration-300 group-hover:border-cyan-400/30 group-hover:text-cyan-200">
                  {product.endpoint}
                </code>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
