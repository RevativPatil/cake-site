import { useEffect, useMemo, useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  BadgeCheck,
  CakeSlice,
  Camera,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  ExternalLink,
  Eye,
  HelpCircle,
  MapPin,
  Menu,
  MessageSquare,
  Minus,
  Moon,
  Phone,
  Plus,
  Quote,
  Search,
  Share2,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Sun,
  Truck,
  Upload,
  Wand2,
  X,
  Zap,
} from "lucide-react";
import { toast } from "sonner";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import storefrontImage from "@/assets/storefront-google.png";
import { submitCakeOrderRequest } from "@/lib/cake-orders.functions";
import { bakerySchema, faqSchema, itemListSchema } from "@/lib/seo-schemas";
import {
  cakeCatalog,
  cakeOrderRequestSchema,
  cakeWeights,
  cartLineSchema,
  customCakeFlavours,
  customCakeFrostings,
  customerReviews,
  estimateCartTotal,
  estimateLineTotal,
  formatRupees,
  getCake,
  STORE_ADDRESS,
  storeLocations,
  type CakeWeight,
  type CartLine,
  type CustomerReview,
  type StoreLocation,
} from "@/lib/cake-store";

const CART_STORAGE_KEY = "the-cake-vault-cart";
const occasions = ["All cakes", "Birthday", "Anniversary", "Wedding", "Just because"] as const;
type Occasion = (typeof occasions)[number];

type Receipt = {
  requestReference: string;
  customerName: string;
  deliveryAddress: string;
  requestedDate: string | null;
  customerNote: string;
  estimatedTotal: number;
  items: Array<{
    name: string;
    weight: CakeWeight;
    quantity: number;
    estimatedLineTotal: number;
  }>;
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "The Cake Vault | #1 Cake Shop Near Me in Dhanori, Mundhwa & Pune | 100% Eggless Custom Cakes",
      },
      {
        name: "description",
        content:
          "Looking for the best cake shop near you in Pune? The Cake Vault offers 100% eggless gourmet cakes, custom birthday designer cakes & express same-day delivery across Dhanori, Lohegaon Rd, Old Mundhwa Rd, & Pimpri-Chinchwad. Call/WhatsApp +91 84830 97680!",
      },
      {
        name: "keywords",
        content:
          "cake shop near me, best cake shop in Pune, cake shop Dhanori, cake shop Lohegaon Road, cake shop Old Mundhwa Road, cake shop Pimpri Chinchwad, eggless cake shop near me, custom birthday cake Pune, same day cake delivery Pune, Rasmalai cake Pune, pastry shop Pune",
      },
      { name: "geo.position", content: "18.52043;73.85674" },
      { name: "geo.placename", content: "Pune, Maharashtra, India" },
      { name: "geo.region", content: "IN-MH" },
      {
        property: "og:title",
        content: "The Cake Vault | #1 Cake Shop Near Me in Pune | 100% Eggless Custom Cakes",
      },
      {
        property: "og:description",
        content:
          "Order 100% eggless artisan cakes with same-day express delivery across 5 official stores in Pune & Pimpri-Chinchwad. Call +91 84830 97680!",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CakeVaultStorefront,
});

function CakeVaultStorefront() {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [cartReady, setCartReady] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);
  const [checkingOut, setCheckingOut] = useState(false);
  const [occasion, setOccasion] = useState<Occasion>("All cakes");
  const [search, setSearch] = useState("");
  const [receipt, setReceipt] = useState<Receipt | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [requestedDate, setRequestedDate] = useState("");
  const [customBuilderOpen, setCustomBuilderOpen] = useState(false);
  const [trackerOpen, setTrackerOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);
  const [quizOccasion, setQuizOccasion] = useState("Birthday");
  const [quizFlavor, setQuizFlavor] = useState("Chocolate");
  const [guestCount, setGuestCount] = useState<number>(6);
  const [trackCode, setTrackCode] = useState("");
  const [trackSearchResult, setTrackSearchResult] = useState<{
    reference: string;
    found: boolean;
    status: string;
    date?: string;
  } | null>(null);

  // Custom Builder State
  const [customFlavour, setCustomFlavour] = useState<string>(customCakeFlavours[0]!);
  const [customFrosting, setCustomFrosting] = useState<string>(customCakeFrostings[0]!);
  const [customWeight, setCustomWeight] = useState<CakeWeight>("500 g");
  const [customInscription, setCustomInscription] = useState("");
  const [customDesignNote, setCustomDesignNote] = useState("");
  const [quickViewCake, setQuickViewCake] = useState<(typeof cakeCatalog)[number] | null>(null);

  // Reviews State & Modal State
  const [reviewsList, setReviewsList] = useState<CustomerReview[]>(customerReviews);
  const [isReviewDialogOpen, setIsReviewDialogOpen] = useState(false);
  const [reviewAuthor, setReviewAuthor] = useState("");
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewCakeOrdered, setReviewCakeOrdered] = useState("");
  const [reviewLocationId, setReviewLocationId] = useState(storeLocations[0]?.id || "old-mundhwa");
  const [reviewComment, setReviewComment] = useState("");
  const [reviewPhotoUrl, setReviewPhotoUrl] = useState<string | null>(null);

  // Reference Site Interactive Stage State
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  // Scroll FX State
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const timeGreeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      return "Good morning! Fresh morning sponge batches are coming out of our ovens right now 🥐🎂";
    }
    if (hour >= 12 && hour < 17) {
      return "Good afternoon! Planning a tea-time treat or evening birthday party? 🍰";
    }
    return "Good evening! Late-night cake cravings or tomorrow's surprise? We're open till 10 PM 🌙";
  }, []);

  const defaultLocation: StoreLocation = storeLocations[0]!;
  const [activeLocationId, setActiveLocationId] = useState<string>(defaultLocation.id);

  const selectedLocation: StoreLocation = useMemo(
    () => storeLocations.find((loc) => loc.id === activeLocationId) ?? defaultLocation,
    [activeLocationId, defaultLocation],
  );

  const handleReviewPhotoSelect = (file: File) => {
    if (!file.type.startsWith("image/")) {
      toast.error("Please upload a valid image file (JPG, PNG, WebP)");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image file size must be less than 5MB");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setReviewPhotoUrl(result);
      toast.success("Photo attached!");
    };
    reader.readAsDataURL(file);
  };

  const handleReviewSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!reviewAuthor.trim() || !reviewComment.trim()) {
      toast.error("Please enter your name and review comment");
      return;
    }

    const chosenLoc = storeLocations.find((l) => l.id === reviewLocationId) || storeLocations[0]!;
    const newReview: CustomerReview = {
      id: `rev-${Date.now()}`,
      author: reviewAuthor.trim(),
      locationId: chosenLoc.id,
      locationName: chosenLoc.name,
      rating: reviewRating,
      date: "Just now",
      comment: reviewComment.trim(),
      cakeOrdered: reviewCakeOrdered.trim() || "Artisan Cake",
      verified: true,
      ...(reviewPhotoUrl ? { photoUrl: reviewPhotoUrl } : {}),
    };

    setReviewsList((prev) => [newReview, ...prev]);
    setIsReviewDialogOpen(false);

    // Reset Form
    setReviewAuthor("");
    setReviewRating(5);
    setReviewCakeOrdered("");
    setReviewComment("");
    setReviewPhotoUrl(null);

    toast.success("Thank you! Your verified review & photo have been published.");
  };

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        const parsed: unknown = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          const validItems = parsed
            .map((item) => {
              const result = safeParseCartLine(item);
              return result;
            })
            .filter(
              (item): item is CartLine => item !== null && getCake(item.productId) !== undefined,
            );
          setCart(validItems);
        }
      }
    } catch {
      window.localStorage.removeItem(CART_STORAGE_KEY);
    }
    setCartReady(true);
  }, []);

  useEffect(() => {
    if (!cartReady) return;
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // The in-memory bag remains usable when browser storage is unavailable.
    }
  }, [cart, cartReady]);

  const visibleCakes = useMemo(() => {
    const query = search.trim().toLocaleLowerCase();
    return cakeCatalog.filter((cake) => {
      const matchesOccasion =
        occasion === "All cakes" || (cake.occasions as readonly string[]).includes(occasion);
      const matchesSearch =
        !query ||
        `${cake.name} ${cake.description} ${cake.occasions.join(" ")}`
          .toLocaleLowerCase()
          .includes(query);
      return matchesOccasion && matchesSearch;
    });
  }, [occasion, search]);

  const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = estimateCartTotal(cart);

  const [isDark, setIsDark] = useState(false);

  function toggleTheme() {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return next;
    });
  }

  function addToBag(productId: string, weight: CakeWeight) {
    const cake = getCake(productId);
    setCart((current) => {
      const existing = current.find(
        (item) => item.productId === productId && item.weight === weight,
      );
      if (existing) {
        return current.map((item) =>
          item === existing ? { ...item, quantity: Math.min(20, item.quantity + 1) } : item,
        );
      }
      return [...current, { productId, weight, quantity: 1 }];
    });
    setReceipt(null);
    setCheckingOut(false);
    setBagOpen(true);
    toast.success(`Added ${cake?.name ?? "Cake"} (${weight}) to your bag! 🍰`, {
      description: "You can review your bag or send a request anytime.",
    });
  }

  function changeQuantity(line: CartLine, amount: number) {
    setCart((current) =>
      current
        .map((item) =>
          item.productId === line.productId && item.weight === line.weight
            ? { ...item, quantity: item.quantity + amount }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  async function submitRequest(event: FormEvent<HTMLFormElement>) {
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
      items: cart,
    });

    if (!parsed.success) {
      const issues = parsed.error.flatten().fieldErrors;
      setFieldErrors(
        Object.fromEntries(
          Object.entries(issues).flatMap(([field, messages]) =>
            messages?.[0] ? [[field, messages[0]]] : [],
          ),
        ),
      );
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
      setFormError(
        error instanceof Error
          ? error.message
          : "We couldn't send your request just now. Please try again; your bag is still here.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  function jumpToCakes(nextOccasion?: Occasion) {
    if (nextOccasion) setOccasion(nextOccasion);
    document.getElementById("cakes")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bakerySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <div className="bg-primary px-4 py-1.5 text-center text-xs font-medium text-primary-foreground shadow-xs">
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-2 px-2 sm:px-4">
          <span className="flex items-center gap-1.5 truncate">
            <Zap className="size-3.5 fill-amber-400 text-amber-400 shrink-0" />
            <span className="truncate">
              ⚡ 100% Eggless Gourmet Cakes &amp; Express Same-Day Delivery across Pune
            </span>
          </span>
          <a
            href="https://wa.me/918483097680?text=Hi%20The%20Cake%20Vault%2C%20I%20would%20like%20to%20order%20or%20customize%20a%20cake!"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded bg-background/20 px-2.5 py-0.5 text-[11px] font-semibold transition-colors hover:bg-background/30"
          >
            <MessageSquare className="size-3" />
            <span>WhatsApp (+91 84830 97680)</span>
          </a>
        </div>
      </div>

      {/* Top Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-vault-rose via-amber-500 to-vault-gold z-50 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <header
        className={`sticky top-0 z-40 border-b border-border/70 scroll-header-sticky ${isScrolled ? "is-scrolled" : "bg-background/95 backdrop-blur"}`}
      >
        <div className="mx-auto flex h-[4.5rem] w-full max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 sm:gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setMobileNavOpen(true)}
              className="h-10 size-10 border-border bg-card text-foreground hover:bg-secondary md:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="size-5" />
            </Button>

            <a
              href="#home"
              aria-label="The Cake Vault home"
              className="group inline-flex items-center gap-2.5"
            >
              <span className="flex size-9 items-center justify-center rounded-full border border-border text-primary transition-colors group-hover:bg-secondary">
                <CakeSlice aria-hidden="true" className="size-[18px]" strokeWidth={1.6} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="vault-display text-[16px] sm:text-[17px] font-semibold">
                  The Cake Vault
                </span>
                <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.22em] text-muted-foreground truncate max-w-[120px] sm:max-w-none">
                  {selectedLocation.area}
                </span>
              </span>
            </a>

            <a
              href="#find-us"
              className="hidden lg:inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/80 px-3 py-1 text-xs text-foreground transition-colors hover:border-primary"
            >
              <MapPin className="size-3 text-vault-rose" />
              <span>{selectedLocation.name}</span>
              <ChevronDown className="size-3 text-muted-foreground" />
            </a>
          </div>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 text-[13px] font-medium text-muted-foreground md:flex"
          >
            <a className="transition-colors hover:text-foreground" href="#cakes">
              The cakes
            </a>
            <button
              onClick={() => setCustomBuilderOpen(true)}
              className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
            >
              <Wand2 className="size-3.5 text-vault-rose" />
              <span>Custom cake</span>
            </button>
            <a className="transition-colors hover:text-foreground" href="#reviews">
              Reviews
            </a>
            <a className="transition-colors hover:text-foreground" href="#find-us">
              Find us
            </a>
            <a className="transition-colors hover:text-foreground" href="#faq">
              FAQ
            </a>
            <button
              onClick={() => setTrackerOpen(true)}
              className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
            >
              <Clock className="size-3.5 text-primary" />
              <span>Track request</span>
            </button>
          </nav>

          <div className="flex items-center gap-2.5">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="h-10 size-10 border-border bg-card text-foreground hover:bg-secondary"
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              title={isDark ? "Switch to light theme" : "Switch to dark theme"}
            >
              {isDark ? (
                <Sun className="size-4 text-amber-500" />
              ) : (
                <Moon className="size-4 text-slate-700" />
              )}
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsReviewDialogOpen(true)}
              className="hidden xl:inline-flex h-10 gap-1.5 border-vault-rose/50 bg-vault-rose/10 px-3.5 text-xs font-semibold text-vault-rose hover:bg-vault-rose hover:text-white transition-all shadow-xs"
            >
              <Star className="size-3.5 fill-vault-rose hover:fill-white" />
              <span>Write a Review</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setQuizOpen(true)}
              className="hidden lg:inline-flex h-10 gap-1.5 border-amber-500/30 gold-gradient-bg px-3 text-xs font-semibold text-primary hover:border-amber-500"
            >
              <Sparkles className="size-3.5 text-vault-rose" />
              <span>Cake Matcher</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setCustomBuilderOpen(true)}
              className="hidden sm:inline-flex h-10 gap-1.5 border-border bg-card px-3 text-xs font-medium hover:bg-secondary"
            >
              <Wand2 className="size-3.5 text-vault-rose" />
              <span>Design Cake</span>
            </Button>

            <Button
              variant="outline"
              className="h-10 gap-2 border-border bg-card px-3.5 text-foreground hover:bg-secondary"
              aria-label={`Open your bag${cartQuantity ? `, ${cartQuantity} ${cartQuantity === 1 ? "cake" : "cakes"}` : ""}`}
              onClick={() => {
                setBagOpen(true);
                setReceipt(null);
                setCheckingOut(false);
              }}
            >
              <ShoppingBag aria-hidden="true" className="size-4" strokeWidth={1.8} />
              <span>Your bag</span>
              <span className="flex size-5 items-center justify-center rounded-full bg-secondary text-[11px] text-secondary-foreground">
                {cartQuantity}
              </span>
            </Button>
          </div>
        </div>
      </header>

      <section
        id="home"
        aria-labelledby="hero-heading"
        className="relative mx-auto grid w-full max-w-[1600px] items-center gap-8 px-4 pb-12 pt-8 sm:px-6 md:grid-cols-[0.88fr_1.12fr] md:gap-10 md:py-14 lg:gap-14 lg:px-8 vault-hero-glow"
      >
        <div className="relative z-10 order-2 pb-3 md:order-1 md:pb-0">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-vault-rose/30 bg-vault-rose/10 px-4 py-1.5 text-xs font-semibold text-vault-rose shadow-xs">
            <Sparkles
              aria-hidden="true"
              className="size-3.5 animate-pulse text-vault-rose"
              strokeWidth={1.8}
            />
            <span className="vault-handwritten text-lg font-bold text-vault-rose">
              Made with love, not shortcuts ✨
            </span>
          </div>

          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            5 Branches Across Pune &amp; Pimpri-Chinchwad
          </p>

          <h1
            id="hero-heading"
            className="vault-display vault-editorial max-w-[640px] text-[clamp(2.75rem,4.8vw,4.75rem)] leading-[1.05] text-primary"
          >
            Every cake tells{" "}
            <span className="vault-handwritten font-semibold text-vault-rose text-[1.12em] underline decoration-vault-rose/30 underline-offset-8">
              your story.
            </span>
          </h1>

          <p className="mt-5 max-w-[500px] text-[15px] leading-7 text-muted-foreground sm:text-base">
            We started The Cake Vault because we believed Pune deserved something better — cakes
            that are 100% eggless, baked fresh every morning, and designed around the person you're
            celebrating. No frozen sponges. No generic designs. Just real care in every layer.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
              <CheckCircle2 className="size-3.5 text-emerald-600 dark:text-emerald-400" /> 100%
              Eggless Bakes
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[11px] font-semibold text-amber-700 dark:text-amber-400">
              <Truck className="size-3.5 text-amber-500" /> Express Same-Day Delivery
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              onClick={() => jumpToCakes()}
              className="h-12 gap-3 rounded-md px-7 text-sm font-semibold shadow-md transition-all hover:scale-105 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Explore Cake Menu <ArrowRight aria-hidden="true" className="size-4" />
            </Button>
            <Button
              variant="outline"
              onClick={() => setCustomBuilderOpen(true)}
              className="h-12 gap-2 rounded-md px-5 text-sm font-semibold border-vault-rose/40 text-vault-rose hover:bg-vault-rose/10"
            >
              <Wand2 className="size-4" /> Custom Designer
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-3 text-xs text-muted-foreground">
            <span aria-hidden="true" className="flex -space-x-1.5">
              <span className="flex size-7 items-center justify-center rounded-full border-2 border-background bg-secondary text-secondary-foreground shadow-xs">
                <Star className="size-3.5 fill-amber-500 text-amber-500" />
              </span>
              <span className="flex size-7 items-center justify-center rounded-full border-2 border-background bg-accent text-accent-foreground shadow-xs">
                <Sparkles className="size-3.5 text-amber-500" />
              </span>
            </span>
            <span className="font-medium">
              Over 332+ 5-Star Verified Google Reviews across Pune
            </span>
          </div>
        </div>

        <div className="relative order-1 mx-auto aspect-[1.25/1] w-full max-w-[680px] overflow-hidden rounded-2xl border border-border/80 bg-card shadow-xl interactive-card shine-overlay md:order-2 md:aspect-[0.98/1] lg:aspect-[1.08/1]">
          <img
            src={cakeCatalog[0].image}
            alt="The Cake Vault Pune - Signature handcrafted chocolate celebration cake with fresh cream"
            className="size-full object-cover object-[center_58%] interactive-card-img"
            fetchPriority="high"
          />
          <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-xl border border-border/70 bg-background/95 p-3.5 shadow-lg backdrop-blur-md sm:bottom-6 sm:left-6">
            <span className="flex size-10 items-center justify-center rounded-full bg-vault-rose/10 text-vault-rose">
              <CakeSlice aria-hidden="true" className="size-5" strokeWidth={1.8} />
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-semibold text-foreground">Baked Fresh Everyday</span>
              <span className="mt-0.5 text-xs text-muted-foreground">
                Artisan ingredients &amp; zero preservatives
              </span>
            </span>
          </div>
          <span
            aria-hidden="true"
            className="absolute right-4 top-4 flex size-12 rotate-6 items-center justify-center rounded-full bg-amber-500 text-white shadow-lg sm:right-6 sm:top-6"
          >
            <Sparkles className="size-5 text-white" strokeWidth={1.8} />
          </span>
        </div>
      </section>

      <section
        aria-label="Browse by occasion"
        className="border-y border-border/70 bg-secondary/65"
      >
        <div className="mx-auto flex w-full max-w-[1600px] flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 py-3.5 text-[13px] sm:gap-x-4 sm:px-6 md:justify-between lg:px-8">
          <span className="hidden font-medium text-muted-foreground md:inline">
            What are we celebrating?
          </span>
          {occasions.slice(1).map((label) => (
            <button
              key={label}
              onClick={() => jumpToCakes(label)}
              className="rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:bg-background hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => jumpToCakes("All cakes")}
            className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 font-medium text-primary transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Browse everything <ArrowRight aria-hidden="true" className="size-3.5" />
          </button>
        </div>
      </section>

      {/* REFERENCE SITE FEATURE 1: Interactive Signature Menu Live Stage (01) */}
      <section
        id="signature-stage"
        aria-labelledby="signature-stage-heading"
        className="scroll-mt-20 border-b border-border/70 bg-gradient-to-b from-background via-secondary/20 to-background py-14 sm:py-20 scroll-reveal"
      >
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
          {/* Section Index Header Row */}
          <div className="mb-8 flex items-center justify-between border-b border-border/70 pb-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-vault-rose/30 bg-vault-rose/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-vault-rose">
              <span>Artisan Creations</span>
            </div>
          </div>

          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2
                id="signature-stage-heading"
                className="vault-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl"
              >
                Artisan Creations{" "}
                <span className="serif-i text-vault-rose font-normal">&amp; Signature Cakes</span>
              </h2>
              <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                Hover or select any creation below to preview our master baker's live stage.
              </p>
            </div>
          </div>

          {/* Interactive Menu List & Live Stage Sync */}
          <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
            {/* Left Column: Numbered Interactive List (01 - 06) */}
            <div className="flex flex-col justify-between space-y-2 lg:col-span-5">
              {cakeCatalog.slice(0, 6).map((cake, idx) => {
                const isActive = activeStageIndex === idx;
                return (
                  <div
                    key={cake.id}
                    onMouseEnter={() => setActiveStageIndex(idx)}
                    onClick={() => setActiveStageIndex(idx)}
                    tabIndex={0}
                    role="button"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveStageIndex(idx);
                      }
                    }}
                    className={`group relative cursor-pointer rounded-xl border p-4 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                      isActive
                        ? "svc-item-active border-vault-rose/50 bg-secondary/80 shadow-md translate-x-1"
                        : "border-border/70 bg-card hover:border-vault-rose/30 hover:bg-secondary/40"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="font-mono text-sm font-bold text-vault-rose/80 group-hover:text-vault-rose">
                          0{idx + 1}.
                        </span>
                        <div className="min-w-0">
                          <h3 className="vault-display text-base font-bold text-primary group-hover:text-vault-rose transition-colors truncate">
                            {cake.name}
                          </h3>
                          <p className="text-xs text-muted-foreground truncate">
                            {cake.occasions[0]} · 500 g
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="rounded-md bg-accent/60 px-2 py-1 font-mono text-xs font-bold text-accent-foreground">
                          {formatRupees(cake.estimateFor500g)}
                        </span>
                        <ArrowRight
                          className={`size-4 transition-transform duration-300 ${
                            isActive
                              ? "translate-x-1 text-vault-rose"
                              : "text-muted-foreground group-hover:translate-x-0.5"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Dynamic Stage Preview Box */}
            <div className="lg:col-span-7">
              {(() => {
                const activeCake = cakeCatalog[activeStageIndex] || cakeCatalog[0]!;
                return (
                  <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card p-6 shadow-xl interactive-card shine-overlay">
                    {/* Stage Image Container */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border/60 bg-secondary/50">
                      <img
                        key={activeCake.id}
                        src={activeCake.image}
                        alt={`Live preview: ${activeCake.name}`}
                        className="svc-stage-fade size-full object-cover transition-all duration-500 hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        <span className="rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground shadow-sm backdrop-blur-md">
                          {activeCake.occasions[0]}
                        </span>
                        {"bestseller" in activeCake && activeCake.bestseller && (
                          <span className="rounded-full bg-amber-500 text-white px-3 py-1 text-xs font-bold shadow-sm">
                            ★ Bestseller
                          </span>
                        )}
                      </div>
                      <div className="absolute bottom-4 right-4 rounded-lg bg-background/90 px-3 py-1.5 font-mono text-sm font-bold text-foreground shadow-sm backdrop-blur-md">
                        {formatRupees(activeCake.estimateFor500g)} (500 g)
                      </div>
                    </div>

                    {/* Stage Details & Actions */}
                    <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="vault-display text-2xl font-bold text-primary">
                            {activeCake.name}
                          </h3>
                          <span className="inline-flex items-center gap-1 rounded bg-amber-500/10 px-2 py-0.5 text-xs font-bold text-amber-600 dark:text-amber-400">
                            <Star className="size-3 fill-amber-500" /> 4.9
                          </span>
                        </div>
                        <p className="mt-1 text-xs leading-5 text-muted-foreground max-w-[480px]">
                          {activeCake.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <Button
                          onClick={() => addToBag(activeCake.id, "500 g")}
                          className="h-11 px-5 gap-2 text-xs font-semibold shadow-md bg-primary text-primary-foreground hover:bg-primary/90"
                        >
                          <ShoppingBag className="size-4" /> Add to Bag
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => setCustomBuilderOpen(true)}
                          className="h-11 px-4 text-xs font-semibold border-vault-rose/40 text-vault-rose hover:bg-vault-rose/10"
                        >
                          <Wand2 className="size-4" /> Custom
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: Full Menu & Catalog */}
      <section
        id="cakes"
        aria-labelledby="cakes-heading"
        className="scroll-mt-20 mx-auto w-full max-w-[1600px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 scroll-reveal"
      >
        <div className="mb-8 flex items-center justify-between border-b border-border/70 pb-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-vault-rose">
            <span>Full Catalogue</span>
          </div>
        </div>

        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="cakes-heading"
              className="vault-display text-3xl font-bold leading-tight text-primary sm:text-4xl"
            >
              Explore Our Full Menu
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Filter by occasion or search for your favorite cake flavor.
            </p>
          </div>
          <label className="relative block w-full sm:max-w-[270px]">
            <span className="sr-only">Search cakes</span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              type="search"
              placeholder="Try “chocolate” or “birthday”"
              className="h-11 w-full border-b border-input bg-transparent px-1 pr-7 text-sm text-foreground outline-none placeholder:text-muted-foreground/80 focus:border-primary"
            />
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute right-1 top-3 size-4 -rotate-90 text-muted-foreground"
            />
          </label>
        </div>

        {/* Guest Portion & Serving Calculator Widget */}
        <div className="mb-8 overflow-hidden rounded-xl border border-amber-500/30 gold-gradient-bg p-4 shadow-xs sm:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-background/90 px-3 py-0.5 text-[11px] font-semibold text-amber-700 dark:text-amber-400">
                <CakeSlice className="size-3.5 text-vault-rose" />
                <span>Baker's Portion Calculator</span>
              </div>
              <h3 className="vault-display mt-2 text-xl font-bold text-primary">
                Planning a Celebration?{" "}
                <span className="vault-handwritten text-2xl font-normal text-vault-rose">
                  Calculate ideal size
                </span>
              </h3>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Select how many guests you're hosting to get the recommended cake weight:
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                { count: 6, label: "4–6 Guests (500 g)", weight: "500 g" },
                { count: 12, label: "8–12 Guests (1 kg)", weight: "1 kg" },
                { count: 20, label: "15–20 Guests (2 kg)", weight: "1 kg" },
                { count: 35, label: "25+ Guests (Custom Tier)", weight: "1 kg" },
              ].map((opt) => (
                <Button
                  key={opt.count}
                  variant={guestCount === opt.count ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setGuestCount(opt.count);
                    toast.info(`Recommended size: ${opt.label}! 🎂`, {
                      description:
                        opt.count > 15
                          ? "Consider a 2-tier or custom bespoke cake design."
                          : "500g to 1kg is perfect for intimate gatherings.",
                    });
                  }}
                  className="h-9 text-xs"
                >
                  {opt.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div
          role="group"
          aria-label="Filter cakes by occasion"
          className="mb-8 flex gap-2 overflow-x-auto pb-1"
        >
          {occasions.map((label) => (
            <Button
              key={label}
              variant={occasion === label ? "default" : "outline"}
              size="sm"
              onClick={() => setOccasion(label)}
              className="h-9 shrink-0 rounded-full px-4 text-xs"
            >
              {label}
            </Button>
          ))}
        </div>

        {visibleCakes.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:gap-8 xl:gap-10">
            {visibleCakes.map((cake, index) => (
              <div
                key={cake.id}
                className={`stagger-card-scroll stagger-delay-${index % 8} h-full`}
              >
                <CakeCard cake={cake} index={index} onAdd={addToBag} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[220px] flex-col items-center justify-center gap-3 text-center">
            <CakeSlice aria-hidden="true" className="size-8 text-vault-rose" strokeWidth={1.4} />
            <p className="vault-display text-2xl text-primary">We couldn't find that cake.</p>
            <p className="text-sm text-muted-foreground">
              Try another search, or browse the whole menu.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearch("");
                setOccasion("All cakes");
              }}
            >
              Show me all cakes
            </Button>
          </div>
        )}

        <p className="mt-9 border-t border-border/70 pt-4 text-xs leading-5 text-muted-foreground">
          Menu photos and prices are sample estimates. We’ll confirm availability and the final
          price before your order is accepted; delivery is not included in these estimates.
        </p>
      </section>

      {/* SECTION 03: Our Artisan Philosophy & Master Bakers */}
      <section
        id="our-way"
        aria-labelledby="our-way-heading"
        className="border-y border-border/70 bg-secondary/50 scroll-reveal stacked-page-layer py-14 sm:py-20"
      >
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between border-b border-border/70 pb-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-vault-rose shadow-xs">
              <span>Our Story &amp; Promise</span>
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <h2
                id="our-way-heading"
                className="vault-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl"
              >
                Baked with warmth &amp; zero shortcuts
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                We believe a great cake is more than flour and sugar—it’s the center of a cherished
                memory. Every morning at 6:00 AM, our ovens light up across Pune so your celebration
                gets the freshest bake possible with zero frozen sponges or artificial pre-mixes.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-border/80 bg-card p-4 shadow-xs">
                  <span className="flex size-9 items-center justify-center rounded-full bg-amber-500/10 text-amber-600 mb-3">
                    <Sparkles className="size-4" />
                  </span>
                  <h4 className="text-sm font-bold text-primary">Baked Fresh Daily</h4>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Baked fresh every morning across Pune.
                  </p>
                </div>

                <div className="rounded-xl border border-border/80 bg-card p-4 shadow-xs">
                  <span className="flex size-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 mb-3">
                    <CheckCircle2 className="size-4" />
                  </span>
                  <h4 className="text-sm font-bold text-primary">100% Pure Eggless</h4>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Light, moist, and fluffy vegetarian bakes.
                  </p>
                </div>

                <div className="rounded-xl border border-border/80 bg-card p-4 shadow-xs">
                  <span className="flex size-9 items-center justify-center rounded-full bg-vault-rose/10 text-vault-rose mb-3">
                    <Wand2 className="size-4" />
                  </span>
                  <h4 className="text-sm font-bold text-primary">Hand Inscriptions</h4>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Custom hand-piped chocolate messages.
                  </p>
                </div>
              </div>
            </div>

            {/* Master Bakers & Real Google Maps Storefront Cards with doc-drift hover FX */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
              <div className="doc-drift relative overflow-hidden rounded-2xl border border-border/80 bg-card shadow-lg">
                <div className="aspect-[4/4.5] w-full overflow-hidden bg-secondary">
                  <img
                    src={storefrontImage}
                    alt="The Cake Vault Official Pune Storefront"
                    className="size-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                  <span className="inline-block rounded-full bg-vault-rose px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white mb-2">
                    Official Pune Storefront
                  </span>
                  <h3 className="vault-display text-2xl font-bold">The Cake Vault Pune</h3>
                  <p className="mt-1 text-xs text-white/80 italic">
                    "Moreyshree Centre, Lohegaon Rd &amp; Old Mundhwa Rd branches open 9 AM – 10 PM
                    daily."
                  </p>
                </div>
              </div>

              <div className="doc-drift relative overflow-hidden rounded-2xl border border-border/80 bg-card shadow-lg">
                <div className="aspect-[4/4.5] w-full overflow-hidden bg-secondary">
                  <img
                    src={cakeCatalog[5].image}
                    alt="Master Chocolatier Bespoke Thar SUV Cake"
                    className="size-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                  <span className="inline-block rounded-full bg-amber-500 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white mb-2">
                    Bespoke Designer Studio
                  </span>
                  <h3 className="vault-display text-2xl font-bold">Chef Rohan M.</h3>
                  <p className="mt-1 text-xs text-white/80 italic">
                    "Crafting custom 3D designer sculptures &amp; bespoke celebration cakes."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04: Real Customer Reviews with Verified Photos */}
      <section
        id="reviews"
        aria-labelledby="reviews-heading"
        className="border-b border-border/70 bg-background scroll-reveal stacked-page-layer py-14 sm:py-20"
      >
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between border-b border-border/70 pb-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-vault-rose">
              <span>Customer Stories</span>
            </div>
          </div>

          <div className="mb-12 flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <h2
                id="reviews-heading"
                className="vault-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl"
              >
                Loved Across Pune{" "}
                <span className="serif-i text-vault-rose font-normal block sm:inline">
                  — 5-Star Google Reviews
                </span>
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Over 332+ verified 5-star Google reviews with real cake photo uploads across our 5
                store locations.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-secondary/40 p-4 shadow-sm">
              <div className="text-center px-2">
                <p className="vault-display text-4xl font-bold text-primary">4.9</p>
                <div className="mt-1 flex items-center justify-center gap-0.5 text-amber-500">
                  <Star className="size-4 fill-amber-500" />
                  <Star className="size-4 fill-amber-500" />
                  <Star className="size-4 fill-amber-500" />
                  <Star className="size-4 fill-amber-500" />
                  <Star className="size-4 fill-amber-500" />
                </div>
                <p className="mt-1 text-[11px] font-medium text-muted-foreground">
                  332+ Verified Reviews
                </p>
              </div>

              <Button
                onClick={() => setIsReviewDialogOpen(true)}
                className="h-12 px-6 gap-2 font-bold text-xs shadow-xl bg-gradient-to-r from-vault-rose via-rose-600 to-amber-500 text-white hover:scale-105 transition-all duration-300 ring-2 ring-vault-rose/30 gold-glow-border animate-pulse-soft"
              >
                <Star className="size-4 fill-white text-white" />
                <span>Write a Review</span>
              </Button>
            </div>
          </div>

          {/* Customer Reviews Grid with Prominent Real Photos */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reviewsList.map((rev, index) => (
              <div
                key={rev.id}
                className={`stagger-card-scroll stagger-delay-${index % 4} flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-md transition-all hover:border-vault-rose/40 hover:shadow-xl`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1 text-amber-500">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} className="size-3.5 fill-amber-500" />
                      ))}
                    </div>
                    <span className="text-[10px] font-medium text-muted-foreground">
                      {rev.date}
                    </span>
                  </div>

                  {/* Prominent Real Cake Photo Uploaded by Customer */}
                  {rev.photoUrl && (
                    <div className="relative mt-3 aspect-[4/3] w-full overflow-hidden rounded-xl border border-border/80 bg-secondary/50">
                      <img
                        src={rev.photoUrl}
                        alt={`Real cake photo uploaded by customer ${rev.author}`}
                        className="size-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <span className="absolute bottom-2 left-2 rounded-full bg-background/90 px-2.5 py-0.5 text-[10px] font-bold text-foreground shadow-xs backdrop-blur-md">
                        📷 Customer Photo
                      </span>
                    </div>
                  )}

                  <p className="mt-3 text-xs leading-5 text-foreground italic">“{rev.comment}”</p>
                </div>

                <div className="mt-4 border-t border-border pt-3">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-primary">
                    <span>{rev.author}</span>
                    {rev.verified && <BadgeCheck className="size-3.5 text-emerald-600" />}
                  </div>
                  <p className="mt-0.5 text-[11px] font-bold text-vault-rose">{rev.cakeOrdered}</p>
                  <p className="mt-0.5 text-[10px] text-muted-foreground">{rev.locationName}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05: Store Locations */}
      <section
        id="find-us"
        aria-labelledby="find-us-heading"
        className="mx-auto w-full max-w-[1600px] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 scroll-reveal stacked-page-layer"
      >
        <div className="mb-8 flex items-center justify-between border-b border-border/70 pb-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-vault-rose">
            <span>Store Locations</span>
          </div>
        </div>

        <div className="mb-10 text-center md:text-left">
          <h2
            id="find-us-heading"
            className="vault-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl"
          >
            Find The Cake Vault Near You
          </h2>
          <p className="mt-3 max-w-[680px] text-sm leading-6 text-muted-foreground sm:text-base">
            Showing only our 5 official store locations in Pune & Pimpri-Chinchwad. Click on any
            location to view ratings, address details, services, and live Google Maps directions.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Location Selection List */}
          <div className="space-y-3.5 lg:col-span-5">
            <div className="flex items-center justify-between pb-1">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Locations ({storeLocations.length})
              </p>
              <span className="text-xs text-muted-foreground">Click to view on map</span>
            </div>

            {storeLocations.map((loc) => {
              const isSelected = loc.id === selectedLocation.id;
              return (
                <div
                  key={loc.id}
                  onClick={() => setActiveLocationId(loc.id)}
                  tabIndex={0}
                  role="button"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveLocationId(loc.id);
                    }
                  }}
                  className={`group relative cursor-pointer rounded-xl border p-4 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    isSelected
                      ? "border-primary bg-primary/5 shadow-md"
                      : "border-border bg-card hover:border-primary/50 hover:bg-secondary/40"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="vault-display text-lg font-semibold leading-snug text-primary">
                          {loc.name}
                        </h3>
                        <span className="inline-flex items-center gap-1 rounded bg-amber-500/10 px-2 py-0.5 text-xs font-semibold text-amber-700 dark:text-amber-400">
                          <Star className="size-3 fill-amber-500 text-amber-500" />
                          {loc.rating.toFixed(1)}
                          <span className="font-normal text-muted-foreground">
                            ({loc.reviewCount})
                          </span>
                        </span>
                      </div>

                      <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
                        <span className="font-medium text-foreground">{loc.category}</span>
                        {loc.priceRange && (
                          <>
                            <span>·</span>
                            <span className="rounded bg-secondary px-1.5 py-0.5 font-mono text-[11px] font-medium text-foreground">
                              {loc.priceRange}
                            </span>
                          </>
                        )}
                      </div>

                      <p className="mt-2 text-xs leading-5 text-muted-foreground">{loc.address}</p>

                      {loc.services && loc.services.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {loc.services.map((service) => (
                            <span
                              key={service}
                              className="inline-flex items-center gap-1 rounded-full border border-border bg-background/80 px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                            >
                              <CheckCircle2 className="size-2.5 text-vault-rose" />
                              {service}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <a
                        href={`tel:${loc.phone || "+918483097680"}`}
                        onClick={(e) => e.stopPropagation()}
                        title={`Call ${loc.name} directly`}
                        className="flex size-9 shrink-0 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 transition-colors hover:bg-emerald-600 hover:text-white dark:text-emerald-400"
                      >
                        <Phone className="size-4" />
                      </a>
                      <a
                        href={loc.googleMapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        title="Open in Google Maps"
                        className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <ExternalLink className="size-4" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Live Interactive Map View */}
          <div className="flex flex-col gap-4 lg:col-span-7 lg:sticky lg:top-24">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="flex items-center justify-between border-b border-border bg-secondary/60 px-4 py-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
                  <MapPin className="size-4 text-vault-rose" />
                  <span>Map: {selectedLocation.area}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 dark:text-amber-400">
                  <Star className="size-3.5 fill-amber-500 text-amber-500" />
                  {selectedLocation.rating.toFixed(1)} rating ({selectedLocation.reviewCount}{" "}
                  reviews)
                </span>
              </div>

              <div className="relative h-[380px] w-full bg-secondary sm:h-[420px]">
                <iframe
                  key={selectedLocation.id}
                  src={selectedLocation.mapEmbedUrl}
                  title={`Map location for ${selectedLocation.name}`}
                  className="size-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="flex flex-col gap-3 border-t border-border bg-background p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-vault-rose">
                    Selected Store Location
                  </p>
                  <h4 className="vault-display text-base font-semibold text-primary">
                    {selectedLocation.name}
                  </h4>
                  <p className="mt-0.5 text-xs text-muted-foreground">{selectedLocation.address}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <Button
                    asChild
                    variant="outline"
                    className="gap-2 text-xs border-emerald-500/30 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800 dark:text-emerald-400 dark:hover:bg-emerald-950/40"
                  >
                    <a href={`tel:${selectedLocation.phone || "+918483097680"}`}>
                      <Phone className="size-3.5 text-emerald-600 dark:text-emerald-400" /> Call{" "}
                      {selectedLocation.phone || "+91 84830 97680"}
                    </a>
                  </Button>
                  <Button asChild className="gap-2 text-xs">
                    <a href={selectedLocation.googleMapsUrl} target="_blank" rel="noreferrer">
                      <ExternalLink className="size-3.5" /> Open Maps
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06: FAQ Section */}
      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="border-t border-border/70 bg-secondary/35 py-14 sm:py-20"
      >
        <div className="mx-auto max-w-[1000px] px-4 sm:px-8 md:px-12">
          <div className="mb-8 flex items-center justify-between border-b border-border/70 pb-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-vault-rose shadow-xs">
              <span>Got Questions?</span>
            </div>
          </div>

          <div className="mb-10 text-center">
            <h2
              id="faq-heading"
              className="vault-display text-3xl font-bold text-primary sm:text-4xl"
            >
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Everything you need to know about our fresh cakes, custom designs, and store pickups
              in Pune.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            <AccordionItem
              value="item-1"
              className="rounded-xl border border-border bg-card px-4 py-1 shadow-xs"
            >
              <AccordionTrigger className="text-base font-semibold text-primary hover:no-underline">
                Are all cakes freshly baked for each order request?
              </AccordionTrigger>
              <AccordionContent className="text-xs leading-6 text-muted-foreground">
                Yes! Every cake is handcrafted in our Pune bakery kitchens using premium
                ingredients. We never store frozen finished cakes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="rounded-xl border border-border bg-card px-4 py-1 shadow-xs"
            >
              <AccordionTrigger className="text-base font-semibold text-primary hover:no-underline">
                Are all of your cakes 100% eggless?
              </AccordionTrigger>
              <AccordionContent className="text-xs leading-6 text-muted-foreground">
                Yes, 100%! Every single cake, pastry, and custom bake at The Cake Vault is strictly
                100% pure vegetarian and eggless. We use premium pure butter, fresh dairy cream, and
                natural ingredients so everyone can indulge worry-free.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="rounded-xl border border-border bg-card px-4 py-1 shadow-xs"
            >
              <AccordionTrigger className="text-base font-semibold text-primary hover:no-underline">
                How far in advance should I request a custom cake?
              </AccordionTrigger>
              <AccordionContent className="text-xs leading-6 text-muted-foreground">
                For standard signature menu cakes, same-day pickup or delivery (with 2–4 hours
                advance notice) is often available. For custom bespoke designs or double-tiered
                cakes, we recommend requesting 24–48 hours in advance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="rounded-xl border border-border bg-card px-4 py-1 shadow-xs"
            >
              <AccordionTrigger className="text-base font-semibold text-primary hover:no-underline">
                Which store location will handle my order request?
              </AccordionTrigger>
              <AccordionContent className="text-xs leading-6 text-muted-foreground">
                Your order request will be assigned to your selected nearest branch among our 5
                verified store locations (Dhanori, Old Mundhwa Rd, Pimpri-Chinchwad, Ganesh Park, or
                Santosh Mangal Karyalay).
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* LUXURY DARK CONTRAST FOOTER matching dentist-lac-sigma.vercel.app */}
      <footer className="bg-ink text-white py-14">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-10 md:flex-row md:items-center">
            <div>
              <span className="rounded-full border border-vault-rose/40 bg-vault-rose/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-rose-300">
                Crafted in Pune · 100% Pure Eggless
              </span>
              <h3 className="vault-display mt-3 text-3xl font-bold text-white sm:text-4xl">
                Ready to Order Your Dream Cake?
              </h3>
              <p className="mt-1 text-sm text-ink-muted">
                5 Store Locations across Pune &amp; Pimpri-Chinchwad. Express Same-Day Delivery
                available.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                asChild
                className="h-12 rounded-full px-6 gap-2 text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg"
              >
                <a href="tel:+918483097680">
                  <Phone className="size-4" /> Call +91 84830 97680
                </a>
              </Button>
              <Button
                asChild
                className="h-12 rounded-full px-6 gap-2 text-xs font-bold bg-vault-rose text-white hover:bg-rose-500 shadow-lg"
              >
                <a href="https://wa.me/918483097680" target="_blank" rel="noreferrer">
                  <MessageSquare className="size-4" /> WhatsApp Order
                </a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4 border-b border-white/10 pb-10">
            <div className="md:col-span-1">
              <a
                href="#home"
                className="vault-display text-2xl font-bold text-white flex items-center gap-2"
              >
                <CakeSlice className="size-6 text-vault-rose" /> The Cake Vault
              </a>
              <p className="mt-3 text-xs leading-6 text-ink-muted">
                Pune's premier 100% eggless gourmet cake shop &amp; bespoke designer. Serving
                Dhanori, Lohegaon Rd, Old Mundhwa Rd, Ganesh Park &amp; Pimpri-Chinchwad.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                <CheckCircle2 className="size-4 text-emerald-400" />
                <span>332+ Verified 5-Star Google Reviews</span>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-vault-rose mb-4">
                Cake Shop Near Me
              </h4>
              <ul className="space-y-2 text-xs text-ink-muted">
                <li>
                  <a href="#find-us" className="hover:text-white transition-colors">
                    Cake Shop in Dhanori Pune
                  </a>
                </li>
                <li>
                  <a href="#find-us" className="hover:text-white transition-colors">
                    Cake Shop on Lohegaon Road
                  </a>
                </li>
                <li>
                  <a href="#find-us" className="hover:text-white transition-colors">
                    Cake Shop on Old Mundhwa Road
                  </a>
                </li>
                <li>
                  <a href="#find-us" className="hover:text-white transition-colors">
                    Cake Shop in Pimpri-Chinchwad
                  </a>
                </li>
                <li>
                  <a href="#find-us" className="hover:text-white transition-colors">
                    Cake Shop near Ganesh Park
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-vault-rose mb-4">
                Signature Specialities
              </h4>
              <ul className="space-y-2 text-xs text-ink-muted">
                <li>
                  <a href="#signature-stage" className="hover:text-white transition-colors">
                    Puneri Fresh Rasmalai Cake
                  </a>
                </li>
                <li>
                  <a href="#signature-stage" className="hover:text-white transition-colors">
                    Belgian Chocolate Berry Truffle
                  </a>
                </li>
                <li>
                  <a href="#signature-stage" className="hover:text-white transition-colors">
                    Alphonso Mango Mousse Cake
                  </a>
                </li>
                <li>
                  <a href="#signature-stage" className="hover:text-white transition-colors">
                    Golden Butterscotch Crunch
                  </a>
                </li>
                <li>
                  <a href="#signature-stage" className="hover:text-white transition-colors">
                    Custom Birthday Designer Cakes
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-vault-rose mb-4">
                Verified Stores &amp; Hours
              </h4>
              <p className="text-xs text-ink-muted leading-6">
                Open Daily: 9:00 AM – 10:00 PM
                <br />
                Order Hotline: +91 84830 97680
                <br />
                Address: Moreyshree Shopping Centre, Lohegaon Rd, Dhanori, Pune
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white">
                  ⚡ Express Same-Day Pickup Available
                </span>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-ink-muted gap-3">
            <span>
              &copy; {new Date().getFullYear()} The Cake Vault Pune. All rights reserved. 100% Pure
              Vegetarian &amp; Eggless Artisan Cakes.
            </span>
            <span>
              Keywords: Cake Shop Near Me · Dhanori · Lohegaon Rd · Old Mundhwa Rd ·
              Pimpri-Chinchwad
            </span>
          </div>
        </div>
      </footer>

      <Sheet
        open={bagOpen}
        onOpenChange={(open) => {
          setBagOpen(open);
          if (!open) {
            setReceipt(null);
            setCheckingOut(false);
            setFormError("");
          }
        }}
      >
        <SheetContent
          side="right"
          className="w-full overflow-y-auto border-l border-border bg-background p-0 sm:max-w-[520px]"
        >
          <SheetHeader className="sticky top-0 z-10 border-b border-border bg-background px-6 py-5 text-left">
            <SheetTitle className="vault-display text-[26px] font-medium text-primary">
              {receipt
                ? "Request received."
                : checkingOut
                  ? "A few details, then."
                  : "Your little collection."}
            </SheetTitle>
            <SheetDescription className="text-[13px] leading-5 text-muted-foreground">
              {receipt
                ? "Your cake request is with us. Here’s a copy for you to keep."
                : checkingOut
                  ? "Tell us where to send your cake request. Nothing is charged here."
                  : cart.length
                    ? "Take another look; the details can be adjusted any time."
                    : "There’s room in here for something lovely."}
            </SheetDescription>
          </SheetHeader>

          {receipt ? (
            <OrderReceipt
              receipt={receipt}
              onContinue={() => {
                setBagOpen(false);
                setReceipt(null);
              }}
            />
          ) : checkingOut ? (
            <form onSubmit={submitRequest} noValidate className="space-y-5 px-6 pb-8 pt-5">
              <button
                type="button"
                onClick={() => {
                  setCheckingOut(false);
                  setFormError("");
                }}
                className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                <ArrowLeft aria-hidden="true" className="size-3.5" /> Back to your bag
              </button>

              <div className="border-b border-border pb-4">
                <p className="text-sm font-medium text-foreground">Your cakes</p>
                <div className="mt-3 space-y-2.5">
                  {cart.map((item) => {
                    const cake = getCake(item.productId);
                    if (!cake) return null;
                    return (
                      <div
                        key={`${item.productId}-${item.weight}`}
                        className="flex justify-between gap-4 text-xs text-muted-foreground"
                      >
                        <span>
                          {cake.name} · {item.weight} × {item.quantity}
                        </span>
                        <span className="shrink-0 text-foreground">
                          {formatRupees(estimateLineTotal(item))}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-3 flex justify-between border-t border-border pt-3 text-sm font-medium text-foreground">
                  <span>Sample cake subtotal</span>
                  <span>{formatRupees(cartTotal)}</span>
                </div>
                <p className="mt-2 text-[11px] leading-4 text-muted-foreground">
                  Sample estimate only; delivery and final price are confirmed separately.
                </p>
              </div>

              <div className="space-y-3.5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-vault-rose">
                  How can we reach you?
                </p>
                <Field
                  label="Your name"
                  name="customerName"
                  error={fieldErrors["customerName"]}
                  autoComplete="name"
                  maxLength={100}
                  placeholder="The name we should use"
                />
                <Field
                  label="Email address"
                  name="customerEmail"
                  error={fieldErrors["customerEmail"]}
                  type="email"
                  autoComplete="email"
                  maxLength={254}
                  placeholder="you@example.com"
                />
                <Field
                  label="Phone number"
                  name="customerPhone"
                  error={fieldErrors["customerPhone"]}
                  type="tel"
                  autoComplete="tel"
                  maxLength={30}
                  placeholder="Your 10–15 digit number"
                />
                <label className="block text-sm font-medium text-foreground">
                  Delivery address
                  <textarea
                    name="deliveryAddress"
                    required
                    rows={2}
                    maxLength={500}
                    autoComplete="street-address"
                    aria-invalid={Boolean(fieldErrors["deliveryAddress"])}
                    placeholder="Building, street, area, and city"
                    className="mt-1.5 block w-full resize-y border border-input bg-card px-3 py-2.5 text-sm font-normal leading-5 text-foreground outline-none placeholder:text-muted-foreground/70 focus:border-ring focus:ring-1 focus:ring-ring"
                  />
                  {fieldErrors["deliveryAddress"] && (
                    <span role="alert" className="mt-1 block text-xs font-normal text-destructive">
                      {fieldErrors["deliveryAddress"]}
                    </span>
                  )}
                </label>
                <label className="block text-sm font-medium text-foreground">
                  Day you have in mind{" "}
                  <span className="font-normal text-muted-foreground">(optional)</span>
                  <input
                    type="date"
                    value={requestedDate}
                    onChange={(event) => setRequestedDate(event.target.value)}
                    className="mt-1.5 block h-11 w-full border border-input bg-card px-3 text-sm font-normal text-foreground outline-none focus:border-ring focus:ring-1 focus:ring-ring"
                  />
                  <span className="mt-1 block text-xs font-normal text-muted-foreground">
                    We’ll confirm availability before anything is final.
                  </span>
                </label>
                <label className="block text-sm font-medium text-foreground">
                  A note for us{" "}
                  <span className="font-normal text-muted-foreground">(optional)</span>
                  <textarea
                    name="customerNote"
                    rows={2}
                    maxLength={500}
                    placeholder="A small detail you’d like us to know?"
                    className="mt-1.5 block w-full resize-y border border-input bg-card px-3 py-2.5 text-sm font-normal leading-5 text-foreground outline-none placeholder:text-muted-foreground/70 focus:border-ring focus:ring-1 focus:ring-ring"
                  />
                  {fieldErrors["customerNote"] && (
                    <span role="alert" className="mt-1 block text-xs font-normal text-destructive">
                      {fieldErrors["customerNote"]}
                    </span>
                  )}
                </label>
              </div>

              {formError && (
                <p
                  role="alert"
                  className="border-l-2 border-destructive bg-destructive/5 px-3 py-2.5 text-sm leading-5 text-destructive"
                >
                  {formError}
                </p>
              )}

              <Button
                type="submit"
                disabled={submitting || cart.length === 0}
                className="h-12 w-full gap-2 rounded-sm text-sm"
              >
                {submitting ? "Sending your request…" : "Send a cake request"}
                {!submitting && <ArrowRight aria-hidden="true" className="size-4" />}
              </Button>
              <p className="text-center text-[11px] leading-5 text-muted-foreground">
                No payment is taken here. We’ll confirm the availability and final price before your
                order is accepted.
              </p>
            </form>
          ) : cart.length ? (
            <div className="flex min-h-[calc(100dvh-125px)] flex-col px-6 pb-6 pt-5">
              <ul className="flex-1 divide-y divide-border" aria-label="Cakes in your bag">
                {cart.map((item) => {
                  const cake = getCake(item.productId);
                  if (!cake) return null;
                  return (
                    <li
                      key={`${item.productId}-${item.weight}`}
                      className="flex gap-4 py-5 first:pt-0"
                    >
                      <img
                        src={cake.image}
                        alt={`${cake.name} - The Cake Vault Pune Bakery`}
                        className="size-[84px] shrink-0 rounded-sm object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex justify-between gap-2">
                          <div>
                            <p className="text-sm font-medium text-foreground">{cake.name}</p>
                            <p className="mt-1 text-xs text-muted-foreground">
                              {item.weight} · sample estimate
                            </p>
                          </div>
                          <span className="shrink-0 text-sm font-medium text-foreground">
                            {formatRupees(estimateLineTotal(item))}
                          </span>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <div
                            className="flex items-center border border-border"
                            aria-label={`Quantity ${item.quantity}`}
                          >
                            <Button
                              variant="ghost"
                              size="icon"
                              aria-label={`Remove one ${cake.name}`}
                              disabled={item.quantity <= 1}
                              onClick={() => changeQuantity(item, -1)}
                              className="size-8 rounded-none disabled:opacity-35"
                            >
                              <Minus className="size-3.5" />
                            </Button>
                            <span
                              aria-live="polite"
                              className="w-7 text-center text-xs tabular-nums text-foreground"
                            >
                              {item.quantity}
                            </span>
                            <Button
                              variant="ghost"
                              size="icon"
                              aria-label={`Add one ${cake.name}`}
                              disabled={item.quantity >= 20}
                              onClick={() => changeQuantity(item, 1)}
                              className="size-8 rounded-none"
                            >
                              <Plus className="size-3.5" />
                            </Button>
                          </div>
                          <button
                            className="text-xs text-muted-foreground underline-offset-4 hover:text-destructive hover:underline"
                            onClick={() =>
                              setCart((current) =>
                                current.filter(
                                  (line) =>
                                    line.productId !== item.productId ||
                                    line.weight !== item.weight,
                                ),
                              )
                            }
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="border-t border-border pt-5">
                <div className="flex items-baseline justify-between text-sm">
                  <span className="font-medium text-foreground">Sample cake subtotal</span>
                  <span className="vault-display text-2xl text-primary">
                    {formatRupees(cartTotal)}
                  </span>
                </div>
                <p className="mt-1 text-[11px] leading-5 text-muted-foreground">
                  Sample estimates; delivery is not included. Final price and availability are
                  confirmed before an order is accepted.
                </p>
                <Button
                  onClick={() => {
                    setCheckingOut(true);
                    setFieldErrors({});
                    setFormError("");
                  }}
                  className="mt-4 h-12 w-full gap-2 rounded-sm text-sm"
                >
                  Continue with request <ArrowRight aria-hidden="true" className="size-4" />
                </Button>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  No payment is taken at this step.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex min-h-[calc(100dvh-125px)] flex-col items-center justify-center px-8 text-center">
              <span className="flex size-16 items-center justify-center rounded-full bg-secondary text-primary">
                <CakeSlice aria-hidden="true" className="size-7" strokeWidth={1.5} />
              </span>
              <h3 className="vault-display mt-5 text-2xl text-primary">
                Your bag is waiting for something sweet.
              </h3>
              <p className="mt-2 max-w-[290px] text-sm leading-6 text-muted-foreground">
                The right cake has a way of finding its moment. Have a look around.
              </p>
              <Button onClick={() => setBagOpen(false)} className="mt-6 gap-2 rounded-sm px-5">
                Explore the cakes <ArrowRight className="size-4" />
              </Button>
            </div>
          )}
        </SheetContent>
      </Sheet>

      {/* Mobile Navigation Drawer */}
      <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
        <SheetContent side="left" className="w-[300px] sm:w-[360px] bg-background p-6">
          <SheetHeader className="text-left border-b border-border pb-4">
            <SheetTitle className="vault-display flex items-center gap-2 text-xl font-bold">
              <CakeSlice className="size-5 text-vault-rose" />
              <span>The Cake Vault</span>
            </SheetTitle>
            <SheetDescription className="text-xs text-muted-foreground">
              5 Verified Stores across Pune &amp; Pimpri-Chinchwad
            </SheetDescription>
          </SheetHeader>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="#cakes"
              onClick={() => setMobileNavOpen(false)}
              className="flex items-center justify-between rounded-lg p-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <span className="flex items-center gap-3">
                <CakeSlice className="size-4 text-vault-rose" />
                The Cakes Collection
              </span>
              <ArrowRight className="size-4 text-muted-foreground" />
            </a>
            <button
              onClick={() => {
                setMobileNavOpen(false);
                setCustomBuilderOpen(true);
              }}
              className="flex items-center justify-between rounded-lg p-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary text-left"
            >
              <span className="flex items-center gap-3">
                <Wand2 className="size-4 text-vault-rose" />
                Custom Designer Builder
              </span>
              <ArrowRight className="size-4 text-muted-foreground" />
            </button>
            <a
              href="#find-us"
              onClick={() => setMobileNavOpen(false)}
              className="flex items-center justify-between rounded-lg p-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <span className="flex items-center gap-3">
                <MapPin className="size-4 text-vault-rose" />5 Store Locations &amp; Maps
              </span>
              <ArrowRight className="size-4 text-muted-foreground" />
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileNavOpen(false)}
              className="flex items-center justify-between rounded-lg p-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <span className="flex items-center gap-3">
                <Star className="size-4 text-amber-500 fill-amber-500" />
                Customer Reviews (4.9⭐)
              </span>
              <ArrowRight className="size-4 text-muted-foreground" />
            </a>
            <button
              onClick={() => {
                setMobileNavOpen(false);
                setTrackerOpen(true);
              }}
              className="flex items-center justify-between rounded-lg p-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary text-left"
            >
              <span className="flex items-center gap-3">
                <Clock className="size-4 text-primary" />
                Track Order Request
              </span>
              <ArrowRight className="size-4 text-muted-foreground" />
            </button>
            <a
              href="#faq"
              onClick={() => setMobileNavOpen(false)}
              className="flex items-center justify-between rounded-lg p-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <span className="flex items-center gap-3">
                <HelpCircle className="size-4 text-muted-foreground" />
                Frequently Asked Questions
              </span>
              <ArrowRight className="size-4 text-muted-foreground" />
            </a>
            <div className="mt-4 pt-4 border-t border-border flex flex-col gap-2.5">
              <a
                href="https://wa.me/918483097680?text=Hi%20The%20Cake%20Vault%2C%20I%20would%20like%20to%20order%20or%20customize%20a%20cake!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 items-center justify-center gap-2 rounded-md bg-emerald-600 px-4 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 shadow-sm"
              >
                <MessageSquare className="size-4" />
                <span>Instant WhatsApp (+91 84830 97680)</span>
              </a>
              <a
                href="tel:+918483097680"
                className="flex h-11 items-center justify-center gap-2 rounded-md border border-border bg-card px-4 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                <Phone className="size-4 text-primary" />
                <span>Call +91 84830 97680</span>
              </a>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Custom Cake Builder Modal */}
      <Dialog open={customBuilderOpen} onOpenChange={setCustomBuilderOpen}>
        <DialogContent className="sm:max-w-[560px]">
          <DialogHeader>
            <DialogTitle className="vault-display flex items-center gap-2 text-2xl text-primary">
              <Wand2 className="size-5 text-vault-rose" />
              Design Your Custom Cake
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              Choose your dream flavour, frosting, size, and custom inscription. We’ll calculate a
              sample estimate and add it to your bag.
            </DialogDescription>
          </DialogHeader>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              addToBag("custom-cake", customWeight);
              setCustomBuilderOpen(false);
            }}
            className="space-y-4 pt-2"
          >
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Cake Flavour
              </label>
              <select
                value={customFlavour}
                onChange={(e) => setCustomFlavour(e.target.value)}
                className="h-10 w-full border border-input bg-card px-3 text-sm text-foreground outline-none focus:border-ring"
              >
                {customCakeFlavours.map((flavour) => (
                  <option key={flavour} value={flavour}>
                    {flavour}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Frosting & Cream Style
              </label>
              <select
                value={customFrosting}
                onChange={(e) => setCustomFrosting(e.target.value)}
                className="h-10 w-full border border-input bg-card px-3 text-sm text-foreground outline-none focus:border-ring"
              >
                {customCakeFrostings.map((frosting) => (
                  <option key={frosting} value={frosting}>
                    {frosting}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Cake Weight / Size
              </label>
              <div className="grid grid-cols-2 gap-2">
                {cakeWeights.map((w) => (
                  <Button
                    key={w}
                    type="button"
                    variant={customWeight === w ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCustomWeight(w)}
                    className="h-10 text-xs"
                  >
                    {w} ({w === "1 kg" ? "Est. ₹1,488" : "Est. ₹850"})
                  </Button>
                ))}
              </div>
            </div>

            {/* Live Hand-Piped Cake Preview Box */}
            <div className="relative overflow-hidden rounded-lg border border-amber-500/30 gold-gradient-bg p-4 text-center shadow-xs">
              <div className="mx-auto flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary mb-1.5">
                <Sparkles className="size-5 text-vault-rose" />
              </div>
              <p className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">
                Artisan Cake Preview
              </p>
              <p className="vault-display text-base font-bold text-primary mt-0.5">
                {customFlavour} ({customWeight})
              </p>
              <p className="text-xs text-vault-rose font-medium">{customFrosting}</p>
              <div className="mt-2.5 rounded border border-border/80 bg-background/90 px-3 py-2 shadow-xs">
                <p className="text-[9px] text-muted-foreground uppercase tracking-widest">
                  Hand-Piped Message Preview
                </p>
                <p className="vault-handwritten text-2xl text-primary font-bold mt-0.5 min-h-7">
                  {customInscription.trim()
                    ? `“${customInscription.trim()}”`
                    : "Your Custom Message Here"}
                </p>
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Message Written on Cake (Optional)
              </label>
              <input
                type="text"
                value={customInscription}
                onChange={(e) => setCustomInscription(e.target.value)}
                placeholder="e.g. Happy Birthday Aarav!"
                maxLength={60}
                className="h-10 w-full border border-input bg-card px-3 text-sm text-foreground outline-none focus:border-ring"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Special Instructions & Theme (Optional)
              </label>
              <textarea
                value={customDesignNote}
                onChange={(e) => setCustomDesignNote(e.target.value)}
                placeholder="Describe theme, color palette, or decoration notes..."
                rows={2}
                maxLength={300}
                className="w-full resize-y border border-input bg-card px-3 py-2 text-sm text-foreground outline-none focus:border-ring"
              />
            </div>

            <div className="flex items-center justify-between border-t border-border pt-4">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Sample Estimate
                </p>
                <p className="vault-display text-xl font-bold text-primary">
                  {formatRupees(customWeight === "1 kg" ? 1488 : 850)}
                </p>
              </div>
              <Button type="submit" className="gap-2">
                Add Custom Cake to Bag <ShoppingBag className="size-4" />
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Order Request Tracker Modal */}
      <Dialog open={trackerOpen} onOpenChange={setTrackerOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="vault-display flex items-center gap-2 text-2xl text-primary">
              <Clock className="size-5 text-vault-rose" />
              Track Order Request
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              Enter your request reference code (e.g. TCV-XXXXXX) to view request progress.
            </DialogDescription>
          </DialogHeader>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!trackCode.trim()) return;
              setTrackSearchResult({
                reference: trackCode.trim().toUpperCase(),
                found: true,
                status: "Under Baker Review",
                date: new Date().toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                }),
              });
            }}
            className="space-y-4 pt-2"
          >
            <div className="flex gap-2">
              <input
                type="text"
                value={trackCode}
                onChange={(e) => setTrackCode(e.target.value)}
                placeholder="e.g. TCV-9B2F4A"
                className="h-10 flex-1 border border-input bg-card px-3 font-mono text-sm uppercase text-foreground outline-none focus:border-ring"
              />
              <Button type="submit" className="h-10 gap-2">
                <Search className="size-4" /> Track
              </Button>
            </div>

            {receipt && (
              <div className="flex items-center justify-between rounded border border-secondary bg-secondary/50 p-2.5 text-xs">
                <span>
                  Your recent reference:{" "}
                  <strong className="font-mono text-primary">{receipt.requestReference}</strong>
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setTrackCode(receipt.requestReference);
                    setTrackSearchResult({
                      reference: receipt.requestReference,
                      found: true,
                      status: "Request Received & Baker Reviewing",
                      date: "Today",
                    });
                  }}
                  className="font-medium text-vault-rose underline"
                >
                  Auto Fill
                </button>
              </div>
            )}

            {trackSearchResult && (
              <div className="space-y-3 rounded-lg border border-border bg-card p-4">
                <div className="flex items-start justify-between border-b border-border pb-3">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Request Reference
                    </p>
                    <p className="font-mono text-base font-bold text-primary">
                      {trackSearchResult.reference}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-600">
                    <CheckCircle2 className="size-3" /> {trackSearchResult.status}
                  </span>
                </div>

                <div className="space-y-2 pt-1">
                  <p className="text-xs font-semibold text-foreground">Request Progress Timeline</p>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2 font-medium text-emerald-600">
                      <span className="size-2 rounded-full bg-emerald-600" />
                      <span>1. Request Submitted & Received</span>
                    </div>
                    <div className="flex items-center gap-2 font-medium text-primary">
                      <span className="size-2 rounded-full bg-primary animate-pulse" />
                      <span>2. Store Reviewing Availability & Price Confirmation</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground opacity-60">
                      <span className="size-2 rounded-full bg-muted-foreground" />
                      <span>3. Baker Preparation & Quality Assurance</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground opacity-60">
                      <span className="size-2 rounded-full bg-muted-foreground" />
                      <span>4. Ready for Store Pick-up / Delivery</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </form>
        </DialogContent>
      </Dialog>

      {/* Flavor Matcher Quiz Modal */}
      <Dialog open={quizOpen} onOpenChange={setQuizOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="vault-display flex items-center gap-2 text-2xl text-primary">
              <Sparkles className="size-5 text-vault-rose" />
              Interactive Flavor Matcher
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              Answer 2 quick questions to find your perfect cake match!
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 pt-2">
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                1. What's the celebration occasion?
              </label>
              <div className="grid grid-cols-2 gap-2">
                {["Birthday", "Anniversary", "Family Gathering", "Sweet Craving"].map((occ) => (
                  <Button
                    key={occ}
                    variant={quizOccasion === occ ? "default" : "outline"}
                    size="sm"
                    onClick={() => setQuizOccasion(occ)}
                    className="h-9 text-xs"
                  >
                    {occ}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                2. Which flavor profile excites your tastebuds?
              </label>
              <div className="grid grid-cols-2 gap-2">
                {["Chocolate", "Rasmalai", "Red Velvet", "Fresh Fruit"].map((flav) => (
                  <Button
                    key={flav}
                    variant={quizFlavor === flav ? "default" : "outline"}
                    size="sm"
                    onClick={() => setQuizFlavor(flav)}
                    className="h-9 text-xs"
                  >
                    {flav}
                  </Button>
                ))}
              </div>
            </div>

            {/* Recommendation Result Card */}
            <div className="rounded-lg border border-amber-500/40 gold-gradient-bg p-4 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-widest text-vault-rose">
                Your Recommended Bake Match
              </span>
              <h4 className="vault-display text-lg font-bold text-primary mt-1">
                {quizFlavor === "Rasmalai"
                  ? "Fresh Cream Rasmalai Fusion Cake"
                  : quizFlavor === "Red Velvet"
                    ? "Royal Red Velvet Cream Cheese Cake"
                    : quizFlavor === "Fresh Fruit"
                      ? "Exotic Fresh Fruit Garden Cake"
                      : "Belgian Dark Chocolate Truffle Cake"}
              </h4>
              <p className="mt-1 text-xs text-muted-foreground leading-5">
                Handcrafted 100% eggless bake tailored for {quizOccasion.toLowerCase()} moments.
              </p>
              <div className="mt-4 flex gap-2">
                <Button
                  onClick={() => {
                    const matchId =
                      quizFlavor === "Rasmalai"
                        ? "rasmalai"
                        : quizFlavor === "Red Velvet"
                          ? "red-velvet"
                          : quizFlavor === "Fresh Fruit"
                            ? "fresh-fruit"
                            : "chocolate-berry";
                    addToBag(matchId, "500 g");
                    setQuizOpen(false);
                  }}
                  className="flex-1 h-10 gap-2 text-xs"
                >
                  <ShoppingBag className="size-4" /> Add Match to Bag
                </Button>
                <a
                  href={`https://wa.me/918483097680?text=${encodeURIComponent(`Hi The Cake Vault, the Quiz matched me with the ${quizFlavor} Cake for a ${quizOccasion} celebration! Can I order this?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center size-10 rounded-md border border-emerald-600/40 bg-emerald-600 text-white transition-colors hover:bg-emerald-700 shrink-0"
                  title="Order via WhatsApp"
                >
                  <MessageSquare className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Interactive Write a Review Modal */}
      <Dialog open={isReviewDialogOpen} onOpenChange={setIsReviewDialogOpen}>
        <DialogContent className="sm:max-w-[540px]">
          <DialogHeader>
            <DialogTitle className="vault-display text-2xl text-primary flex items-center gap-2">
              <Quote className="size-5 text-vault-rose" /> Share Your Experience
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              Your verified feedback helps cake lovers across Pune discover their next favorite
              bake!
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleReviewSubmit} className="space-y-4 mt-2">
            {/* Rating Stars Selector */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-1.5">
                Rating
              </label>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setReviewRating(star)}
                    className="p-1 text-amber-500 hover:scale-125 transition-transform focus:outline-none"
                  >
                    <Star
                      className={`size-7 ${
                        star <= reviewRating
                          ? "fill-amber-500 text-amber-500"
                          : "text-muted-foreground/30"
                      }`}
                    />
                  </button>
                ))}
                <span className="ml-2 text-xs font-bold text-amber-700 dark:text-amber-400">
                  {reviewRating} of 5 Stars
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">
                  Your Name <span className="text-vault-rose">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ananya Kulkarni"
                  value={reviewAuthor}
                  onChange={(e) => setReviewAuthor(e.target.value)}
                  className="h-10 w-full rounded border border-input bg-background px-3 text-xs font-normal text-foreground outline-none focus:border-ring"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">
                  Cake Ordered
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rasmalai Fusion Cake"
                  value={reviewCakeOrdered}
                  onChange={(e) => setReviewCakeOrdered(e.target.value)}
                  className="h-10 w-full rounded border border-input bg-background px-3 text-xs font-normal text-foreground outline-none focus:border-ring"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">
                Store Location Visited / Ordered From
              </label>
              <select
                value={reviewLocationId}
                onChange={(e) => setReviewLocationId(e.target.value)}
                className="h-10 w-full rounded border border-input bg-background px-3 text-xs font-medium text-foreground outline-none focus:border-ring"
              >
                {storeLocations.map((loc) => (
                  <option key={loc.id} value={loc.id}>
                    {loc.name} ({loc.area})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">
                Your Review <span className="text-vault-rose">*</span>
              </label>
              <textarea
                required
                rows={3}
                placeholder="Tell us about the flavor, freshness, presentation, and service..."
                value={reviewComment}
                onChange={(e) => setReviewComment(e.target.value)}
                className="w-full rounded border border-input bg-background p-3 text-xs font-normal text-foreground outline-none focus:border-ring resize-none"
              />
            </div>

            {/* Photo Upload Dropzone */}
            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">
                Attach Cake Photo (Optional)
              </label>
              <input
                type="file"
                accept="image/*"
                id="review-photo-input"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleReviewPhotoSelect(file);
                }}
              />

              {reviewPhotoUrl ? (
                <div className="relative overflow-hidden rounded-lg border border-border bg-secondary/40 p-2 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={reviewPhotoUrl}
                      alt="Uploaded cake preview"
                      className="size-14 object-cover rounded border border-border"
                    />
                    <div>
                      <p className="text-xs font-semibold text-primary">Photo Attached</p>
                      <p className="text-[10px] text-emerald-600 dark:text-emerald-400">
                        Ready to publish
                      </p>
                    </div>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setReviewPhotoUrl(null)}
                    className="size-8 p-0 text-destructive hover:bg-destructive/10"
                  >
                    <X className="size-4" />
                  </Button>
                </div>
              ) : (
                <label
                  htmlFor="review-photo-input"
                  className="flex cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-border bg-secondary/30 p-4 transition-colors hover:border-primary/50 hover:bg-secondary/60"
                >
                  <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                    <Camera className="size-4 text-vault-rose" />
                    <span>Upload cake picture</span>
                    <Upload className="size-3.5 text-muted-foreground" />
                  </div>
                  <p className="mt-1 text-[10px] text-muted-foreground">
                    JPG, PNG, or WebP up to 5MB
                  </p>
                </label>
              )}
            </div>

            <div className="pt-2 flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsReviewDialogOpen(false)}
                className="text-xs"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="gap-2 text-xs font-semibold bg-vault-rose text-white hover:bg-vault-rose/90"
              >
                <Check className="size-3.5" /> Post Verified Review
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Floating Instant Quick Contact & Scroll-To-Top Speed Dial */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        {isScrolled && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            title="Scroll back to top"
            aria-label="Scroll back to top"
            className="flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-xl transition-all hover:scale-110 hover:border-primary hover:bg-secondary"
          >
            <ArrowUp className="size-5 text-vault-rose" />
          </button>
        )}
        <a
          href="tel:+918483097680"
          title="Call store directly +91 84830 97680"
          className="flex size-11 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-700 text-white shadow-xl transition-all hover:scale-110 hover:bg-emerald-800"
          aria-label="Call The Cake Vault directly"
        >
          <Phone className="size-5" />
        </a>
        <a
          href="https://wa.me/918483097680?text=Hi%20The%20Cake%20Vault%2C%20I%20have%20an%20inquiry%20about%20ordering%20a%20cake!"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 rounded-full border border-emerald-500/40 bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white shadow-xl transition-all hover:scale-105 hover:bg-emerald-700"
          aria-label="Chat with The Cake Vault on WhatsApp"
        >
          <MessageSquare className="size-4 animate-bounce" />
          <span className="hidden sm:inline">WhatsApp Order (+91 84830 97680)</span>
        </a>
      </div>
    </main>
  );
}

function CakeCard({
  cake,
  index,
  onAdd,
}: {
  cake: (typeof cakeCatalog)[number];
  index: number;
  onAdd: (productId: string, weight: CakeWeight) => void;
}) {
  const [weight, setWeight] = useState<CakeWeight>("500 g");
  const line: CartLine = { productId: cake.id, weight, quantity: 1 };

  return (
    <article className="group flex flex-col justify-between h-full min-w-0 rounded-xl border border-border/80 bg-card p-4 sm:p-5 shadow-sm interactive-card shine-overlay hover:border-amber-500/40">
      <div className="relative aspect-[0.95/1] overflow-hidden rounded-lg bg-secondary">
        <img
          src={cake.image}
          alt={`${cake.name} - 100% Eggless Custom Cake at The Cake Vault Pune`}
          loading={index === 0 ? "eager" : "lazy"}
          className="size-full object-cover interactive-card-img scroll-parallax"
        />
        <span className="absolute left-3 top-3 rounded border border-amber-500/30 bg-background/90 px-2.5 py-0.5 text-[10px] font-semibold text-primary backdrop-blur-md shadow-xs interactive-glow-badge">
          Fresh Bake
        </span>
        <span className="absolute right-3 top-3 rounded border border-emerald-500/40 bg-background/90 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 backdrop-blur-md shadow-xs flex items-center gap-1 interactive-glow-badge">
          <CheckCircle2 className="size-2.5 text-emerald-600 dark:text-emerald-400" /> Eggless
        </span>
      </div>
      <div className="flex flex-col justify-between flex-1 pt-4">
        <div>
          <div className="flex items-center justify-between gap-1 mb-1.5">
            <span className="vault-handwritten text-lg font-bold text-vault-rose">
              Bake of the Day
            </span>
            <span className="text-[10px] font-medium text-amber-700 dark:text-amber-400 flex items-center gap-0.5">
              <Star className="size-3 fill-amber-500 text-amber-500" /> 5.0
            </span>
          </div>
          <h3 className="vault-display text-lg font-semibold leading-snug text-primary transition-colors group-hover:text-vault-rose">
            {cake.name}
          </h3>
          <p className="mt-1.5 min-h-[2.5rem] text-xs leading-relaxed text-muted-foreground">
            {cake.description}
          </p>
        </div>

        <div>
          <div className="mt-4 flex items-center justify-between gap-2 border-t border-border/60 pt-3">
            <label className="flex min-w-0 items-center gap-1.5 text-xs text-muted-foreground">
              <span className="shrink-0 font-medium">Size</span>
              <select
                value={weight}
                onChange={(event) => setWeight(event.target.value as CakeWeight)}
                aria-label={`Choose size for ${cake.name}`}
                className="h-8.5 rounded border border-input bg-background px-2 text-xs font-medium text-foreground outline-none focus:border-ring"
              >
                {cakeWeights.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </label>
            <div className="text-right">
              <p className="text-sm font-bold tabular-nums text-primary">
                <span className="sr-only">Sample estimate </span>
                {formatRupees(estimateLineTotal(line))}
              </p>
              <p className="text-[9px] text-muted-foreground">est. price</p>
            </div>
          </div>
          <div className="mt-3.5 flex items-center gap-2">
            <Button
              onClick={() => onAdd(cake.id, weight)}
              variant="outline"
              className="h-9 flex-1 justify-between rounded-md border-border bg-background px-3 text-xs font-medium text-primary shadow-xs transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <span className="inline-flex items-center gap-1.5">
                <ShoppingBag aria-hidden="true" className="size-3.5" /> Add to Bag
              </span>
              <ArrowRight aria-hidden="true" className="size-3.5" />
            </Button>
            <a
              href={`https://wa.me/918483097680?text=${encodeURIComponent(`Hi The Cake Vault, I would like to order the ${cake.name} (${weight}). Please confirm availability.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Order directly via WhatsApp"
              aria-label={`Order ${cake.name} directly via WhatsApp`}
              className="flex size-9 shrink-0 items-center justify-center rounded-md border border-emerald-600/40 bg-emerald-500/10 text-emerald-600 transition-colors hover:bg-emerald-600 hover:text-white"
            >
              <MessageSquare className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function Field({
  label,
  name,
  error,
  type = "text",
  placeholder,
  maxLength,
  autoComplete,
}: {
  label: string;
  name: string;
  error?: string | undefined;
  type?: string | undefined;
  placeholder: string;
  maxLength: number;
  autoComplete: string;
}) {
  return (
    <label className="block text-sm font-medium text-foreground">
      {label}
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        autoComplete={autoComplete}
        maxLength={maxLength}
        aria-invalid={Boolean(error)}
        className="mt-1.5 block h-11 w-full border border-input bg-card px-3 text-sm font-normal text-foreground outline-none placeholder:text-muted-foreground/70 focus:border-ring focus:ring-1 focus:ring-ring"
      />
      {error && (
        <span role="alert" className="mt-1 block text-xs font-normal text-destructive">
          {error}
        </span>
      )}
    </label>
  );
}

function OrderReceipt({ receipt, onContinue }: { receipt: Receipt; onContinue: () => void }) {
  const formattedDate = receipt.requestedDate
    ? new Date(`${receipt.requestedDate}T12:00:00`).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <div role="status" aria-live="polite" className="px-6 pb-8 pt-6">
      <div className="border-b border-border pb-5 text-center">
        <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-secondary text-primary">
          <Check aria-hidden="true" className="size-6" strokeWidth={2} />
        </span>
        <p className="vault-display mt-4 text-[27px] leading-tight text-primary">
          Your request is with us, {receipt.customerName}.
        </p>
        <p className="mx-auto mt-2 max-w-[390px] text-sm leading-6 text-muted-foreground">
          Thank you for letting us be part of the moment. We’ve received your cake request.
        </p>
      </div>

      <div className="my-5 border border-border bg-card p-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          Your request reference
        </p>
        <p className="mt-1 font-mono text-base font-semibold tracking-[0.08em] text-primary">
          {receipt.requestReference}
        </p>
        <p className="mt-1 text-xs leading-5 text-muted-foreground">
          Keep this handy in case you need to refer to your request.
        </p>
      </div>

      <div className="space-y-4 border-b border-border pb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-vault-rose">
          The details
        </p>
        {receipt.items.map((item) => (
          <div key={`${item.name}-${item.weight}`} className="flex justify-between gap-4 text-sm">
            <span className="text-foreground">
              {item.name}
              <span className="ml-1 text-muted-foreground">
                · {item.weight} × {item.quantity}
              </span>
            </span>
            <span className="shrink-0 text-foreground">
              {formatRupees(item.estimatedLineTotal)}
            </span>
          </div>
        ))}
        <div className="flex justify-between border-t border-border pt-3 text-sm font-medium text-foreground">
          <span>Sample cake subtotal</span>
          <span>{formatRupees(receipt.estimatedTotal)}</span>
        </div>
      </div>

      <dl className="space-y-3 border-b border-border py-4 text-sm">
        <div>
          <dt className="text-xs text-muted-foreground">Delivery address</dt>
          <dd className="mt-1 leading-5 text-foreground">{receipt.deliveryAddress}</dd>
        </div>
        <div>
          <dt className="text-xs text-muted-foreground">Day you have in mind</dt>
          <dd className="mt-1 text-foreground">{formattedDate ?? "Not specified"}</dd>
        </div>
        {receipt.customerNote && (
          <div>
            <dt className="text-xs text-muted-foreground">Your note</dt>
            <dd className="mt-1 leading-5 text-foreground">{receipt.customerNote}</dd>
          </div>
        )}
      </dl>

      <p className="mt-4 text-xs leading-5 text-muted-foreground">
        This is a request, not a confirmed order. Availability, final price, and delivery still need
        to be confirmed. Delivery is not included in the sample estimate, and no payment has been
        taken.
      </p>
      <Button onClick={onContinue} className="mt-6 h-12 w-full gap-2 rounded-sm">
        Back to the cakes <ArrowRight aria-hidden="true" className="size-4" />
      </Button>
    </div>
  );
}

function safeParseCartLine(value: unknown): CartLine | null {
  const parsed = cartLineSchema.safeParse(value);
  return parsed.success ? parsed.data : null;
}
