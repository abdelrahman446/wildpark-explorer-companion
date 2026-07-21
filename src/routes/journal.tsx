import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, Trees, Footprints, Leaf, Lock, Check, Sparkles, ScanLine, MapPin } from "lucide-react";
import { ProgressRing, Chip } from "@/components/park/ui";
import mascot from "@/assets/mascot-fox.png";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Achievements — Wildpark Schorfheide" },
      { name: "description", content: "Collect three signature badges — Forest Explorer, Wildlife Tracker and Nature Guardian — by walking, scanning and discovering." },
    ],
  }),
  component: Achievements,
});

type BadgeTone = "wood" | "orange" | "burgundy";

const badges: {
  id: string;
  name: string;
  subtitle: string;
  tone: BadgeTone;
  progress: number;
  goal: number;
  earned?: boolean;
  locked?: boolean;
  icon: React.ReactNode;
  criteria: { label: string; done: boolean }[];
}[] = [
  {
    id: "forest-explorer",
    name: "Forest Explorer",
    subtitle: "First steps on the trail",
    tone: "wood",
    progress: 12,
    goal: 12,
    earned: true,
    icon: <Trees className="h-8 w-8" strokeWidth={1.6} />,
    criteria: [
      { label: "Walk 5 km inside the park", done: true },
      { label: "Scan your first 3 mascots", done: true },
      { label: "Visit 2 habitats", done: true },
    ],
  },
  {
    id: "wildlife-tracker",
    name: "Wildlife Tracker",
    subtitle: "Follow the deeper paths",
    tone: "orange",
    progress: 6,
    goal: 10,
    icon: <Footprints className="h-8 w-8" strokeWidth={1.6} />,
    criteria: [
      { label: "Walk 15 km total", done: true },
      { label: "Discover 6 of 10 mascots", done: true },
      { label: "Complete 3 daily challenges", done: false },
      { label: "Visit the wolf habitat at dusk", done: false },
    ],
  },
  {
    id: "nature-guardian",
    name: "Nature Guardian",
    subtitle: "A friend of the forest",
    tone: "burgundy",
    progress: 0,
    goal: 20,
    locked: true,
    icon: <Leaf className="h-8 w-8" strokeWidth={1.6} />,
    criteria: [
      { label: "Earn Wildlife Tracker first", done: false },
      { label: "Discover all 10 mascots", done: false },
      { label: "Complete a seasonal quest", done: false },
    ],
  },
];

function Achievements() {
  return (
    <div>
      {/* Header */}
      <div className="relative pt-10 pb-6 px-5 rounded-b-[36px] gradient-forest text-white overflow-hidden">
        <div className="flex items-center justify-between">
          <Link to="/profile" aria-label="Back" className="grid h-10 w-10 place-items-center rounded-full bg-white/15 backdrop-blur text-white">
            <ChevronLeft className="h-5 w-5" />
          </Link>
          <p className="text-[11px] uppercase tracking-[0.2em] opacity-70">Achievements</p>
          <span className="w-10" />
        </div>

        <div className="mt-5 flex items-end gap-4">
          <ProgressRing
            value={1 / 3}
            size={88}
            stroke={8}
            color="var(--orange)"
            track="rgba(255,255,255,0.18)"
            label={
              <div className="text-center">
                <div className="font-display text-lg leading-none">1/3</div>
                <div className="text-[9px] uppercase tracking-widest opacity-80">Badges</div>
              </div>
            }
          />
          <div className="pb-1">
            <h1 className="font-display text-[26px] leading-tight">Your collection</h1>
            <p className="mt-1 text-xs opacity-85 max-w-[220px]">
              Three signature badges. Earn them by walking, scanning and truly seeing the forest.
            </p>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-2">
          <Chip tone="orange">1,240 XP</Chip>
          <Chip tone="muted">Level 7</Chip>
        </div>
      </div>

      {/* Mascot whisper */}
      <section className="px-5 mt-5">
        <div className="card-soft p-4 flex items-center gap-3 border border-line">
          <img src={mascot} alt="" className="h-12 w-12" loading="lazy" />
          <p className="text-sm text-forest/85 leading-snug">
            <span className="font-medium text-forest">Fenn says:</span> You are only 4 mascots away from Wildlife Tracker. The wolf post is close.
          </p>
        </div>
      </section>

      {/* Badges */}
      <section className="px-5 mt-6 space-y-4">
        {badges.map((b) => (
          <BadgeCard key={b.id} badge={b} />
        ))}
      </section>

      {/* Next up */}
      <section className="px-5 mt-6">
        <h2 className="font-display text-lg text-forest">Get closer today</h2>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <Link to="/scan" className="card-soft p-4">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-orange/15 text-orange">
              <ScanLine className="h-4 w-4" />
            </span>
            <h3 className="mt-3 font-display text-sm text-forest">Scan a mascot</h3>
            <p className="text-[11px] text-muted-foreground">+60 XP per code</p>
          </Link>
          <Link to="/explore" className="card-soft p-4">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-forest/10 text-forest">
              <MapPin className="h-4 w-4" />
            </span>
            <h3 className="mt-3 font-display text-sm text-forest">Find a habitat</h3>
            <p className="text-[11px] text-muted-foreground">3 nearby on the map</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

function BadgeCard({ badge }: { badge: (typeof badges)[number] }) {
  const pct = Math.min(1, badge.progress / badge.goal);
  const toneBg: Record<BadgeTone, string> = {
    wood: "linear-gradient(160deg, #A87A50 0%, #7A5230 55%, #4E3218 100%)",
    orange: "linear-gradient(160deg, #E39B4F 0%, #C97A2A 55%, #7E4712 100%)",
    burgundy: "linear-gradient(160deg, #8B4256 0%, #6B2D3E 55%, #3E1622 100%)",
  };
  const toneRing: Record<BadgeTone, string> = {
    wood: "var(--wood)",
    orange: "var(--orange)",
    burgundy: "var(--burgundy)",
  };

  return (
    <div className="card-soft overflow-hidden">
      <div className="flex items-center gap-4 p-4">
        {/* Medallion */}
        <div className="relative shrink-0">
          <div
            className={`grid h-24 w-24 place-items-center rounded-full text-white shadow-[0_14px_30px_-10px_rgba(22,45,32,0.5)] ${
              badge.locked ? "opacity-45 saturate-50" : ""
            }`}
            style={{ backgroundImage: toneBg[badge.tone] }}
          >
            {/* inner ring */}
            <span className="absolute inset-2 rounded-full border border-white/25" />
            {/* engraved dots */}
            <span className="absolute inset-0 rounded-full" style={{
              background: "radial-gradient(circle at 30% 25%, rgba(255,255,255,0.35) 0%, transparent 40%)",
            }} />
            {badge.locked ? <Lock className="h-7 w-7" /> : badge.icon}
          </div>
          {badge.earned && (
            <span className="absolute -bottom-1 -right-1 grid h-7 w-7 place-items-center rounded-full bg-forest text-white ring-4 ring-white">
              <Check className="h-4 w-4" strokeWidth={2.4} />
            </span>
          )}
          {!badge.earned && !badge.locked && (
            <span className="absolute -top-1 -right-1 grid h-7 w-7 place-items-center rounded-full bg-orange text-white ring-4 ring-white">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
          )}
        </div>

        {/* Meta */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-display text-lg text-forest truncate">{badge.name}</h3>
            {badge.earned && <Chip tone="forest">Earned</Chip>}
            {badge.locked && <Chip tone="muted">Locked</Chip>}
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">{badge.subtitle}</p>

          {!badge.earned && !badge.locked && (
            <>
              <div className="mt-3 h-1.5 rounded-full bg-line overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: pct * 100 + "%", background: toneRing[badge.tone] }}
                />
              </div>
              <p className="mt-1 text-[11px] text-muted-foreground">
                {badge.progress} / {badge.goal} · {Math.round(pct * 100)}%
              </p>
            </>
          )}
        </div>
      </div>

      {/* Criteria */}
      <ul className="border-t border-line/70 divide-y divide-line/70">
        {badge.criteria.map((c, i) => (
          <li key={i} className="flex items-center gap-3 px-4 py-2.5">
            <span
              className={`grid h-5 w-5 place-items-center rounded-full ${
                c.done ? "bg-forest text-white" : "bg-cream text-muted-foreground border border-line"
              }`}
            >
              {c.done ? <Check className="h-3 w-3" strokeWidth={2.6} /> : null}
            </span>
            <span className={`text-xs ${c.done ? "text-forest" : "text-muted-foreground"}`}>{c.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
