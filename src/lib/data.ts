/* ------------------------------------------------------------------ */
/*  TLSweep — mock data & page copy                              */
/* ------------------------------------------------------------------ */

export const researchStats = {
  domainsObserved: "78K",
  observationWindow: "10 min",
  certChanges: "190",
  falsePositives: "0",
  regions: "Seoul + Tokyo + London",
  annualizedEvents: "~10M/year",
};

export interface StatItem {
  prefix?: string;
  value: number;
  suffix: string;
}

export const statCards: StatItem[] = [
  { value: 78, suffix: "K" },
  { value: 10, suffix: " min" },
  { value: 190, suffix: "" },
  { value: 0, suffix: "" },
  { value: 3, suffix: "" },
  { prefix: "~", value: 10, suffix: "M/yr" },
];

export const caTable = [
  { ca: "WR2", count: 35, note: "Google Trust Services" },
  { ca: "WE2", count: 33, note: "Google Trust Services" },
  { ca: "YR2", count: 15, note: "Google Trust Services" },
  { ca: "WE1", count: 15, note: "Google Trust Services" },
  { ca: "YE2", count: 12, note: "Google Trust Services" },
];

export const changeTypes = [
  { label: "key_change", pct: 61, barClass: "bg-cyan-400" },
  { label: "san_update", pct: 22, barClass: "bg-emerald-400" },
  { label: "issuer_change", pct: 11, barClass: "bg-indigo-400" },
  { label: "other", pct: 6, barClass: "bg-slate-500" },
];

export const tickerEvents = [
  { tag: "SEL", type: "key_change", domain: "api.northwind.example", detail: "RSA-2048 → ECDSA P-256 · WR2" },
  { tag: "TYO", type: "san_update", domain: "cdn.kitesurf.example", detail: "+2 SANs · conf 3/3" },
  { tag: "LON", type: "issuer_change", domain: "mail.atlas.example", detail: "E5 → GTS WR2 · conf 3/3" },
  { tag: "ANC", type: "merkle_batch", domain: "#4821", detail: "root 0x9f3a…c21d · anchored" },
  { tag: "SEL", type: "chain_change", domain: "shop.driftline.example", detail: "intermediate rotated" },
  { tag: "TYO", type: "expiry_warn", domain: "docs.beacon.example", detail: "T-6d · invalid chain risk" },
  { tag: "LON", type: "regional_variant", domain: "news.harbor.example", detail: "serial differs vs SEL / TYO" },
  { tag: "SEL", type: "key_change", domain: "pay.meridian.example", detail: "P-256 reused · new SAN set" },
  { tag: "TYO", type: "san_update", domain: "edge.quarry.example", detail: "wildcard dropped · conf 3/3" },
  { tag: "ANC", type: "merkle_batch", domain: "#4822", detail: "128 events · batching" },
  { tag: "LON", type: "key_change", domain: "auth.lattice.example", detail: "4096-bit → P-384 · WE2" },
  { tag: "SEL", type: "issuer_change", domain: "static.fjord.example", detail: "DigiCert → GTS YE2" },
];

export const dockerCommand = `docker run --name tlsweep-probe \\
  -e PROBE_KEY=your_key \\
  -e GATEWAY_URL=https://gateway.tlsweep.example \\
  tlsweep/probe:latest`;

export const cloneCommand = "git clone https://github.com/tlsweep/probe";

export const ghUrl = "https://github.com/tlsweep";
