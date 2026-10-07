import { createClient } from "@supabase/supabase-js";
import { createServerFn } from "@tanstack/react-start";

import type { Database, Json } from "@/integrations/supabase/types";
import {
  cakeOrderRequestSchema,
  estimateCartTotal,
  getCake,
} from "@/lib/cake-store";

export const submitCakeOrderRequest = createServerFn({ method: "POST" })
  .inputValidator((input) => cakeOrderRequestSchema.parse(input))
  .handler(async ({ data }) => {
    const url = process.env["SUPABASE_URL"];
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"];

    if (!url || !key) {
      throw new Error("Order requests are unavailable right now. Please try again shortly.");
    }

    const supabasePublic = createClient<Database>(url, key, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    const items: Json = data.items.map((item) => {
      const cake = getCake(item.productId);
      return {
        product: cake?.name ?? "",
        weight: item.weight,
        quantity: item.quantity,
        estimated_line_total_inr: Math.round(
          (cake?.estimateFor500g ?? 0) * (item.weight === "1 kg" ? 1.75 : 1),
        ) * item.quantity,
      };
    });

    if (data.items.some((item) => !getCake(item.productId))) {
      throw new Error("One of the cakes in your bag is no longer available. Please review it and try again.");
    }

    const requestReference = `TCV-${globalThis.crypto.randomUUID().toUpperCase()}`;
    const { error } = await supabasePublic.from("cake_order_requests").insert({
      request_reference: requestReference,
      customer_name: data.customerName,
      customer_email: data.customerEmail,
      customer_phone: data.customerPhone,
      delivery_address: data.deliveryAddress,
      requested_date: data.requestedDate || null,
      customer_note: data.customerNote,
      items,
      estimated_total_inr: estimateCartTotal(data.items),
      status: "request_received",
    });

    if (error) {
      throw new Error("We couldn't send your request just now. Please try again; your bag is still here.");
    }

    return {
      requestReference,
      customerName: data.customerName,
      deliveryAddress: data.deliveryAddress,
      requestedDate: data.requestedDate || null,
      customerNote: data.customerNote,
      items: data.items.map((item) => ({
        name: getCake(item.productId)?.name ?? "Cake",
        weight: item.weight,
        quantity: item.quantity,
        estimatedLineTotal: Math.round(
          (getCake(item.productId)?.estimateFor500g ?? 0) * (item.weight === "1 kg" ? 1.75 : 1),
        ) * item.quantity,
      })),
      estimatedTotal: estimateCartTotal(data.items),
    };
  });
