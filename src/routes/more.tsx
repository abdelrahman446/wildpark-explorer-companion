import { createFileRoute } from "@tanstack/react-router";
import {
  Accessibility,
  Info,
  Clock,
  Ticket,
  Phone,
  Utensils,
  Home,
  Compass,
  Mail,
  AlertCircle,
  ChevronRight,
} from "lucide-react";
import { ScreenHeader } from "@/components/park/ui";
import { parkInfo } from "@/lib/park-data";

export const Route = createFileRoute("/more")({
  head: () => ({
    meta: [
      { title: "Visit — Wildpark Schorfheide" },
      {
        name: "description",
        content:
          "Opening hours, tickets, visitor centre, accessibility, restaurants, carriage tours, virtual tour and contact for Wildpark Schorfheide.",
      },
      { property: "og:title", content: "Visit — Wildpark Schorfheide" },
      {
        property: "og:description",
        content: "Practical information for your visit to Wildpark Schorfheide.",
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
    label: "Plan your visit",
    items: [
      { icon: Clock, title: "Opening hours", subtitle: `Daily · ${parkInfo.hours}` },
      { icon: Ticket, title: "Ticket information", subtitle: "Adults € 11.00 · Reduced € 8.00 · Annual pass" },
      { icon: Home, title: "Visitor Centre", subtitle: "Information, tickets and the park restaurant" },
      { icon: Accessibility, title: "Accessibility", subtitle: "Barrier-free · paved trails to every enclosure" },
    ],
  },
  {
    label: "On site",
    items: [
      { icon: Utensils, title: "Restaurant & café", subtitle: "Visitors' centre and 'Little Village' with field oven" },
      { icon: Compass, title: "Horse-drawn carriage tours", subtitle: "Adults € 4.00 / 30 min · wheelchair accessible" },
      { icon: Info, title: "Virtual tour", subtitle: "Walk the enclosures from home" },
    ],
  },
  {
    label: "In case of need",
    items: [
      { icon: AlertCircle, title: "Emergency information", subtitle: "Europe-wide emergency: 112" },
    ],
  },
  {
    label: "Contact",
    items: [
      { icon: Phone, title: "Telephone", subtitle: parkInfo.phone },
      { icon: Mail, title: "Email", subtitle: parkInfo.email },
      { icon: Info, title: "Directions", subtitle: "Groß Schönebeck · Train NE27 from Berlin-Karow" },
    ],
  },
];

function More() {
  return (
    <div className="pb-6">
      <ScreenHeader
        eyebrow="Visit"
        title="Plan your day"
        subtitle="Practical information for your visit to Wildpark Schorfheide."
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
        Wildpark Schorfheide · Biosphere Reserve Schorfheide-Chorin
      </p>
    </div>
  );
}
