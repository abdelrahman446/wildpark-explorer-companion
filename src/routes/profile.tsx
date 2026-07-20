import { createFileRoute, Link } from "@tanstack/react-router";
import { Settings, Globe, Accessibility, Heart, BookOpen, ChevronRight } from "lucide-react";
import { animals } from "@/lib/park-data";
import { ProgressRing, Chip } from "@/components/park/ui";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile — Wildpark Schorfheide" },
      { name: "description", content: "Your explorer level, journal completion, favorite animals and visit history." },
    ],
  }),
  component: Profile,
});

function Profile() {
  return (
    <div>
      <div className="relative pt-10 pb-6 px-5 rounded-b-[36px] gradient-forest text-white overflow-hidden">
        <div className="flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-[0.2em] opacity-70">Explorer</p>
          <button className="grid h-9 w-9 place-items-center rounded-full bg-white/15">
            <Settings className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-4 flex items-center gap-4">
          <div className="relative grid h-20 w-20 place-items-center rounded-full bg-orange text-white font-display text-2xl ring-4 ring-white/20">
            L
          </div>
          <div>
            <h1 className="font-display text-2xl">Lina Hoffmann</h1>
            <div className="mt-1 flex items-center gap-2">
              <Chip tone="orange">Level 7</Chip>
              <span className="text-[11px] opacity-80">Forest Explorer</span>
            </div>
          </div>
        </div>

        {/* XP bar */}
        <div className="mt-5">
          <div className="flex items-center justify-between text-[11px] opacity-80">
            <span>1,240 XP</span>
            <span>1,600 XP</span>
          </div>
          <div className="mt-1.5 h-2 rounded-full bg-white/15 overflow-hidden">
            <div className="h-full rounded-full bg-orange" style={{ width: "77%" }} />
          </div>
          <p className="mt-1.5 text-[11px] opacity-80">360 XP to Wildlife Tracker</p>
        </div>
      </div>

      {/* Stats grid */}
      <section className="px-5 mt-5 grid grid-cols-3 gap-3">
        <Stat label="Journals" value="7 / 24" />
        <Stat label="Visits" value="12" />
        <Stat label="Badges" value="9" />
      </section>

      {/* Journal completion */}
      <section className="px-5 mt-6">
        <div className="card-soft p-4 flex items-center gap-4">
          <ProgressRing
            value={7 / 24}
            size={78}
            stroke={8}
            label={
              <div className="text-center">
                <div className="font-display text-base text-forest leading-none">29%</div>
                <div className="text-[9px] uppercase tracking-widest text-muted-foreground">Journal</div>
              </div>
            }
          />
          <div className="flex-1">
            <h3 className="font-display text-base text-forest">Explorer Journal</h3>
            <p className="text-xs text-muted-foreground">7 of 24 species discovered</p>
            <Link to="/journal" className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-orange">
              Open journal <ChevronRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Favorites */}
      <section className="px-5 mt-6">
        <h2 className="font-display text-lg text-forest flex items-center gap-2">
          <Heart className="h-4 w-4 text-burgundy" /> Favorite animals
        </h2>
        <div className="mt-3 grid grid-cols-3 gap-3">
          {animals.map((a) => (
            <div key={a.id} className="card-soft overflow-hidden">
              <img src={a.image} alt={a.name} className="h-20 w-full object-cover" loading="lazy" />
              <div className="p-2">
                <p className="font-display text-xs text-forest truncate">{a.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Settings list */}
      <section className="px-5 mt-6">
        <h2 className="font-display text-lg text-forest">Preferences</h2>
        <div className="mt-3 card-soft divide-y divide-line">
          <Row icon={<Globe className="h-4 w-4" />} label="Language" value="English" />
          <Row icon={<Accessibility className="h-4 w-4" />} label="Accessibility" value="Standard" />
          <Row icon={<BookOpen className="h-4 w-4" />} label="Visit history" value="12 visits" />
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="card-soft p-3 text-center">
      <div className="font-display text-lg text-forest">{value}</div>
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">{label}</div>
    </div>
  );
}

function Row({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <button className="w-full flex items-center gap-3 px-4 py-3.5 text-left">
      <span className="grid h-9 w-9 place-items-center rounded-full bg-cream text-forest">{icon}</span>
      <span className="flex-1 text-sm text-forest">{label}</span>
      <span className="text-xs text-muted-foreground">{value}</span>
      <ChevronRight className="h-4 w-4 text-muted-foreground" />
    </button>
  );
}
