import type { ReactNode } from "react";
import type { ConservationStatus } from "@/lib/park-data";

export function ScreenHeader({
  eyebrow,
  title,
  subtitle,
  right,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  right?: ReactNode;
}) {
  return (
    <header className="flex items-start justify-between px-6 pt-10 pb-3">
      <div className="min-w-0">
        {eyebrow && (
          <p className="text-[10px] uppercase tracking-[0.24em] text-wood font-medium">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 font-display text-[30px] leading-[1.05] text-forest">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 text-[13px] leading-relaxed text-forest/60 max-w-[300px]">
            {subtitle}
          </p>
        )}
      </div>
      {right}
    </header>
  );
}

export function SectionLabel({
  children,
  action,
}: {
  children: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="flex items-baseline justify-between px-6">
      <h2 className="text-[10px] uppercase tracking-[0.24em] text-wood font-medium">
        {children}
      </h2>
      {action}
    </div>
  );
}

export function Chip({
  children,
  tone = "forest",
}: {
  children: ReactNode;
  tone?: "forest" | "orange" | "wood" | "outline";
}) {
  const tones: Record<string, string> = {
    forest: "bg-forest/8 text-forest",
    orange: "bg-orange/12 text-orange",
    wood: "bg-wood/10 text-wood",
    outline: "border border-line text-forest/70 bg-white",
  };
  return <span className={`chip ${tones[tone]}`}>{children}</span>;
}

export function StatusDot({ status }: { status: ConservationStatus }) {
  const map: Record<ConservationStatus, { color: string; label: string }> = {
    "Least concern": { color: "#6E8A6F", label: "Least concern" },
    "Near threatened": { color: "#C97A2A", label: "Near threatened" },
    "Vulnerable": { color: "#B0651E", label: "Vulnerable" },
    "Endangered": { color: "#B03030", label: "Endangered" },
  };
  const s = map[status];
  return (
    <span className="inline-flex items-center gap-2 text-[11px] text-forest/70">
      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: s.color }} />
      {s.label}
    </span>
  );
}
