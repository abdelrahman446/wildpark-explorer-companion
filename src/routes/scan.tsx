import { createFileRoute, Link } from "@tanstack/react-router";
import { Zap, BookOpen, Video, Headphones, HelpCircle, Sparkles } from "lucide-react";
import mascot from "@/assets/mascot-fox.png";

export const Route = createFileRoute("/scan")({
  head: () => ({
    meta: [
      { title: "Scan — Wildpark Schorfheide" },
      { name: "description", content: "Point your camera at a park QR code to unlock the animal journal, live camera, audio guide and quizzes." },
    ],
  }),
  component: Scan,
});

function Scan() {
  return (
    <div className="text-forest">
      <header className="px-5 pt-8">
        <p className="text-[11px] uppercase tracking-[0.2em] text-wood font-medium">Scanner</p>
        <h1 className="mt-1 font-display text-[28px] text-forest">Find a nature code</h1>
        <p className="mt-1 text-sm text-muted-foreground max-w-[280px]">
          Point at a wooden marker along the trail. We'll do the rest.
        </p>
      </header>

      {/* Camera */}
      <div className="px-5 mt-5">
        <div className="relative aspect-square overflow-hidden rounded-[32px]" style={{ background: "linear-gradient(160deg, #1E3A2A 0%, #0E1D14 100%)" }}>
          {/* faux blurred forest */}
          <div className="absolute inset-0 opacity-40 blur-2xl" style={{ background: "radial-gradient(circle at 30% 40%, #4a6b52 0%, transparent 55%), radial-gradient(circle at 70% 60%, #7A5230 0%, transparent 60%)" }} />

          {/* viewfinder frame */}
          <div className="absolute inset-8 rounded-[28px] border border-white/20" />
          <Corner pos="top-left" />
          <Corner pos="top-right" />
          <Corner pos="bottom-left" />
          <Corner pos="bottom-right" />

          {/* scan line */}
          <div className="absolute inset-x-10 top-1/2 h-[2px] bg-gradient-to-r from-transparent via-orange to-transparent" style={{ boxShadow: "0 0 20px 4px rgba(201,122,42,0.5)" }} />

          {/* pulse */}
          <div className="absolute inset-0 grid place-items-center">
            <div className="relative grid place-items-center">
              <span className="absolute h-24 w-24 rounded-full bg-orange/30 animate-pulse-ring" />
              <span className="grid h-14 w-14 place-items-center rounded-full bg-orange text-white shadow-[0_10px_30px_-6px_rgba(201,122,42,0.7)]">
                <Zap className="h-6 w-6" />
              </span>
            </div>
          </div>

          <div className="absolute bottom-4 inset-x-4 text-center text-white/80 text-xs">
            Looking for a code…
          </div>
        </div>
      </div>

      {/* Mascot hint */}
      <div className="px-5 mt-5">
        <div className="card-soft p-4 flex items-center gap-3 border border-line">
          <img src={mascot} alt="" className="h-12 w-12" loading="lazy" />
          <p className="text-sm text-forest/85 leading-snug">
            <span className="font-medium text-forest">Fenn's tip:</span> Codes are burned into the wooden posts. Look for the leaf carving above.
          </p>
        </div>
      </div>

      {/* Unlocks */}
      <section className="px-5 mt-6">
        <h2 className="font-display text-lg">Each scan unlocks</h2>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <Unlock icon={<BookOpen />} title="Animal journal" desc="A new page in your explorer notebook." tone="forest" />
          <Unlock icon={<Video />} title="Live camera" desc="Peek inside the habitat, respectfully." tone="orange" />
          <Unlock icon={<Headphones />} title="Audio guide" desc="Two minutes of forest storytelling." tone="wood" />
          <Unlock icon={<HelpCircle />} title="Mini quiz" desc="Three quiet questions. Earn XP." tone="burgundy" />
        </div>
      </section>

      <section className="px-5 mt-6">
        <div className="rounded-[22px] p-4 flex items-center gap-3" style={{ background: "linear-gradient(135deg, #C97A2A 0%, #A45A18 100%)" }}>
          <Sparkles className="h-5 w-5 text-white" />
          <div className="flex-1 text-white">
            <p className="text-[11px] uppercase tracking-widest opacity-80">Last unlocked</p>
            <p className="font-display text-base">Red deer — Journal page 7</p>
          </div>
          <Link to="/journal" className="rounded-full bg-white/20 backdrop-blur px-3 py-1.5 text-xs font-medium text-white">
            Open
          </Link>
        </div>
      </section>
    </div>
  );
}

function Corner({ pos }: { pos: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) {
  const map: Record<string, string> = {
    "top-left": "top-6 left-6 border-t-2 border-l-2 rounded-tl-2xl",
    "top-right": "top-6 right-6 border-t-2 border-r-2 rounded-tr-2xl",
    "bottom-left": "bottom-6 left-6 border-b-2 border-l-2 rounded-bl-2xl",
    "bottom-right": "bottom-6 right-6 border-b-2 border-r-2 rounded-br-2xl",
  };
  return <span className={`absolute h-8 w-8 border-white/80 ${map[pos]}`} />;
}

function Unlock({ icon, title, desc, tone }: { icon: React.ReactNode; title: string; desc: string; tone: "forest" | "orange" | "wood" | "burgundy" }) {
  const bg = { forest: "bg-forest/10 text-forest", orange: "bg-orange/15 text-orange", wood: "bg-wood/15 text-wood", burgundy: "bg-burgundy/12 text-burgundy" }[tone];
  return (
    <div className="card-soft p-3">
      <span className={`grid h-9 w-9 place-items-center rounded-full ${bg}`}>{icon}</span>
      <h3 className="mt-2 font-display text-sm text-forest">{title}</h3>
      <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">{desc}</p>
    </div>
  );
}
