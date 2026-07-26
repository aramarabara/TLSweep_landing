import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/utils/cn";
import { useInView, usePrefersReducedMotion } from "@/lib/hooks";

export const containerCls = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn(containerCls, className)}>{children}</div>;
}

/* ---------------------------------- logo ---------------------------------- */

export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M16 2.5 27.5 9v14L16 29.5 4.5 23V9L16 2.5Z"
        fill="rgba(34,211,238,0.07)"
        stroke="#22d3ee"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M16 11.5 11.5 19.5M16 11.5l4.5 8M11.5 19.5h9" stroke="#475569" strokeWidth="1.2" />
      <circle cx="16" cy="11.5" r="2.3" fill="#22d3ee" />
      <circle cx="11.5" cy="19.5" r="2.3" fill="#34d399" />
      <circle cx="20.5" cy="19.5" r="2.3" fill="#818cf8" />
    </svg>
  );
}

/* ------------------------------- github mark ------------------------------ */

export function GitHubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026a9.564 9.564 0 0 1 2.5-.336c.85.004 1.705.114 2.504.336 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

/* --------------------------------- button --------------------------------- */

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  className,
  children,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-all duration-200",
    variant === "primary" &&
      "bg-cyan-400 font-semibold text-slate-950 shadow-[0_8px_24px_-12px_rgba(34,211,238,0.6)] hover:bg-cyan-300 hover:shadow-[0_10px_36px_-10px_rgba(34,211,238,0.65)] active:translate-y-px",
    variant === "secondary" &&
      "border border-slate-700 text-slate-100 hover:border-slate-500 hover:bg-slate-800 active:translate-y-px",
    variant === "ghost" && "text-slate-300 hover:text-cyan-300",
    size === "sm" && "h-8 px-3 text-xs",
    size === "md" && "h-10 px-4 text-sm",
    size === "lg" && "h-12 px-6 text-[15px]",
    className,
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

/* ---------------------------------- badge --------------------------------- */

const badgeTones = {
  cyan: "border-cyan-400/25 bg-cyan-400/10 text-cyan-300",
  emerald: "border-emerald-400/25 bg-emerald-400/10 text-emerald-300",
  indigo: "border-indigo-400/25 bg-indigo-400/10 text-indigo-300",
  rose: "border-rose-400/25 bg-rose-400/10 text-rose-300",
  amber: "border-amber-400/25 bg-amber-400/10 text-amber-300",
  slate: "border-slate-700 bg-slate-800/60 text-slate-300",
};

export type BadgeTone = keyof typeof badgeTones;

export function Badge({
  tone = "slate",
  pulse,
  className,
  children,
}: {
  tone?: BadgeTone;
  pulse?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
        badgeTones[tone],
        className,
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full bg-current", pulse && "pulse-soft")} aria-hidden="true" />
      {children}
    </span>
  );
}

/* ---------------------------------- card ---------------------------------- */

export function Card({
  children,
  className,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl shadow-cyan-950/10",
        hover && "transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-slate-900/80",
        className,
      )}
    >
      {children}
    </div>
  );
}

/* --------------------------------- section -------------------------------- */

export function Section({
  id,
  className,
  containerClassName,
  children,
}: {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-24", className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  badge,
  center,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: ReactNode;
  badge?: ReactNode;
  center?: boolean;
}) {
  return (
    <Reveal className={cn("max-w-3xl", center && "mx-auto text-center")}>
      <div className={cn("flex flex-wrap items-center gap-3", center && "justify-center")}>
        <span className="h-px w-8 bg-cyan-400/60" aria-hidden="true" />
        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-cyan-400">
          {eyebrow}
        </span>
        {badge}
      </div>
      <h2 className="mt-4 font-display text-3xl font-bold leading-[1.08] tracking-tight text-slate-50 sm:text-4xl lg:text-[2.6rem]">
        {title}
      </h2>
      {sub ? (
        <p className={cn("mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg", center && "mx-auto")}>
          {sub}
        </p>
      ) : null}
    </Reveal>
  );
}

/* -------------------------------- copy button ------------------------------ */

export function CopyButton({ text, label = "copy" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label={copied ? "Copied to clipboard" : `Copy: ${label}`}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 font-mono text-[10px] transition-colors",
        copied
          ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-300"
          : "border-slate-700 bg-slate-900 text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300",
      )}
    >
      {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
      {copied ? "copied" : label}
    </button>
  );
}

/* --------------------------------- reveal --------------------------------- */

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const style: CSSProperties | undefined = delay ? { transitionDelay: `${delay}ms` } : undefined;
  return (
    <div ref={ref} style={style} className={cn("reveal", inView && "is-visible", className)}>
      {children}
    </div>
  );
}

/* --------------------------------- count up ------------------------------- */

export function CountUp({
  to,
  prefix = "",
  suffix = "",
  duration = 1400,
  className,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const reduced = usePrefersReducedMotion();
  const [ref, inView] = useInView<HTMLSpanElement>();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced || to === 0) {
      setVal(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, reduced, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {val}
      {suffix}
    </span>
  );
}

/* ------------------------------- scramble text ---------------------------- */

const GLYPHS = "#/\\<>*+=~01△▲";

export function ScrambleText({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reduced = usePrefersReducedMotion();
  const [ref, inView] = useInView<HTMLSpanElement>({ threshold: 0.3 });
  const [out, setOut] = useState(text);

  useEffect(() => {
    if (reduced || !inView) return;
    let raf = 0;
    let frame = 0;
    const totalFrames = Math.max(18, Math.round(text.length * 1.15));
    const tick = () => {
      frame += 1;
      const settled = Math.floor((frame / totalFrames) * text.length);
      if (settled >= text.length) {
        setOut(text);
        return;
      }
      let next = "";
      for (let i = 0; i < text.length; i += 1) {
        const c = text[i];
        next += c === " " || i < settled ? c : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
      setOut(next);
      raf = requestAnimationFrame(tick);
    };
    const timer = window.setTimeout(() => {
      raf = requestAnimationFrame(tick);
    }, delay);
    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [text, inView, reduced, delay]);

  return (
    <span ref={ref} className={cn("inline-block", className)}>
      {out}
    </span>
  );
}
