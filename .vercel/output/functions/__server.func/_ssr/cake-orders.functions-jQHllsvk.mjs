import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-Co30mfp4.mjs";
import { t as createClient } from "./dist-CXGiAGKm.mjs";
import { c as estimateCartTotal, d as getCake, n as cakeOrderRequestSchema } from "./cake-store-SsTuJcmH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cake-orders.functions-jQHllsvk.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var submitCakeOrderRequest_createServerFn_handler = createServerRpc({
	id: "c4f962364d2c89600e953e9a94fe8bad3185671d0346de51a65ef9c286259079",
	name: "submitCakeOrderRequest",
	filename: "src/lib/cake-orders.functions.ts"
}, (opts) => submitCakeOrderRequest.__executeServer(opts));
var submitCakeOrderRequest = createServerFn({ method: "POST" }).inputValidator((input) => cakeOrderRequestSchema.parse(input)).handler(submitCakeOrderRequest_createServerFn_handler, async ({ data }) => {
	const url = process.env["SUPABASE_URL"];
	const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
	if (!url || !key) throw new Error("Order requests are unavailable right now. Please try again shortly.");
	const supabasePublic = createClient(url, key, { auth: {
		persistSession: false,
		autoRefreshToken: false
	} });
	const items = data.items.map((item) => {
		const cake = getCake(item.productId);
		return {
			product: cake?.name ?? "",
			weight: item.weight,
			quantity: item.quantity,
			estimated_line_total_inr: Math.round((cake?.estimateFor500g ?? 0) * (item.weight === "1 kg" ? 1.75 : 1)) * item.quantity
		};
	});
	if (data.items.some((item) => !getCake(item.productId))) throw new Error("One of the cakes in your bag is no longer available. Please review it and try again.");
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
		status: "request_received"
	});
	if (error) throw new Error("We couldn't send your request just now. Please try again; your bag is still here.");
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
			estimatedLineTotal: Math.round((getCake(item.productId)?.estimateFor500g ?? 0) * (item.weight === "1 kg" ? 1.75 : 1)) * item.quantity
		})),
		estimatedTotal: estimateCartTotal(data.items)
	};
});
//#endregion
export { submitCakeOrderRequest_createServerFn_handler };
