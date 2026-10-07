import { useEffect, useMemo, useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  CakeSlice,
  Check,
  ChevronDown,
  Heart,
  MapPin,
  Minus,
  Plus,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { submitCakeOrderRequest } from "@/lib/cake-orders.functions";
import {
  cakeCatalog,
  cakeOrderRequestSchema,
  cakeWeights,
  estimateCartTotal,
  estimateLineTotal,
  formatRupees,
  getCake,
  STORE_ADDRESS,
  type CakeWeight,
  type CartLine,
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
      { title: "The Cake Vault | Cakes Worth Celebrating" },
      {
        name: "description",
        content:
          "Find a cake for birthdays, anniversaries, and the just-because moments. Browse The Cake Vault's sample menu in Dhanori, Pune.",
      },
      { property: "og:title", content: "The Cake Vault | Cakes Worth Celebrating" },
      {
        property: "og:description",
        content: "A thoughtful cake makes an ordinary day feel like a celebration.",
      },
      { property: "og:type", content: "website" },
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
            .filter((item): item is CartLine => item !== null && getCake(item.productId) !== undefined);
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
      const matchesOccasion = occasion === "All cakes" || cake.occasions.includes(occasion);
      const matchesSearch =
        !query || `${cake.name} ${cake.description} ${cake.occasions.join(" ")}`.toLocaleLowerCase().includes(query);
      return matchesOccasion && matchesSearch;
    });
  }, [occasion, search]);

  const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = estimateCartTotal(cart);

  function addToBag(productId: string, weight: CakeWeight) {
    setCart((current) => {
      const existing = current.find((item) => item.productId === productId && item.weight === weight);
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
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-[4.5rem] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#home" aria-label="The Cake Vault home" className="group inline-flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-full border border-border text-primary transition-colors group-hover:bg-secondary">
              <CakeSlice aria-hidden="true" className="size-[18px]" strokeWidth={1.6} />
            </span>
            <span className="flex flex-col leading-none">
              <span className="vault-display text-[17px] font-semibold">The Cake Vault</span>
              <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.22em] text-muted-foreground">Dhanori · Pune</span>
            </span>
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-8 text-[13px] font-medium text-muted-foreground md:flex">
            <a className="transition-colors hover:text-foreground" href="#cakes">The cakes</a>
            <a className="transition-colors hover:text-foreground" href="#our-way">Our way</a>
            <a className="transition-colors hover:text-foreground" href="#find-us">Find us</a>
          </nav>

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
            <span className="flex size-5 items-center justify-center rounded-full bg-secondary text-[11px] text-secondary-foreground">{cartQuantity}</span>
          </Button>
        </div>
      </header>

      <section id="home" aria-labelledby="hero-heading" className="mx-auto grid max-w-[1440px] items-center gap-8 px-5 pb-10 pt-9 sm:px-8 md:grid-cols-[0.87fr_1.13fr] md:gap-10 md:px-12 md:py-9 lg:gap-16 lg:px-[5.5rem]">
        <div className="relative z-10 order-2 pb-3 md:order-1 md:pb-0">
          <div className="mb-6 flex items-center gap-2 text-xs font-medium text-vault-rose">
            <Sparkles aria-hidden="true" className="size-4" strokeWidth={1.5} />
            <span>A little joy, ready to share</span>
          </div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">For all the moments that matter</p>
          <h1 id="hero-heading" className="vault-display vault-editorial max-w-[580px] text-[clamp(3rem,5vw,5rem)] leading-[1.05] text-primary">
            Cakes worth <span className="italic text-vault-rose">celebrating.</span>
          </h1>
          <p className="mt-6 max-w-[430px] text-[15px] leading-7 text-muted-foreground sm:text-base">
            The birthday candles. The first slice passed across the table. The Tuesday that needed cheering up. There is always room for cake.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button onClick={() => jumpToCakes()} className="h-12 gap-3 rounded-sm px-6 text-sm font-medium shadow-sm">
              Find your cake <ArrowRight aria-hidden="true" className="size-4" />
            </Button>
            <a href="#our-way" className="inline-flex h-12 items-center gap-2 px-3 text-sm font-medium text-primary transition-colors hover:text-vault-rose">
              A little about us <ArrowDown aria-hidden="true" className="size-4" />
            </a>
          </div>
          <div className="mt-9 flex items-center gap-3 text-xs text-muted-foreground">
            <span aria-hidden="true" className="flex -space-x-1.5">
              <span className="flex size-7 items-center justify-center rounded-full border-2 border-background bg-secondary text-secondary-foreground"><Heart className="size-3.5" /></span>
              <span className="flex size-7 items-center justify-center rounded-full border-2 border-background bg-accent text-accent-foreground"><Sparkles className="size-3.5" /></span>
            </span>
            <span>Picked for your moment, not just the menu.</span>
          </div>
        </div>

        <div className="relative order-1 mx-auto aspect-[1.28/1] w-full max-w-[680px] overflow-hidden rounded-sm bg-secondary md:order-2 md:aspect-[0.98/1] lg:aspect-[1.08/1]">
          <img src={cakeCatalog[0].image} alt="Chocolate celebration cake finished with cream and raspberries" className="size-full object-cover object-[center_58%]" fetchPriority="high" />
          <div className="absolute bottom-4 left-4 flex items-center gap-3 border border-border/50 bg-background/95 px-4 py-3 shadow-sm backdrop-blur-sm sm:bottom-6 sm:left-6">
            <span className="flex size-9 items-center justify-center rounded-full bg-secondary text-primary"><CakeSlice aria-hidden="true" className="size-[18px]" strokeWidth={1.5} /></span>
            <span className="flex flex-col">
              <span className="text-sm font-medium text-foreground">For your lovely people</span>
              <span className="mt-0.5 text-xs text-muted-foreground">And the little moments, too.</span>
            </span>
          </div>
          <span aria-hidden="true" className="absolute right-4 top-4 flex size-11 rotate-6 items-center justify-center rounded-full bg-vault-gold text-primary-foreground sm:right-6 sm:top-6">
            <Heart className="size-[18px]" strokeWidth={1.8} />
          </span>
        </div>
      </section>

      <section aria-label="Browse by occasion" className="border-y border-border/70 bg-secondary/65">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-2 gap-y-1 px-5 py-4 text-[13px] sm:gap-x-4 sm:px-8 md:justify-between md:px-12 lg:px-[5.5rem]">
          <span className="hidden font-medium text-muted-foreground md:inline">What are we celebrating?</span>
          {occasions.slice(1).map((label) => (
            <button key={label} onClick={() => jumpToCakes(label)} className="rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:bg-background hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              {label}
            </button>
          ))}
          <button onClick={() => jumpToCakes("All cakes")} className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 font-medium text-primary transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            Browse everything <ArrowRight aria-hidden="true" className="size-3.5" />
          </button>
        </div>
      </section>

      <section id="cakes" aria-labelledby="cakes-heading" className="scroll-mt-20 mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-[5.5rem]">
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.19em] text-vault-rose">Made for sharing, chosen by you</p>
            <h2 id="cakes-heading" className="vault-display text-4xl leading-tight text-primary sm:text-[2.75rem]">Find the one.</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">A small sample menu to help you find your kind of sweet.</p>
          </div>
          <label className="relative block w-full sm:max-w-[270px]">
            <span className="sr-only">Search cakes</span>
            <input value={search} onChange={(event) => setSearch(event.target.value)} type="search" placeholder="Try “chocolate” or “birthday”" className="h-11 w-full border-b border-input bg-transparent px-1 pr-7 text-sm text-foreground outline-none placeholder:text-muted-foreground/80 focus:border-primary" />
            <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-1 top-3 size-4 -rotate-90 text-muted-foreground" />
          </label>
        </div>

        <div role="group" aria-label="Filter cakes by occasion" className="mb-8 flex gap-2 overflow-x-auto pb-1">
          {occasions.map((label) => (
            <Button key={label} variant={occasion === label ? "default" : "outline"} size="sm" onClick={() => setOccasion(label)} className="h-9 shrink-0 rounded-full px-4 text-xs">
              {label}
            </Button>
          ))}
        </div>

        {visibleCakes.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">
            {visibleCakes.map((cake, index) => (
              <CakeCard key={cake.id} cake={cake} index={index} onAdd={addToBag} />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[220px] flex-col items-center justify-center gap-3 text-center">
            <CakeSlice aria-hidden="true" className="size-8 text-vault-rose" strokeWidth={1.4} />
            <p className="vault-display text-2xl text-primary">We couldn't find that cake.</p>
            <p className="text-sm text-muted-foreground">Try another search, or browse the whole menu.</p>
            <Button variant="outline" size="sm" onClick={() => { setSearch(""); setOccasion("All cakes"); }}>Show me all cakes</Button>
          </div>
        )}

        <p className="mt-9 border-t border-border/70 pt-4 text-xs leading-5 text-muted-foreground">
          Menu photos and prices are sample estimates. We’ll confirm availability and the final price before your order is accepted; delivery is not included in these estimates.
        </p>
      </section>

      <section id="our-way" aria-labelledby="our-way-heading" className="border-y border-border/70 bg-secondary/55">
        <div className="mx-auto grid max-w-[1440px] gap-6 px-5 py-14 sm:px-8 md:grid-cols-[0.7fr_1.3fr] md:items-center md:gap-16 md:px-12 md:py-[4.5rem] lg:px-[5.5rem]">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-vault-rose">A little sweetness goes a long way</p>
            <h2 id="our-way-heading" className="vault-display max-w-[430px] text-3xl leading-tight text-primary sm:text-4xl">Not every celebration needs a reason.</h2>
          </div>
          <div className="max-w-[620px] md:border-l md:border-border md:pl-9">
            <p className="text-[15px] leading-7 text-muted-foreground">Maybe you remembered. Maybe you almost forgot. Maybe it’s simply been a long week. Pick the cake that feels right, tell us a little about the moment, and we’ll confirm the details before anything is final.</p>
            <Button variant="link" className="mt-4 h-auto p-0 text-primary" onClick={() => jumpToCakes()}>
              Take a look at the cakes <ArrowRight aria-hidden="true" className="size-4" />
            </Button>
          </div>
        </div>
      </section>

      <section id="find-us" aria-labelledby="find-us-heading" className="mx-auto grid max-w-[1440px] gap-7 px-5 py-14 sm:px-8 md:grid-cols-[1fr_auto] md:items-center md:px-12 md:py-16 lg:px-[5.5rem]">
        <div className="flex gap-4">
          <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary"><MapPin aria-hidden="true" className="size-[18px]" strokeWidth={1.7} /></span>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-vault-rose">Right here in Dhanori</p>
            <h2 id="find-us-heading" className="vault-display text-2xl text-primary">A little closer to home.</h2>
            <address className="mt-3 max-w-[700px] text-sm not-italic leading-6 text-muted-foreground">{STORE_ADDRESS}</address>
          </div>
        </div>
        <Button variant="outline" asChild className="ml-14 w-fit gap-2 border-border bg-background px-5 text-foreground hover:bg-secondary md:ml-0">
          <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(STORE_ADDRESS)}`} target="_blank" rel="noreferrer">
            Find directions <ArrowRight aria-hidden="true" className="size-4" />
          </a>
        </Button>
      </section>

      <footer className="border-t border-border/70 bg-secondary/50">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8 md:px-12 lg:px-[5.5rem]">
          <a href="#home" className="vault-display text-base text-primary">The Cake Vault</a>
          <span>For little moments, big celebrations, and everything in between.</span>
          <span>Dhanori, Pune</span>
        </div>
      </footer>

      <Sheet open={bagOpen} onOpenChange={(open) => { setBagOpen(open); if (!open) { setReceipt(null); setCheckingOut(false); setFormError(""); } }}>
        <SheetContent side="right" className="w-full overflow-y-auto border-l border-border bg-background p-0 sm:max-w-[520px]">
          <SheetHeader className="sticky top-0 z-10 border-b border-border bg-background px-6 py-5 text-left">
            <SheetTitle className="vault-display text-[26px] font-medium text-primary">
              {receipt ? "Request received." : checkingOut ? "A few details, then." : "Your little collection."}
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
            <OrderReceipt receipt={receipt} onContinue={() => { setBagOpen(false); setReceipt(null); }} />
          ) : checkingOut ? (
            <form onSubmit={submitRequest} noValidate className="space-y-5 px-6 pb-8 pt-5">
              <button type="button" onClick={() => { setCheckingOut(false); setFormError(""); }} className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-primary">
                <ArrowLeft aria-hidden="true" className="size-3.5" /> Back to your bag
              </button>

              <div className="border-b border-border pb-4">
                <p className="text-sm font-medium text-foreground">Your cakes</p>
                <div className="mt-3 space-y-2.5">
                  {cart.map((item) => {
                    const cake = getCake(item.productId);
                    if (!cake) return null;
                    return <div key={`${item.productId}-${item.weight}`} className="flex justify-between gap-4 text-xs text-muted-foreground"><span>{cake.name} · {item.weight} × {item.quantity}</span><span className="shrink-0 text-foreground">{formatRupees(estimateLineTotal(item))}</span></div>;
                  })}
                </div>
                <div className="mt-3 flex justify-between border-t border-border pt-3 text-sm font-medium text-foreground"><span>Sample cake subtotal</span><span>{formatRupees(cartTotal)}</span></div>
                <p className="mt-2 text-[11px] leading-4 text-muted-foreground">Sample estimate only; delivery and final price are confirmed separately.</p>
              </div>

              <div className="space-y-3.5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-vault-rose">How can we reach you?</p>
                <Field label="Your name" name="customerName" error={fieldErrors.customerName} autoComplete="name" maxLength={100} placeholder="The name we should use" />
                <Field label="Email address" name="customerEmail" error={fieldErrors.customerEmail} type="email" autoComplete="email" maxLength={254} placeholder="you@example.com" />
                <Field label="Phone number" name="customerPhone" error={fieldErrors.customerPhone} type="tel" autoComplete="tel" maxLength={30} placeholder="Your 10–15 digit number" />
                <label className="block text-sm font-medium text-foreground">
                  Delivery address
                  <textarea name="deliveryAddress" required rows={2} maxLength={500} autoComplete="street-address" aria-invalid={Boolean(fieldErrors.deliveryAddress)} placeholder="Building, street, area, and city" className="mt-1.5 block w-full resize-y border border-input bg-card px-3 py-2.5 text-sm font-normal leading-5 text-foreground outline-none placeholder:text-muted-foreground/70 focus:border-ring focus:ring-1 focus:ring-ring" />
                  {fieldErrors.deliveryAddress && <span role="alert" className="mt-1 block text-xs font-normal text-destructive">{fieldErrors.deliveryAddress}</span>}
                </label>
                <label className="block text-sm font-medium text-foreground">
                  Day you have in mind <span className="font-normal text-muted-foreground">(optional)</span>
                  <input type="date" value={requestedDate} onChange={(event) => setRequestedDate(event.target.value)} className="mt-1.5 block h-11 w-full border border-input bg-card px-3 text-sm font-normal text-foreground outline-none focus:border-ring focus:ring-1 focus:ring-ring" />
                  <span className="mt-1 block text-xs font-normal text-muted-foreground">We’ll confirm availability before anything is final.</span>
                </label>
                <label className="block text-sm font-medium text-foreground">
                  A note for us <span className="font-normal text-muted-foreground">(optional)</span>
                  <textarea name="customerNote" rows={2} maxLength={500} placeholder="A small detail you’d like us to know?" className="mt-1.5 block w-full resize-y border border-input bg-card px-3 py-2.5 text-sm font-normal leading-5 text-foreground outline-none placeholder:text-muted-foreground/70 focus:border-ring focus:ring-1 focus:ring-ring" />
                  {fieldErrors.customerNote && <span role="alert" className="mt-1 block text-xs font-normal text-destructive">{fieldErrors.customerNote}</span>}
                </label>
              </div>

              {formError && <p role="alert" className="border-l-2 border-destructive bg-destructive/5 px-3 py-2.5 text-sm leading-5 text-destructive">{formError}</p>}

              <Button type="submit" disabled={submitting || cart.length === 0} className="h-12 w-full gap-2 rounded-sm text-sm">
                {submitting ? "Sending your request…" : "Send a cake request"}
                {!submitting && <ArrowRight aria-hidden="true" className="size-4" />}
              </Button>
              <p className="text-center text-[11px] leading-5 text-muted-foreground">No payment is taken here. We’ll confirm the availability and final price before your order is accepted.</p>
            </form>
          ) : cart.length ? (
            <div className="flex min-h-[calc(100dvh-125px)] flex-col px-6 pb-6 pt-5">
              <ul className="flex-1 divide-y divide-border" aria-label="Cakes in your bag">
                {cart.map((item) => {
                  const cake = getCake(item.productId);
                  if (!cake) return null;
                  return (
                    <li key={`${item.productId}-${item.weight}`} className="flex gap-4 py-5 first:pt-0">
                      <img src={cake.image} alt="" className="size-[84px] shrink-0 rounded-sm object-cover" />
                      <div className="min-w-0 flex-1">
                        <div className="flex justify-between gap-2">
                          <div><p className="text-sm font-medium text-foreground">{cake.name}</p><p className="mt-1 text-xs text-muted-foreground">{item.weight} · sample estimate</p></div>
                          <span className="shrink-0 text-sm font-medium text-foreground">{formatRupees(estimateLineTotal(item))}</span>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center border border-border" aria-label={`Quantity ${item.quantity}`}>
                            <Button variant="ghost" size="icon" aria-label={`Remove one ${cake.name}`} disabled={item.quantity <= 1} onClick={() => changeQuantity(item, -1)} className="size-8 rounded-none disabled:opacity-35"><Minus className="size-3.5" /></Button>
                            <span aria-live="polite" className="w-7 text-center text-xs tabular-nums text-foreground">{item.quantity}</span>
                            <Button variant="ghost" size="icon" aria-label={`Add one ${cake.name}`} disabled={item.quantity >= 20} onClick={() => changeQuantity(item, 1)} className="size-8 rounded-none"><Plus className="size-3.5" /></Button>
                          </div>
                          <button className="text-xs text-muted-foreground underline-offset-4 hover:text-destructive hover:underline" onClick={() => setCart((current) => current.filter((line) => line.productId !== item.productId || line.weight !== item.weight))}>Remove</button>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="border-t border-border pt-5">
                <div className="flex items-baseline justify-between text-sm"><span className="font-medium text-foreground">Sample cake subtotal</span><span className="vault-display text-2xl text-primary">{formatRupees(cartTotal)}</span></div>
                <p className="mt-1 text-[11px] leading-5 text-muted-foreground">Sample estimates; delivery is not included. Final price and availability are confirmed before an order is accepted.</p>
                <Button onClick={() => { setCheckingOut(true); setFieldErrors({}); setFormError(""); }} className="mt-4 h-12 w-full gap-2 rounded-sm text-sm">
                  Continue with request <ArrowRight aria-hidden="true" className="size-4" />
                </Button>
                <p className="mt-3 text-center text-xs text-muted-foreground">No payment is taken at this step.</p>
              </div>
            </div>
          ) : (
            <div className="flex min-h-[calc(100dvh-125px)] flex-col items-center justify-center px-8 text-center">
              <span className="flex size-16 items-center justify-center rounded-full bg-secondary text-primary"><CakeSlice aria-hidden="true" className="size-7" strokeWidth={1.5} /></span>
              <h3 className="vault-display mt-5 text-2xl text-primary">Your bag is waiting for something sweet.</h3>
              <p className="mt-2 max-w-[290px] text-sm leading-6 text-muted-foreground">The right cake has a way of finding its moment. Have a look around.</p>
              <Button onClick={() => setBagOpen(false)} className="mt-6 gap-2 rounded-sm px-5">Explore the cakes <ArrowRight className="size-4" /></Button>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </main>
  );
}

function CakeCard({ cake, index, onAdd }: {
  cake: (typeof cakeCatalog)[number];
  index: number;
  onAdd: (productId: string, weight: CakeWeight) => void;
}) {
  const [weight, setWeight] = useState<CakeWeight>("500 g");
  const line: CartLine = { productId: cake.id, weight, quantity: 1 };

  return (
    <article className="group min-w-0">
      <div className="relative aspect-[0.91/1] overflow-hidden rounded-sm bg-secondary">
        <img src={cake.image} alt={cake.name} loading={index === 0 ? "eager" : "lazy"} className="size-full object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.03]" />
        <span className="absolute left-3 top-3 border border-border/50 bg-background/95 px-2.5 py-1 text-[10px] font-medium text-primary backdrop-blur-sm">Sample menu</span>
      </div>
      <div className="pt-3.5">
        <h3 className="vault-display text-xl leading-snug text-primary">{cake.name}</h3>
        <p className="mt-1.5 min-h-10 text-xs leading-5 text-muted-foreground">{cake.description}</p>
        <div className="mt-3 flex items-center justify-between gap-3">
          <label className="flex min-w-0 items-center gap-2 text-xs text-muted-foreground">
            <span className="shrink-0">Size</span>
            <select value={weight} onChange={(event) => setWeight(event.target.value as CakeWeight)} aria-label={`Choose size for ${cake.name}`} className="h-9 min-w-[88px] border border-input bg-card px-2 text-xs text-foreground outline-none focus:border-ring focus:ring-1 focus:ring-ring">
              {cakeWeights.map((size) => <option key={size} value={size}>{size}</option>)}
            </select>
          </label>
          <p className="text-right text-sm font-semibold tabular-nums text-foreground"><span className="sr-only">Sample estimate </span>{formatRupees(estimateLineTotal(line))}</p>
        </div>
        <p className="mt-1 text-right text-[10px] text-muted-foreground">sample estimate</p>
        <Button onClick={() => onAdd(cake.id, weight)} variant="outline" className="mt-3 h-10 w-full justify-between rounded-sm border-border bg-background px-3.5 text-xs font-medium text-primary hover:border-primary hover:bg-secondary">
          <span className="inline-flex items-center gap-2"><ShoppingBag aria-hidden="true" className="size-3.5" /> Add to your bag</span><ArrowRight aria-hidden="true" className="size-3.5" />
        </Button>
      </div>
    </article>
  );
}

function Field({ label, name, error, type = "text", placeholder, maxLength, autoComplete }: {
  label: string;
  name: string;
  error?: string;
  type?: string;
  placeholder: string;
  maxLength: number;
  autoComplete: string;
}) {
  return (
    <label className="block text-sm font-medium text-foreground">
      {label}
      <input name={name} type={type} required placeholder={placeholder} autoComplete={autoComplete} maxLength={maxLength} aria-invalid={Boolean(error)} className="mt-1.5 block h-11 w-full border border-input bg-card px-3 text-sm font-normal text-foreground outline-none placeholder:text-muted-foreground/70 focus:border-ring focus:ring-1 focus:ring-ring" />
      {error && <span role="alert" className="mt-1 block text-xs font-normal text-destructive">{error}</span>}
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
        <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-secondary text-primary"><Check aria-hidden="true" className="size-6" strokeWidth={2} /></span>
        <p className="vault-display mt-4 text-[27px] leading-tight text-primary">Your request is with us, {receipt.customerName}.</p>
        <p className="mx-auto mt-2 max-w-[390px] text-sm leading-6 text-muted-foreground">Thank you for letting us be part of the moment. We’ve received your cake request.</p>
      </div>

      <div className="my-5 border border-border bg-card p-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Your request reference</p>
        <p className="mt-1 font-mono text-base font-semibold tracking-[0.08em] text-primary">{receipt.requestReference}</p>
        <p className="mt-1 text-xs leading-5 text-muted-foreground">Keep this handy in case you need to refer to your request.</p>
      </div>

      <div className="space-y-4 border-b border-border pb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-vault-rose">The details</p>
        {receipt.items.map((item) => (
          <div key={`${item.name}-${item.weight}`} className="flex justify-between gap-4 text-sm">
            <span className="text-foreground">{item.name}<span className="ml-1 text-muted-foreground">· {item.weight} × {item.quantity}</span></span>
            <span className="shrink-0 text-foreground">{formatRupees(item.estimatedLineTotal)}</span>
          </div>
        ))}
        <div className="flex justify-between border-t border-border pt-3 text-sm font-medium text-foreground"><span>Sample cake subtotal</span><span>{formatRupees(receipt.estimatedTotal)}</span></div>
      </div>

      <dl className="space-y-3 border-b border-border py-4 text-sm">
        <div><dt className="text-xs text-muted-foreground">Delivery address</dt><dd className="mt-1 leading-5 text-foreground">{receipt.deliveryAddress}</dd></div>
        <div><dt className="text-xs text-muted-foreground">Day you have in mind</dt><dd className="mt-1 text-foreground">{formattedDate ?? "Not specified"}</dd></div>
        {receipt.customerNote && <div><dt className="text-xs text-muted-foreground">Your note</dt><dd className="mt-1 leading-5 text-foreground">{receipt.customerNote}</dd></div>}
      </dl>

      <p className="mt-4 text-xs leading-5 text-muted-foreground">This is a request, not a confirmed order. Availability, final price, and delivery still need to be confirmed. Delivery is not included in the sample estimate, and no payment has been taken.</p>
      <Button onClick={onContinue} className="mt-6 h-12 w-full gap-2 rounded-sm">Back to the cakes <ArrowRight aria-hidden="true" className="size-4" /></Button>
    </div>
  );
}

function safeParseCartLine(value: unknown): CartLine | null {
  const parsed = cartLineSchema.safeParse(value);
  return parsed.success ? parsed.data : null;
}
