import { Link, useRouterState } from "@tanstack/react-router";
import { Compass, Map, ScanLine, BookOpen, MoreHorizontal } from "lucide-react";

type Tab = {
  to: "/" | "/map" | "/scanner" | "/journal" | "/more";
  label: string;
  icon: typeof Compass;
};

const tabs: Tab[] = [
  { to: "/", label: "Discover", icon: Compass },
  { to: "/map", label: "Map", icon: Map },
  { to: "/scanner", label: "Scan", icon: ScanLine },
  { to: "/journal", label: "Journal", icon: BookOpen },
  { to: "/more", label: "More", icon: MoreHorizontal },
];

export function BottomNav() {
  const { location } = useRouterState();
  const pathname = location.pathname;

  return (
    <nav
      aria-label="Primary"
      className="fixed bottom-0 left-1/2 -translate-x-1/2 z-30 w-full max-w-[440px] px-4 pb-2 pt-2 md:absolute md:left-0 md:right-0 md:translate-x-0"
      style={{ paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex items-center justify-between rounded-full bg-white/95 backdrop-blur-xl px-3 py-2 border border-line shadow-[0_20px_50px_-24px_rgba(22,45,32,0.35)]">
        {tabs.map((t) => {
          const Icon = t.icon;
          const active = t.to === "/" ? pathname === "/" : pathname.startsWith(t.to);
          return (
            <Link
              key={t.to}
              to={t.to}
              aria-label={t.label}
              className="flex flex-1 flex-col items-center gap-0.5 py-1.5 text-[10px]"
            >
              <Icon
                className={`h-[18px] w-[18px] transition-colors ${active ? "text-forest" : "text-forest/40"}`}
                strokeWidth={active ? 2 : 1.6}
              />
              <span className={`transition-colors ${active ? "text-forest font-medium" : "text-forest/45"}`}>
                {t.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
