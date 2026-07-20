import { createFileRoute, Link } from "@tanstack/react-router";
import { Bell, Cloud, Footprints, PlayCircle, Sparkles, ArrowRight, MapPin, Calendar } from "lucide-react";
import forestHero from "@/assets/forest-hero.jpg";
import mascot from "@/assets/mascot-fox.png";
import deer from "@/assets/animal-deer.jpg";
import { Chip, ProgressRing } from "@/components/park/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wildpark Schorfheide — Your forest today" },
      { name: "description", content: "See today's weather, your current challenge, featured animal, park events and nearby live cameras." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="text-forest">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-b-[36px]">
        <img
          src={forestHero}
          alt="Misty pine forest at Wildpark Schorfheide"
          className="absolute inset-0 h-full w-full object-cover"
          width={1280}
          height={960}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/40 via-forest/25 to-forest/85" />
        <div className="relative px-5 pt-10 pb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/70">Guten Morgen</p>
              <h1 className="mt-1 font-display text-3xl">Hello, Lina</h1>
            </div>
            <button aria-label="Notifications" className="grid h-11 w-11 place-items-center rounded-full bg-white/15 backdrop-blur">
              <Bell className="h-5 w-5" strokeWidth={1.6} />
              <span className="absolute mt-[-14px] ml-4 h-2 w-2 rounded-full bg-orange" />
            </button>
          </div>

          <div className="mt-8 flex items-end gap-3">
            <div className="flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-3 py-1.5 text-xs">
              <Cloud className="h-4 w-4" strokeWidth={1.6} />
              14° · Foggy woods
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-3 py-1.5 text-xs">
              <MapPin className="h-4 w-4" strokeWidth={1.6} />
              North Gate
            </div>
          </div>

          <p className="mt-6 max-w-[300px] text-[15px] leading-relaxed text-white/90">
            The forest is quiet this morning. Follow the deer trail — three animals wait to be discovered.
          </p>
        </div>
      </section>

      {/* Continue adventure */}
      <section className="px-5 -mt-8 relative z-10">
        <div className="card-soft p-4 flex items-center gap-4">
          <ProgressRing
            value={0.62}
            size={68}
            stroke={7}
            label={
              <div className="text-center">
                <div className="font-display text-base text-forest leading-none">62%</div>
                <div className="text-[9px] uppercase tracking-widest text-muted-foreground">Trail</div>
              </div>
            }
          />
          <div className="flex-1 min-w-0">
            <p className="text-[11px] uppercase tracking-widest text-wood font-medium">Continue adventure</p>
            <h3 className="mt-0.5 font-display text-lg text-forest truncate">The Wolf Trail</h3>
            <p className="text-xs text-muted-foreground mt-0.5">1.2 km left · 3 stations to discover</p>
          </div>
          <Link to="/explore" aria-label="Resume trail" className="grid h-10 w-10 place-items-center rounded-full bg-forest text-white">
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Stats row */}
      <section className="px-5 mt-4 grid grid-cols-3 gap-3">
        <StatCard icon={<Footprints className="h-4 w-4" />} label="Steps" value="4,820" tone="forest" />
        <StatCard label="Level" value="7" sub="Forest Explorer" tone="orange" />
        <StatCard label="XP" value="1 240" sub="+80 today" tone="wood" />
      </section>

      {/* Featured animal */}
      <section className="px-5 mt-6">
        <SectionTitle title="Featured today" link="See journal" to="/journal" />
        <div className="mt-3 card-soft overflow-hidden">
          <div className="relative h-44">
            <img src={deer} alt="Red deer stag" className="absolute inset-0 h-full w-full object-cover" loading="lazy" width={1200} height={1200} />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/10 to-transparent" />
            <div className="absolute left-4 top-4">
              <Chip tone="burgundy">Educational</Chip>
            </div>
            <div className="absolute left-4 right-4 bottom-4 text-white">
              <p className="text-[10px] uppercase tracking-widest opacity-80">Cervus elaphus</p>
              <h3 className="font-display text-2xl">Red Deer</h3>
              <p className="mt-1 text-xs opacity-90 max-w-[260px]">
                Hear their bugle at dawn. Antlers regrow each spring — a slow forest miracle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal campaign */}
      <section className="px-5 mt-6">
        <div className="rounded-[26px] p-5 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #6B2D3E 0%, #4B1E2B 100%)" }}>
          <div className="flex items-start gap-4">
            <div className="flex-1 text-white">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[10px] uppercase tracking-widest">
                <Sparkles className="h-3 w-3" /> Autumn festival
              </div>
              <h3 className="mt-3 font-display text-xl leading-tight">Rutting season is here</h3>
              <p className="mt-1 text-xs text-white/80 max-w-[210px]">
                Six guided listening walks this week. Reserve your quiet hour.
              </p>
              <button className="mt-3 rounded-full bg-orange px-4 py-2 text-xs font-semibold text-white shadow-[0_8px_20px_-8px_rgba(201,122,42,0.7)]">
                Reserve a spot
              </button>
            </div>
            <img src={mascot} alt="Fox mascot" className="h-24 w-24 animate-leaf" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="px-5 mt-6">
        <SectionTitle title="Today at the park" link="See all" to="/explore" />
        <div className="mt-3 space-y-2.5">
          <EventRow time="11:00" title="Wolf feeding & talk" place="Wolf enclosure" tone="orange" />
          <EventRow time="13:30" title="Deer whisperer walk" place="North trail" tone="forest" />
          <EventRow time="16:00" title="Owls at dusk" place="Amphitheatre" tone="burgundy" />
        </div>
      </section>

      {/* Live cameras */}
      <section className="px-5 mt-6">
        <SectionTitle title="Nearby live cameras" link="Watch all" to="/explore" />
        <div className="mt-3 grid grid-cols-2 gap-3">
          <CamCard image={deer} name="Deer meadow" activity="Grazing" />
          <CamCard image={forestHero} name="North pond" activity="Quiet" />
        </div>
      </section>

      {/* Mascot whisper */}
      <section className="px-5 mt-6">
        <div className="card-soft p-4 flex items-center gap-3 border border-line">
          <img src={mascot} alt="Fox mascot" className="h-12 w-12" loading="lazy" />
          <p className="text-sm text-forest/85 leading-snug">
            <span className="font-medium text-forest">Fenn says:</span> Only 400 steps to your next badge. The wolf habitat is just around the pine bend.
          </p>
        </div>
      </section>
    </div>
  );
}

function SectionTitle({ title, link, to }: { title: string; link?: string; to?: string }) {
  return (
    <div className="flex items-baseline justify-between">
      <h2 className="font-display text-lg text-forest">{title}</h2>
      {link && to && (
        <Link to={to} className="text-xs font-medium text-orange">
          {link}
        </Link>
      )}
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  sub,
  tone,
}: {
  icon?: React.ReactNode;
  label: string;
  value: string;
  sub?: string;
  tone: "forest" | "orange" | "wood";
}) {
  const tones = {
    forest: "text-forest",
    orange: "text-orange",
    wood: "text-wood",
  } as const;
  return (
    <div className="card-soft p-3">
      <div className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-muted-foreground">
        {icon}
        {label}
      </div>
      <div className={`mt-1 font-display text-xl ${tones[tone]}`}>{value}</div>
      {sub && <div className="text-[10px] text-muted-foreground mt-0.5">{sub}</div>}
    </div>
  );
}

function EventRow({ time, title, place, tone }: { time: string; title: string; place: string; tone: "orange" | "forest" | "burgundy" }) {
  const dot = { orange: "bg-orange", forest: "bg-forest", burgundy: "bg-burgundy" }[tone];
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white p-3 border border-line/60">
      <div className="flex flex-col items-center w-12">
        <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
        <span className="mt-1 font-display text-sm text-forest">{time}</span>
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-forest truncate">{title}</h4>
        <p className="text-[11px] text-muted-foreground flex items-center gap-1 mt-0.5">
          <Calendar className="h-3 w-3" /> {place}
        </p>
      </div>
      <button className="rounded-full border border-line px-3 py-1 text-[11px] text-forest">Remind</button>
    </div>
  );
}

function CamCard({ image, name, activity }: { image: string; name: string; activity: string }) {
  return (
    <button className="relative aspect-[4/5] overflow-hidden rounded-[22px] text-left">
      <img src={image} alt={name} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/10 to-transparent" />
      <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-alert/95 px-2 py-0.5 text-[10px] font-semibold text-white">
        <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" /> LIVE
      </div>
      <div className="absolute inset-x-3 bottom-3 text-white">
        <div className="flex items-center justify-between">
          <p className="font-display text-sm">{name}</p>
          <PlayCircle className="h-5 w-5" strokeWidth={1.6} />
        </div>
        <p className="text-[10px] opacity-80">{activity}</p>
      </div>
    </button>
  );
}
