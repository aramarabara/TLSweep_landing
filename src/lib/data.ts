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
  label: string;
  sub: string;
}

export const statCards: StatItem[] = [
  { value: 78, suffix: "K", label: "domains observed", sub: "Tranco-derived sample" },
  { value: 10, suffix: " min", label: "observation window", sub: "per full sweep · 3 regions" },
  { value: 190, suffix: "", label: "certificate changes", sub: "confirmed, cross-region" },
  { value: 0, suffix: "", label: "false positives", sub: "every event agreed 3/3" },
  { value: 3, suffix: "", label: "regions online", sub: "Seoul + Tokyo + London" },
  { prefix: "~", value: 10, suffix: "M/yr", label: "annualized change events", sub: "extrapolated — preliminary" },
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

export const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Probe", href: "#probe" },
  { label: "Data", href: "#data" },
  { label: "Research", href: "#research" },
  { label: "FAQ", href: "#faq" },
];

export const pipelineStages = [
  "Probe",
  "Gateway",
  "Cross-region consensus",
  "Time-series storage",
  "Merkle batch",
  "On-chain anchor",
  "Watchlist / API / Webhook",
];

export const problemCards = [
  {
    n: "01",
    title: "Time-series blind spot",
    body: "A single TLS check only tells you what is true right now. Security incidents often live in the changes: issuer shifts, key rotations, unexpected SAN updates, expired chains, and regional rollout differences.",
    accent: "cyan" as const,
  },
  {
    n: "02",
    title: "Regional blind spot",
    body: "CDNs, GeoDNS, edge deployments, and staged rollouts can serve different certificates from different places. A single machine cannot see that global picture.",
    accent: "emerald" as const,
  },
  {
    n: "03",
    title: "Auditability gap",
    body: "Security data loses value when nobody can prove when it was observed. TLSweep anchors confirmed event batches with Merkle roots so historical records become tamper-evident.",
    accent: "indigo" as const,
  },
];

export const howSteps = [
  {
    title: "Probe observes",
    body: "Lightweight Go probes perform DNS lookups and TLS handshakes. They submit signed observations containing certificate fingerprints, issuer data, validity windows, SAN hashes, region metadata, and timestamps.",
  },
  {
    title: "Consensus confirms",
    body: "An event becomes confirmed when at least three independent observations agree. Regional variants are preserved instead of being treated as false positives.",
  },
  {
    title: "Data is stored off-chain",
    body: "Raw observations and time-series certificate events live in a normal database. This keeps the system fast and cheap.",
  },
  {
    title: "Proofs go on-chain",
    body: "Confirmed events are batched into Merkle trees. Only the Merkle root is anchored on-chain, reducing cost while preserving tamper-evident verification.",
  },
];

export const probeFeatures: { label: string; tone: "yes" | "no" | "only" }[] = [
  { label: "Signed observations", tone: "yes" },
  { label: "Local queue", tone: "yes" },
  { label: "Jittered retry", tone: "yes" },
  { label: "Region verification", tone: "yes" },
  { label: "Low CPU and memory", tone: "yes" },
  { label: "No browser history collection", tone: "no" },
  { label: "No packet inspection", tone: "no" },
  { label: "TLS and DNS only", tone: "only" },
];

export const dataProducts = [
  {
    icon: "history" as const,
    title: "Certificate history",
    body: "Track fingerprint, issuer, validity, public key, SAN, and chain changes over time.",
    endpoint: "GET /v1/domains/{domain}/history",
  },
  {
    icon: "map" as const,
    title: "Regional variants",
    body: "Detect when different regions or IPs serve different certificates.",
    endpoint: "GET /v1/domains/{domain}/variants?regions=sel,tyo,lon",
  },
  {
    icon: "timer" as const,
    title: "Expiry risk",
    body: "Find domains approaching certificate expiry or serving invalid chains.",
    endpoint: "GET /v1/risk/expiring?window=14d",
  },
  {
    icon: "radar" as const,
    title: "Issuer and key anomalies",
    body: "Identify unexpected CA changes, public key changes, or abnormal rotation patterns.",
    endpoint: "GET /v1/anomalies?key=issuer,rotation",
  },
  {
    icon: "network" as const,
    title: "DNS context",
    body: "Combine certificate events with active DNS snapshots and, later, passive DNS enrichment.",
    endpoint: "GET /v1/domains/{domain}/dns",
  },
  {
    icon: "proof" as const,
    title: "Proof-backed history",
    body: "Request Merkle proofs for confirmed historical events.",
    endpoint: "GET /v1/proofs/{event_id}",
  },
];

export const incentiveSteps = [
  {
    n: "01",
    title: "Observe",
    body: "Run a probe and submit signed TLS/DNS observations.",
  },
  {
    n: "02",
    title: "Verify",
    body: "Cross-region consensus confirms events and detects regional variants.",
  },
  {
    n: "03",
    title: "Access",
    body: "Use credits to query certificate history, watchlists, proofs, and alerts.",
  },
];

export const creditsUnlock = [
  "Certificate history queries",
  "Watchlist slots",
  "Webhook and alert delivery",
  "Research dataset exports",
  "Merkle proof requests",
];

export const safeguards = [
  "Threshold consensus",
  "Delayed discovery rewards",
  "Region verification",
  "ASN diversity weighting",
  "Region-specific stake slots",
  "Transparent reward breakdowns",
];

export const offChainStack = [
  "Gateway API",
  "Consensus engine",
  "TimescaleDB",
  "Redis",
  "NATS",
  "Watchlist API",
  "Webhook delivery",
  "Probe coordination",
];

export const onChainStack = [
  "Credit ledger",
  "Probe registry",
  "Region slot deposits",
  "Discovery escrow",
  "Merkle root anchoring",
  "Tamper-evident event verification",
];

export const archFlow = [
  { label: "Probes", sub: "edge regions", tone: "cyan" as const },
  { label: "Gateway API", sub: "off-chain", tone: "cyan" as const },
  { label: "Consensus", sub: "off-chain", tone: "cyan" as const },
  { label: "TimescaleDB", sub: "off-chain", tone: "cyan" as const },
  { label: "Merkle batcher", sub: "bridge", tone: "emerald" as const },
  { label: "Anchor", sub: "on-chain", tone: "indigo" as const },
];

export const ossBullets = [
  "Open probe client",
  "Public observation schema",
  "Reproducible scoring logic",
  "Exportable research datasets",
  "Transparent reward breakdown",
  "Merkle proof verification",
];

export const faqs = [
  {
    q: "Is certificate data secret?",
    a: "No. TLS certificates are public by design. TLSweep does not sell secrecy. It sells continuous tracking, regional verification, historical context, and tamper-evident records.",
  },
  {
    q: "Why not just check certificates myself?",
    a: "You can check one domain yourself. The hard part is tracking many domains over time, from multiple regions, and preserving a trustworthy history of changes.",
  },
  {
    q: "Does the probe inspect my traffic?",
    a: "No. The probe performs assigned DNS lookups and TLS handshakes. It does not inspect browser history, personal traffic, packets, passwords, or content.",
  },
  {
    q: "What happens if the gateway is temporarily down?",
    a: "The probe stores important observations locally and retries with jitter. Stale no-change observations may be compacted, while meaningful change events are preserved for later submission.",
  },
  {
    q: "Is this a cryptocurrency investment?",
    a: "No. Credits are intended as utility access rights for querying TLSweep data and services. The project should not be presented as an investment product.",
  },
  {
    q: "Why use Merkle roots?",
    a: "Merkle roots let TLSweep anchor many confirmed events with a single compact on-chain commitment. This reduces cost while allowing individual events to be verified later.",
  },
  {
    q: "Can regional differences be false positives?",
    a: "Not necessarily. CDNs, GeoDNS, edge deployments, and staged rollouts can legitimately serve different certificates. TLSweep preserves regional variants instead of automatically treating them as bad data.",
  },
];

export const footerCols: { title: string; links: { label: string; href?: string; external?: boolean; note?: boolean }[] }[] = [
  {
    title: "Project",
    links: [
      { label: "Overview", href: "#overview" },
      { label: "Research", href: "#research" },
      { label: "Architecture", href: "#architecture" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "GitHub", href: "https://github.com/securitychain", external: true },
      { label: "Docs", href: "/docs" },
      { label: "API", href: "#data" },
      { label: "Merkle verification", href: "#how-it-works" },
    ],
  },
  {
    title: "Probe",
    links: [
      { label: "Docker", href: "#download" },
      { label: "macOS", href: "#download" },
      { label: "Windows", href: "#download" },
      { label: "Status", href: "#probe" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Credits are utility access rights, not investment products.", note: true },
    ],
  },
];

export const dockerCommand = `docker run --name securitychain-probe \\
  -e PROBE_KEY=your_key \\
  -e GATEWAY_URL=https://gateway.securitychain.example \\
  securitychain/probe:latest`;

export const cloneCommand = "git clone https://github.com/securitychain/probe";

export const ghUrl = "https://github.com/securitychain";
