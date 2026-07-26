import type { Locale } from "./types";

const ko: Locale = {
  lang: "ko",
  label: "KO",

  navLinks: [
    { label: "개요", href: "#overview" },
    { label: "작동 방식", href: "#how-it-works" },
    { label: "프로브", href: "#probe" },
    { label: "데이터", href: "#data" },
    { label: "리서치", href: "#research" },
    { label: "FAQ", href: "#faq" },
  ],

  navbar: {
    logo: "TLSweep",
    logoAccent: "",
    github: "GitHub",
    runAProbe: "프로브 실행",
    toggleMenu: "내비게이션 메뉴 토글",
  },

  hero: {
    badges: [
      "오픈소스 프로브",
      "임계값 합의 = 3",
      "오프체인 데이터, 온체인 증명",
      "TLS + DNS 인텔리전스",
    ],
    headline1: "지역을 넘나드는 인증서,",
    headline2: "프로브가 검증합니다.",
    description:
      "TLSweep은 여러 리전의 공개 TLS 인증서 및 DNS 변경사항을 추적하고, 독립적인 프로브를 통해 관측을 검증하며, 확인된 이벤트를 변조 방지 Merkle 증명으로 앵커링합니다.",
    runAProbe: "프로브 실행",
    exploreResearch: "리서치 스냅샷 살펴보기",
    versionInfo:
      "v0.4.2-research · 3개 리전 활성 · 78K 도메인 관측 중 · 투자 상품이 아닙니다",
    batchLabel: "배치 #4821",
    rootLabel: "루트 0x9f3a…c21d",
    anchored: "앵커링 완료 ✓",
  },

  ticker: {
    label: "실시간 인증서 이벤트 피드 시뮬레이션",
  },

  statCards: [
    { label: "관측 도메인", sub: "Tranco 기반 샘플" },
    { label: "관측 기간", sub: "전체 스윕당 · 3개 리전" },
    { label: "인증서 변경", sub: "확인됨, 교차 리전" },
    { label: "오탐지", sub: "모든 이벤트 3/3 동의" },
    { label: "온라인 리전", sub: "서울 + 도쿄 + 런던" },
    { label: "연간 변경 이벤트", sub: "추정치 — 초기 데이터" },
  ],

  problem: {
    eyebrow: "문제점",
    title1: "인증서 하나 확인은 쉽습니다.",
    title2: "인터넷 전체를 추적하는 것은 어렵습니다.",
    cards: [
      {
        title: "시계열 사각지대",
        body: "단일 TLS 검사는 지금 당장의 상태만 알려줍니다. 보안 사고는 종종 변경사항에 존재합니다: 발급자 변경, 키 로테이션, 예상치 못한 SAN 업데이트, 만료된 체인, 리전별 롤아웃 차이 등.",
      },
      {
        title: "지역 사각지대",
        body: "CDN, GeoDNS, 엣지 배포, 단계적 롤아웃은 지역마다 다른 인증서를 제공할 수 있습니다. 단일 머신으로는 전체 그림을 볼 수 없습니다.",
      },
      {
        title: "감사 가능성 격차",
        body: "보안 데이터는 관측 시점을 증명할 수 없을 때 가치를 잃습니다. TLSweep은 확인된 이벤트 배치를 Merkle 루트로 앵커링하여 기록이 변조 방지됨을 보장합니다.",
      },
    ],
  },

  pipelineStages: [
    "프로브",
    "게이트웨이",
    "교차 리전 합의",
    "시계열 저장소",
    "Merkle 배치",
    "온체인 앵커",
    "워치리스트 / API / 웹훅",
  ],

  howItWorks: {
    eyebrow: "작동 방식",
    title: "간단한 파이프라인. 검증 가능한 결과.",
    sub: "관측 데이터는 투명합니다.",
    pipelineLabel: "데이터 파이프라인 단계",
    stepPrefix: "단계",
    onChainTitle: "온체인",
    offChainTitle: "오프체인",
    onChainDesc: "",
    offChainDesc: "",
    steps: [
      {
        title: "프로브 관측",
        body: "경량 Go 프로브가 DNS 조회 및 TLS 핸드셰이크를 수행합니다. 인증서 지문, 발급자 데이터, 유효 기간, SAN 해시, 리전 메타데이터 및 타임스탬프가 포함된 서명된 관측을 제출합니다.",
      },
      {
        title: "합의 확인",
        body: "최소 3개의 독립적인 관측이 일치하면 이벤트가 확인됩니다. 지역 변형은 오탐지로 처리되지 않고 보존됩니다.",
      },
      {
        title: "오프체인 저장",
        body: "원시 관측 데이터와 시계열 인증서 이벤트는 일반 데이터베이스에 저장됩니다. 이는 시스템을 빠르고 저렴하게 유지합니다.",
      },
      {
        title: "온체인 증명",
        body: "확인된 이벤트는 Merkle 트리로 배치됩니다. Merkle 루트만 온체인에 앵커링되어 비용을 줄이면서 변조 방지 검증을 유지합니다.",
      },
    ],
  },

  research: {
    eyebrow: "리서치 스냅샷",
    badge: "초기 분석",
    title: "초기 H1/H2 스냅샷",
    sub: "Tranco 기반 도메인에 대한 초기 프로브 실행 결과입니다. 수치는 내부 리서치 데이터이며, 더 긴 관측 기간이 완료됨에 따라 업데이트됩니다.",
    domainsLabel: "도메인",
    windowLabel: "관측 기간",
    changesLabel: "변경사항",
    falsePositivesLabel: "오탐지",
    regionsLabel: "리전",
    caTop5: "CA Top 5 — 변경 건수",
    caSub: "중간 · 이벤트 · 발급자",
    changeMix: "변경 유형 구성",
    changeMixSub: "확인된 이벤트 비율",
    changeMixFootnote:
      "대부분 단순 만료 변경이 아닌 키 변경 — 기본 만료 모니터링 이상의 독특한 신호입니다.",
    summary:
      "초기 실행에서 모든 관측된 변경사항은 서울, 도쿄, 런던에서 독립적으로 탐지되었습니다. 대부분의 이벤트는 단순 만료 업데이트가 아닌 키 변경으로, 인증서 변경 인텔리전스가 기본 만료 모니터링 이상의 독특한 신호임을 시사합니다.",
    observationNote: "관측 노트",
    observationNoteBody:
      "일상적인 하이퍼스케일러 로테이션과 고가치 이상 변경을 구분하려면 더 긴 관측 기간이 필요합니다.",
  },

  probe: {
    eyebrow: "프로브 실행",
    title1: "가벼운 프로브를 실행하세요.",
    title2: "액세스 크레딧을 획득하세요.",
    sub: "TLSweep 프로브는 할당된 도메인을 관측하고, 결과에 서명하며, 장애 중에도 안전하게 대기열에 저장하고, 지터로 재시도하여 버스트 트래픽을 방지하는 작은 Go 클라이언트입니다.",
    dockerTitle: "도커 프로브",
    dockerDesc: "서버, 홈랩, VPS 및 연구자에게 최적입니다.",
    shell: "쉘",
    imageLabel: "이미지 · tlsweep/probe:latest",
    macTitle: "macOS 프로브",
    macDesc: "연결/재시도/오프라인 상태를 표시하는 메뉴 바 클라이언트입니다.",
    downloadMac: "macOS용 다운로드",
    macMeta: "유니버설 · macOS 13+ · ~14 MB",
    winTitle: "Windows 프로브",
    winDesc: "가벼운 백그라운드 스캐닝이 가능한 시스템 트레이 클라이언트입니다.",
    downloadWin: "Windows용 다운로드",
    winMeta: "x64 · Windows 10+ · 트레이 클라이언트",
    recommended: "추천",
    features: [
      { label: "서명된 관측" },
      { label: "로컬 대기열" },
      { label: "지터 재시도" },
      { label: "리전 검증" },
      { label: "낮은 CPU 및 메모리" },
      { label: "브라우저 기록 미수집" },
      { label: "패킷 검사 안함" },
      { label: "TLS 및 DNS 전용" },
    ],
    featureTitle: "프로브가 하는 일 — 그리고 절대 하지 않는 일",
    featureFootnote: "수동적 관측만 수행 — TLS 핸드셰이크 및 DNS 조회, 그 외 없음",
    probeTray: "프로브 트레이 — seoul-01",
    connected: "연결됨",
    region: "리전",
    consensusParticipation: "합의 참여",
    active: "활성",
    queuedEvents: "대기 이벤트",
    creditsToday: "오늘 획득한 크레딧",
    creditsSub: "최근 24시간 · 검증된 관측만",
    signedWith: "프로브 키로 서명됨 · 리전 슬롯 sel-07",
  },

  dataProducts: {
    eyebrow: "데이터 및 API",
    title: "조회 가능한 데이터",
    sub: "모든 데이터셋은 오프체인 웨어하우스에서 제공되며, 사용량 크레딧으로 측정되고 온체인 앵커에 대해 검증 가능합니다.",
    products: [
      {
        title: "인증서 이력",
        body: "시간에 따른 지문, 발급자, 유효 기간, 공개 키, SAN 및 체인 변경사항을 추적합니다.",
      },
      {
        title: "지역 변형",
        body: "다른 지역이나 IP가 다른 인증서를 제공하는 경우를 탐지합니다.",
      },
      {
        title: "만료 위험",
        body: "인증서 만료가 임박했거나 유효하지 않은 체인을 제공하는 도메인을 찾습니다.",
      },
      {
        title: "발급자 및 키 이상",
        body: "예상치 못한 CA 변경, 공개 키 변경 또는 비정상적인 로테이션 패턴을 식별합니다.",
      },
      {
        title: "DNS 컨텍스트",
        body: "인증서 이벤트를 활성 DNS 스냅샷 및 향후 수동 DNS 보강과 결합합니다.",
      },
      {
        title: "증명 기반 이력",
        body: "확인된 과거 이벤트에 대한 Merkle 증명을 요청합니다.",
      },
    ],
  },

  incentive: {
    eyebrow: "인센티브 모델",
    title: "기여가 액세스가 됩니다.",
    body: "TLSweep은 참여와 데이터 액세스를 정렬하기 위해 크레딧을 사용합니다. 검증된 프로브 관측은 크레딧을 획득합니다. 크레딧은 기록 조회, 워치리스트 구독 또는 도메인 갱신에 사용할 수 있습니다.",
    callout:
      "크레딧은 TLSweep 네트워크 내의 유틸리티 액세스 권한입니다. 보안 데이터 사용을 위해 설계되었으며, 금융 투기가 아닙니다.",
    creditsTitle: "크레딧으로 이용 가능한 기능",
    creditsUnlock: [
      "인증서 이력 조회",
      "워치리스트 슬롯",
      "웹훅 및 알림 전송",
      "리서치 데이터셋 내보내기",
      "Merkle 증명 요청",
    ],
    creditsFootnote: "사용 기반 액세스 · 수익 없음 · 투자 상품 아님",
    safeguardsTitle: "내장된 안전장치",
    safeguards: [
      "임계값 합의",
      "지연된 발견 보상",
      "리전 검증",
      "ASN 다양성 가중치",
      "리전별 스테이크 슬롯",
      "투명한 보상 내역",
    ],
    safeguardsFootnote:
      "남용 방지는 설계 제약사항이지 사후 고려사항이 아닙니다 — 보상은 검증된 교차 리전 작업을 따릅니다.",
    steps: [
      {
        title: "관측",
        body: "프로브를 실행하고 서명된 TLS/DNS 관측을 제출합니다.",
      },
      {
        title: "검증",
        body: "교차 리전 합의가 이벤트를 확인하고 지역 변형을 탐지합니다.",
      },
      {
        title: "액세스",
        body: "크레딧을 사용하여 인증서 이력, 워치리스트, 증명 및 알림을 조회합니다.",
      },
    ],
  },

  architecture: {
    eyebrow: "",
    title: "",
    sub: "",
    offChainTitle: "Off-chain",
    offChainSub: "",
    onChainTitle: "On-chain",
    onChainSub: "",
    legendOffChain: "off-chain",
    legendBridge: "bridge",
    legendOnChain: "on-chain",
    callout: "",
    calloutAccent: "",
    offChainStack: [],
    onChainStack: [],
  },

  openSource: {
    eyebrow: "오픈소스",
    title: "공개 보안 연구를 위해 구축되었습니다.",
    sub: "TLSweep은 검사 가능하도록 설계되었습니다. 프로브 로직, 관측 스키마, 보상 공식 및 검증 규칙은 공개되어 참여자가 소프트웨어의 작동 방식과 크레딧 계산 방법을 이해할 수 있습니다.",
    bullets: [
      "오픈 프로브 클라이언트",
      "공개 관측 스키마",
      "재현 가능한 점수 로직",
      "내보내기 가능한 리서치 데이터셋",
      "투명한 보상 내역",
      "Merkle 증명 검증",
    ],
    readNotes: "기술 노트 읽기",
    viewGitHub: "GitHub 보기",
    public: "공개",
    recentCommits: "최근 커밋",
    goLabel: "Go",
    license: "MIT",
  },

  faq: {
    eyebrow: "FAQ",
    title: "질문에 명확히 답변드립니다.",
    sub: "보안 엔지니어들이 네트워크에 프로브를 설치하기 전에 묻는 것들입니다.",
    items: [
      {
        q: "인증서 데이터는 비밀인가요?",
        a: "아닙니다. TLS 인증서는 설계상 공개 정보입니다. TLSweep은 비밀을 판매하지 않습니다. 지속적인 추적, 지역 검증, 기록 컨텍스트 및 변조 방지 기록을 제공합니다.",
      },
      {
        q: "직접 인증서를 확인하면 되지 않나요?",
        a: "하나의 도메인은 직접 확인할 수 있습니다. 어려운 부분은 여러 도메인을 시간에 따라 여러 리전에서 추적하고 신뢰할 수 있는 변경 이력을 보존하는 것입니다.",
      },
      {
        q: "프로브가 내 트래픽을 검사하나요?",
        a: "아닙니다. 프로브는 할당된 DNS 조회 및 TLS 핸드셰이크만 수행합니다. 브라우저 기록, 개인 트래픽, 패킷, 비밀번호 또는 콘텐츠를 검사하지 않습니다.",
      },
      {
        q: "게이트웨이가 일시적으로 다운되면 어떻게 되나요?",
        a: "프로브는 중요한 관측을 로컬에 저장하고 지터로 재시도합니다. 오래된 무변경 관측은 압축될 수 있지만, 의미 있는 변경 이벤트는 추후 제출을 위해 보존됩니다.",
      },
      {
        q: "이것은 암호화폐 투자인가요?",
        a: "아닙니다. 크레딧은 TLSweep 데이터 및 서비스를 조회하기 위한 유틸리티 액세스 권한입니다. 이 프로젝트는 투자 상품으로 제시되어서는 안 됩니다.",
      },
      {
        q: "왜 Merkle 루트를 사용하나요?",
        a: "Merkle 루트를 사용하면 TLSweep이 많은 확인된 이벤트를 하나의 간결한 온체인 커밋먼트로 앵커링할 수 있습니다. 이는 비용을 줄이면서 개별 이벤트를 나중에 검증할 수 있게 합니다.",
      },
      {
        q: "지역 차이가 오탐지가 될 수 있나요?",
        a: "반드시 그렇지는 않습니다. CDN, GeoDNS, 엣지 배포 및 단계적 롤아웃은 합법적으로 다른 인증서를 제공할 수 있습니다. TLSweep은 지역 변형을 자동으로 잘못된 데이터로 처리하지 않고 보존합니다.",
      },
    ],
  },

  finalCta: {
    badge: "",
    title: "인증서 인텔리전스 레이어 구축에 동참하세요.",
    body: "프로브를 실행하고, 도메인을 모니터링하거나, 수천에서 수백만 건의 관측으로 확장하는 리서치를 따라오세요.",
    confirmed: "확인 완료 — 리서치 웨이트리스트에 등록되었습니다. 마일스톤 소식만 발송, 스팸 없음.",
    emailPlaceholder: "you@company.example",
    joinWaitlist: "웨이트리스트 참여",
    runAProbe: "프로브 실행",
    viewGitHub: "GitHub 보기",
    footnote: "오픈소스 프로브 · 공개 스키마 · 검증 가능한 이력",
  },

  footer: {
    description:
      "분산형 TLS 및 DNS 변경 인텔리전스 — 프로브가 관측하고, 합의가 확인하고, 증명이 앵커링합니다.",
    networkLabel: "네트워크: 수집 중 —",
    copyright: "© 2026 TLSweep Research",
    backToTop: "맨 위로 ↑",
    columns: [
      {
        title: "프로젝트",
        links: [
          { label: "개요", href: "#overview" },
          { label: "리서치", href: "#research" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        title: "개발자",
        links: [
          { label: "GitHub", href: "https://github.com/tlsweep", external: true },
          { label: "문서", href: "/docs" },
          { label: "API", href: "#data" },
          { label: "Merkle 검증", href: "#how-it-works" },
        ],
      },
      {
        title: "프로브",
        links: [
          { label: "Docker", href: "#download" },
          { label: "macOS", href: "#download" },
          { label: "Windows", href: "#download" },
          { label: "상태", href: "#probe" },
        ],
      },
      {
        title: "법률",
        links: [
          { label: "개인정보", href: "/privacy" },
          { label: "약관", href: "/terms" },
          { label: "크레딧은 투자 상품이 아닌 유틸리티 액세스 권한입니다.", note: true },
        ],
      },
    ],
  },

  networkMap: {
    gateway: "gateway.tlsweep.example",
    networkCollecting: "네트워크: 수집 중",
    keyChange: "키 변경 감지",
    domain: "도메인",
    issuer: "발급자",
    confidence: "신뢰도",
    anchoring: "앵커링",
    pendingBatch: "Merkle 배치 대기 중",
    probesLabel: "프로브",
  },

  terminal: {
    defaultTitle: "프로브 — seoul-01",
    defaultLines: [
      "tlsweep-probe 시작",
      "리전 확인됨: seoul",
      "게이트웨이: 연결됨",
      "스캔 할당: tranco-h1-clean",
      "관측: 스트리밍 중",
    ],
  },

  languageSwitch: {
    label: "언어",
  },
};

export default ko;
