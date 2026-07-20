import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, Volume2, Video, Footprints, Leaf, ShieldCheck } from "lucide-react";
import { animals } from "@/lib/park-data";
import { Chip, ProgressRing } from "@/components/park/ui";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Animal journal — Wildpark Schorfheide" },
      { name: "description", content: "Your digital explorer notebook. Every scanned animal opens a new page." },
    ],
  }),
  component: Journal,
});

function Journal() {
  const a = animals[0];
  return (
    <div>
      {/* Hero */}
      <div className="relative h-72 overflow-hidden rounded-b-[36px]">
        <img src={a.image} alt={a.name} className="absolute inset-0 h-full w-full object-cover" width={1200} height={1200} />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/25 via-transparent to-forest/85" />
        <div className="absolute top-6 left-5">
          <Link to="/profile" aria-label="Back" className="grid h-10 w-10 place-items-center rounded-full bg-white/85 backdrop-blur text-forest">
            <ChevronLeft className="h-5 w-5" />
          </Link>
        </div>
        <div className="absolute bottom-5 left-5 right-5 text-white">
          <p className="text-[11px] uppercase tracking-[0.2em] opacity-80 italic">{a.scientific}</p>
          <h1 className="font-display text-3xl">{a.name}</h1>
          <div className="mt-2 flex items-center gap-2">
            <Chip tone="orange">Page 07 / 24</Chip>
            <Chip tone="burgundy">{a.status}</Chip>
          </div>
        </div>
      </div>

      {/* Quick facts */}
      <section className="px-5 mt-5 grid grid-cols-3 gap-2.5">
        <Fact icon={<Leaf className="h-4 w-4" />} label="Habitat" value="Woodland" />
        <Fact icon={<Footprints className="h-4 w-4" />} label="Diet" value="Herbivore" />
        <Fact icon={<ShieldCheck className="h-4 w-4" />} label="Status" value="Least concern" />
      </section>

      {/* Notes */}
      <section className="px-5 mt-6">
        <h2 className="font-display text-lg text-forest">Field notes</h2>
        <div className="mt-3 card-soft p-4 space-y-3 text-sm text-forest/85 leading-relaxed">
          <p>
            Red deer are the largest wild mammals still roaming these forests. In autumn, males bellow a deep call at dawn — a sound older than any road nearby.
          </p>
          <p>
            Antlers regrow each spring, encased in soft "velvet." A single stag will shed and rebuild a full crown every year of his life.
          </p>
        </div>
      </section>

      {/* Actions */}
      <section className="px-5 mt-5 grid grid-cols-2 gap-3">
        <ActionCard icon={<Volume2 className="h-4 w-4" />} title="Listen" desc="2-min guide" tone="wood" />
        <ActionCard icon={<Video className="h-4 w-4" />} title="Live camera" desc="Meadow, now" tone="orange" live />
      </section>

      {/* Quiz progress */}
      <section className="px-5 mt-6">
        <div className="card-soft p-4 flex items-center gap-4">
          <ProgressRing
            value={2 / 3}
            size={68}
            stroke={7}
            color="var(--burgundy)"
            label={
              <div className="text-center">
                <div className="font-display text-sm text-forest">2/3</div>
              </div>
            }
          />
          <div className="flex-1">
            <h3 className="font-display text-base text-forest">Mini quiz</h3>
            <p className="text-xs text-muted-foreground">One quiet question left. +20 XP.</p>
          </div>
          <button className="rounded-full bg-forest px-4 py-2 text-xs font-medium text-white">Continue</button>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-5 mt-6">
        <h2 className="font-display text-lg text-forest">Gallery</h2>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {animals.concat(animals).slice(0, 6).map((x, i) => (
            <img key={i} src={x.image} alt="" className="aspect-square w-full object-cover rounded-2xl" loading="lazy" />
          ))}
        </div>
      </section>

      {/* Footprint */}
      <section className="px-5 mt-6 mb-4">
        <div className="card-soft p-4 flex items-center gap-4">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-cream">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <ellipse cx="14" cy="24" rx="4" ry="6" fill="#162D20" />
              <ellipse cx="26" cy="24" rx="4" ry="6" fill="#162D20" />
              <ellipse cx="12" cy="14" rx="2.5" ry="3.5" fill="#162D20" />
              <ellipse cx="28" cy="14" rx="2.5" ry="3.5" fill="#162D20" />
            </svg>
          </div>
          <div>
            <h3 className="font-display text-base text-forest">Footprint</h3>
            <p className="text-xs text-muted-foreground max-w-[220px]">Cloven hoof, ~8 cm long. Often found near soft mud beside forest ponds.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function Fact({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="card-soft p-3">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-cream text-forest">{icon}</span>
      <p className="mt-2 text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className="font-display text-sm text-forest leading-tight">{value}</p>
    </div>
  );
}

function ActionCard({ icon, title, desc, tone, live }: { icon: React.ReactNode; title: string; desc: string; tone: "wood" | "orange"; live?: boolean }) {
  const bg = tone === "orange" ? "gradient-warm text-white" : "bg-white text-forest border border-line";
  return (
    <button className={`rounded-[22px] p-4 text-left ${bg} shadow-[var(--shadow-soft)] relative`}>
      <span className={`grid h-9 w-9 place-items-center rounded-full ${tone === "orange" ? "bg-white/20" : "bg-cream"}`}>
        {icon}
      </span>
      {live && (
        <span className="absolute top-3 right-3 rounded-full bg-alert px-2 py-0.5 text-[10px] font-semibold text-white">LIVE</span>
      )}
      <h3 className="mt-3 font-display text-base">{title}</h3>
      <p className={`text-[11px] ${tone === "orange" ? "opacity-85" : "text-muted-foreground"}`}>{desc}</p>
    </button>
  );
}
