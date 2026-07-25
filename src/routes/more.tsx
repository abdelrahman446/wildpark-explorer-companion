import { createFileRoute } from "@tanstack/react-router";
import {
  Accessibility,
  Languages,
  Info,
  Clock,
  Ticket,
  Phone,
  Leaf,
  ChevronRight,
} from "lucide-react";
import { ScreenHeader } from "@/components/park/ui";

export const Route = createFileRoute("/more")({
  head: () => ({
    meta: [
      { title: "More — Wildpark Schorfheide" },
      {
        name: "description",
        content:
          "Accessibility, languages, opening hours, tickets and visitor information for Wildpark Schorfheide.",
      },
      { property: "og:title", content: "More — Wildpark Schorfheide" },
      {
        property: "og:description",
        content: "Practical information for your visit.",
      },
    ],
  }),
  component: More,
});

const groups: {
  label: string;
  items: { icon: typeof Info; title: string; subtitle?: string }[];
}[] = [
  {
    label: "Experience",
    items: [
      { icon: Accessibility, title: "Accessibility", subtitle: "Motion, contrast, text size" },
      { icon: Languages, title: "Language", subtitle: "English · Deutsch · Français" },
    ],
  },
  {
    label: "Visit",
    items: [
      { icon: Clock, title: "Opening hours", subtitle: "Today · 09:00 – 18:00" },
      { icon: Ticket, title: "Tickets", subtitle: "Day pass · annual card" },
      { icon: Info, title: "Visitor information", subtitle: "Getting here, parking, dogs" },
    ],
  },
  {
    label: "In case of need",
    items: [{ icon: Phone, title: "Emergency information" }],
  },
  {
    label: "About",
    items: [{ icon: Leaf, title: "About the park", subtitle: "Conservation, partners, credits" }],
  },
];

function More() {
  return (
    <div className="pb-6">
      <ScreenHeader
        eyebrow="More"
        title="Practical & about"
        subtitle="Everything you might need — quietly out of the way."
      />

      <div className="mt-4 space-y-8">
        {groups.map((g) => (
          <section key={g.label}>
            <p className="px-6 text-[10px] uppercase tracking-[0.24em] text-wood font-medium">
              {g.label}
            </p>
            <div className="mt-3 mx-6 rounded-[22px] border border-line bg-white overflow-hidden">
              {g.items.map((item, i) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.title}
                    className={`w-full flex items-center gap-4 px-5 py-4 text-left ${
                      i > 0 ? "border-t border-line" : ""
                    }`}
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-cream text-forest">
                      <Icon className="h-4 w-4" strokeWidth={1.6} />
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block text-[14px] text-forest font-medium">
                        {item.title}
                      </span>
                      {item.subtitle && (
                        <span className="block text-[12px] text-forest/55 mt-0.5">
                          {item.subtitle}
                        </span>
                      )}
                    </span>
                    <ChevronRight className="h-4 w-4 text-forest/30" strokeWidth={1.6} />
                  </button>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-10 px-6 text-center text-[11px] italic text-forest/45">
        Wildpark Schorfheide · Since 1972
      </p>
    </div>
  );
}
