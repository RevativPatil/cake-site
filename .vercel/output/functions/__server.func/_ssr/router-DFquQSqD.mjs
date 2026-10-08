import { _ as createFileRoute, b as useRouter, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRouteWithContext, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DFquQSqD.js
var import_jsx_runtime = require_jsx_runtime();
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var styles_default = "/assets/styles-BqI2Y7H_.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error("Root boundary error:", error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$1 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "The Cake Vault | Best Cake Shop & Bakery in Pune | Custom & Eggless Cakes" },
			{
				name: "description",
				content: "Top-rated bakery & cake shop in Pune with 5 verified locations (Lohegaon Rd / Dhanori, Old Mundhwa Rd, Pimpri-Chinchwad, Ganesh Park, Santosh Mangal Karyalay). Order fresh 100% eggless cakes, custom birthday cakes, rasmalai cakes & same-day delivery. Rated 4.9⭐ by 332+ happy customers."
			},
			{
				name: "keywords",
				content: "cake shop in pune, bakery in pune, best cake shop lohegaon, cake delivery mundhwa, cake vault pimpri chinchwad, custom birthday cakes pune, eggless cakes pune, rasmalai cake pune, red velvet cake, same day cake delivery pune, cake shop near me, designer cakes pune"
			},
			{
				name: "author",
				content: "The Cake Vault"
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				name: "googlebot",
				content: "index, follow"
			},
			{
				name: "geo.region",
				content: "IN-MH"
			},
			{
				name: "geo.placename",
				content: "Pune, Maharashtra, India"
			},
			{
				name: "geo.position",
				content: "18.5204303;73.8567437"
			},
			{
				name: "ICBM",
				content: "18.5204303, 73.8567437"
			},
			{
				property: "og:site_name",
				content: "The Cake Vault"
			},
			{
				property: "og:locale",
				content: "en_IN"
			},
			{
				property: "og:title",
				content: "The Cake Vault | Best Cake Shop & Bakery in Pune | Custom & Eggless Cakes"
			},
			{
				property: "og:description",
				content: "Top-rated bakery with 5 verified locations across Pune & Pimpri-Chinchwad. Fresh eggless cakes, rasmalai cakes, custom birthday designs & same-day delivery."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://thecakevault.in"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "The Cake Vault | Best Cake Shop & Bakery in Pune"
			},
			{
				name: "twitter:description",
				content: "Fresh eggless cakes, rasmalai cakes & custom designer birthday cakes. 5 verified store locations across Pune."
			}
		],
		links: [
			{
				rel: "canonical",
				href: "https://thecakevault.in"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$1.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "bottom-right" })]
	});
}
var $$splitComponentImporter = () => import("./routes-0rbkmuhF.mjs");
var rootRouteChildren = { IndexRoute: createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "The Cake Vault | #1 Cake Shop Near Me in Dhanori, Mundhwa & Pune | 100% Eggless Custom Cakes" },
		{
			name: "description",
			content: "Looking for the best cake shop near you in Pune? The Cake Vault offers 100% eggless gourmet cakes, custom birthday designer cakes & express same-day delivery across Dhanori, Lohegaon Rd, Old Mundhwa Rd, & Pimpri-Chinchwad. Call/WhatsApp +91 84830 97680!"
		},
		{
			name: "keywords",
			content: "cake shop near me, best cake shop in Pune, cake shop Dhanori, cake shop Lohegaon Road, cake shop Old Mundhwa Road, cake shop Pimpri Chinchwad, eggless cake shop near me, custom birthday cake Pune, same day cake delivery Pune, Rasmalai cake Pune, pastry shop Pune"
		},
		{
			name: "geo.position",
			content: "18.52043;73.85674"
		},
		{
			name: "geo.placename",
			content: "Pune, Maharashtra, India"
		},
		{
			name: "geo.region",
			content: "IN-MH"
		},
		{
			property: "og:title",
			content: "The Cake Vault | #1 Cake Shop Near Me in Pune | 100% Eggless Custom Cakes"
		},
		{
			property: "og:description",
			content: "Order 100% eggless artisan cakes with same-day express delivery across 5 official stores in Pune & Pimpri-Chinchwad. Call +91 84830 97680!"
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			property: "og:locale",
			content: "en_IN"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
}).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
