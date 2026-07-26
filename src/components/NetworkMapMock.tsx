import { cn } from "@/utils/cn";
import { usePrefersReducedMotion } from "@/lib/hooks";

interface Region {
  code: string;
  name: string;
  latency: string;
  obs: string;
  color: string;
  x: number;
  y: number;
  labelX: number;
  labelY: number;
  mid: [number, number];
  path: string;
}

const regions: Region[] = [
  {
    code: "SEL",
    name: "Seoul",
    latency: "38ms",
    obs: "1.2K obs",
    color: "#22d3ee",
    x: 46,
    y: 34,
    labelX: 46,
    labelY: 57,
    mid: [105, 48],
    path: "M58,38 C105,44 128,54 153,64",
  },
  {
    code: "TYO",
    name: "Tokyo",
    latency: "41ms",
    obs: "1.1K obs",
    color: "#34d399",
    x: 46,
    y: 106,
    labelX: 46,
    labelY: 126,
    mid: [105, 92],
    path: "M58,102 C105,96 128,86 153,76",
  },
  {
    code: "LON",
    name: "London",
    latency: "44ms",
    obs: "1.2K obs",
    color: "#818cf8",
    x: 294,
    y: 70,
    labelX: 294,
    labelY: 96,
    mid: [235, 70],
    path: "M282,70 C240,70 216,70 189,70",
  },
];

export function NetworkMapMock({ className }: { className?: string }) {
  const reduced = usePrefersReducedMotion();

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-2xl shadow-cyan-950/20 backdrop-blur-sm",
        className,
      )}
    >
      {/* window header */}
      <div className="flex items-center justify-between gap-3 border-b border-slate-800/80 px-4 py-3">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        </div>
        <span className="hidden truncate font-mono text-[11px] text-slate-500 sm:block">
          gateway.securitychain.example
        </span>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 font-mono text-[10px] text-emerald-300">
          <span className="pulse-soft h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
          Network: collecting
        </span>
      </div>

      {/* region tiles */}
      <div className="grid grid-cols-3 gap-2 px-4 pt-4">
        {regions.map((r) => (
          <div
            key={r.code}
            className="rounded-lg border border-slate-800 bg-slate-950/60 p-2.5 transition-colors duration-200 hover:border-slate-600"
          >
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: r.color }} aria-hidden="true" />
              <span className="font-mono text-xs font-medium text-slate-200">{r.code}</span>
            </div>
            <p className="mt-0.5 text-[11px] text-slate-500">{r.name}</p>
            <p className="mt-1 font-mono text-[10px] text-slate-600">
              {r.latency} · {r.obs}
            </p>
          </div>
        ))}
      </div>

      {/* topology */}
      <div className="px-4">
        <svg
          viewBox="0 0 340 140"
          className="h-auto w-full"
          role="img"
          aria-label="Probe regions Seoul, Tokyo and London streaming signed observations to the TLSweep gateway"
        >
          {regions.map((r) => (
            <path key={`p-${r.code}`} d={r.path} fill="none" stroke="#334155" strokeWidth="1.4" className="svg-dash" />
          ))}
          {!reduced
            ? regions.map((r, i) => (
                <circle key={`m-${r.code}`} r="2.6" fill={r.color} opacity="0.95">
                  <animateMotion dur={`${2.2 + i * 0.5}s`} repeatCount="indefinite" path={r.path} />
                </circle>
              ))
            : regions.map((r) => (
                <circle key={`s-${r.code}`} cx={r.mid[0]} cy={r.mid[1]} r="2.6" fill={r.color} opacity="0.8" />
              ))}

          {/* gateway */}
          <path
            d="M170 53 184.7 61.5v17L170 87l-14.7-8.5v-17L170 53Z"
            fill="rgba(34,211,238,0.08)"
            stroke="#22d3ee"
            strokeWidth="1.4"
          />
          <text x="170" y="73.5" textAnchor="middle" fontSize="9" fill="#94a3b8" fontFamily="JetBrains Mono, monospace">
            GW
          </text>

          {regions.map((r) => (
            <g key={`n-${r.code}`}>
              <circle
                cx={r.x}
                cy={r.y}
                r="7"
                fill="none"
                stroke={r.color}
                strokeWidth="1.2"
                opacity="0.45"
                className="svg-ring"
              />
              <circle cx={r.x} cy={r.y} r="3.4" fill={r.color} />
              <text
                x={r.labelX}
                y={r.labelY}
                textAnchor="middle"
                fontSize="11"
                fontWeight="600"
                fill="#cbd5e1"
                fontFamily="JetBrains Mono, monospace"
              >
                {r.code}
              </text>
              <text
                x={r.labelX}
                y={r.labelY + 11}
                textAnchor="middle"
                fontSize="8"
                fill="#64748b"
                fontFamily="JetBrains Mono, monospace"
              >
                {r.name}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* latest confirmed event */}
      <div className="px-4 pb-4">
        <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
          <div className="flex items-center justify-between gap-2">
            <span className="flex items-center gap-2 font-mono text-xs font-medium text-rose-300">
              <span className="pulse-soft h-1.5 w-1.5 rounded-full bg-rose-400" aria-hidden="true" />
              key_change detected
            </span>
            <span className="font-mono text-[10px] text-slate-600">evt_8f3ka2</span>
          </div>
          <dl className="mt-3 space-y-1.5 font-mono text-[11px] sm:text-xs">
            <div className="flex items-baseline justify-between gap-4">
              <dt className="text-slate-500">domain</dt>
              <dd className="truncate text-slate-200">portal.acme.example</dd>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <dt className="text-slate-500">issuer</dt>
              <dd className="truncate text-slate-200">Google Trust Services / WR2</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-slate-500">confidence</dt>
              <dd className="flex items-center gap-1 text-emerald-300">
                {["SEL", "TYO", "LON"].map((c) => (
                  <span key={c} className="rounded border border-emerald-400/25 bg-emerald-400/10 px-1 py-0.5 text-[9px]">
                    {c}
                  </span>
                ))}
                <span className="ml-1">3/3 probes</span>
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <dt className="text-slate-500">anchoring</dt>
              <dd className="flex items-center gap-1.5 text-amber-300">
                <span className="pulse-soft h-1.5 w-1.5 rounded-full bg-amber-400" aria-hidden="true" />
                pending Merkle batch
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
