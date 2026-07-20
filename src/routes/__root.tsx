import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { BottomNav } from "../components/BottomNav";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4">
      <div className="max-w-sm text-center">
        <h1 className="text-6xl font-display text-forest">404</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          This trail doesn't lead anywhere. Let's head back to the forest.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-white"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4">
      <div className="max-w-sm text-center">
        <h1 className="text-xl font-display text-forest">Something went quiet</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          The forest paused for a moment. Try again.
        </p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-white"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: "Wildpark Schorfheide — Explore, discover, respect." },
      { name: "description", content: "A calm nature-exploration companion for Wildpark Schorfheide. Discover animals, walk the trails, and unlock your explorer journal." },
      { name: "theme-color", content: "#162D20" },
      { property: "og:title", content: "Wildpark Schorfheide" },
      { property: "og:description", content: "Your digital forest companion — explore, discover, learn, respect wildlife." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Belanosima:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen w-full bg-[#EFE8DB] py-0 md:py-10">
        <div className="mx-auto w-full max-w-[440px] md:rounded-[42px] md:overflow-hidden md:shadow-[0_40px_80px_-30px_rgba(22,45,32,0.35)] bg-paper md:border md:border-line relative min-h-screen md:min-h-[900px]">
          <div className="pb-28">
            <Outlet />
          </div>
          <BottomNav />
        </div>
      </div>
    </QueryClientProvider>
  );
}
