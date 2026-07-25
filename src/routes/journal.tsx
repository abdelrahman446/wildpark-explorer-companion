import { createFileRoute, Link } from "@tanstack/react-router";
import { animals } from "@/lib/park-data";
import { ScreenHeader, StatusDot } from "@/components/park/ui";
import { Calendar, MapPin } from "lucide-react";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Field Journal — Wildpark Schorfheide" },
      {
        name: "description",
        content:
          "A quiet, growing record of every animal you have observed at Wildpark Schorfheide.",
      },
      { property: "og:title", content: "Field Journal — Wildpark Schorfheide" },
      {
        property: "og:description",
        content: "Every scanned animal becomes a beautifully designed journal entry.",
      },
    ],
  }),
  component: Journal,
});

function Journal() {
  const observed = animals.filter((a) => a.inJournal);
  const remaining = animals.filter((a) => !a.inJournal);

  return (
    <div className="pb-6">
      <ScreenHeader
        eyebrow="Field journal"
        title="Your quiet record"
        subtitle="A journal built from what you have seen — not points, not levels."
      />

      {/* Summary */}
      <section className="px-6 mt-2">
        <div className="rounded-[22px] border border-line bg-white p-5 flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-wood font-medium">
              Observed
            </p>
            <p className="mt-1 font-display text-[26px] text-forest leading-none">
              {observed.length}
              <span className="text-forest/40"> / {animals.length}</span>
            </p>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-[0.24em] text-wood font-medium">
              First entry
            </p>
            <p className="mt-1 text-[13px] text-forest">
              {observed[0]?.observedAt?.split(",")[0] ?? "—"}
            </p>
          </div>
        </div>
      </section>

      {/* Entries */}
      <section className="mt-8 px-6 space-y-6">
        {observed.map((a) => (
          <Link
            key={a.id}
            to="/journal/$id"
            params={{ id: a.id }}
            className="block group"
          >
            <article className="overflow-hidden rounded-[24px] bg-white border border-line">
              <div className="relative h-52">
                <img
                  src={a.image}
                  alt={a.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <p className="text-[11px] italic text-forest/55">{a.scientific}</p>
                <h3 className="mt-1 font-display text-[22px] text-forest leading-tight">
                  {a.name}
                </h3>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-[12px] text-forest/60">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3 w-3" /> {a.observedAt}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3 w-3" /> {a.observedLocation}
                  </span>
                </div>
                <div className="mt-3">
                  <StatusDot status={a.status} />
                </div>
              </div>
            </article>
          </Link>
        ))}
      </section>

      {/* Not yet observed */}
      {remaining.length > 0 && (
        <section className="mt-10 px-6">
          <p className="text-[10px] uppercase tracking-[0.24em] text-wood font-medium">
            Not yet observed
          </p>
          <div className="mt-3 rounded-[22px] border border-dashed border-line bg-transparent p-5 space-y-3">
            {remaining.map((a) => (
              <div key={a.id} className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-cream border border-line grid place-items-center text-forest/40 font-display text-[15px]">
                  {a.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[14px] text-forest font-medium truncate">
                    {a.name}
                  </p>
                  <p className="text-[11px] text-forest/55 truncate">{a.region}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <p className="mt-10 px-6 text-center text-[11px] italic text-forest/45">
        Observation is the beginning of care.
      </p>
    </div>
  );
}
