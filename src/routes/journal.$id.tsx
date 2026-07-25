import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { animals } from "@/lib/park-data";
import { Chip, StatusDot } from "@/components/park/ui";
import { ChevronLeft, Play, MapPin, Calendar, Clock } from "lucide-react";

export const Route = createFileRoute("/journal/$id")({
  loader: ({ params }) => {
    const animal = animals.find((a) => a.id === params.id);
    if (!animal) throw notFound();
    return { animal };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found — Wildpark Schorfheide" }, { name: "robots", content: "noindex" }] };
    }
    const a = loaderData.animal;
    return {
      meta: [
        { title: `${a.name} — Field Journal` },
        { name: "description", content: a.story.split(". ")[0] },
        { property: "og:title", content: `${a.name} — Wildpark Schorfheide` },
        { property: "og:description", content: a.story.split(". ")[0] },
      ],
    };
  },
  component: JournalEntry,
});

function JournalEntry() {
  const { animal } = Route.useLoaderData();

  return (
    <div className="pb-6">
      {/* Cinematic hero — image breaks slightly out of card via layered depth */}
      <section className="relative">
        <div className="relative h-[440px] overflow-hidden rounded-b-[36px]">
          <img
            src={animal.image}
            alt={animal.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/30 via-transparent to-paper" />
          <div className="absolute inset-x-0 top-0 flex items-center justify-between px-6 pt-10">
            <Link
              to="/journal"
              aria-label="Back to journal"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/85 backdrop-blur text-forest"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.6} />
            </Link>
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/80">
              Journal entry
            </p>
            <span className="w-10" />
          </div>
        </div>

        {/* Title card — floats up over the image */}
        <div className="px-6 -mt-16 relative">
          <div className="rounded-[26px] bg-white border border-line px-6 py-5 shadow-[0_20px_60px_-30px_rgba(22,45,32,0.4)]">
            <p className="text-[11px] italic text-forest/55">{animal.scientific}</p>
            <h1 className="mt-1 font-display text-[30px] leading-tight text-forest">
              {animal.name}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <StatusDot status={animal.status} />
              <span className="h-1 w-1 rounded-full bg-forest/20" />
              <span className="text-[11px] text-forest/60">{animal.region}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Observation meta */}
      {animal.observedAt && (
        <section className="px-6 mt-5">
          <div className="rounded-[20px] bg-cream/80 border border-line px-5 py-4">
            <p className="text-[10px] uppercase tracking-[0.22em] text-wood font-medium">
              Observation
            </p>
            <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5 text-[12px] text-forest/70">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3 w-3" /> {animal.observedAt}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3 w-3" /> {animal.observedLocation}
              </span>
            </div>
          </div>
        </section>
      )}

      {/* Story */}
      <section className="px-6 mt-8">
        <p className="text-[10px] uppercase tracking-[0.24em] text-wood font-medium">
          The story
        </p>
        <p className="mt-3 text-[15px] leading-[1.7] text-forest/85">
          {animal.story}
        </p>
      </section>

      {/* Audio */}
      <section className="px-6 mt-6">
        <button className="w-full flex items-center gap-4 rounded-[20px] border border-line bg-white px-5 py-4 text-left">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-forest text-white">
            <Play className="h-4 w-4 fill-white" strokeWidth={1} />
          </span>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-medium text-forest">Listen to the story</p>
            <p className="text-[11px] text-forest/55 inline-flex items-center gap-1 mt-0.5">
              <Clock className="h-3 w-3" /> {animal.audioMinutes} min · narrated
            </p>
          </div>
        </button>
      </section>

      {/* Habitat & behaviour */}
      <section className="px-6 mt-8 grid grid-cols-1 gap-3">
        <InfoRow label="Habitat" value={animal.habitat} />
        <InfoRow label="Behaviour" value={animal.activityWindow} />
      </section>

      {/* Interesting facts */}
      <section className="px-6 mt-8">
        <p className="text-[10px] uppercase tracking-[0.24em] text-wood font-medium">
          Interesting facts
        </p>
        <ol className="mt-4 space-y-4">
          {animal.facts.map((fact, i) => (
            <li key={i} className="flex gap-4">
              <span className="font-display text-[18px] text-orange leading-none w-6 flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-[14px] leading-relaxed text-forest/80">{fact}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Conservation */}
      <section className="px-6 mt-10">
        <div className="rounded-[22px] bg-forest text-white p-6">
          <p className="text-[10px] uppercase tracking-[0.24em] text-white/60">
            Conservation
          </p>
          <p className="mt-3 text-[14px] leading-relaxed text-white/90">
            {animal.conservation}
          </p>
        </div>
      </section>

      {/* Related species */}
      {animal.related.length > 0 && (
        <section className="px-6 mt-8">
          <p className="text-[10px] uppercase tracking-[0.24em] text-wood font-medium">
            Related species
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {animal.related.map((r) => (
              <Chip key={r} tone="outline">
                {r}
              </Chip>
            ))}
          </div>
        </section>
      )}

      <p className="mt-12 px-6 text-center text-[11px] italic text-forest/45">
        Close the app. Watch the animal.
      </p>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-line pb-3">
      <p className="text-[11px] uppercase tracking-[0.2em] text-wood font-medium min-w-[92px]">
        {label}
      </p>
      <p className="text-[13px] text-forest/80 text-right leading-relaxed">{value}</p>
    </div>
  );
}
