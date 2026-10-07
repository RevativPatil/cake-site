import { z } from "zod";

import chocolateBerryImage from "@/assets/vault-hero.jpg";
import redVelvetImage from "@/assets/cake-velvet.jpg";
import rasmalaiImage from "@/assets/cake-rasmalai.jpg";
import fruitCakeImage from "@/assets/cake-fruit.jpg";

export const STORE_ADDRESS =
  "Moreyshree Shopping Centre, Lohegaon Road, Opposite Palladium Grand, Madhav Nagar, Dhanori, Pune, Maharashtra 411015";

export const cakeCatalog = [
  {
    id: "chocolate-berry",
    name: "Chocolate Berry Cake",
    description: "A rich chocolate centrepiece with a berry-topped finish.",
    image: chocolateBerryImage,
    estimateFor500g: 780,
    occasions: ["Birthday", "Anniversary", "Just because"],
  },
  {
    id: "red-velvet",
    name: "Red Velvet Cake",
    description: "Deep red layers, a softly dressed finish, and a reason to gather.",
    image: redVelvetImage,
    estimateFor500g: 820,
    occasions: ["Birthday", "Anniversary"],
  },
  {
    id: "rasmalai",
    name: "Rasmalai Cake",
    description: "A celebration-ready cake inspired by the much-loved Indian dessert.",
    image: rasmalaiImage,
    estimateFor500g: 900,
    occasions: ["Birthday", "Wedding", "Just because"],
  },
  {
    id: "fresh-fruit",
    name: "Fresh Fruit Cake",
    description: "A light-looking, fruit-topped centrepiece for sharing around the table.",
    image: fruitCakeImage,
    estimateFor500g: 800,
    occasions: ["Birthday", "Just because"],
  },
] as const;

export const cakeWeights = ["500 g", "1 kg"] as const;
export type CakeWeight = (typeof cakeWeights)[number];

export const cartLineSchema = z.object({
  productId: z.string().min(1).max(40),
  weight: z.enum(cakeWeights),
  quantity: z.number().int().min(1).max(20),
});

export type CartLine = z.infer<typeof cartLineSchema>;

const orderRequestItemSchema = cartLineSchema;

export const cakeOrderRequestSchema = z.object({
  customerName: z.string().trim().min(2, "Please enter your name.").max(100),
  customerEmail: z.string().trim().email("Please enter a valid email address.").max(254),
  customerPhone: z
    .string()
    .trim()
    .min(10, "Please enter a phone number with 10–15 digits.")
    .max(30)
    .regex(/^[0-9()+.\s-]+$/, "Please check the phone number.")
    .refine((value) => {
      const digits = value.replace(/\D/g, "").length;
      return digits >= 10 && digits <= 15;
    }, "Please enter a phone number with 10–15 digits."),
  deliveryAddress: z
    .string()
    .trim()
    .min(10, "Please enter a complete delivery address.")
    .max(500),
  requestedDate: z.union([z.string().date(), z.literal("")]).optional(),
  customerNote: z.string().trim().max(500, "Keep your note under 500 characters."),
  items: z.array(orderRequestItemSchema).min(1).max(20),
});

export type CakeOrderRequest = z.infer<typeof cakeOrderRequestSchema>;

export function getCake(productId: string) {
  return cakeCatalog.find((cake) => cake.id === productId);
}

export function estimateLineTotal(line: CartLine) {
  const cake = getCake(line.productId);
  if (!cake) return 0;
  const sizeMultiplier = line.weight === "1 kg" ? 1.75 : 1;
  return Math.round(cake.estimateFor500g * sizeMultiplier) * line.quantity;
}

export function estimateCartTotal(items: CartLine[]) {
  return items.reduce((total, line) => total + estimateLineTotal(line), 0);
}

export function formatRupees(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
