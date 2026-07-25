import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Map, ScanLine, Trophy, User } from "lucide-react";

type Tab = {
  to: "/" | "/explore" | "/scan" | "/journal" | "/profile";
  label: string;
  icon: typeof Home;
  primary?: boolean;
};

const tabs: Tab[] = [
  { to: "/", label: "Home", icon: Home },
  { to: "/explore", label: "Explore", icon: Map },
  { to: "/scan", label: "Scan", icon: ScanLine, primary: true },
  { to: "/journal", label: "Badges", icon: Trophy },
  { to: "/profile", label: "Profile", icon: User },
];

export function BottomNav() {
  const { location } = useRouterState();
  const pathname = location.pathname;

  return (
    <nav
      aria-label="Primary"
      className="fixed bottom-0 left-1/2 -translate-x-1/2 z-30 w-full max-w-[440px] px-3 pb-3 pt-2 md:absolute md:left-0 md:right-0 md:translate-x-0"
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >

      <div
        className="mx-auto flex items-end justify-between rounded-[26px] bg-white/95 backdrop-blur-md px-2 py-2 shadow-[0_10px_40px_-15px_rgba(22,45,32,0.35)] border border-line"
      >
        {tabs.map((t) => {
          const Icon = t.icon;
          const active = t.to === "/" ? pathname === "/" : pathname.startsWith(t.to);

          if (t.primary) {
            return (
              <Link
                key={t.to}
                to={t.to}
                aria-label={t.label}
                className="-mt-8 flex flex-col items-center"
              >
                <span className="grid h-16 w-16 place-items-center rounded-full gradient-forest shadow-[0_12px_30px_-8px_rgba(22,45,32,0.55)] ring-4 ring-paper">
                  <Icon className="h-7 w-7 text-white" strokeWidth={1.8} />
                </span>
                <span className="mt-1 text-[10px] font-medium text-forest">{t.label}</span>
              </Link>
            );
          }

          return (
            <Link
              key={t.to}
              to={t.to}
              className="flex flex-1 flex-col items-center gap-1 py-2 text-[10px] font-medium"
            >
              <Icon
                className={`h-5 w-5 transition-colors ${active ? "text-forest" : "text-muted-foreground"}`}
                strokeWidth={active ? 2.2 : 1.6}
              />
              <span className={active ? "text-forest" : "text-muted-foreground"}>{t.label}</span>
              <span
                className={`h-1 w-1 rounded-full ${active ? "bg-orange" : "bg-transparent"}`}
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
