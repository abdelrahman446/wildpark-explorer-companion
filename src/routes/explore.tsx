import { createFileRoute } from "@tanstack/react-router";
import { Search, Utensils, ShoppingBag, Baby, Bath, Clock, Navigation2 } from "lucide-react";
import { animals } from "@/lib/park-data";
import { Chip } from "@/components/park/ui";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Explore — Wildpark Schorfheide" },
      { name: "description", content: "Interactive park map, animal habitats, feeding schedules and nearby points of interest." },
    ],
  }),
  component: Explore,
});

function Explore() {
  return (
    <div>
      <header className="px-5 pt-8">
        <p className="text-[11px] uppercase tracking-[0.2em] text-wood font-medium">Map</p>
        <h1 className="mt-1 font-display text-[28px] text-forest">Explore the park</h1>
      </header>

      {/* search */}
      <div className="px-5 mt-4">
        <div className="flex items-center gap-2 rounded-full bg-white border border-line px-4 py-3 shadow-[var(--shadow-soft)]">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            placeholder="Search animal, trail, station…"
          />
        </div>
      </div>

      {/* map illustration */}
      <div className="px-5 mt-5">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-line" style={{ background: "radial-gradient(circle at 30% 20%, #DDE5D6 0%, #C8D3BE 45%, #A7B99A 100%)" }}>
          <MapArt />
        </div>
      </div>

      {/* filters */}
      <div className="px-5 mt-5 flex gap-2 overflow-x-auto no-scrollbar">
        {["All", "Mammals", "Birds", "Feeding soon", "Kid-friendly"].map((f, i) => (
          <button
            key={f}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium border ${
              i === 0 ? "bg-forest text-white border-forest" : "bg-white text-forest border-line"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* nearby */}
      <section className="px-5 mt-6">
        <h2 className="font-display text-lg text-forest">Nearby animals</h2>
        <div className="mt-3 space-y-3">
          {animals.map((a) => (
            <div key={a.id} className="card-soft p-3 flex items-center gap-3">
              <img src={a.image} alt={a.name} className="h-16 w-16 rounded-2xl object-cover" loading="lazy" />
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-base text-forest truncate">{a.name}</h3>
                <p className="text-[11px] text-muted-foreground italic truncate">{a.scientific}</p>
                <div className="mt-1.5 flex items-center gap-2">
                  <Chip tone="forest">
                    <Navigation2 className="h-3 w-3" /> {a.distance}
                  </Chip>
                  <Chip tone="orange">
                    <Clock className="h-3 w-3" /> 4 min
                  </Chip>
                </div>
              </div>
              <button className="rounded-full bg-forest px-3 py-2 text-[11px] font-medium text-white">
                Navigate
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* POI */}
      <section className="px-5 mt-6">
        <h2 className="font-display text-lg text-forest">Park facilities</h2>
        <div className="mt-3 grid grid-cols-4 gap-2">
          <Poi icon={<Utensils className="h-4 w-4" />} label="Café" />
          <Poi icon={<ShoppingBag className="h-4 w-4" />} label="Gift shop" />
          <Poi icon={<Baby className="h-4 w-4" />} label="Playground" />
          <Poi icon={<Bath className="h-4 w-4" />} label="Restrooms" />
        </div>
      </section>
    </div>
  );
}

function Poi({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="card-soft py-3 flex flex-col items-center gap-1 text-forest">
      <span className="grid h-9 w-9 place-items-center rounded-full bg-cream text-forest">{icon}</span>
      <span className="text-[11px] font-medium">{label}</span>
    </button>
  );
}

function MapArt() {
  return (
    <>
      {/* trails */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 500" fill="none">
        <path d="M40 460 Q 120 380 180 340 T 340 180 Q 360 120 300 60" stroke="#7A5230" strokeWidth="3" strokeDasharray="6 8" strokeLinecap="round" />
        <path d="M60 200 Q 160 240 220 320" stroke="#162D20" strokeWidth="2.5" strokeDasharray="2 6" strokeLinecap="round" opacity="0.6" />
      </svg>

      {/* trees */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-8 gap-2 p-3 pointer-events-none">
        {Array.from({ length: 32 }).map((_, i) => {
          const s = 6 + ((i * 13) % 10);
          return (
            <span
              key={i}
              className="rounded-full bg-forest/70"
              style={{
                width: s + "px",
                height: s + "px",
                justifySelf: (i % 3) === 0 ? "end" : (i % 3) === 1 ? "center" : "start",
                alignSelf: (i % 4) === 0 ? "end" : "start",
              }}
            />
          );
        })}
      </div>

      {/* pins */}
      <MapPin xPct={20} yPct={35} label="Wolf" tone="forest" mascot />
      <MapPin xPct={62} yPct={28} label="Deer" tone="orange" mascot />
      <MapPin xPct={48} yPct={65} label="Bison" tone="burgundy" mascot />
      <MapPin xPct={78} yPct={78} label="Café" tone="wood" />

      {/* you are here */}
      <div className="absolute" style={{ left: "30%", top: "72%" }}>
        <div className="relative grid place-items-center">
          <span className="absolute h-8 w-8 rounded-full bg-orange/40 animate-pulse-ring" />
          <span className="relative h-4 w-4 rounded-full bg-orange ring-4 ring-white" />
        </div>
        <p className="mt-1 whitespace-nowrap text-[10px] font-semibold text-forest bg-white/80 rounded-full px-2 py-0.5">
          You are here
        </p>
      </div>
    </>
  );
}

function MapPin({ xPct, yPct, label, tone, mascot }: { xPct: number; yPct: number; label: string; tone: "forest" | "orange" | "burgundy" | "wood"; mascot?: boolean }) {
  const bg = { forest: "bg-forest", orange: "bg-orange", burgundy: "bg-burgundy", wood: "bg-wood" }[tone];
  return (
    <button className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: xPct + "%", top: yPct + "%" }}>
      <div className="relative">
        {mascot && (
          <div className="absolute -top-3 -right-3 h-5 w-5 rounded-full bg-white p-1 shadow-sm ring-1 ring-forest/10">
            <img src="/src/assets/mascot-fox.png" alt="Mascot" className="h-full w-full object-contain" />
          </div>
        )}
        <span className={`grid h-9 w-9 place-items-center rounded-full ${bg} text-white shadow-[0_6px_18px_-4px_rgba(22,45,32,0.4)] text-[10px] font-semibold`}>
          {label.slice(0, 2)}
        </span>
      </div>
    </button>
  );
}
