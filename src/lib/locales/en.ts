import type { Locale } from "./types";

const en: Locale = {
  lang: "en",
  label: "EN",

  navLinks: [
    { label: "Overview", href: "#overview" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Probe", href: "#probe" },
    { label: "Data", href: "#data" },
    { label: "Research", href: "#research" },
    { label: "FAQ", href: "#faq" },
  ],

  navbar: {
    logo: "TLSweep",
    logoAccent: "",
    github: "GitHub",
    runAProbe: "Run a Probe",
    toggleMenu: "Toggle navigation menu",
  },

  hero: {
    badges: [
      "Open-source probes",
      "Threshold consensus = 3",
      "Off-chain data, on-chain proofs",
      "TLS + DNS intelligence",
    ],
    headline1: "Cross-region certificate intelligence,",
    headline2: "verified by probes.",
    description:
      "TLSweep tracks public TLS certificate and DNS changes across regions, verifies observations through independent probes, and anchors confirmed events with tamper-evident Merkle proofs.",
    runAProbe: "Run a Probe",
    exploreResearch: "Explore the Research Snapshot",
    versionInfo:
      "v0.4.2-research \u00b7 3 regions live \u00b7 78K domains under observation \u00b7 not an investment product",
    batchLabel: "batch #4821",
    rootLabel: "root 0x9f3a\u2026c21d",
    anchored: "anchored \u2713",
  },

  ticker: {
    label: "Simulated live certificate event feed",
  },

  statCards: [
    { label: "domains observed", sub: "Tranco-derived sample" },
    { label: "observation window", sub: "per full sweep \u00b7 3 regions" },
    { label: "certificate changes", sub: "confirmed, cross-region" },
    { label: "false positives", sub: "every event agreed 3/3" },
    { label: "regions online", sub: "Seoul + Tokyo + London" },
    { label: "annualized change events", sub: "extrapolated \u2014 preliminary" },
  ],

  problem: {
    eyebrow: "The problem",
    title1: "Checking one certificate is easy.",
    title2: "Tracking the internet is not.",
    cards: [
      {
        title: "Time-series blind spot",
        body: "A single TLS check only tells you what is true right now. Security incidents often live in the changes: issuer shifts, key rotations, unexpected SAN updates, expired chains, and regional rollout differences.",
      },
      {
        title: "Regional blind spot",
        body: "CDNs, GeoDNS, edge deployments, and staged rollouts can serve different certificates from different places. A single machine cannot see that global picture.",
      },
      {
        title: "Auditability gap",
        body: "Security data loses value when nobody can prove when it was observed. TLSweep anchors confirmed event batches with Merkle roots so historical records become tamper-evident.",
      },
    ],
  },

  pipelineStages: [
    "Probe",
    "Gateway",
    "Cross-region consensus",
    "Time-series storage",
    "Merkle batch",
    "On-chain anchor",
    "Watchlist / API / Webhook",
  ],

  howItWorks: {
    eyebrow: "How it works",
    title: "Simple pipeline. Verifiable output.",
    sub: "Observations flow from lightweight edge probes to a tamper-evident anchor \u2014 every stage is inspectable.",
    pipelineLabel: "Data pipeline stages",
    stepPrefix: "Step",
    onChainTitle: "On-chain",
    offChainTitle: "Off-chain",
    onChainDesc: " is the accounting ledger.",
    offChainDesc: " is the data warehouse.",
    steps: [
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
    ],
  },

  research: {
    eyebrow: "Research snapshot",
    badge: "Preliminary",
    title: "Early H1/H2 snapshot",
    sub: "Preliminary probe run across Tranco-derived domains. Numbers are internal research data and will be updated as longer observation windows complete.",
    domainsLabel: "domains",
    windowLabel: "window",
    changesLabel: "changes",
    falsePositivesLabel: "false positives",
    regionsLabel: "regions",
    caTop5: "CA Top 5 \u2014 change count",
    caSub: "intermediate \u00b7 events \u00b7 issuer",
    changeMix: "Change type mix",
    changeMixSub: "share of confirmed events",
    changeMixFootnote:
      "Mostly key changes, not simple expiry churn \u2014 a distinct signal beyond basic expiry monitoring.",
    summary:
      "In the initial run, all observed changes were independently detected from Seoul, Tokyo, and London. The majority of events were key changes rather than simple expiry updates, suggesting that certificate change intelligence is a distinct signal beyond basic expiry monitoring.",
    observationNote: "observation note",
    observationNoteBody:
      "Longer observation windows are required to separate routine hyperscaler rotation from high-value anomalous changes.",
  },

  probe: {
    eyebrow: "Run a probe",
    title1: "Run a lightweight probe.",
    title2: "Earn access credits.",
    sub: "A TLSweep probe is a small Go client that observes assigned domains, signs results, queues safely during outages, and retries with jitter to avoid burst traffic.",
    dockerTitle: "Docker Probe",
    dockerDesc: "Best for servers, homelabs, VPS, and researchers.",
    shell: "shell",
    imageLabel: "image \u00b7 tlsweep/probe:latest",
    macTitle: "macOS Probe",
    macDesc: "Menu bar client with simple connected / retrying / offline states.",
    downloadMac: "Download for macOS",
    macMeta: "universal \u00b7 macOS 13+ \u00b7 ~14 MB",
    winTitle: "Windows Probe",
    winDesc: "System tray client with lightweight background scanning.",
    downloadWin: "Download for Windows",
    winMeta: "x64 \u00b7 Windows 10+ \u00b7 tray client",
    recommended: "recommended",
    features: [
      { label: "Signed observations" },
      { label: "Local queue" },
      { label: "Jittered retry" },
      { label: "Region verification" },
      { label: "Low CPU and memory" },
      { label: "No browser history collection" },
      { label: "No packet inspection" },
      { label: "TLS and DNS only" },
    ],
    featureTitle: "What the probe does \u2014 and never does",
    featureFootnote: "passive observation only \u2014 TLS handshakes and DNS lookups, nothing else",
    probeTray: "probe tray \u2014 seoul-01",
    connected: "Connected",
    region: "Region",
    consensusParticipation: "Consensus participation",
    active: "active",
    queuedEvents: "Queued events",
    creditsToday: "Credits earned today",
    creditsSub: "rolling 24h \u00b7 verified observations only",
    signedWith: "signed with probe key \u00b7 region slot sel-07",
  },

  dataProducts: {
    eyebrow: "Data & API",
    title: "What you can query",
    sub: "Every dataset is served from the off-chain warehouse, metered by usage credits, and verifiable against on-chain anchors.",
    products: [
      {
        title: "Certificate history",
        body: "Track fingerprint, issuer, validity, public key, SAN, and chain changes over time.",
      },
      {
        title: "Regional variants",
        body: "Detect when different regions or IPs serve different certificates.",
      },
      {
        title: "Expiry risk",
        body: "Find domains approaching certificate expiry or serving invalid chains.",
      },
      {
        title: "Issuer and key anomalies",
        body: "Identify unexpected CA changes, public key changes, or abnormal rotation patterns.",
      },
      {
        title: "DNS context",
        body: "Combine certificate events with active DNS snapshots and, later, passive DNS enrichment.",
      },
      {
        title: "Proof-backed history",
        body: "Request Merkle proofs for confirmed historical events.",
      },
    ],
  },

  incentive: {
    eyebrow: "Incentive model",
    title: "Contribution becomes access.",
    body: "TLSweep uses credits to align participation and data access. Verified probe observations earn credits. Credits can be used to query history, subscribe to watchlists, or refresh domains.",
    callout:
      "Credits are utility access rights inside the TLSweep network. They are designed for security data usage, not financial speculation.",
    creditsTitle: "What credits unlock",
    creditsUnlock: [
      "Certificate history queries",
      "Watchlist slots",
      "Webhook and alert delivery",
      "Research dataset exports",
      "Merkle proof requests",
    ],
    creditsFootnote: "usage-based access \u00b7 no yield \u00b7 not an investment product",
    safeguardsTitle: "Built-in safeguards",
    safeguards: [
      "Threshold consensus",
      "Delayed discovery rewards",
      "Region verification",
      "ASN diversity weighting",
      "Region-specific stake slots",
      "Transparent reward breakdowns",
    ],
    safeguardsFootnote:
      "Abuse resistance is a design constraint, not an afterthought \u2014 rewards follow verified, cross-region work.",
    steps: [
      {
        title: "Observe",
        body: "Run a probe and submit signed TLS/DNS observations.",
      },
      {
        title: "Verify",
        body: "Cross-region consensus confirms events and detects regional variants.",
      },
      {
        title: "Access",
        body: "Use credits to query certificate history, watchlists, proofs, and alerts.",
      },
    ],
  },

  architecture: {
    eyebrow: "Architecture",
    title: "Pragmatic architecture, not blockchain theater.",
    sub: "Heavy data stays in a normal warehouse. The chain only ever sees accounting state and compact commitments.",
    offChainTitle: "Off-chain",
    offChainSub: "the data warehouse",
    onChainTitle: "On-chain",
    onChainSub: "the accounting ledger",
    legendOffChain: "off-chain",
    legendBridge: "bridge",
    legendOnChain: "on-chain",
    callout: "The blockchain layer does not store the whole internet.",
    calloutAccent: "It stores accounting state and compact proofs.",
    offChainStack: [
      "Gateway API",
      "Consensus engine",
      "TimescaleDB",
      "Redis",
      "NATS",
      "Watchlist API",
      "Webhook delivery",
      "Probe coordination",
    ],
    onChainStack: [
      "Credit ledger",
      "Probe registry",
      "Region slot deposits",
      "Discovery escrow",
      "Merkle root anchoring",
      "Tamper-evident event verification",
    ],
  },

  openSource: {
    eyebrow: "Open source",
    title: "Built for open security research.",
    sub: "TLSweep is designed to be inspectable. Probe logic, observation schemas, reward formulas, and verification rules should be public so participants can understand what the software does and how credits are calculated.",
    bullets: [
      "Open probe client",
      "Public observation schema",
      "Reproducible scoring logic",
      "Exportable research datasets",
      "Transparent reward breakdown",
      "Merkle proof verification",
    ],
    readNotes: "Read the technical notes",
    viewGitHub: "View GitHub",
    public: "Public",
    recentCommits: "recent commits",
    goLabel: "Go",
    license: "MIT",
  },

  faq: {
    eyebrow: "FAQ",
    title: "Questions, answered plainly.",
    sub: "The things security engineers ask before pointing a probe at their network.",
    items: [
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
    ],
  },

  finalCta: {
    badge: "// join the network",
    title: "Help build the certificate intelligence layer.",
    body: "Run a probe, watch your domains, or follow the research as we scale from thousands to millions of observations.",
    confirmed: "Confirmed \u2014 you're on the research waitlist. Milestones only, no spam.",
    emailPlaceholder: "you@company.example",
    joinWaitlist: "Join Waitlist",
    runAProbe: "Run a Probe",
    viewGitHub: "View GitHub",
    footnote: "Open-source probe \u00b7 Public schemas \u00b7 Verifiable history",
  },

  footer: {
    description:
      "Distributed TLS and DNS change intelligence \u2014 observed by probes, confirmed by consensus, anchored by proofs.",
    networkLabel: "network: collecting \u2014",
    copyright: "\u00a9 2026 TLSweep Research",
    backToTop: "back to top \u2191",
    columns: [
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
          { label: "GitHub", href: "https://github.com/tlsweep", external: true },
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
    ],
  },

  networkMap: {
    gateway: "gateway.tlsweep.example",
    networkCollecting: "Network: collecting",
    keyChange: "key_change detected",
    domain: "domain",
    issuer: "issuer",
    confidence: "confidence",
    anchoring: "anchoring",
    pendingBatch: "pending Merkle batch",
    probesLabel: "probes",
  },

  terminal: {
    defaultTitle: "probe \u2014 seoul-01",
    defaultLines: [
      "tlsweep-probe start",
      "region verified: seoul",
      "gateway: connected",
      "scan assignment: tranco-h1-clean",
      "observations: streaming",
    ],
  },

  languageSwitch: {
    label: "Language",
  },
};

export default en;
