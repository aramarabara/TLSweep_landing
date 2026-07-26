export interface NavLink {
  label: string;
  href: string;
}

export interface StatCardText {
  label: string;
  sub: string;
}

export interface ProblemCardText {
  title: string;
  body: string;
}

export interface HowStepText {
  title: string;
  body: string;
}

export interface ProbeFeatureText {
  label: string;
}

export interface DataProductText {
  title: string;
  body: string;
}

export interface IncentiveStepText {
  title: string;
  body: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface FooterColText {
  title: string;
  links: { label: string; href?: string; external?: boolean; note?: boolean }[];
}

export interface Locale {
  lang: "en" | "ko";
  label: string;

  navLinks: NavLink[];

  navbar: {
    logo: string;
    logoAccent: string;
    github: string;
    runAProbe: string;
    toggleMenu: string;
  };

  hero: {
    badges: [string, string, string, string];
    headline1: string;
    headline2: string;
    description: string;
    runAProbe: string;
    exploreResearch: string;
    versionInfo: string;
    batchLabel: string;
    rootLabel: string;
    anchored: string;
  };

  ticker: {
    label: string;
  };

  statCards: StatCardText[];

  problem: {
    eyebrow: string;
    title1: string;
    title2: string;
    cards: ProblemCardText[];
  };

  pipelineStages: string[];

  howItWorks: {
    eyebrow: string;
    title: string;
    sub: string;
    pipelineLabel: string;
    stepPrefix: string;
    onChainTitle: string;
    offChainTitle: string;
    onChainDesc: string;
    offChainDesc: string;
    steps: HowStepText[];
  };

  research: {
    eyebrow: string;
    badge: string;
    title: string;
    sub: string;
    domainsLabel: string;
    windowLabel: string;
    changesLabel: string;
    falsePositivesLabel: string;
    regionsLabel: string;
    caTop5: string;
    caSub: string;
    changeMix: string;
    changeMixSub: string;
    changeMixFootnote: string;
    summary: string;
    observationNote: string;
    observationNoteBody: string;
  };

  probe: {
    eyebrow: string;
    title1: string;
    title2: string;
    sub: string;
    dockerTitle: string;
    dockerDesc: string;
    shell: string;
    imageLabel: string;
    macTitle: string;
    macDesc: string;
    downloadMac: string;
    macMeta: string;
    winTitle: string;
    winDesc: string;
    downloadWin: string;
    winMeta: string;
    recommended: string;
    features: ProbeFeatureText[];
    featureTitle: string;
    featureFootnote: string;
    probeTray: string;
    connected: string;
    region: string;
    consensusParticipation: string;
    active: string;
    queuedEvents: string;
    creditsToday: string;
    creditsSub: string;
    signedWith: string;
  };

  dataProducts: {
    eyebrow: string;
    title: string;
    sub: string;
    products: DataProductText[];
  };

  incentive: {
    eyebrow: string;
    title: string;
    body: string;
    callout: string;
    creditsTitle: string;
    creditsUnlock: string[];
    creditsFootnote: string;
    safeguardsTitle: string;
    safeguards: string[];
    safeguardsFootnote: string;
    steps: IncentiveStepText[];
  };

  architecture: {
    eyebrow: string;
    title: string;
    sub: string;
    offChainTitle: string;
    offChainSub: string;
    onChainTitle: string;
    onChainSub: string;
    legendOffChain: string;
    legendBridge: string;
    legendOnChain: string;
    callout: string;
    calloutAccent: string;
    offChainStack: string[];
    onChainStack: string[];
  };

  openSource: {
    eyebrow: string;
    title: string;
    sub: string;
    bullets: string[];
    readNotes: string;
    viewGitHub: string;
    public: string;
    recentCommits: string;
    goLabel: string;
    license: string;
  };

  faq: {
    eyebrow: string;
    title: string;
    sub: string;
    items: FaqItem[];
  };

  finalCta: {
    badge: string;
    title: string;
    body: string;
    confirmed: string;
    emailPlaceholder: string;
    joinWaitlist: string;
    runAProbe: string;
    viewGitHub: string;
    footnote: string;
  };

  footer: {
    description: string;
    networkLabel: string;
    copyright: string;
    backToTop: string;
    columns: FooterColText[];
  };

  networkMap: {
    gateway: string;
    networkCollecting: string;
    keyChange: string;
    domain: string;
    issuer: string;
    confidence: string;
    anchoring: string;
    pendingBatch: string;
    probesLabel: string;
  };

  terminal: {
    defaultTitle: string;
    defaultLines: string[];
  };

  languageSwitch: {
    label: string;
  };
}
