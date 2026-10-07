import { describe, expect, it } from "vitest";

import {
  cakeCatalog,
  cakeOrderRequestSchema,
  estimateCartTotal,
} from "@/lib/cake-store";

describe("cake checkout safeguards", () => {
  it("keeps the displayed sample estimate consistent for selected size and quantity", () => {
    const cake = cakeCatalog.find((item) => item.id === "chocolate-berry");

    expect(cake?.estimateFor500g).toBe(780);
    expect(estimateCartTotal([{ productId: "chocolate-berry", weight: "500 g", quantity: 2 }])).toBe(1560);
    expect(estimateCartTotal([{ productId: "chocolate-berry", weight: "1 kg", quantity: 1 }])).toBe(1365);
  });

  it("rejects an order request without a valid way to contact the customer", () => {
    const result = cakeOrderRequestSchema.safeParse({
      customerName: "A",
      customerEmail: "not-an-email",
      customerPhone: "123",
      deliveryAddress: "Too short",
      requestedDate: "",
      customerNote: "",
      items: [{ productId: "chocolate-berry", weight: "500 g", quantity: 1 }],
    });

    expect(result.success).toBe(false);
  });

  it("accepts a complete request with an item from the current sample menu", () => {
    const result = cakeOrderRequestSchema.safeParse({
      customerName: "Ananya Rao",
      customerEmail: "ananya@example.com",
      customerPhone: "+91 98765 43210",
      deliveryAddress: "Moreyshree Shopping Centre, Dhanori, Pune 411015",
      requestedDate: "",
      customerNote: "Please add a handwritten note.",
      items: [{ productId: "rasmalai", weight: "1 kg", quantity: 1 }],
    });

    expect(result.success).toBe(true);
  });
});