import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import { Toaster } from "@/components/ui/sonner";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error("Root boundary error:", error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The Cake Vault | Best Cake Shop & Bakery in Pune | Custom & Eggless Cakes" },
      {
        name: "description",
        content:
          "Top-rated bakery & cake shop in Pune with 5 verified locations (Lohegaon Rd / Dhanori, Old Mundhwa Rd, Pimpri-Chinchwad, Ganesh Park, Santosh Mangal Karyalay). Order fresh 100% eggless cakes, custom birthday cakes, rasmalai cakes & same-day delivery. Rated 4.9⭐ by 332+ happy customers.",
      },
      {
        name: "keywords",
        content:
          "cake shop in pune, bakery in pune, best cake shop lohegaon, cake delivery mundhwa, cake vault pimpri chinchwad, custom birthday cakes pune, eggless cakes pune, rasmalai cake pune, red velvet cake, same day cake delivery pune, cake shop near me, designer cakes pune",
      },
      { name: "author", content: "The Cake Vault" },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "googlebot", content: "index, follow" },
      { name: "geo.region", content: "IN-MH" },
      { name: "geo.placename", content: "Pune, Maharashtra, India" },
      { name: "geo.position", content: "18.5204303;73.8567437" },
      { name: "ICBM", content: "18.5204303, 73.8567437" },
      { property: "og:site_name", content: "The Cake Vault" },
      { property: "og:locale", content: "en_IN" },
      {
        property: "og:title",
        content: "The Cake Vault | Best Cake Shop & Bakery in Pune | Custom & Eggless Cakes",
      },
      {
        property: "og:description",
        content:
          "Top-rated bakery with 5 verified locations across Pune & Pimpri-Chinchwad. Fresh eggless cakes, rasmalai cakes, custom birthday designs & same-day delivery.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://thecakevault.in" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "The Cake Vault | Best Cake Shop & Bakery in Pune" },
      {
        name: "twitter:description",
        content:
          "Fresh eggless cakes, rasmalai cakes & custom designer birthday cakes. 5 verified store locations across Pune.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://thecakevault.in" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
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
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <Toaster position="bottom-right" />
    </QueryClientProvider>
  );
}
