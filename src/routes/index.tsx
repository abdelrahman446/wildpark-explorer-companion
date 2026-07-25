import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock, MapPin } from "lucide-react";
import { animals, feedingSessions, parkNotices, recommendedTrail } from "@/lib/park-data";
import { Chip, ScreenHeader, SectionLabel, StatusDot } from "@/components/park/ui";
import forestHero from "@/assets/forest-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Discover — Wildpark Schorfheide" },
      {
        name: "description",
        content:
          "Today at Wildpark Schorfheide — featured animals, park notices, feeding sessions and the recommended trail.",
      },
      { property: "og:title", content: "Wildpark Schorfheide — Discover today" },
      {
        property: "og:description",
        content: "A calm digital field guide for Wildpark Schorfheide.",
      },
    ],
  }),
  component: Discover,
});

function Discover() {
  const featured = animals[0];

  return (
    <div className="pb-6">
      <ScreenHeader
        eyebrow="Wildpark Schorfheide"
        title="Today in the forest"
        subtitle="Three exhibitions are open. The forest is quiet — perfect for observation."
      />

      {/* Featured animal — cinematic hero */}
      <section className="px-6 mt-4">
        <Link
          to="/journal/$id"
          params={{ id: featured.id }}
          className="group block relative overflow-hidden rounded-[28px] bg-forest text-white"
        >
          <div className="relative aspect-[4/5]">
            <img
              src={featured.image}
              alt={featured.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.02]"
              width={1200}
              height={1500}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/40 to-transparent" />
            <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
              <p className="text-[10px] uppercase tracking-[0.28em] text-white/70">
                Featured today
              </p>
              <ArrowUpRight className="h-4 w-4 text-white/70" strokeWidth={1.6} />
            </div>
            <div className="absolute inset-x-6 bottom-6">
              <p className="text-[11px] italic text-white/70">{featured.scientific}</p>
              <h2 className="mt-1 font-display text-[34px] leading-none">
                {featured.name}
              </h2>
              <p className="mt-3 text-[13px] leading-relaxed text-white/85 max-w-[300px]">
                {featured.story.split(". ")[0]}.
              </p>
            </div>
          </div>
        </Link>
      </section>

      {/* Park notices */}
      <section className="mt-10">
        <SectionLabel>Park notices</SectionLabel>
        <div className="mt-3 px-6 space-y-3">
          {parkNotices.map((n) => (
            <article key={n.id} className="card-soft p-5">
              <p className="text-[10px] uppercase tracking-[0.22em] text-wood font-medium">
                {n.eyebrow}
              </p>
              <h3 className="mt-2 font-display text-[18px] text-forest leading-snug">
                {n.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-forest/65">
                {n.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Recommended trail */}
      <section className="mt-10">
        <SectionLabel>Recommended trail</SectionLabel>
        <div className="mt-3 px-6">
          <Link
            to="/map"
            className="block relative overflow-hidden rounded-[24px] border border-line bg-white"
          >
            <div className="relative h-40">
              <img
                src={forestHero}
                alt="Forest trail through Schorfheide"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="font-display text-[20px] text-forest leading-tight">
                {recommendedTrail.name}
              </h3>
              <p className="mt-1.5 text-[13px] text-forest/60 leading-relaxed">
                {recommendedTrail.description}
              </p>
              <div className="mt-4 flex items-center gap-2">
                <Chip tone="outline">
                  <MapPin className="h-3 w-3" /> {recommendedTrail.distance}
                </Chip>
                <Chip tone="outline">
                  <Clock className="h-3 w-3" /> {recommendedTrail.duration}
                </Chip>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Educational highlights — animal thumbs */}
      <section className="mt-10">
        <SectionLabel>Current exhibitions</SectionLabel>
        <div className="mt-3 pl-6 flex gap-3 overflow-x-auto no-scrollbar pr-4">
          {animals.map((a) => (
            <Link
              key={a.id}
              to="/journal/$id"
              params={{ id: a.id }}
              className="min-w-[64%] snap-start"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[22px]">
                <img
                  src={a.image}
                  alt={a.name}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/10 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 text-white">
                  <p className="text-[10px] italic opacity-75">{a.scientific}</p>
                  <h3 className="font-display text-[20px] leading-tight">{a.name}</h3>
                  <div className="mt-1.5">
                    <StatusDotWhite label={a.status} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Upcoming feedings */}
      <section className="mt-10">
        <SectionLabel>Upcoming feeding sessions</SectionLabel>
        <div className="mt-3 mx-6 rounded-[22px] border border-line bg-white overflow-hidden">
          {feedingSessions.map((f, i) => (
            <div
              key={f.id}
              className={`flex items-center gap-5 px-5 py-4 ${
                i > 0 ? "border-t border-line" : ""
              }`}
            >
              <div className="font-display text-[18px] text-forest w-14">{f.time}</div>
              <div className="flex-1 min-w-0">
                <p className="text-[14px] text-forest font-medium">{f.title}</p>
                <p className="text-[12px] text-forest/55 mt-0.5">{f.place}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Field notes footer */}
      <section className="mt-10 px-6">
        <div className="rounded-[24px] bg-forest text-white p-6">
          <p className="text-[10px] uppercase tracking-[0.24em] text-white/60">
            Your field journal
          </p>
          <p className="mt-3 font-display text-[22px] leading-tight">
            Two animals recorded. The bison meadow is still ahead.
          </p>
          <Link
            to="/journal"
            className="mt-4 inline-flex items-center gap-2 text-[13px] text-orange font-medium"
          >
            Open journal <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
          </Link>
        </div>
      </section>

      {/* Ambient closing line */}
      <p className="mt-8 px-6 text-center text-[11px] italic text-forest/45">
        Look up more than you look down.
      </p>
    </div>
  );
}

function StatusDotWhite({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[10px] text-white/85">
      <span className="h-1 w-1 rounded-full bg-orange" />
      {label}
    </span>
  );
}

// re-export for typescript happiness (unused)
void StatusDot;
