import type { ReactNode } from "react";

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
    <header className="flex items-start justify-between px-5 pt-8 pb-4">
      <div>
        {eyebrow && (
          <p className="text-[11px] uppercase tracking-[0.18em] text-wood font-medium">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-1 font-display text-[28px] leading-tight text-forest">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-1 text-sm text-muted-foreground max-w-[280px]">
            {subtitle}
          </p>
        )}
      </div>
      {right}
    </header>
  );
}

export function Chip({
  children,
  tone = "forest",
}: {
  children: ReactNode;
  tone?: "forest" | "orange" | "burgundy" | "wood" | "muted";
}) {
  const tones: Record<string, string> = {
    forest: "bg-forest/10 text-forest",
    orange: "bg-orange/15 text-orange",
    burgundy: "bg-burgundy/12 text-burgundy",
    wood: "bg-wood/12 text-wood",
    muted: "bg-cream text-muted-foreground",
  };
  return <span className={`chip ${tones[tone]}`}>{children}</span>;
}

export function ProgressRing({
  value,
  size = 88,
  stroke = 8,
  color = "var(--orange)",
  track = "var(--line)",
  label,
}: {
  value: number;
  size?: number;
  stroke?: number;
  color?: string;
  track?: string;
  label?: ReactNode;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (Math.min(1, value) * c);
  return (
    <div className="relative grid place-items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} stroke={track} strokeWidth={stroke} fill="none" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={c}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        {label}
      </div>
    </div>
  );
}
