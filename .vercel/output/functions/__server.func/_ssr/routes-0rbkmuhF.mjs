import { r as __toESM } from "../_runtime.mjs";
import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { a as customCakeFlavours, c as estimateCartTotal, d as getCake, f as storeLocations, i as cartLineSchema, l as estimateLineTotal, n as cakeOrderRequestSchema, o as customCakeFrostings, r as cakeWeights, s as customerReviews, t as cakeCatalog, u as formatRupees } from "./cake-store-DKcCkhsU.mjs";
import { _ as require_jsx_runtime, a as AccordionTrigger$1, f as Slot, i as AccordionItem$1, n as AccordionContent$1, r as AccordionHeader, t as Accordion$1, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-5Pnrn8GS.mjs";
import { A as ArrowLeft, C as ChevronDown, D as BadgeCheck, E as CakeSlice, O as ArrowUp, S as CircleCheck, T as Camera, _ as Menu, a as Truck, b as Clock, c as Sparkles, d as Quote, f as Plus, g as MessageSquare, h as Minus, i as Upload, k as ArrowRight, l as ShoppingBag, m as Moon, n as X, o as Sun, p as Phone, r as WandSparkles, s as Star, t as Zap, u as Search, v as MapPin, w as Check, x as CircleQuestionMark, y as ExternalLink } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-0rbkmuhF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Accordion = Accordion$1;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionItem$1, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionHeader, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionTrigger$1, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = AccordionTrigger$1.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent$1, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = AccordionContent$1.displayName;
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var Sheet = Dialog$1;
var SheetPortal = DialogPortal$1;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay$1.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent$1.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle$1.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription$1.displayName;
var storefront_google_default = "/assets/storefront-google-B_B9DRhx.png";
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var submitCakeOrderRequest = createServerFn({ method: "POST" }).inputValidator((input) => cakeOrderRequestSchema.parse(input)).handler(createSsrRpc("c4f962364d2c89600e953e9a94fe8bad3185671d0346de51a65ef9c286259079"));
var bakerySchema = {
	"@context": "https://schema.org",
	"@type": "Bakery",
	"@id": "https://thecakevault.in/#bakery",
	name: "The Cake Vault",
	url: "https://thecakevault.in",
	logo: "https://thecakevault.in/favicon.ico",
	image: "https://thecakevault.in/og-image.png",
	description: "Top-rated bakery and cake shop in Pune with 5 verified locations (Lohegaon Rd / Dhanori, Old Mundhwa Rd, Pimpri-Chinchwad, Ganesh Park, Santosh Mangal Karyalay). Fresh 100% eggless cakes, custom birthday designer cakes, Rasmalai cakes & same-day delivery.",
	priceRange: "₹200–₹1,400",
	telephone: "+91 84830 97680",
	keywords: [
		"cake shop near me",
		"cake shop Dhanori",
		"cake shop Lohegaon Road",
		"cake shop Old Mundhwa Road",
		"cake shop Pimpri Chinchwad",
		"best cake shop in Pune",
		"100% eggless cake shop near me",
		"custom birthday cake shop Pune",
		"same day cake delivery Pune",
		"Rasmalai cake shop Pune"
	],
	areaServed: [
		"Dhanori, Pune",
		"Lohegaon Road, Pune",
		"Old Mundhwa Road, Pune",
		"Pimpri-Chinchwad",
		"Ganesh Park, Pune",
		"Santosh Mangal Karyalay, Pune",
		"Pune, Maharashtra"
	],
	servesCuisine: [
		"Bakery",
		"Custom Cakes",
		"Designer Birthday Cakes",
		"Eggless Cakes",
		"Rasmalai Fusion Cakes",
		"Desserts"
	],
	address: {
		"@type": "PostalAddress",
		addressLocality: "Pune",
		addressRegion: "Maharashtra",
		addressCountry: "IN"
	},
	geo: {
		"@type": "GeoCoordinates",
		latitude: 18.5204303,
		longitude: 73.8567437
	},
	aggregateRating: {
		"@type": "AggregateRating",
		ratingValue: "4.9",
		reviewCount: "332",
		bestRating: "5",
		worstRating: "1"
	},
	department: [
		{
			"@type": "Bakery",
			name: "The Cake Vault - Old Mundhwa Rd",
			address: {
				"@type": "PostalAddress",
				streetAddress: "Shop no 9, Shanti Samarth Complex, Old Mundhwa Rd, beside Old Relax Hotel",
				addressLocality: "Pune",
				addressRegion: "Maharashtra",
				postalCode: "411036",
				addressCountry: "IN"
			},
			aggregateRating: {
				"@type": "AggregateRating",
				ratingValue: "4.9",
				reviewCount: "39"
			}
		},
		{
			"@type": "Bakery",
			name: "The Cake Vault - Lohegaon / Dhanori Rd",
			address: {
				"@type": "PostalAddress",
				streetAddress: "Moreyshree Shopping Centre, Lohegaon Rd, opposite to Palladium Grand",
				addressLocality: "Pune",
				addressRegion: "Maharashtra",
				postalCode: "411047",
				addressCountry: "IN"
			},
			aggregateRating: {
				"@type": "AggregateRating",
				ratingValue: "4.7",
				reviewCount: "174"
			}
		},
		{
			"@type": "Bakery",
			name: "The Cake Vault - Pimpri-Chinchwad",
			address: {
				"@type": "PostalAddress",
				streetAddress: "Pimpri-Chinchwad",
				addressLocality: "Pimpri-Chinchwad",
				addressRegion: "Maharashtra",
				postalCode: "411018",
				addressCountry: "IN"
			},
			aggregateRating: {
				"@type": "AggregateRating",
				ratingValue: "4.8",
				reviewCount: "88"
			}
		},
		{
			"@type": "Bakery",
			name: "The Cake Vault - Ganesh Park",
			address: {
				"@type": "PostalAddress",
				streetAddress: "Shop No 2 Ground Floor, Ganesh Park, opposite Govind Garden Road",
				addressLocality: "Pune",
				addressRegion: "Maharashtra",
				postalCode: "411027",
				addressCountry: "IN"
			},
			aggregateRating: {
				"@type": "AggregateRating",
				ratingValue: "5.0",
				reviewCount: "29"
			}
		},
		{
			"@type": "Bakery",
			name: "The Cake Vault - Santosh Mangal Karyalay",
			address: {
				"@type": "PostalAddress",
				streetAddress: "Near Santosh Mangal Karyalay",
				addressLocality: "Pune",
				addressRegion: "Maharashtra",
				addressCountry: "IN"
			},
			aggregateRating: {
				"@type": "AggregateRating",
				ratingValue: "5.0",
				reviewCount: "2"
			}
		}
	]
};
var faqSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: [
		{
			"@type": "Question",
			name: "How far in advance should I place a custom cake request at The Cake Vault?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "For standard menu cakes, same-day delivery or pickup is often available (with 2-4 hours advance notice). For custom bespoke designs or double-tiered cakes, we recommend placing your request 24 to 48 hours in advance."
			}
		},
		{
			"@type": "Question",
			name: "Are eggless cake options available at all store locations?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Yes! All signature flavours and custom cakes can be prepared 100% eggless upon request. Just mention your dietary preference when ordering."
			}
		},
		{
			"@type": "Question",
			name: "Can I collect my order directly from a store location?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Absolutely! You can choose in-store pickup at any of our 5 verified store locations (Dhanori, Old Mundhwa Rd, Pimpri-Chinchwad, Ganesh Park, or Santosh Mangal Karyalay) or opt for safe doorstep delivery."
			}
		},
		{
			"@type": "Question",
			name: "How can I track my cake order status?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Enter your reference number (e.g. TCV-100245) into our live Order Request Tracker at the top of the website to view step-by-step progress from crafting to dispatch."
			}
		}
	]
};
var itemListSchema = {
	"@context": "https://schema.org",
	"@type": "ItemList",
	itemListElement: [
		{
			"@type": "ListItem",
			position: 1,
			item: {
				"@type": "Product",
				name: "Fresh Cream Rasmalai Fusion Cake",
				description: "Cardamom-infused sponge soaked in saffron milk, layered with authentic rasmalai pieces and roasted pistachios.",
				image: "https://thecakevault.in/cake-rasmalai.jpg",
				offers: {
					"@type": "Offer",
					price: "650",
					priceCurrency: "INR",
					availability: "https://schema.org/InStock"
				}
			}
		},
		{
			"@type": "ListItem",
			position: 2,
			item: {
				"@type": "Product",
				name: "Belgian Dark Chocolate Truffle Cake",
				description: "Rich 70% dark Belgian chocolate ganache layered with moist chocolate sponge and cocoa nib crunch.",
				image: "https://thecakevault.in/cake-truffle.jpg",
				offers: {
					"@type": "Offer",
					price: "580",
					priceCurrency: "INR",
					availability: "https://schema.org/InStock"
				}
			}
		},
		{
			"@type": "ListItem",
			position: 3,
			item: {
				"@type": "Product",
				name: "Royal Red Velvet Cream Cheese Cake",
				description: "Crimson velvet sponge with real cream cheese frosting, subtle cocoa notes, and red velvet crumb crown.",
				image: "https://thecakevault.in/cake-velvet.jpg",
				offers: {
					"@type": "Offer",
					price: "620",
					priceCurrency: "INR",
					availability: "https://schema.org/InStock"
				}
			}
		},
		{
			"@type": "ListItem",
			position: 4,
			item: {
				"@type": "Product",
				name: "Exotic Fresh Fruit Garden Cake",
				description: "Light vanilla chiffon filled with vanilla bean whipped cream and topped with kiwi, berries, mango, and dragonfruit.",
				image: "https://thecakevault.in/cake-fruit.jpg",
				offers: {
					"@type": "Offer",
					price: "590",
					priceCurrency: "INR",
					availability: "https://schema.org/InStock"
				}
			}
		}
	]
};
var CART_STORAGE_KEY = "the-cake-vault-cart";
var occasions = [
	"All cakes",
	"Birthday",
	"Anniversary",
	"Wedding",
	"Just because"
];
function CakeVaultStorefront() {
	const [cart, setCart] = (0, import_react.useState)([]);
	const [cartReady, setCartReady] = (0, import_react.useState)(false);
	const [bagOpen, setBagOpen] = (0, import_react.useState)(false);
	const [checkingOut, setCheckingOut] = (0, import_react.useState)(false);
	const [occasion, setOccasion] = (0, import_react.useState)("All cakes");
	const [search, setSearch] = (0, import_react.useState)("");
	const [receipt, setReceipt] = (0, import_react.useState)(null);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [formError, setFormError] = (0, import_react.useState)("");
	const [fieldErrors, setFieldErrors] = (0, import_react.useState)({});
	const [requestedDate, setRequestedDate] = (0, import_react.useState)("");
	const [customBuilderOpen, setCustomBuilderOpen] = (0, import_react.useState)(false);
	const [trackerOpen, setTrackerOpen] = (0, import_react.useState)(false);
	const [mobileNavOpen, setMobileNavOpen] = (0, import_react.useState)(false);
	const [quizOpen, setQuizOpen] = (0, import_react.useState)(false);
	const [quizOccasion, setQuizOccasion] = (0, import_react.useState)("Birthday");
	const [quizFlavor, setQuizFlavor] = (0, import_react.useState)("Chocolate");
	const [guestCount, setGuestCount] = (0, import_react.useState)(6);
	const [trackCode, setTrackCode] = (0, import_react.useState)("");
	const [trackSearchResult, setTrackSearchResult] = (0, import_react.useState)(null);
	const [customFlavour, setCustomFlavour] = (0, import_react.useState)(customCakeFlavours[0]);
	const [customFrosting, setCustomFrosting] = (0, import_react.useState)(customCakeFrostings[0]);
	const [customWeight, setCustomWeight] = (0, import_react.useState)("500 g");
	const [customInscription, setCustomInscription] = (0, import_react.useState)("");
	const [customDesignNote, setCustomDesignNote] = (0, import_react.useState)("");
	const [quickViewCake, setQuickViewCake] = (0, import_react.useState)(null);
	const [reviewsList, setReviewsList] = (0, import_react.useState)(customerReviews);
	const [isReviewDialogOpen, setIsReviewDialogOpen] = (0, import_react.useState)(false);
	const [reviewAuthor, setReviewAuthor] = (0, import_react.useState)("");
	const [reviewRating, setReviewRating] = (0, import_react.useState)(5);
	const [reviewCakeOrdered, setReviewCakeOrdered] = (0, import_react.useState)("");
	const [reviewLocationId, setReviewLocationId] = (0, import_react.useState)(storeLocations[0]?.id || "old-mundhwa");
	const [reviewComment, setReviewComment] = (0, import_react.useState)("");
	const [reviewPhotoUrl, setReviewPhotoUrl] = (0, import_react.useState)(null);
	const [activeStageIndex, setActiveStageIndex] = (0, import_react.useState)(0);
	const [scrollProgress, setScrollProgress] = (0, import_react.useState)(0);
	const [isScrolled, setIsScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
			if (totalHeight > 0) {
				const progress = window.scrollY / totalHeight * 100;
				setScrollProgress(progress);
			}
			setIsScrolled(window.scrollY > 40);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	(0, import_react.useMemo)(() => {
		const hour = (/* @__PURE__ */ new Date()).getHours();
		if (hour >= 5 && hour < 12) return "Good morning! Fresh morning sponge batches are coming out of our ovens right now 🥐🎂";
		if (hour >= 12 && hour < 17) return "Good afternoon! Planning a tea-time treat or evening birthday party? 🍰";
		return "Good evening! Late-night cake cravings or tomorrow's surprise? We're open till 10 PM 🌙";
	}, []);
	const defaultLocation = storeLocations[0];
	const [activeLocationId, setActiveLocationId] = (0, import_react.useState)(defaultLocation.id);
	const selectedLocation = (0, import_react.useMemo)(() => storeLocations.find((loc) => loc.id === activeLocationId) ?? defaultLocation, [activeLocationId, defaultLocation]);
	const handleReviewPhotoSelect = (file) => {
		if (!file.type.startsWith("image/")) {
			toast.error("Please upload a valid image file (JPG, PNG, WebP)");
			return;
		}
		if (file.size > 5242880) {
			toast.error("Image file size must be less than 5MB");
			return;
		}
		const reader = new FileReader();
		reader.onload = (e) => {
			const result = e.target?.result;
			setReviewPhotoUrl(result);
			toast.success("Photo attached!");
		};
		reader.readAsDataURL(file);
	};
	const handleReviewSubmit = (e) => {
		e.preventDefault();
		if (!reviewAuthor.trim() || !reviewComment.trim()) {
			toast.error("Please enter your name and review comment");
			return;
		}
		const chosenLoc = storeLocations.find((l) => l.id === reviewLocationId) || storeLocations[0];
		const newReview = {
			id: `rev-${Date.now()}`,
			author: reviewAuthor.trim(),
			locationId: chosenLoc.id,
			locationName: chosenLoc.name,
			rating: reviewRating,
			date: "Just now",
			comment: reviewComment.trim(),
			cakeOrdered: reviewCakeOrdered.trim() || "Artisan Cake",
			verified: true,
			...reviewPhotoUrl ? { photoUrl: reviewPhotoUrl } : {}
		};
		setReviewsList((prev) => [newReview, ...prev]);
		setIsReviewDialogOpen(false);
		setReviewAuthor("");
		setReviewRating(5);
		setReviewCakeOrdered("");
		setReviewComment("");
		setReviewPhotoUrl(null);
		toast.success("Thank you! Your verified review & photo have been published.");
	};
	(0, import_react.useEffect)(() => {
		try {
			const saved = window.localStorage.getItem(CART_STORAGE_KEY);
			if (saved) {
				const parsed = JSON.parse(saved);
				if (Array.isArray(parsed)) {
					const validItems = parsed.map((item) => {
						return safeParseCartLine(item);
					}).filter((item) => item !== null && getCake(item.productId) !== void 0);
					setCart(validItems);
				}
			}
		} catch {
			window.localStorage.removeItem(CART_STORAGE_KEY);
		}
		setCartReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!cartReady) return;
		try {
			window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
		} catch {}
	}, [cart, cartReady]);
	const visibleCakes = (0, import_react.useMemo)(() => {
		const query = search.trim().toLocaleLowerCase();
		return cakeCatalog.filter((cake) => {
			const matchesOccasion = occasion === "All cakes" || cake.occasions.includes(occasion);
			const matchesSearch = !query || `${cake.name} ${cake.description} ${cake.occasions.join(" ")}`.toLocaleLowerCase().includes(query);
			return matchesOccasion && matchesSearch;
		});
	}, [occasion, search]);
	const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);
	const cartTotal = estimateCartTotal(cart);
	const [isDark, setIsDark] = (0, import_react.useState)(false);
	function toggleTheme() {
		setIsDark((prev) => {
			const next = !prev;
			if (next) document.documentElement.classList.add("dark");
			else document.documentElement.classList.remove("dark");
			return next;
		});
	}
	function addToBag(productId, weight) {
		const cake = getCake(productId);
		setCart((current) => {
			const existing = current.find((item) => item.productId === productId && item.weight === weight);
			if (existing) return current.map((item) => item === existing ? {
				...item,
				quantity: Math.min(20, item.quantity + 1)
			} : item);
			return [...current, {
				productId,
				weight,
				quantity: 1
			}];
		});
		setReceipt(null);
		setCheckingOut(false);
		setBagOpen(true);
		toast.success(`Added ${cake?.name ?? "Cake"} (${weight}) to your bag! 🍰`, { description: "You can review your bag or send a request anytime." });
	}
	function changeQuantity(line, amount) {
		setCart((current) => current.map((item) => item.productId === line.productId && item.weight === line.weight ? {
			...item,
			quantity: item.quantity + amount
		} : item).filter((item) => item.quantity > 0));
	}
	async function submitRequest(event) {
		event.preventDefault();
		setFormError("");
		const formData = new FormData(event.currentTarget);
		const parsed = cakeOrderRequestSchema.safeParse({
			customerName: formData.get("customerName"),
			customerEmail: formData.get("customerEmail"),
			customerPhone: formData.get("customerPhone"),
			deliveryAddress: formData.get("deliveryAddress"),
			requestedDate,
			customerNote: formData.get("customerNote") ?? "",
			items: cart
		});
		if (!parsed.success) {
			const issues = parsed.error.flatten().fieldErrors;
			setFieldErrors(Object.fromEntries(Object.entries(issues).flatMap(([field, messages]) => messages?.[0] ? [[field, messages[0]]] : [])));
			return;
		}
		setFieldErrors({});
		setSubmitting(true);
		try {
			const result = await submitCakeOrderRequest({ data: parsed.data });
			setReceipt(result);
			setCart([]);
			setCheckingOut(false);
		} catch (error) {
			setFormError(error instanceof Error ? error.message : "We couldn't send your request just now. Please try again; your bag is still here.");
		} finally {
			setSubmitting(false);
		}
	}
	function jumpToCakes(nextOccasion) {
		if (nextOccasion) setOccasion(nextOccasion);
		document.getElementById("cakes")?.scrollIntoView({ behavior: "smooth" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen overflow-hidden bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify(bakerySchema) }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify(faqSchema) }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify(itemListSchema) }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-primary px-4 py-1.5 text-center text-xs font-medium text-primary-foreground shadow-xs",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex w-full max-w-[1600px] items-center justify-between gap-2 px-2 sm:px-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1.5 truncate",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-3.5 fill-amber-400 text-amber-400 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate",
							children: "⚡ 100% Eggless Gourmet Cakes & Express Same-Day Delivery across Pune"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://wa.me/918483097680?text=Hi%20The%20Cake%20Vault%2C%20I%20would%20like%20to%20order%20or%20customize%20a%20cake!",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "hidden sm:inline-flex items-center gap-1.5 rounded bg-background/20 px-2.5 py-0.5 text-[11px] font-semibold transition-colors hover:bg-background/30",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "WhatsApp (+91 84830 97680)" })]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed top-0 left-0 h-1 bg-gradient-to-r from-vault-rose via-amber-500 to-vault-gold z-50 transition-all duration-150 ease-out",
				style: { width: `${scrollProgress}%` },
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: `sticky top-0 z-40 border-b border-border/70 scroll-header-sticky ${isScrolled ? "is-scrolled" : "bg-background/95 backdrop-blur"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-[4.5rem] w-full max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 sm:gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									size: "icon",
									onClick: () => setMobileNavOpen(true),
									className: "h-10 size-10 border-border bg-card text-foreground hover:bg-secondary md:hidden",
									"aria-label": "Open navigation menu",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#home",
									"aria-label": "The Cake Vault home",
									className: "group inline-flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex size-9 items-center justify-center rounded-full border border-border text-primary transition-colors group-hover:bg-secondary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CakeSlice, {
											"aria-hidden": "true",
											className: "size-[18px]",
											strokeWidth: 1.6
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex flex-col leading-none",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "vault-display text-[16px] sm:text-[17px] font-semibold",
											children: "The Cake Vault"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 text-[9px] font-medium uppercase tracking-[0.22em] text-muted-foreground truncate max-w-[120px] sm:max-w-none",
											children: selectedLocation.area
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#find-us",
									className: "hidden lg:inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/80 px-3 py-1 text-xs text-foreground transition-colors hover:border-primary",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3 text-vault-rose" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: selectedLocation.name }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3 text-muted-foreground" })
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							"aria-label": "Main navigation",
							className: "hidden items-center gap-7 text-[13px] font-medium text-muted-foreground md:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "transition-colors hover:text-foreground",
									href: "#cakes",
									children: "The cakes"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setCustomBuilderOpen(true),
									className: "inline-flex items-center gap-1 transition-colors hover:text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "size-3.5 text-vault-rose" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Custom cake" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "transition-colors hover:text-foreground",
									href: "#reviews",
									children: "Reviews"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "transition-colors hover:text-foreground",
									href: "#find-us",
									children: "Find us"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "transition-colors hover:text-foreground",
									href: "#faq",
									children: "FAQ"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setTrackerOpen(true),
									className: "inline-flex items-center gap-1 transition-colors hover:text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Track request" })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									size: "icon",
									onClick: toggleTheme,
									className: "h-10 size-10 border-border bg-card text-foreground hover:bg-secondary",
									"aria-label": isDark ? "Switch to light theme" : "Switch to dark theme",
									title: isDark ? "Switch to light theme" : "Switch to dark theme",
									children: isDark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-4 text-amber-500" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-4 text-slate-700" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									size: "sm",
									onClick: () => setIsReviewDialogOpen(true),
									className: "hidden xl:inline-flex h-10 gap-1.5 border-vault-rose/50 bg-vault-rose/10 px-3.5 text-xs font-semibold text-vault-rose hover:bg-vault-rose hover:text-white transition-all shadow-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5 fill-vault-rose hover:fill-white" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Write a Review" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									size: "sm",
									onClick: () => setQuizOpen(true),
									className: "hidden lg:inline-flex h-10 gap-1.5 border-amber-500/30 gold-gradient-bg px-3 text-xs font-semibold text-primary hover:border-amber-500",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5 text-vault-rose" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Cake Matcher" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									size: "sm",
									onClick: () => setCustomBuilderOpen(true),
									className: "hidden sm:inline-flex h-10 gap-1.5 border-border bg-card px-3 text-xs font-medium hover:bg-secondary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "size-3.5 text-vault-rose" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Design Cake" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									className: "h-10 gap-2 border-border bg-card px-3.5 text-foreground hover:bg-secondary",
									"aria-label": `Open your bag${cartQuantity ? `, ${cartQuantity} ${cartQuantity === 1 ? "cake" : "cakes"}` : ""}`,
									onClick: () => {
										setBagOpen(true);
										setReceipt(null);
										setCheckingOut(false);
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
											"aria-hidden": "true",
											className: "size-4",
											strokeWidth: 1.8
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Your bag" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "flex size-5 items-center justify-center rounded-full bg-secondary text-[11px] text-secondary-foreground",
											children: cartQuantity
										})
									]
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "home",
				"aria-labelledby": "hero-heading",
				className: "relative mx-auto grid w-full max-w-[1600px] items-center gap-8 px-4 pb-12 pt-8 sm:px-6 md:grid-cols-[0.88fr_1.12fr] md:gap-10 md:py-14 lg:gap-14 lg:px-8 vault-hero-glow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 order-2 pb-3 md:order-1 md:pb-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 inline-flex items-center gap-2 rounded-full border border-vault-rose/30 bg-vault-rose/10 px-4 py-1.5 text-xs font-semibold text-vault-rose shadow-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
								"aria-hidden": "true",
								className: "size-3.5 animate-pulse text-vault-rose",
								strokeWidth: 1.8
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "vault-handwritten text-lg font-bold text-vault-rose",
								children: "Made with love, not shortcuts ✨"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground",
							children: "5 Branches Across Pune & Pimpri-Chinchwad"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							id: "hero-heading",
							className: "vault-display vault-editorial max-w-[640px] text-[clamp(2.75rem,4.8vw,4.75rem)] leading-[1.05] text-primary",
							children: [
								"Every cake tells",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "vault-handwritten font-semibold text-vault-rose text-[1.12em] underline decoration-vault-rose/30 underline-offset-8",
									children: "your story."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-[500px] text-[15px] leading-7 text-muted-foreground sm:text-base",
							children: "We started The Cake Vault because we believed Pune deserved something better — cakes that are 100% eggless, baked fresh every morning, and designed around the person you're celebrating. No frozen sponges. No generic designs. Just real care in every layer."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5 text-emerald-600 dark:text-emerald-400" }), " 100% Eggless Bakes"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[11px] font-semibold text-amber-700 dark:text-amber-400",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "size-3.5 text-amber-500" }), " Express Same-Day Delivery"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: () => jumpToCakes(),
								className: "h-12 gap-3 rounded-md px-7 text-sm font-semibold shadow-md transition-all hover:scale-105 bg-primary text-primary-foreground hover:bg-primary/90",
								children: ["Explore Cake Menu ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									"aria-hidden": "true",
									className: "size-4"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								onClick: () => setCustomBuilderOpen(true),
								className: "h-12 gap-2 rounded-md px-5 text-sm font-semibold border-vault-rose/40 text-vault-rose hover:bg-vault-rose/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "size-4" }), " Custom Designer"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-center gap-3 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								"aria-hidden": "true",
								className: "flex -space-x-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex size-7 items-center justify-center rounded-full border-2 border-background bg-secondary text-secondary-foreground shadow-xs",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5 fill-amber-500 text-amber-500" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex size-7 items-center justify-center rounded-full border-2 border-background bg-accent text-accent-foreground shadow-xs",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5 text-amber-500" })
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: "Over 332+ 5-Star Verified Google Reviews across Pune"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative order-1 mx-auto aspect-[1.25/1] w-full max-w-[680px] overflow-hidden rounded-2xl border border-border/80 bg-card shadow-xl interactive-card shine-overlay md:order-2 md:aspect-[0.98/1] lg:aspect-[1.08/1]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: cakeCatalog[0].image,
							alt: "The Cake Vault Pune - Signature handcrafted chocolate celebration cake with fresh cream",
							className: "size-full object-cover object-[center_58%] interactive-card-img",
							fetchPriority: "high"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-4 left-4 flex items-center gap-3 rounded-xl border border-border/70 bg-background/95 p-3.5 shadow-lg backdrop-blur-md sm:bottom-6 sm:left-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-10 items-center justify-center rounded-full bg-vault-rose/10 text-vault-rose",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CakeSlice, {
									"aria-hidden": "true",
									className: "size-5",
									strokeWidth: 1.8
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold text-foreground",
									children: "Baked Fresh Everyday"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 text-xs text-muted-foreground",
									children: "Artisan ingredients & zero preservatives"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							className: "absolute right-4 top-4 flex size-12 rotate-6 items-center justify-center rounded-full bg-amber-500 text-white shadow-lg sm:right-6 sm:top-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
								className: "size-5 text-white",
								strokeWidth: 1.8
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"aria-label": "Browse by occasion",
				className: "border-y border-border/70 bg-secondary/65",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex w-full max-w-[1600px] flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 py-3.5 text-[13px] sm:gap-x-4 sm:px-6 md:justify-between lg:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden font-medium text-muted-foreground md:inline",
							children: "What are we celebrating?"
						}),
						occasions.slice(1).map((label) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => jumpToCakes(label),
							className: "rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:bg-background hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
							children: label
						}, label)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => jumpToCakes("All cakes"),
							className: "inline-flex items-center gap-1 rounded-full px-3 py-1.5 font-medium text-primary transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
							children: ["Browse everything ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								"aria-hidden": "true",
								className: "size-3.5"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "signature-stage",
				"aria-labelledby": "signature-stage-heading",
				className: "scroll-mt-20 border-b border-border/70 bg-gradient-to-b from-background via-secondary/20 to-background py-14 sm:py-20 scroll-reveal",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-8 flex items-center justify-between border-b border-border/70 pb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-flex items-center gap-2 rounded-full border border-vault-rose/30 bg-vault-rose/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-vault-rose",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Artisan Creations" })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								id: "signature-stage-heading",
								className: "vault-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl",
								children: [
									"Artisan Creations",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "serif-i text-vault-rose font-normal",
										children: "& Signature Cakes"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground sm:text-base",
								children: "Hover or select any creation below to preview our master baker's live stage."
							})] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-8 lg:grid-cols-12 lg:items-stretch",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-col justify-between space-y-2 lg:col-span-5",
								children: cakeCatalog.slice(0, 6).map((cake, idx) => {
									const isActive = activeStageIndex === idx;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										onMouseEnter: () => setActiveStageIndex(idx),
										onClick: () => setActiveStageIndex(idx),
										tabIndex: 0,
										role: "button",
										onKeyDown: (e) => {
											if (e.key === "Enter" || e.key === " ") {
												e.preventDefault();
												setActiveStageIndex(idx);
											}
										},
										className: `group relative cursor-pointer rounded-xl border p-4 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${isActive ? "svc-item-active border-vault-rose/50 bg-secondary/80 shadow-md translate-x-1" : "border-border/70 bg-card hover:border-vault-rose/30 hover:bg-secondary/40"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3 min-w-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-mono text-sm font-bold text-vault-rose/80 group-hover:text-vault-rose",
													children: [
														"0",
														idx + 1,
														"."
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "min-w-0",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
														className: "vault-display text-base font-bold text-primary group-hover:text-vault-rose transition-colors truncate",
														children: cake.name
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "text-xs text-muted-foreground truncate",
														children: [cake.occasions[0], " · 500 g"]
													})]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 shrink-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-md bg-accent/60 px-2 py-1 font-mono text-xs font-bold text-accent-foreground",
													children: formatRupees(cake.estimateFor500g)
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: `size-4 transition-transform duration-300 ${isActive ? "translate-x-1 text-vault-rose" : "text-muted-foreground group-hover:translate-x-0.5"}` })]
											})]
										})
									}, cake.id);
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "lg:col-span-7",
								children: (() => {
									const activeCake = cakeCatalog[activeStageIndex] || cakeCatalog[0];
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card p-6 shadow-xl interactive-card shine-overlay",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border/60 bg-secondary/50",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: activeCake.image,
													alt: `Live preview: ${activeCake.name}`,
													className: "svc-stage-fade size-full object-cover transition-all duration-500 hover:scale-105"
												}, activeCake.id),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "absolute top-4 left-4 flex flex-wrap gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground shadow-sm backdrop-blur-md",
														children: activeCake.occasions[0]
													}), "bestseller" in activeCake && activeCake.bestseller && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "rounded-full bg-amber-500 text-white px-3 py-1 text-xs font-bold shadow-sm",
														children: "★ Bestseller"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "absolute bottom-4 right-4 rounded-lg bg-background/90 px-3 py-1.5 font-mono text-sm font-bold text-foreground shadow-sm backdrop-blur-md",
													children: [formatRupees(activeCake.estimateFor500g), " (500 g)"]
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "vault-display text-2xl font-bold text-primary",
													children: activeCake.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "inline-flex items-center gap-1 rounded bg-amber-500/10 px-2 py-0.5 text-xs font-bold text-amber-600 dark:text-amber-400",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3 fill-amber-500" }), " 4.9"]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs leading-5 text-muted-foreground max-w-[480px]",
												children: activeCake.description
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 shrink-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
													onClick: () => addToBag(activeCake.id, "500 g"),
													className: "h-11 px-5 gap-2 text-xs font-semibold shadow-md bg-primary text-primary-foreground hover:bg-primary/90",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-4" }), " Add to Bag"]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
													variant: "outline",
													onClick: () => setCustomBuilderOpen(true),
													className: "h-11 px-4 text-xs font-semibold border-vault-rose/40 text-vault-rose hover:bg-vault-rose/10",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "size-4" }), " Custom"]
												})]
											})]
										})]
									});
								})()
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "cakes",
				"aria-labelledby": "cakes-heading",
				className: "scroll-mt-20 mx-auto w-full max-w-[1600px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 scroll-reveal",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-8 flex items-center justify-between border-b border-border/70 pb-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-vault-rose",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Full Catalogue" })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "cakes-heading",
							className: "vault-display text-3xl font-bold leading-tight text-primary sm:text-4xl",
							children: "Explore Our Full Menu"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-6 text-muted-foreground",
							children: "Filter by occasion or search for your favorite cake flavor."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "relative block w-full sm:max-w-[270px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: "Search cakes"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: search,
									onChange: (event) => setSearch(event.target.value),
									type: "search",
									placeholder: "Try “chocolate” or “birthday”",
									className: "h-11 w-full border-b border-input bg-transparent px-1 pr-7 text-sm text-foreground outline-none placeholder:text-muted-foreground/80 focus:border-primary"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
									"aria-hidden": "true",
									className: "pointer-events-none absolute right-1 top-3 size-4 -rotate-90 text-muted-foreground"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-8 overflow-hidden rounded-xl border border-amber-500/30 gold-gradient-bg p-4 shadow-xs sm:p-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-background/90 px-3 py-0.5 text-[11px] font-semibold text-amber-700 dark:text-amber-400",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CakeSlice, { className: "size-3.5 text-vault-rose" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Baker's Portion Calculator" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "vault-display mt-2 text-xl font-bold text-primary",
									children: [
										"Planning a Celebration?",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "vault-handwritten text-2xl font-normal text-vault-rose",
											children: "Calculate ideal size"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 text-xs text-muted-foreground",
									children: "Select how many guests you're hosting to get the recommended cake weight:"
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: [
									{
										count: 6,
										label: "4–6 Guests (500 g)",
										weight: "500 g"
									},
									{
										count: 12,
										label: "8–12 Guests (1 kg)",
										weight: "1 kg"
									},
									{
										count: 20,
										label: "15–20 Guests (2 kg)",
										weight: "1 kg"
									},
									{
										count: 35,
										label: "25+ Guests (Custom Tier)",
										weight: "1 kg"
									}
								].map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: guestCount === opt.count ? "default" : "outline",
									size: "sm",
									onClick: () => {
										setGuestCount(opt.count);
										toast.info(`Recommended size: ${opt.label}! 🎂`, { description: opt.count > 15 ? "Consider a 2-tier or custom bespoke cake design." : "500g to 1kg is perfect for intimate gatherings." });
									},
									className: "h-9 text-xs",
									children: opt.label
								}, opt.count))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						role: "group",
						"aria-label": "Filter cakes by occasion",
						className: "mb-8 flex gap-2 overflow-x-auto pb-1",
						children: occasions.map((label) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: occasion === label ? "default" : "outline",
							size: "sm",
							onClick: () => setOccasion(label),
							className: "h-9 shrink-0 rounded-full px-4 text-xs",
							children: label
						}, label))
					}),
					visibleCakes.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:gap-8 xl:gap-10",
						children: visibleCakes.map((cake, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `stagger-card-scroll stagger-delay-${index % 8} h-full`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CakeCard, {
								cake,
								index,
								onAdd: addToBag
							})
						}, cake.id))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-h-[220px] flex-col items-center justify-center gap-3 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CakeSlice, {
								"aria-hidden": "true",
								className: "size-8 text-vault-rose",
								strokeWidth: 1.4
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "vault-display text-2xl text-primary",
								children: "We couldn't find that cake."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "Try another search, or browse the whole menu."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => {
									setSearch("");
									setOccasion("All cakes");
								},
								children: "Show me all cakes"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-9 border-t border-border/70 pt-4 text-xs leading-5 text-muted-foreground",
						children: "Menu photos and prices are sample estimates. We’ll confirm availability and the final price before your order is accepted; delivery is not included in these estimates."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "our-way",
				"aria-labelledby": "our-way-heading",
				className: "border-y border-border/70 bg-secondary/50 scroll-reveal stacked-page-layer py-14 sm:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-8 flex items-center justify-between border-b border-border/70 pb-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-vault-rose shadow-xs",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Our Story & Promise" })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-12 lg:grid-cols-12 lg:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									id: "our-way-heading",
									className: "vault-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl",
									children: "Baked with warmth & zero shortcuts"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm leading-7 text-muted-foreground sm:text-base",
									children: "We believe a great cake is more than flour and sugar—it’s the center of a cherished memory. Every morning at 6:00 AM, our ovens light up across Pune so your celebration gets the freshest bake possible with zero frozen sponges or artificial pre-mixes."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl border border-border/80 bg-card p-4 shadow-xs",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "flex size-9 items-center justify-center rounded-full bg-amber-500/10 text-amber-600 mb-3",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "text-sm font-bold text-primary",
													children: "Baked Fresh Daily"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-xs leading-5 text-muted-foreground",
													children: "Baked fresh every morning across Pune."
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl border border-border/80 bg-card p-4 shadow-xs",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "flex size-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 mb-3",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "text-sm font-bold text-primary",
													children: "100% Pure Eggless"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-xs leading-5 text-muted-foreground",
													children: "Light, moist, and fluffy vegetarian bakes."
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl border border-border/80 bg-card p-4 shadow-xs",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "flex size-9 items-center justify-center rounded-full bg-vault-rose/10 text-vault-rose mb-3",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "size-4" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "text-sm font-bold text-primary",
													children: "Hand Inscriptions"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-xs leading-5 text-muted-foreground",
													children: "Custom hand-piped chocolate messages."
												})
											]
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "doc-drift relative overflow-hidden rounded-2xl border border-border/80 bg-card shadow-lg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "aspect-[4/4.5] w-full overflow-hidden bg-secondary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: storefront_google_default,
										alt: "The Cake Vault Official Pune Storefront",
										className: "size-full object-cover object-center transition-transform duration-700 hover:scale-105"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-0 inset-x-0 p-5 text-white",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-block rounded-full bg-vault-rose px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white mb-2",
											children: "Official Pune Storefront"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "vault-display text-2xl font-bold",
											children: "The Cake Vault Pune"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-white/80 italic",
											children: "\"Moreyshree Centre, Lohegaon Rd & Old Mundhwa Rd branches open 9 AM – 10 PM daily.\""
										})
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "doc-drift relative overflow-hidden rounded-2xl border border-border/80 bg-card shadow-lg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "aspect-[4/4.5] w-full overflow-hidden bg-secondary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: cakeCatalog[5].image,
										alt: "Master Chocolatier Bespoke Thar SUV Cake",
										className: "size-full object-cover object-center transition-transform duration-700 hover:scale-105"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-0 inset-x-0 p-5 text-white",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-block rounded-full bg-amber-500 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white mb-2",
											children: "Bespoke Designer Studio"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "vault-display text-2xl font-bold",
											children: "Chef Rohan M."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-white/80 italic",
											children: "\"Crafting custom 3D designer sculptures & bespoke celebration cakes.\""
										})
									]
								})]
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "reviews",
				"aria-labelledby": "reviews-heading",
				className: "border-b border-border/70 bg-background scroll-reveal stacked-page-layer py-14 sm:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-8 flex items-center justify-between border-b border-border/70 pb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-vault-rose",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Customer Stories" })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-12 flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								id: "reviews-heading",
								className: "vault-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl",
								children: [
									"Loved Across Pune",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "serif-i text-vault-rose font-normal block sm:inline",
										children: "— 5-Star Google Reviews"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-6 text-muted-foreground",
								children: "Over 332+ verified 5-star Google reviews with real cake photo uploads across our 5 store locations."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-secondary/40 p-4 shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-center px-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "vault-display text-4xl font-bold text-primary",
											children: "4.9"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-1 flex items-center justify-center gap-0.5 text-amber-500",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-amber-500" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-amber-500" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-amber-500" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-amber-500" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-amber-500" })
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-[11px] font-medium text-muted-foreground",
											children: "332+ Verified Reviews"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									onClick: () => setIsReviewDialogOpen(true),
									className: "h-12 px-6 gap-2 font-bold text-xs shadow-xl bg-gradient-to-r from-vault-rose via-rose-600 to-amber-500 text-white hover:scale-105 transition-all duration-300 ring-2 ring-vault-rose/30 gold-glow-border animate-pulse-soft",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-white text-white" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Write a Review" })]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",
							children: reviewsList.map((rev, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `stagger-card-scroll stagger-delay-${index % 4} flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-md transition-all hover:border-vault-rose/40 hover:shadow-xl`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-center gap-1 text-amber-500",
											children: Array.from({ length: rev.rating }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5 fill-amber-500" }, i))
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] font-medium text-muted-foreground",
											children: rev.date
										})]
									}),
									rev.photoUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative mt-3 aspect-[4/3] w-full overflow-hidden rounded-xl border border-border/80 bg-secondary/50",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: rev.photoUrl,
											alt: `Real cake photo uploaded by customer ${rev.author}`,
											className: "size-full object-cover transition-transform duration-500 hover:scale-105"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute bottom-2 left-2 rounded-full bg-background/90 px-2.5 py-0.5 text-[10px] font-bold text-foreground shadow-xs backdrop-blur-md",
											children: "📷 Customer Photo"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-3 text-xs leading-5 text-foreground italic",
										children: [
											"“",
											rev.comment,
											"”"
										]
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 border-t border-border pt-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1.5 text-xs font-bold text-primary",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: rev.author }), rev.verified && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "size-3.5 text-emerald-600" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-0.5 text-[11px] font-bold text-vault-rose",
											children: rev.cakeOrdered
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-0.5 text-[10px] text-muted-foreground",
											children: rev.locationName
										})
									]
								})]
							}, rev.id))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "find-us",
				"aria-labelledby": "find-us-heading",
				className: "mx-auto w-full max-w-[1600px] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 scroll-reveal stacked-page-layer",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-8 flex items-center justify-between border-b border-border/70 pb-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-vault-rose",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Store Locations" })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-10 text-center md:text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "find-us-heading",
							className: "vault-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl",
							children: "Find The Cake Vault Near You"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-[680px] text-sm leading-6 text-muted-foreground sm:text-base",
							children: "Showing only our 5 official store locations in Pune & Pimpri-Chinchwad. Click on any location to view ratings, address details, services, and live Google Maps directions."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 lg:grid-cols-12 lg:items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3.5 lg:col-span-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between pb-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground",
									children: [
										"Locations (",
										storeLocations.length,
										")"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground",
									children: "Click to view on map"
								})]
							}), storeLocations.map((loc) => {
								const isSelected = loc.id === selectedLocation.id;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									onClick: () => setActiveLocationId(loc.id),
									tabIndex: 0,
									role: "button",
									onKeyDown: (e) => {
										if (e.key === "Enter" || e.key === " ") {
											e.preventDefault();
											setActiveLocationId(loc.id);
										}
									},
									className: `group relative cursor-pointer rounded-xl border p-4 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${isSelected ? "border-primary bg-primary/5 shadow-md" : "border-border bg-card hover:border-primary/50 hover:bg-secondary/40"}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0 flex-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex flex-wrap items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
														className: "vault-display text-lg font-semibold leading-snug text-primary",
														children: loc.name
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "inline-flex items-center gap-1 rounded bg-amber-500/10 px-2 py-0.5 text-xs font-semibold text-amber-700 dark:text-amber-400",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3 fill-amber-500 text-amber-500" }),
															loc.rating.toFixed(1),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "font-normal text-muted-foreground",
																children: [
																	"(",
																	loc.reviewCount,
																	")"
																]
															})
														]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-medium text-foreground",
														children: loc.category
													}), loc.priceRange && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "rounded bg-secondary px-1.5 py-0.5 font-mono text-[11px] font-medium text-foreground",
														children: loc.priceRange
													})] })]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-xs leading-5 text-muted-foreground",
													children: loc.address
												}),
												loc.services && loc.services.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-3 flex flex-wrap gap-1.5",
													children: loc.services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "inline-flex items-center gap-1 rounded-full border border-border bg-background/80 px-2 py-0.5 text-[10px] font-medium text-muted-foreground",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-2.5 text-vault-rose" }), service]
													}, service))
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1.5 shrink-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: `tel:${loc.phone || "+918483097680"}`,
												onClick: (e) => e.stopPropagation(),
												title: `Call ${loc.name} directly`,
												className: "flex size-9 shrink-0 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 transition-colors hover:bg-emerald-600 hover:text-white dark:text-emerald-400",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: loc.googleMapsUrl,
												target: "_blank",
												rel: "noreferrer",
												onClick: (e) => e.stopPropagation(),
												title: "Open in Google Maps",
												className: "flex size-9 shrink-0 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-4" })
											})]
										})]
									})
								}, loc.id);
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col gap-4 lg:col-span-7 lg:sticky lg:top-24",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between border-b border-border bg-secondary/60 px-4 py-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-vault-rose" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Map: ", selectedLocation.area] })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1 text-xs font-semibold text-amber-700 dark:text-amber-400",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5 fill-amber-500 text-amber-500" }),
												selectedLocation.rating.toFixed(1),
												" rating (",
												selectedLocation.reviewCount,
												" ",
												"reviews)"
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "relative h-[380px] w-full bg-secondary sm:h-[420px]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
											src: selectedLocation.mapEmbedUrl,
											title: `Map location for ${selectedLocation.name}`,
											className: "size-full border-0",
											loading: "lazy",
											allowFullScreen: true,
											referrerPolicy: "no-referrer-when-downgrade"
										}, selectedLocation.id)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-3 border-t border-border bg-background p-4 sm:flex-row sm:items-center sm:justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-semibold uppercase tracking-[0.14em] text-vault-rose",
												children: "Selected Store Location"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "vault-display text-base font-semibold text-primary",
												children: selectedLocation.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-0.5 text-xs text-muted-foreground",
												children: selectedLocation.address
											})
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-center gap-2 shrink-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												asChild: true,
												variant: "outline",
												className: "gap-2 text-xs border-emerald-500/30 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800 dark:text-emerald-400 dark:hover:bg-emerald-950/40",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
													href: `tel:${selectedLocation.phone || "+918483097680"}`,
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3.5 text-emerald-600 dark:text-emerald-400" }),
														" Call",
														" ",
														selectedLocation.phone || "+91 84830 97680"
													]
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												asChild: true,
												className: "gap-2 text-xs",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
													href: selectedLocation.googleMapsUrl,
													target: "_blank",
													rel: "noreferrer",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" }), " Open Maps"]
												})
											})]
										})]
									})
								]
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "faq",
				"aria-labelledby": "faq-heading",
				className: "border-t border-border/70 bg-secondary/35 py-14 sm:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1000px] px-4 sm:px-8 md:px-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-8 flex items-center justify-between border-b border-border/70 pb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-vault-rose shadow-xs",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Got Questions?" })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-10 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								id: "faq-heading",
								className: "vault-display text-3xl font-bold text-primary sm:text-4xl",
								children: "Frequently Asked Questions"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "Everything you need to know about our fresh cakes, custom designs, and store pickups in Pune."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Accordion, {
							type: "single",
							collapsible: true,
							className: "w-full space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
									value: "item-1",
									className: "rounded-xl border border-border bg-card px-4 py-1 shadow-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
										className: "text-base font-semibold text-primary hover:no-underline",
										children: "Are all cakes freshly baked for each order request?"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
										className: "text-xs leading-6 text-muted-foreground",
										children: "Yes! Every cake is handcrafted in our Pune bakery kitchens using premium ingredients. We never store frozen finished cakes."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
									value: "item-2",
									className: "rounded-xl border border-border bg-card px-4 py-1 shadow-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
										className: "text-base font-semibold text-primary hover:no-underline",
										children: "Are all of your cakes 100% eggless?"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
										className: "text-xs leading-6 text-muted-foreground",
										children: "Yes, 100%! Every single cake, pastry, and custom bake at The Cake Vault is strictly 100% pure vegetarian and eggless. We use premium pure butter, fresh dairy cream, and natural ingredients so everyone can indulge worry-free."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
									value: "item-3",
									className: "rounded-xl border border-border bg-card px-4 py-1 shadow-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
										className: "text-base font-semibold text-primary hover:no-underline",
										children: "How far in advance should I request a custom cake?"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
										className: "text-xs leading-6 text-muted-foreground",
										children: "For standard signature menu cakes, same-day pickup or delivery (with 2–4 hours advance notice) is often available. For custom bespoke designs or double-tiered cakes, we recommend requesting 24–48 hours in advance."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
									value: "item-4",
									className: "rounded-xl border border-border bg-card px-4 py-1 shadow-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
										className: "text-base font-semibold text-primary hover:no-underline",
										children: "Which store location will handle my order request?"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
										className: "text-xs leading-6 text-muted-foreground",
										children: "Your order request will be assigned to your selected nearest branch among our 5 verified store locations (Dhanori, Old Mundhwa Rd, Pimpri-Chinchwad, Ganesh Park, or Santosh Mangal Karyalay)."
									})]
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "bg-ink text-white py-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-12 flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-10 md:flex-row md:items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full border border-vault-rose/40 bg-vault-rose/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-rose-300",
									children: "Crafted in Pune · 100% Pure Eggless"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "vault-display mt-3 text-3xl font-bold text-white sm:text-4xl",
									children: "Ready to Order Your Dream Cake?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-ink-muted",
									children: "5 Store Locations across Pune & Pimpri-Chinchwad. Express Same-Day Delivery available."
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									className: "h-12 rounded-full px-6 gap-2 text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "tel:+918483097680",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), " Call +91 84830 97680"]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									className: "h-12 rounded-full px-6 gap-2 text-xs font-bold bg-vault-rose text-white hover:bg-rose-500 shadow-lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "https://wa.me/918483097680",
										target: "_blank",
										rel: "noreferrer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-4" }), " WhatsApp Order"]
									})
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 gap-8 md:grid-cols-4 border-b border-white/10 pb-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "md:col-span-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "#home",
											className: "vault-display text-2xl font-bold text-white flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CakeSlice, { className: "size-6 text-vault-rose" }), " The Cake Vault"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-xs leading-6 text-ink-muted",
											children: "Pune's premier 100% eggless gourmet cake shop & bespoke designer. Serving Dhanori, Lohegaon Rd, Old Mundhwa Rd, Ganesh Park & Pimpri-Chinchwad."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 flex items-center gap-2 text-xs text-emerald-400 font-semibold",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "332+ Verified 5-Star Google Reviews" })]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xs font-bold uppercase tracking-[0.18em] text-vault-rose mb-4",
									children: "Cake Shop Near Me"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "space-y-2 text-xs text-ink-muted",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#find-us",
											className: "hover:text-white transition-colors",
											children: "Cake Shop in Dhanori Pune"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#find-us",
											className: "hover:text-white transition-colors",
											children: "Cake Shop on Lohegaon Road"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#find-us",
											className: "hover:text-white transition-colors",
											children: "Cake Shop on Old Mundhwa Road"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#find-us",
											className: "hover:text-white transition-colors",
											children: "Cake Shop in Pimpri-Chinchwad"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#find-us",
											className: "hover:text-white transition-colors",
											children: "Cake Shop near Ganesh Park"
										}) })
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xs font-bold uppercase tracking-[0.18em] text-vault-rose mb-4",
									children: "Signature Specialities"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "space-y-2 text-xs text-ink-muted",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#signature-stage",
											className: "hover:text-white transition-colors",
											children: "Puneri Fresh Rasmalai Cake"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#signature-stage",
											className: "hover:text-white transition-colors",
											children: "Belgian Chocolate Berry Truffle"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#signature-stage",
											className: "hover:text-white transition-colors",
											children: "Alphonso Mango Mousse Cake"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#signature-stage",
											className: "hover:text-white transition-colors",
											children: "Golden Butterscotch Crunch"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#signature-stage",
											className: "hover:text-white transition-colors",
											children: "Custom Birthday Designer Cakes"
										}) })
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-xs font-bold uppercase tracking-[0.18em] text-vault-rose mb-4",
										children: "Verified Stores & Hours"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-ink-muted leading-6",
										children: [
											"Open Daily: 9:00 AM – 10:00 PM",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Order Hotline: +91 84830 97680",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Address: Moreyshree Shopping Centre, Lohegaon Rd, Dhanori, Pune"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white",
											children: "⚡ Express Same-Day Pickup Available"
										})
									})
								] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-ink-muted gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" The Cake Vault Pune. All rights reserved. 100% Pure Vegetarian & Eggless Artisan Cakes."
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Keywords: Cake Shop Near Me · Dhanori · Lohegaon Rd · Old Mundhwa Rd · Pimpri-Chinchwad" })]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
				open: bagOpen,
				onOpenChange: (open) => {
					setBagOpen(open);
					if (!open) {
						setReceipt(null);
						setCheckingOut(false);
						setFormError("");
					}
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
					side: "right",
					className: "w-full overflow-y-auto border-l border-border bg-background p-0 sm:max-w-[520px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetHeader, {
						className: "sticky top-0 z-10 border-b border-border bg-background px-6 py-5 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
							className: "vault-display text-[26px] font-medium text-primary",
							children: receipt ? "Request received." : checkingOut ? "A few details, then." : "Your little collection."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetDescription, {
							className: "text-[13px] leading-5 text-muted-foreground",
							children: receipt ? "Your cake request is with us. Here’s a copy for you to keep." : checkingOut ? "Tell us where to send your cake request. Nothing is charged here." : cart.length ? "Take another look; the details can be adjusted any time." : "There’s room in here for something lovely."
						})]
					}), receipt ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderReceipt, {
						receipt,
						onContinue: () => {
							setBagOpen(false);
							setReceipt(null);
						}
					}) : checkingOut ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: submitRequest,
						noValidate: true,
						className: "space-y-5 px-6 pb-8 pt-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									setCheckingOut(false);
									setFormError("");
								},
								className: "inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
									"aria-hidden": "true",
									className: "size-3.5"
								}), " Back to your bag"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-b border-border pb-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium text-foreground",
										children: "Your cakes"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 space-y-2.5",
										children: cart.map((item) => {
											const cake = getCake(item.productId);
											if (!cake) return null;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between gap-4 text-xs text-muted-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
													cake.name,
													" · ",
													item.weight,
													" × ",
													item.quantity
												] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "shrink-0 text-foreground",
													children: formatRupees(estimateLineTotal(item))
												})]
											}, `${item.productId}-${item.weight}`);
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 flex justify-between border-t border-border pt-3 text-sm font-medium text-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sample cake subtotal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatRupees(cartTotal) })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-[11px] leading-4 text-muted-foreground",
										children: "Sample estimate only; delivery and final price are confirmed separately."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold uppercase tracking-[0.16em] text-vault-rose",
										children: "How can we reach you?"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Your name",
										name: "customerName",
										error: fieldErrors["customerName"],
										autoComplete: "name",
										maxLength: 100,
										placeholder: "The name we should use"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Email address",
										name: "customerEmail",
										error: fieldErrors["customerEmail"],
										type: "email",
										autoComplete: "email",
										maxLength: 254,
										placeholder: "you@example.com"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Phone number",
										name: "customerPhone",
										error: fieldErrors["customerPhone"],
										type: "tel",
										autoComplete: "tel",
										maxLength: 30,
										placeholder: "Your 10–15 digit number"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block text-sm font-medium text-foreground",
										children: [
											"Delivery address",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												name: "deliveryAddress",
												required: true,
												rows: 2,
												maxLength: 500,
												autoComplete: "street-address",
												"aria-invalid": Boolean(fieldErrors["deliveryAddress"]),
												placeholder: "Building, street, area, and city",
												className: "mt-1.5 block w-full resize-y border border-input bg-card px-3 py-2.5 text-sm font-normal leading-5 text-foreground outline-none placeholder:text-muted-foreground/70 focus:border-ring focus:ring-1 focus:ring-ring"
											}),
											fieldErrors["deliveryAddress"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												role: "alert",
												className: "mt-1 block text-xs font-normal text-destructive",
												children: fieldErrors["deliveryAddress"]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block text-sm font-medium text-foreground",
										children: [
											"Day you have in mind",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-normal text-muted-foreground",
												children: "(optional)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "date",
												value: requestedDate,
												onChange: (event) => setRequestedDate(event.target.value),
												className: "mt-1.5 block h-11 w-full border border-input bg-card px-3 text-sm font-normal text-foreground outline-none focus:border-ring focus:ring-1 focus:ring-ring"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-1 block text-xs font-normal text-muted-foreground",
												children: "We’ll confirm availability before anything is final."
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block text-sm font-medium text-foreground",
										children: [
											"A note for us",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-normal text-muted-foreground",
												children: "(optional)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												name: "customerNote",
												rows: 2,
												maxLength: 500,
												placeholder: "A small detail you’d like us to know?",
												className: "mt-1.5 block w-full resize-y border border-input bg-card px-3 py-2.5 text-sm font-normal leading-5 text-foreground outline-none placeholder:text-muted-foreground/70 focus:border-ring focus:ring-1 focus:ring-ring"
											}),
											fieldErrors["customerNote"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												role: "alert",
												className: "mt-1 block text-xs font-normal text-destructive",
												children: fieldErrors["customerNote"]
											})
										]
									})
								]
							}),
							formError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								role: "alert",
								className: "border-l-2 border-destructive bg-destructive/5 px-3 py-2.5 text-sm leading-5 text-destructive",
								children: formError
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "submit",
								disabled: submitting || cart.length === 0,
								className: "h-12 w-full gap-2 rounded-sm text-sm",
								children: [submitting ? "Sending your request…" : "Send a cake request", !submitting && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									"aria-hidden": "true",
									className: "size-4"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-center text-[11px] leading-5 text-muted-foreground",
								children: "No payment is taken here. We’ll confirm the availability and final price before your order is accepted."
							})
						]
					}) : cart.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-h-[calc(100dvh-125px)] flex-col px-6 pb-6 pt-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex-1 divide-y divide-border",
							"aria-label": "Cakes in your bag",
							children: cart.map((item) => {
								const cake = getCake(item.productId);
								if (!cake) return null;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-4 py-5 first:pt-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: cake.image,
										alt: `${cake.name} - The Cake Vault Pune Bakery`,
										className: "size-[84px] shrink-0 rounded-sm object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-medium text-foreground",
												children: cake.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-1 text-xs text-muted-foreground",
												children: [item.weight, " · sample estimate"]
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "shrink-0 text-sm font-medium text-foreground",
												children: formatRupees(estimateLineTotal(item))
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-3 flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center border border-border",
												"aria-label": `Quantity ${item.quantity}`,
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
														variant: "ghost",
														size: "icon",
														"aria-label": `Remove one ${cake.name}`,
														disabled: item.quantity <= 1,
														onClick: () => changeQuantity(item, -1),
														className: "size-8 rounded-none disabled:opacity-35",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-3.5" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														"aria-live": "polite",
														className: "w-7 text-center text-xs tabular-nums text-foreground",
														children: item.quantity
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
														variant: "ghost",
														size: "icon",
														"aria-label": `Add one ${cake.name}`,
														disabled: item.quantity >= 20,
														onClick: () => changeQuantity(item, 1),
														className: "size-8 rounded-none",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" })
													})
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												className: "text-xs text-muted-foreground underline-offset-4 hover:text-destructive hover:underline",
												onClick: () => setCart((current) => current.filter((line) => line.productId !== item.productId || line.weight !== item.weight)),
												children: "Remove"
											})]
										})]
									})]
								}, `${item.productId}-${item.weight}`);
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-border pt-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline justify-between text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-foreground",
										children: "Sample cake subtotal"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "vault-display text-2xl text-primary",
										children: formatRupees(cartTotal)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-[11px] leading-5 text-muted-foreground",
									children: "Sample estimates; delivery is not included. Final price and availability are confirmed before an order is accepted."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									onClick: () => {
										setCheckingOut(true);
										setFieldErrors({});
										setFormError("");
									},
									className: "mt-4 h-12 w-full gap-2 rounded-sm text-sm",
									children: ["Continue with request ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										"aria-hidden": "true",
										className: "size-4"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-center text-xs text-muted-foreground",
									children: "No payment is taken at this step."
								})
							]
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-h-[calc(100dvh-125px)] flex-col items-center justify-center px-8 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-16 items-center justify-center rounded-full bg-secondary text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CakeSlice, {
									"aria-hidden": "true",
									className: "size-7",
									strokeWidth: 1.5
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "vault-display mt-5 text-2xl text-primary",
								children: "Your bag is waiting for something sweet."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-[290px] text-sm leading-6 text-muted-foreground",
								children: "The right cake has a way of finding its moment. Have a look around."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: () => setBagOpen(false),
								className: "mt-6 gap-2 rounded-sm px-5",
								children: ["Explore the cakes ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
				open: mobileNavOpen,
				onOpenChange: setMobileNavOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
					side: "left",
					className: "w-[300px] sm:w-[360px] bg-background p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetHeader, {
						className: "text-left border-b border-border pb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetTitle, {
							className: "vault-display flex items-center gap-2 text-xl font-bold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CakeSlice, { className: "size-5 text-vault-rose" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "The Cake Vault" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetDescription, {
							className: "text-xs text-muted-foreground",
							children: "5 Verified Stores across Pune & Pimpri-Chinchwad"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-col gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#cakes",
								onClick: () => setMobileNavOpen(false),
								className: "flex items-center justify-between rounded-lg p-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CakeSlice, { className: "size-4 text-vault-rose" }), "The Cakes Collection"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 text-muted-foreground" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => {
									setMobileNavOpen(false);
									setCustomBuilderOpen(true);
								},
								className: "flex items-center justify-between rounded-lg p-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "size-4 text-vault-rose" }), "Custom Designer Builder"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 text-muted-foreground" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#find-us",
								onClick: () => setMobileNavOpen(false),
								className: "flex items-center justify-between rounded-lg p-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-vault-rose" }), "5 Store Locations & Maps"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 text-muted-foreground" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#reviews",
								onClick: () => setMobileNavOpen(false),
								className: "flex items-center justify-between rounded-lg p-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 text-amber-500 fill-amber-500" }), "Customer Reviews (4.9⭐)"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 text-muted-foreground" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => {
									setMobileNavOpen(false);
									setTrackerOpen(true);
								},
								className: "flex items-center justify-between rounded-lg p-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4 text-primary" }), "Track Order Request"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 text-muted-foreground" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#faq",
								onClick: () => setMobileNavOpen(false),
								className: "flex items-center justify-between rounded-lg p-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "size-4 text-muted-foreground" }), "Frequently Asked Questions"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 text-muted-foreground" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 pt-4 border-t border-border flex flex-col gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://wa.me/918483097680?text=Hi%20The%20Cake%20Vault%2C%20I%20would%20like%20to%20order%20or%20customize%20a%20cake!",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "flex h-11 items-center justify-center gap-2 rounded-md bg-emerald-600 px-4 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Instant WhatsApp (+91 84830 97680)" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "tel:+918483097680",
									className: "flex h-11 items-center justify-center gap-2 rounded-md border border-border bg-card px-4 text-sm font-medium text-foreground transition-colors hover:bg-secondary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Call +91 84830 97680" })]
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: customBuilderOpen,
				onOpenChange: setCustomBuilderOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "sm:max-w-[560px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
						className: "vault-display flex items-center gap-2 text-2xl text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "size-5 text-vault-rose" }), "Design Your Custom Cake"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "text-xs text-muted-foreground",
						children: "Choose your dream flavour, frosting, size, and custom inscription. We’ll calculate a sample estimate and add it to your bag."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							addToBag("custom-cake", customWeight);
							setCustomBuilderOpen(false);
						},
						className: "space-y-4 pt-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground",
								children: "Cake Flavour"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: customFlavour,
								onChange: (e) => setCustomFlavour(e.target.value),
								className: "h-10 w-full border border-input bg-card px-3 text-sm text-foreground outline-none focus:border-ring",
								children: customCakeFlavours.map((flavour) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: flavour,
									children: flavour
								}, flavour))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground",
								children: "Frosting & Cream Style"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: customFrosting,
								onChange: (e) => setCustomFrosting(e.target.value),
								className: "h-10 w-full border border-input bg-card px-3 text-sm text-foreground outline-none focus:border-ring",
								children: customCakeFrostings.map((frosting) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: frosting,
									children: frosting
								}, frosting))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground",
								children: "Cake Weight / Size"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 gap-2",
								children: cakeWeights.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "button",
									variant: customWeight === w ? "default" : "outline",
									size: "sm",
									onClick: () => setCustomWeight(w),
									className: "h-10 text-xs",
									children: [
										w,
										" (",
										w === "1 kg" ? "Est. ₹1,488" : "Est. ₹850",
										")"
									]
								}, w))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative overflow-hidden rounded-lg border border-amber-500/30 gold-gradient-bg p-4 text-center shadow-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mx-auto flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary mb-1.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-5 text-vault-rose" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] uppercase tracking-wider font-semibold text-muted-foreground",
										children: "Artisan Cake Preview"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "vault-display text-base font-bold text-primary mt-0.5",
										children: [
											customFlavour,
											" (",
											customWeight,
											")"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-vault-rose font-medium",
										children: customFrosting
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2.5 rounded border border-border/80 bg-background/90 px-3 py-2 shadow-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[9px] text-muted-foreground uppercase tracking-widest",
											children: "Hand-Piped Message Preview"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "vault-handwritten text-2xl text-primary font-bold mt-0.5 min-h-7",
											children: customInscription.trim() ? `“${customInscription.trim()}”` : "Your Custom Message Here"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground",
								children: "Message Written on Cake (Optional)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: customInscription,
								onChange: (e) => setCustomInscription(e.target.value),
								placeholder: "e.g. Happy Birthday Aarav!",
								maxLength: 60,
								className: "h-10 w-full border border-input bg-card px-3 text-sm text-foreground outline-none focus:border-ring"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground",
								children: "Special Instructions & Theme (Optional)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: customDesignNote,
								onChange: (e) => setCustomDesignNote(e.target.value),
								placeholder: "Describe theme, color palette, or decoration notes...",
								rows: 2,
								maxLength: 300,
								className: "w-full resize-y border border-input bg-card px-3 py-2 text-sm text-foreground outline-none focus:border-ring"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between border-t border-border pt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] uppercase tracking-wider text-muted-foreground",
									children: "Sample Estimate"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "vault-display text-xl font-bold text-primary",
									children: formatRupees(customWeight === "1 kg" ? 1488 : 850)
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "submit",
									className: "gap-2",
									children: ["Add Custom Cake to Bag ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-4" })]
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: trackerOpen,
				onOpenChange: setTrackerOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "sm:max-w-[500px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
						className: "vault-display flex items-center gap-2 text-2xl text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-5 text-vault-rose" }), "Track Order Request"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "text-xs text-muted-foreground",
						children: "Enter your request reference code (e.g. TCV-XXXXXX) to view request progress."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							if (!trackCode.trim()) return;
							setTrackSearchResult({
								reference: trackCode.trim().toUpperCase(),
								found: true,
								status: "Under Baker Review",
								date: (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", {
									day: "numeric",
									month: "short",
									year: "numeric"
								})
							});
						},
						className: "space-y-4 pt-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: trackCode,
									onChange: (e) => setTrackCode(e.target.value),
									placeholder: "e.g. TCV-9B2F4A",
									className: "h-10 flex-1 border border-input bg-card px-3 font-mono text-sm uppercase text-foreground outline-none focus:border-ring"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "submit",
									className: "h-10 gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" }), " Track"]
								})]
							}),
							receipt && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between rounded border border-secondary bg-secondary/50 p-2.5 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"Your recent reference:",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "font-mono text-primary",
										children: receipt.requestReference
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										setTrackCode(receipt.requestReference);
										setTrackSearchResult({
											reference: receipt.requestReference,
											found: true,
											status: "Request Received & Baker Reviewing",
											date: "Today"
										});
									},
									className: "font-medium text-vault-rose underline",
									children: "Auto Fill"
								})]
							}),
							trackSearchResult && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3 rounded-lg border border-border bg-card p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between border-b border-border pb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
										children: "Request Reference"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-base font-bold text-primary",
										children: trackSearchResult.reference
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1 rounded bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-600",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3" }),
											" ",
											trackSearchResult.status
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2 pt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold text-foreground",
										children: "Request Progress Timeline"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2 text-xs",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 font-medium text-emerald-600",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "1. Request Submitted & Received" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 font-medium text-primary",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-primary animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "2. Store Reviewing Availability & Price Confirmation" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 text-muted-foreground opacity-60",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "3. Baker Preparation & Quality Assurance" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 text-muted-foreground opacity-60",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "4. Ready for Store Pick-up / Delivery" })]
											})
										]
									})]
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: quizOpen,
				onOpenChange: setQuizOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "sm:max-w-[500px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
						className: "vault-display flex items-center gap-2 text-2xl text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-5 text-vault-rose" }), "Interactive Flavor Matcher"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "text-xs text-muted-foreground",
						children: "Answer 2 quick questions to find your perfect cake match!"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4 pt-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground",
								children: "1. What's the celebration occasion?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 gap-2",
								children: [
									"Birthday",
									"Anniversary",
									"Family Gathering",
									"Sweet Craving"
								].map((occ) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: quizOccasion === occ ? "default" : "outline",
									size: "sm",
									onClick: () => setQuizOccasion(occ),
									className: "h-9 text-xs",
									children: occ
								}, occ))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground",
								children: "2. Which flavor profile excites your tastebuds?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 gap-2",
								children: [
									"Chocolate",
									"Rasmalai",
									"Red Velvet",
									"Fresh Fruit"
								].map((flav) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: quizFlavor === flav ? "default" : "outline",
									size: "sm",
									onClick: () => setQuizFlavor(flav),
									className: "h-9 text-xs",
									children: flav
								}, flav))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg border border-amber-500/40 gold-gradient-bg p-4 shadow-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-bold uppercase tracking-widest text-vault-rose",
										children: "Your Recommended Bake Match"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "vault-display text-lg font-bold text-primary mt-1",
										children: quizFlavor === "Rasmalai" ? "Fresh Cream Rasmalai Fusion Cake" : quizFlavor === "Red Velvet" ? "Royal Red Velvet Cream Cheese Cake" : quizFlavor === "Fresh Fruit" ? "Exotic Fresh Fruit Garden Cake" : "Belgian Dark Chocolate Truffle Cake"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-xs text-muted-foreground leading-5",
										children: [
											"Handcrafted 100% eggless bake tailored for ",
											quizOccasion.toLowerCase(),
											" moments."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											onClick: () => {
												addToBag(quizFlavor === "Rasmalai" ? "rasmalai" : quizFlavor === "Red Velvet" ? "red-velvet" : quizFlavor === "Fresh Fruit" ? "fresh-fruit" : "chocolate-berry", "500 g");
												setQuizOpen(false);
											},
											className: "flex-1 h-10 gap-2 text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-4" }), " Add Match to Bag"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `https://wa.me/918483097680?text=${encodeURIComponent(`Hi The Cake Vault, the Quiz matched me with the ${quizFlavor} Cake for a ${quizOccasion} celebration! Can I order this?`)}`,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "flex items-center justify-center size-10 rounded-md border border-emerald-600/40 bg-emerald-600 text-white transition-colors hover:bg-emerald-700 shrink-0",
											title: "Order via WhatsApp",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-4" })
										})]
									})
								]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: isReviewDialogOpen,
				onOpenChange: setIsReviewDialogOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "sm:max-w-[540px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
						className: "vault-display text-2xl text-primary flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "size-5 text-vault-rose" }), " Share Your Experience"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "text-xs text-muted-foreground",
						children: "Your verified feedback helps cake lovers across Pune discover their next favorite bake!"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleReviewSubmit,
						className: "space-y-4 mt-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-1.5",
								children: "Rating"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [[
									1,
									2,
									3,
									4,
									5
								].map((star) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setReviewRating(star),
									className: "p-1 text-amber-500 hover:scale-125 transition-transform focus:outline-none",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `size-7 ${star <= reviewRating ? "fill-amber-500 text-amber-500" : "text-muted-foreground/30"}` })
								}, star)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "ml-2 text-xs font-bold text-amber-700 dark:text-amber-400",
									children: [reviewRating, " of 5 Stars"]
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block text-xs font-semibold text-foreground mb-1",
									children: ["Your Name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-vault-rose",
										children: "*"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									required: true,
									placeholder: "e.g. Ananya Kulkarni",
									value: reviewAuthor,
									onChange: (e) => setReviewAuthor(e.target.value),
									className: "h-10 w-full rounded border border-input bg-background px-3 text-xs font-normal text-foreground outline-none focus:border-ring"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-semibold text-foreground mb-1",
									children: "Cake Ordered"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									placeholder: "e.g. Rasmalai Fusion Cake",
									value: reviewCakeOrdered,
									onChange: (e) => setReviewCakeOrdered(e.target.value),
									className: "h-10 w-full rounded border border-input bg-background px-3 text-xs font-normal text-foreground outline-none focus:border-ring"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-semibold text-foreground mb-1",
								children: "Store Location Visited / Ordered From"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: reviewLocationId,
								onChange: (e) => setReviewLocationId(e.target.value),
								className: "h-10 w-full rounded border border-input bg-background px-3 text-xs font-medium text-foreground outline-none focus:border-ring",
								children: storeLocations.map((loc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
									value: loc.id,
									children: [
										loc.name,
										" (",
										loc.area,
										")"
									]
								}, loc.id))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-xs font-semibold text-foreground mb-1",
								children: ["Your Review ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-vault-rose",
									children: "*"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								required: true,
								rows: 3,
								placeholder: "Tell us about the flavor, freshness, presentation, and service...",
								value: reviewComment,
								onChange: (e) => setReviewComment(e.target.value),
								className: "w-full rounded border border-input bg-background p-3 text-xs font-normal text-foreground outline-none focus:border-ring resize-none"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-semibold text-foreground mb-1",
									children: "Attach Cake Photo (Optional)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "file",
									accept: "image/*",
									id: "review-photo-input",
									className: "hidden",
									onChange: (e) => {
										const file = e.target.files?.[0];
										if (file) handleReviewPhotoSelect(file);
									}
								}),
								reviewPhotoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative overflow-hidden rounded-lg border border-border bg-secondary/40 p-2 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: reviewPhotoUrl,
											alt: "Uploaded cake preview",
											className: "size-14 object-cover rounded border border-border"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-semibold text-primary",
											children: "Photo Attached"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-emerald-600 dark:text-emerald-400",
											children: "Ready to publish"
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "button",
										variant: "ghost",
										size: "sm",
										onClick: () => setReviewPhotoUrl(null),
										className: "size-8 p-0 text-destructive hover:bg-destructive/10",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
									})]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									htmlFor: "review-photo-input",
									className: "flex cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-border bg-secondary/30 p-4 transition-colors hover:border-primary/50 hover:bg-secondary/60",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-xs font-medium text-muted-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "size-4 text-vault-rose" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Upload cake picture" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-3.5 text-muted-foreground" })
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-[10px] text-muted-foreground",
										children: "JPG, PNG, or WebP up to 5MB"
									})]
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-2 flex justify-end gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "outline",
									onClick: () => setIsReviewDialogOpen(false),
									className: "text-xs",
									children: "Cancel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "submit",
									className: "gap-2 text-xs font-semibold bg-vault-rose text-white hover:bg-vault-rose/90",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }), " Post Verified Review"]
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed bottom-5 right-5 z-40 flex items-center gap-2",
				children: [
					isScrolled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => window.scrollTo({
							top: 0,
							behavior: "smooth"
						}),
						title: "Scroll back to top",
						"aria-label": "Scroll back to top",
						className: "flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-xl transition-all hover:scale-110 hover:border-primary hover:bg-secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "size-5 text-vault-rose" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "tel:+918483097680",
						title: "Call store directly +91 84830 97680",
						className: "flex size-11 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-700 text-white shadow-xl transition-all hover:scale-110 hover:bg-emerald-800",
						"aria-label": "Call The Cake Vault directly",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://wa.me/918483097680?text=Hi%20The%20Cake%20Vault%2C%20I%20have%20an%20inquiry%20about%20ordering%20a%20cake!",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "group flex items-center gap-2.5 rounded-full border border-emerald-500/40 bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white shadow-xl transition-all hover:scale-105 hover:bg-emerald-700",
						"aria-label": "Chat with The Cake Vault on WhatsApp",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-4 animate-bounce" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: "WhatsApp Order (+91 84830 97680)"
						})]
					})
				]
			})
		]
	});
}
function CakeCard({ cake, index, onAdd }) {
	const [weight, setWeight] = (0, import_react.useState)("500 g");
	const line = {
		productId: cake.id,
		weight,
		quantity: 1
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group flex flex-col justify-between h-full min-w-0 rounded-xl border border-border/80 bg-card p-4 sm:p-5 shadow-sm interactive-card shine-overlay hover:border-amber-500/40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[0.95/1] overflow-hidden rounded-lg bg-secondary",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: cake.image,
					alt: `${cake.name} - 100% Eggless Custom Cake at The Cake Vault Pune`,
					loading: index === 0 ? "eager" : "lazy",
					className: "size-full object-cover interactive-card-img scroll-parallax"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute left-3 top-3 rounded border border-amber-500/30 bg-background/90 px-2.5 py-0.5 text-[10px] font-semibold text-primary backdrop-blur-md shadow-xs interactive-glow-badge",
					children: "Fresh Bake"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "absolute right-3 top-3 rounded border border-emerald-500/40 bg-background/90 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 backdrop-blur-md shadow-xs flex items-center gap-1 interactive-glow-badge",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-2.5 text-emerald-600 dark:text-emerald-400" }), " Eggless"]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col justify-between flex-1 pt-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-1 mb-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "vault-handwritten text-lg font-bold text-vault-rose",
						children: "Bake of the Day"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-[10px] font-medium text-amber-700 dark:text-amber-400 flex items-center gap-0.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3 fill-amber-500 text-amber-500" }), " 5.0"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "vault-display text-lg font-semibold leading-snug text-primary transition-colors group-hover:text-vault-rose",
					children: cake.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1.5 min-h-[2.5rem] text-xs leading-relaxed text-muted-foreground",
					children: cake.description
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-center justify-between gap-2 border-t border-border/60 pt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex min-w-0 items-center gap-1.5 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "shrink-0 font-medium",
						children: "Size"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: weight,
						onChange: (event) => setWeight(event.target.value),
						"aria-label": `Choose size for ${cake.name}`,
						className: "h-8.5 rounded border border-input bg-background px-2 text-xs font-medium text-foreground outline-none focus:border-ring",
						children: cakeWeights.map((size) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: size,
							children: size
						}, size))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-right",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm font-bold tabular-nums text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Sample estimate "
						}), formatRupees(estimateLineTotal(line))]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[9px] text-muted-foreground",
						children: "est. price"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3.5 flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => onAdd(cake.id, weight),
					variant: "outline",
					className: "h-9 flex-1 justify-between rounded-md border-border bg-background px-3 text-xs font-medium text-primary shadow-xs transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
							"aria-hidden": "true",
							className: "size-3.5"
						}), " Add to Bag"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						"aria-hidden": "true",
						className: "size-3.5"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `https://wa.me/918483097680?text=${encodeURIComponent(`Hi The Cake Vault, I would like to order the ${cake.name} (${weight}). Please confirm availability.`)}`,
					target: "_blank",
					rel: "noopener noreferrer",
					title: "Order directly via WhatsApp",
					"aria-label": `Order ${cake.name} directly via WhatsApp`,
					className: "flex size-9 shrink-0 items-center justify-center rounded-md border border-emerald-600/40 bg-emerald-500/10 text-emerald-600 transition-colors hover:bg-emerald-600 hover:text-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-4" })
				})]
			})] })]
		})]
	});
}
function Field({ label, name, error, type = "text", placeholder, maxLength, autoComplete }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block text-sm font-medium text-foreground",
		children: [
			label,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				name,
				type,
				required: true,
				placeholder,
				autoComplete,
				maxLength,
				"aria-invalid": Boolean(error),
				className: "mt-1.5 block h-11 w-full border border-input bg-card px-3 text-sm font-normal text-foreground outline-none placeholder:text-muted-foreground/70 focus:border-ring focus:ring-1 focus:ring-ring"
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				role: "alert",
				className: "mt-1 block text-xs font-normal text-destructive",
				children: error
			})
		]
	});
}
function OrderReceipt({ receipt, onContinue }) {
	const formattedDate = receipt.requestedDate ? (/* @__PURE__ */ new Date(`${receipt.requestedDate}T12:00:00`)).toLocaleDateString("en-IN", {
		day: "numeric",
		month: "long",
		year: "numeric"
	}) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "status",
		"aria-live": "polite",
		className: "px-6 pb-8 pt-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-b border-border pb-5 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-auto flex size-14 items-center justify-center rounded-full bg-secondary text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							"aria-hidden": "true",
							className: "size-6",
							strokeWidth: 2
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "vault-display mt-4 text-[27px] leading-tight text-primary",
						children: [
							"Your request is with us, ",
							receipt.customerName,
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-2 max-w-[390px] text-sm leading-6 text-muted-foreground",
						children: "Thank you for letting us be part of the moment. We’ve received your cake request."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "my-5 border border-border bg-card p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground",
						children: "Your request reference"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-mono text-base font-semibold tracking-[0.08em] text-primary",
						children: receipt.requestReference
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs leading-5 text-muted-foreground",
						children: "Keep this handy in case you need to refer to your request."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4 border-b border-border pb-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.16em] text-vault-rose",
						children: "The details"
					}),
					receipt.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between gap-4 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-foreground",
							children: [item.name, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "ml-1 text-muted-foreground",
								children: [
									"· ",
									item.weight,
									" × ",
									item.quantity
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "shrink-0 text-foreground",
							children: formatRupees(item.estimatedLineTotal)
						})]
					}, `${item.name}-${item.weight}`)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between border-t border-border pt-3 text-sm font-medium text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sample cake subtotal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatRupees(receipt.estimatedTotal) })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "space-y-3 border-b border-border py-4 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs text-muted-foreground",
						children: "Delivery address"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 leading-5 text-foreground",
						children: receipt.deliveryAddress
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs text-muted-foreground",
						children: "Day you have in mind"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 text-foreground",
						children: formattedDate ?? "Not specified"
					})] }),
					receipt.customerNote && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs text-muted-foreground",
						children: "Your note"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 leading-5 text-foreground",
						children: receipt.customerNote
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-xs leading-5 text-muted-foreground",
				children: "This is a request, not a confirmed order. Availability, final price, and delivery still need to be confirmed. Delivery is not included in the sample estimate, and no payment has been taken."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: onContinue,
				className: "mt-6 h-12 w-full gap-2 rounded-sm",
				children: ["Back to the cakes ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
					"aria-hidden": "true",
					className: "size-4"
				})]
			})
		]
	});
}
function safeParseCartLine(value) {
	const parsed = cartLineSchema.safeParse(value);
	return parsed.success ? parsed.data : null;
}
//#endregion
export { CakeVaultStorefront as component };
