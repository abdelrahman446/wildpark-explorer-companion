import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, ImageIcon, Zap } from "lucide-react";

export const Route = createFileRoute("/scanner")({
  head: () => ({
    meta: [
      { title: "Scanner — Wildpark Schorfheide" },
      {
        name: "description",
        content:
          "Scan the QR codes on Wildpark signposts to open a richer story about each animal.",
      },
      { property: "og:title", content: "Scanner — Wildpark Schorfheide" },
      {
        property: "og:description",
        content: "Each QR opens a story, not a score.",
      },
    ],
  }),
  component: Scanner,
});

function Scanner() {
  return (
    <div className="relative min-h-[calc(100vh-40px)] bg-forest text-white overflow-hidden">
      {/* Ambient photographic wash */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(122,82,48,0.5), transparent 55%), radial-gradient(circle at 70% 80%, rgba(22,45,32,0.9), transparent 60%)",
        }}
      />

      {/* Top bar */}
      <div className="relative flex items-center justify-between px-6 pt-10">
        <Link
          to="/"
          aria-label="Back"
          className="grid h-10 w-10 place-items-center rounded-full bg-white/10 backdrop-blur"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={1.6} />
        </Link>
        <p className="text-[10px] uppercase tracking-[0.28em] text-white/70">Scanner</p>
        <span className="w-10" />
      </div>

      {/* Instruction */}
      <div className="relative px-8 mt-8 text-center">
        <h1 className="font-display text-[26px] leading-tight">
          Point at a signpost QR
        </h1>
        <p className="mt-2 text-[13px] text-white/70 leading-relaxed max-w-[280px] mx-auto">
          Each code opens the story of the animal in front of you — and saves it
          to your personal field journal.
        </p>
      </div>

      {/* Viewfinder */}
      <div className="relative mt-10 px-10">
        <div className="relative aspect-square rounded-[32px] overflow-hidden border border-white/15 bg-black/20">
          {/* Four corner brackets */}
          <Corner className="top-4 left-4 border-t border-l" />
          <Corner className="top-4 right-4 border-t border-r" />
          <Corner className="bottom-4 left-4 border-b border-l" />
          <Corner className="bottom-4 right-4 border-b border-r" />

          {/* Slow sweep line */}
          <div
            className="absolute left-6 right-6 h-px bg-orange/70"
            style={{ animation: "scan-sweep 3.6s ease-in-out infinite", top: "20%" }}
          />
        </div>
      </div>

      {/* Controls */}
      <div className="relative mt-8 flex items-center justify-center gap-8">
        <button
          aria-label="From photos"
          className="grid h-12 w-12 place-items-center rounded-full bg-white/10 backdrop-blur border border-white/15"
        >
          <ImageIcon className="h-5 w-5" strokeWidth={1.6} />
        </button>
        <button
          aria-label="Torch"
          className="grid h-12 w-12 place-items-center rounded-full bg-white/10 backdrop-blur border border-white/15"
        >
          <Zap className="h-5 w-5" strokeWidth={1.6} />
        </button>
      </div>

      {/* Field tip */}
      <div className="relative mt-10 mx-6 rounded-[22px] border border-white/12 bg-white/5 backdrop-blur px-5 py-4">
        <p className="text-[10px] uppercase tracking-[0.24em] text-white/55">
          Field note
        </p>
        <p className="mt-2 text-[13px] leading-relaxed text-white/85">
          Scanning takes a moment. Lower the phone once it recognises the code — the
          story will be waiting when you look back.
        </p>
      </div>

      <style>{`
        @keyframes scan-sweep {
          0%, 100% { transform: translateY(0); opacity: 0.9; }
          50% { transform: translateY(240px); opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}

function Corner({ className = "" }: { className?: string }) {
  return (
    <span
      className={`absolute h-10 w-10 border-white/60 ${className}`}
      style={{ borderRadius: 4 }}
    />
  );
}
