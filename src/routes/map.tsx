import { createFileRoute } from "@tanstack/react-router";
import { Search, Layers, Locate } from "lucide-react";
import { mapPoints } from "@/lib/park-data";
import { ScreenHeader } from "@/components/park/ui";

export const Route = createFileRoute("/map")({
  head: () => ({
    meta: [
      { title: "Park Map — Wildpark Schorfheide" },
      {
        name: "description",
        content:
          "Illustrated map of Wildpark Schorfheide — habitats, facilities, signposts and accessible routes.",
      },
      { property: "og:title", content: "Park Map — Wildpark Schorfheide" },
      {
        property: "og:description",
        content: "A quiet map that supports the physical signage rather than replacing it.",
      },
    ],
  }),
  component: MapScreen,
});

function MapScreen() {
  return (
    <div className="pb-6">
      <ScreenHeader
        eyebrow="Park map"
        title="7 km of walking trails"
        subtitle="Enclosures, playgrounds, picnic spots and the visitors' centre — all reachable on paved paths."
      />

      {/* Search */}
      <div className="px-6 mt-2">
        <div className="flex items-center gap-3 rounded-full bg-white border border-line px-5 py-3">
          <Search className="h-4 w-4 text-forest/40" />
          <input
            className="flex-1 bg-transparent text-[14px] outline-none text-forest placeholder:text-forest/40"
            placeholder="Search animals, signposts or facilities"
          />
        </div>
      </div>

      {/* Map illustration */}
      <div className="px-6 mt-5">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-line bg-cream">
          <MapArt />
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <button
              aria-label="Layers"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/95 border border-line text-forest"
            >
              <Layers className="h-4 w-4" strokeWidth={1.6} />
            </button>
            <button
              aria-label="Locate"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/95 border border-line text-forest"
            >
              <Locate className="h-4 w-4" strokeWidth={1.6} />
            </button>
          </div>
        </div>
      </div>

      {/* Legend */}
      <section className="px-6 mt-6">
        <div className="rounded-[22px] border border-line bg-white p-5">
          <p className="text-[10px] uppercase tracking-[0.24em] text-wood font-medium">
            Legend
          </p>
          <div className="mt-3 grid grid-cols-2 gap-y-3 gap-x-4 text-[13px] text-forest/75">
            <LegendItem swatch="bg-forest" label="Animal habitat" />
            <LegendItem swatch="bg-orange" label="Your location" />
            <LegendItem swatch="bg-white border border-forest" label="Signpost" />
            <LegendItem swatch="bg-wood" label="Facility" />
          </div>
        </div>
      </section>

      {/* Accessible routes */}
      <section className="px-6 mt-6">
        <div className="rounded-[22px] border border-line bg-white p-5">
          <p className="text-[10px] uppercase tracking-[0.24em] text-wood font-medium">
            Accessible routes
          </p>
          <p className="mt-2 text-[13px] text-forest/70 leading-relaxed">
            The park is designed barrier-free. Paved trails lead to every enclosure and are suitable for wheelchairs and strollers. Horse-drawn carriage tours are also wheelchair accessible.
          </p>
        </div>
      </section>
    </div>
  );
}

function LegendItem({ swatch, label }: { swatch: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`h-2.5 w-2.5 rounded-full ${swatch}`} />
      <span>{label}</span>
    </div>
  );
}

function MapArt() {
  return (
    <>
      {/* Background wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 25%, rgba(122,82,48,0.06) 0%, transparent 60%), radial-gradient(circle at 70% 75%, rgba(22,45,32,0.08) 0%, transparent 55%)",
        }}
      />

      {/* Trails */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 500" fill="none">
        <path
          d="M40 460 Q 120 380 180 340 T 340 180 Q 360 120 300 60"
          stroke="#7A5230"
          strokeWidth="2"
          strokeDasharray="4 8"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          d="M80 380 Q 180 260 260 300 T 360 380"
          stroke="#162D20"
          strokeWidth="1.5"
          strokeDasharray="2 6"
          strokeLinecap="round"
          opacity="0.35"
        />
      </svg>

      {/* Sparse tree marks */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-10 p-6 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => {
          const s = 3 + ((i * 7) % 5);
          return (
            <span
              key={i}
              className="rounded-full bg-forest/25"
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

      {/* Points */}
      {mapPoints.map((p) => {
        if (p.kind === "you") {
          return (
            <div
              key={p.id}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: p.x + "%", top: p.y + "%" }}
            >
              <div className="relative grid place-items-center">
                <span className="absolute h-8 w-8 rounded-full bg-orange/30 animate-pulse-ring" />
                <span className="relative h-3.5 w-3.5 rounded-full bg-orange ring-4 ring-white" />
              </div>
            </div>
          );
        }
        if (p.kind === "signpost") {
          return (
            <button
              key={p.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 grid h-6 w-6 place-items-center rounded-full bg-white border border-forest/30 text-forest text-[9px] font-semibold"
              style={{ left: p.x + "%", top: p.y + "%" }}
            >
              {p.label}
            </button>
          );
        }
        if (p.kind === "facility") {
          return (
            <button
              key={p.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 grid h-8 px-2.5 items-center rounded-full bg-wood text-white text-[10px] font-medium"
              style={{ left: p.x + "%", top: p.y + "%" }}
            >
              {p.label}
            </button>
          );
        }
        return (
          <button
            key={p.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 grid h-9 px-3 items-center rounded-full bg-forest text-white text-[11px] font-medium"
            style={{ left: p.x + "%", top: p.y + "%" }}
          >
            {p.label}
          </button>
        );
      })}
    </>
  );
}
