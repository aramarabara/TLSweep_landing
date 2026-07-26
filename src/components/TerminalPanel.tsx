import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { usePrefersReducedMotion } from "@/lib/hooks";

export interface TermLine {
  text: string;
  cmd?: boolean;
}

const DEFAULT_LINES: TermLine[] = [
  { text: "securitychain-probe start", cmd: true },
  { text: "region verified: seoul" },
  { text: "gateway: connected" },
  { text: "scan assignment: tranco-h1-clean" },
  { text: "observations: streaming" },
];

function OutLine({ text }: { text: string }) {
  const idx = text.indexOf(":");
  if (idx === -1) return <span className="text-emerald-300/90">{text}</span>;
  return (
    <>
      <span className="text-slate-500">{text.slice(0, idx + 1)}</span>
      <span className="text-emerald-300">{text.slice(idx + 1)}</span>
    </>
  );
}

export function TerminalPanel({
  lines = DEFAULT_LINES,
  title = "probe — seoul-01",
  className,
}: {
  lines?: TermLine[];
  title?: string;
  className?: string;
}) {
  const reduced = usePrefersReducedMotion();
  const [pos, setPos] = useState(() => ({
    li: reduced ? lines.length : 0,
    ch: 0,
    done: reduced,
  }));

  useEffect(() => {
    if (reduced) {
      setPos({ li: lines.length, ch: 0, done: true });
      return;
    }
    let li = 0;
    let ch = 0;
    let wait = 8;
    const id = window.setInterval(() => {
      if (wait > 0) {
        wait -= 1;
        return;
      }
      const line = lines[li];
      if (!line) {
        setPos({ li, ch: 0, done: true });
        window.clearInterval(id);
        return;
      }
      ch += 1;
      if (ch >= line.text.length) {
        li += 1;
        ch = 0;
        wait = 5;
      }
      setPos({ li, ch, done: li >= lines.length });
    }, 26);
    return () => window.clearInterval(id);
  }, [lines, reduced]);

  const shownCount = pos.done ? lines.length : Math.min(pos.li + 1, lines.length);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-emerald-400/20 bg-black/70 shadow-xl shadow-emerald-950/20",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-emerald-400/10 px-4 py-2.5">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        </div>
        <span className="font-mono text-[11px] text-emerald-300/60">{title}</span>
      </div>
      <div className="p-4 font-mono text-[12.5px] leading-6 sm:text-[13px]">
        {lines.slice(0, shownCount).map((line, i) => {
          const isCurrent = !pos.done && i === pos.li;
          const text = isCurrent ? line.text.slice(0, pos.ch) : line.text;
          return (
            <div key={line.text} className="whitespace-pre-wrap break-words">
              {line.cmd ? (
                <>
                  <span className="text-cyan-400">$ </span>
                  <span className="text-slate-100">{text}</span>
                </>
              ) : (
                <OutLine text={text} />
              )}
              {isCurrent ? <span className="cursor-blink text-emerald-300">▍</span> : null}
            </div>
          );
        })}
        {pos.done ? (
          <div>
            <span className="text-cyan-400">$ </span>
            <span className="cursor-blink text-emerald-300">▍</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
