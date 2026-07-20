import { createFileRoute } from "@tanstack/react-router";
import { Footprints, ScanLine, HelpCircle, Video, Sparkles, Award, Lock, Check } from "lucide-react";
import { Chip, ProgressRing } from "@/components/park/ui";

export const Route = createFileRoute("/challenges")({
  head: () => ({
    meta: [
      { title: "Challenges — Wildpark Schorfheide" },
      { name: "description", content: "Daily and weekly forest missions. Earn XP by walking, scanning, discovering and learning." },
    ],
  }),
  component: Challenges,
});

function Challenges() {
  return (
    <div>
      <header className="px-5 pt-8">
        <p className="text-[11px] uppercase tracking-[0.2em] text-wood font-medium">Missions</p>
        <h1 className="mt-1 font-display text-[28px] text-forest">Forest Explorer</h1>
        <p className="mt-1 text-sm text-muted-foreground max-w-[280px]">
          Small, quiet quests that make each visit deeper.
        </p>
      </header>

      {/* Hero challenge */}
      <div className="px-5 mt-5">
        <div className="relative overflow-hidden rounded-[26px] p-5 gradient-forest text-white">
          <div className="flex items-center gap-4">
            <ProgressRing
              value={0.6}
              size={92}
              stroke={9}
              color="var(--orange)"
              track="rgba(255,255,255,0.18)"
              label={
                <div className="text-center">
                  <div className="font-display text-lg leading-none">60%</div>
                  <div className="text-[9px] uppercase tracking-widest opacity-80">Weekly</div>
                </div>
              }
            />
            <div>
              <p className="text-[11px] uppercase tracking-widest opacity-80">This week</p>
              <h2 className="font-display text-xl">The Autumn Wanderer</h2>
              <p className="mt-1 text-xs opacity-85 max-w-[180px]">
                6 of 10 tasks complete. Two days left.
              </p>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-2 text-[11px]">
            <Chip tone="orange">+ 420 XP reward</Chip>
            <Chip tone="muted">Owl badge</Chip>
          </div>
        </div>
      </div>

      {/* Daily */}
      <section className="px-5 mt-6">
        <SectionHeader label="Today's missions" small="Resets at midnight" />
        <div className="mt-3 space-y-2.5">
          <Mission icon={<Footprints className="h-4 w-4" />} title="Walk 5,000 steps" progress={4820} goal={5000} xp={40} />
          <Mission icon={<ScanLine className="h-4 w-4" />} title="Scan 3 nature codes" progress={2} goal={3} xp={60} />
          <Mission icon={<HelpCircle className="h-4 w-4" />} title="Complete one quiz" progress={0} goal={1} xp={30} />
        </div>
      </section>

      {/* Weekly */}
      <section className="px-5 mt-6">
        <SectionHeader label="Weekly quests" small="4 days left" />
        <div className="mt-3 space-y-2.5">
          <Mission icon={<Video className="h-4 w-4" />} title="Watch 5 live cameras" progress={3} goal={5} xp={80} />
          <Mission icon={<Sparkles className="h-4 w-4" />} title="Find the seasonal mascot" progress={0} goal={1} xp={120} accent />
        </div>
      </section>

      {/* Achievements teaser */}
      <section className="px-5 mt-6">
        <SectionHeader label="Levels" />
        <div className="mt-3 grid grid-cols-3 gap-3">
          <LevelBadge tone="wood" title="Forest Explorer" earned />
          <LevelBadge tone="orange" title="Wildlife Tracker" />
          <LevelBadge tone="burgundy" title="Nature Guardian" locked />
        </div>
      </section>
    </div>
  );
}

function SectionHeader({ label, small }: { label: string; small?: string }) {
  return (
    <div className="flex items-baseline justify-between">
      <h2 className="font-display text-lg text-forest">{label}</h2>
      {small && <span className="text-[11px] text-muted-foreground">{small}</span>}
    </div>
  );
}

function Mission({ icon, title, progress, goal, xp, accent }: { icon: React.ReactNode; title: string; progress: number; goal: number; xp: number; accent?: boolean }) {
  const pct = Math.min(1, progress / goal);
  const done = pct >= 1;
  return (
    <div className="card-soft p-3.5">
      <div className="flex items-center gap-3">
        <span className={`grid h-10 w-10 place-items-center rounded-full ${accent ? "bg-orange/15 text-orange" : "bg-cream text-forest"}`}>
          {icon}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm font-medium text-forest truncate">{title}</h3>
            <span className={`text-[11px] font-semibold ${done ? "text-forest" : "text-orange"}`}>
              {done ? <Check className="h-4 w-4 inline" /> : `+${xp} XP`}
            </span>
          </div>
          <div className="mt-2 h-1.5 rounded-full bg-line overflow-hidden">
            <div className={`h-full rounded-full ${accent ? "bg-orange" : "bg-forest"}`} style={{ width: pct * 100 + "%" }} />
          </div>
          <p className="mt-1 text-[11px] text-muted-foreground">
            {progress.toLocaleString()} / {goal.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

function LevelBadge({ tone, title, earned, locked }: { tone: "wood" | "orange" | "burgundy"; title: string; earned?: boolean; locked?: boolean }) {
  const bg = { wood: "bg-wood", orange: "bg-orange", burgundy: "bg-burgundy" }[tone];
  return (
    <div className="card-soft p-3 text-center">
      <div className={`mx-auto grid h-14 w-14 place-items-center rounded-full ${bg} text-white relative`}>
        {locked ? <Lock className="h-5 w-5" /> : <Award className="h-6 w-6" />}
        {earned && (
          <span className="absolute -bottom-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-forest text-white ring-2 ring-white">
            <Check className="h-3 w-3" />
          </span>
        )}
      </div>
      <p className="mt-2 font-display text-xs text-forest leading-tight">{title}</p>
    </div>
  );
}
