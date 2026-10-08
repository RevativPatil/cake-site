import { z } from "zod";

import poolCakeImage from "@/assets/vault-pool-cake.jpg";
import princessCakeImage from "@/assets/vault-princess-cake.jpg";
import butterflyCakeImage from "@/assets/vault-butterfly-cake.jpg";
import babyCakeImage from "@/assets/vault-baby-cake.jpg";
import cinderellaCakeImage from "@/assets/vault-cinderella-cake.png";
import tharCakeImage from "@/assets/cake-thar.png";
import tharHeroImage from "@/assets/cake-thar-hero.jpg";
import rasmalaiImage from "@/assets/cake-rasmalai.png";
import chocolateBerryImage from "@/assets/cake-truffle.png";
import reviewRasmalaiPhoto from "@/assets/review-rasmalai.png";
import reviewChocolatePhoto from "@/assets/review-chocolate.png";
// Real customer cake photos from The Cake Vault Google Reviews
import toyCakImage from "@/assets/cake-toy-car.png";
import realCinderellaImage from "@/assets/cake-cinderella.png";
import ombreSphereImage from "@/assets/cake-ombre-sphere.png";
import pinkMarbleImage from "@/assets/cake-pink-marble.png";
import elephantCakeImage from "@/assets/cake-elephant.png";

export const STORE_ADDRESS =
  "Moreyshree Shopping Centre, Lohegaon Road, Opposite Palladium Grand, Madhav Nagar, Dhanori, Pune, Maharashtra 411015";

export type StoreLocation = {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  category: string;
  priceRange?: string;
  address: string;
  area: string;
  phone: string;
  services?: string[];
  googleMapsUrl: string;
  mapEmbedUrl: string;
};

export const storeLocations: StoreLocation[] = [
  {
    id: "old-mundhwa",
    name: "The Cake Vault",
    rating: 4.9,
    reviewCount: 39,
    category: "Bakery and Cake Shop",
    address: "Shop no 9, shanti samarth complex, Old Mundhwa Rd, beside Old Relax hotel",
    area: "Old Mundhwa Road, Pune",
    phone: "+91 84830 97680",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=The+Cake+Vault+Shop+no+9+shanti+samarth+complex+Old+Mundhwa+Rd+beside+Old+Relax+hotel",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=The%20Cake%20Vault%20Shop%20no%209%20shanti%20samarth%20complex%20Old%20Mundhwa%20Rd%20beside%20Old%20Relax%20hotel&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  {
    id: "lohegaon-dhanori",
    name: "The cake vault",
    rating: 4.7,
    reviewCount: 174,
    priceRange: "₹200–1,400",
    category: "Cake shop",
    address: "Moreyshree shopping centre, Lohegaon Rd, opposite to palladium grand",
    area: "Lohegaon Road / Dhanori, Pune",
    phone: "+91 84830 97680",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=The+cake+vault+Moreyshree+shopping+centre+Lohegaon+Rd+opposite+to+palladium+grand",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=The%20cake%20vault%20Moreyshree%20shopping%20centre%20Lohegaon%20Rd%20opposite%20to%20palladium%20grand&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  {
    id: "pimpri-chinchwad",
    name: "The cake vault",
    rating: 4.8,
    reviewCount: 88,
    priceRange: "₹200–1,400",
    category: "Cake shop",
    address: "Pimpri-Chinchwad, Maharashtra",
    area: "Pimpri-Chinchwad",
    phone: "+91 84830 97680",
    services: ["Dine-in", "Takeaway"],
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=The+cake+vault+Pimpri-Chinchwad+Maharashtra",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=The%20cake%20vault%20Pimpri-Chinchwad%20Maharashtra&t=&z=14&ie=UTF8&iwloc=&output=embed",
  },
  {
    id: "ganesh-park",
    name: "The Cake Vault",
    rating: 5.0,
    reviewCount: 29,
    priceRange: "₹200–400",
    category: "Cake shop",
    address: "SHOP NO 2 GROUND FLOOR, GANESH PARK, opposite Govind Garden Road",
    area: "Ganesh Park / Govind Garden Road, Pune",
    phone: "+91 84830 97680",
    services: ["In-store shopping", "In-store pick-up", "Delivery"],
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=The+Cake+Vault+SHOP+NO+2+GROUND+FLOOR+GANESH+PARK+opposite+Govind+Garden+Road",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=The%20Cake%20Vault%20SHOP%20NO%202%20GROUND%20FLOOR%20GANESH%20PARK%20opposite%20Govind%20Garden%20Road&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  {
    id: "santosh-mangal",
    name: "the cake vault",
    rating: 5.0,
    reviewCount: 2,
    category: "Bakery and Cake Shop",
    address: "the cake vault, santosh mangal karyalay",
    area: "Santosh Mangal Karyalay, Pune",
    phone: "+91 84830 97680",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=the+cake+vault+santosh+mangal+karyalay",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=the%20cake%20vault%20santosh%20mangal%20karyalay&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
];

export const cakeCatalog = [
  {
    id: "thar-gwagon-hero",
    name: "Thar G-Wagon Designer Cake",
    description:
      "Signature creation from The Cake Vault: Tall white cream cake with dark chocolate shard border, chocolate soil, gold & silver metallic spheres and a real Thar G-Wagon toy on top.",
    image: tharHeroImage,
    estimateFor500g: 1150,
    occasions: ["Birthday", "Just because"],
    bestseller: true,
  },
  {
    id: "pool-party-pradarsh",
    name: "Custom Swimming Pool Designer Cake",
    description:
      "Official Signature Creation by The Cake Vault: Light blue cream finish with 3D swimming goggles, lifebuoy rings, ladder & custom 3D name lettering.",
    image: poolCakeImage,
    estimateFor500g: 950,
    occasions: ["Birthday", "Just because"],
  },
  {
    id: "princess-2tier-rose",
    name: "Royal 2-Tier Pink Princess Cake",
    description:
      "Handcrafted 2-tier white & blush pink princess theme cake with fresh pink roses, gold crown crest badge, pearls & edible ribbon bow.",
    image: princessCakeImage,
    estimateFor500g: 1250,
    occasions: ["Birthday", "Anniversary"],
    bestseller: true,
  },
  {
    id: "fairy-butterfly-3d",
    name: "Enchanted 3D Fairy Butterfly Cake",
    description:
      "Magical fairy castle door cake with handcrafted 3D purple & pink butterfly wings, golden disco spheres & edible flowers.",
    image: butterflyCakeImage,
    estimateFor500g: 1100,
    occasions: ["Birthday", "Just because"],
    bestseller: true,
  },
  {
    id: "welcome-baby-shower",
    name: "Welcome Home Baby Shower Cake",
    description:
      "Light blue whipped cream cake with baby figurine in a pram, balloon arch, gold 'Welcome Home / Oh Baby' topper & pearl drops.",
    image: babyCakeImage,
    estimateFor500g: 980,
    occasions: ["Birthday", "Just because"],
    bestseller: true,
  },
  {
    id: "cinderella-fairytale-noor",
    name: "Cinderella Fairytale Birthday Cake",
    description:
      "Tall white & lilac ombre cake with Cinderella castle, 3D butterflies, purple roses & golden medallion. Real creation from our store!",
    image: realCinderellaImage,
    estimateFor500g: 1050,
    occasions: ["Birthday", "Anniversary"],
  },
  {
    id: "toy-car-kids",
    name: "Toy Car Adventure Kids Cake",
    description:
      "Vibrant sky-blue fondant cake decorated with toy cars, traffic cones, road signs, trees & a custom 3D character figurine — perfect for little car lovers!",
    image: toyCakImage,
    estimateFor500g: 1080,
    occasions: ["Birthday", "Just because"],
    bestseller: true,
  },
  {
    id: "ombre-sphere-2tier",
    name: "Pink & Blue Ombre Sphere 2-Tier Cake",
    description:
      "Stunning 2-tier pink-to-blue ombre cake adorned with pastel spheres, golden chrome balls & scattered gold leaf — a showstopper for any celebration.",
    image: ombreSphereImage,
    estimateFor500g: 1350,
    occasions: ["Birthday", "Anniversary", "Wedding"],
    bestseller: true,
  },
  {
    id: "pink-marble-rose-shrauya",
    name: "Pink Marble Rose 2-Tier Luxury Cake",
    description:
      "Handcrafted 2-tier pink marble-effect cake with gold fault lines, fresh sugar roses, baby's breath flowers & silver pearl garlands. A true masterpiece.",
    image: pinkMarbleImage,
    estimateFor500g: 1500,
    occasions: ["Birthday", "Anniversary", "Wedding"],
    bestseller: true,
  },
  {
    id: "elephant-first-birthday",
    name: "Baby Elephant 'ONE' First Birthday Cake",
    description:
      "Adorable sky-blue fondant first birthday cake with a cute baby elephant topper, yellow daisies, clouds & a golden ladder — perfect for baby's first milestone!",
    image: elephantCakeImage,
    estimateFor500g: 980,
    occasions: ["Birthday", "Just because"],
    bestseller: true,
  },
  {
    id: "thar-suv-designer",
    name: "Thar SUV Adventure Cake",
    description:
      "Tall white cylindrical designer cake with chocolate drip, black Thar SUV toy car, gold metallic spheres & chocolate soil.",
    image: tharCakeImage,
    estimateFor500g: 1150,
    occasions: ["Birthday", "Just because"],
    bestseller: true,
  },
  {
    id: "rasmalai",
    name: "Puneri Fresh Rasmalai Cake",
    description:
      "Authentic Indian dessert fusion cake soaked in saffron cardamom milk with pistachios and almond flakes.",
    image: rasmalaiImage,
    estimateFor500g: 900,
    occasions: ["Birthday", "Wedding", "Just because"],
    bestseller: true,
  },
  {
    id: "chocolate-berry",
    name: "Dark Chocolate Truffle Cake",
    description:
      "Rich 100% eggless Belgian chocolate centrepiece topped with dark ganache drip and rosettes.",
    image: chocolateBerryImage,
    estimateFor500g: 780,
    occasions: ["Birthday", "Anniversary"],
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
  deliveryAddress: z.string().trim().min(10, "Please enter a complete delivery address.").max(500),
  requestedDate: z.union([z.string().date(), z.literal("")]).optional(),
  customerNote: z.string().trim().max(500, "Keep your note under 500 characters."),
  items: z.array(orderRequestItemSchema).min(1).max(20),
});

export type CakeOrderRequest = z.infer<typeof cakeOrderRequestSchema>;

export const customCakeFlavours = [
  "Rich Chocolate Fudge",
  "Velvet Red Vanilla",
  "Rasmalai Cardamom Saffron",
  "Fresh Strawberry Vanilla",
  "Belgian Dark Chocolate",
  "Mango Passionfruit",
] as const;

export const customCakeFrostings = [
  "Whipped Cream (Light)",
  "Swiss Cream Buttercream",
  "Belgian Chocolate Ganache",
  "Cream Cheese Frosting",
] as const;

export type CustomerReview = {
  id: string;
  author: string;
  locationId: string;
  locationName: string;
  rating: number;
  date: string;
  comment: string;
  cakeOrdered: string;
  verified: boolean;
  photoUrl?: string;
};

export const customerReviews: CustomerReview[] = [
  {
    id: "rev-1",
    author: "Pooja Sharma",
    locationId: "lohegaon-dhanori",
    locationName: "Moreyshree Centre, Dhanori",
    rating: 5,
    date: "2 days ago",
    comment:
      "Ordered the Rasmalai Cake for my mother's 50th birthday. The saffron cream and soft sponge were absolute perfection! Everyone at the party asked where we got it.",
    cakeOrdered: "Rasmalai Cake (1 kg)",
    verified: true,
    photoUrl: reviewRasmalaiPhoto,
  },
  {
    id: "rev-2",
    author: "Rohan Deshmukh",
    locationId: "old-mundhwa",
    locationName: "Old Mundhwa Rd",
    rating: 5,
    date: "1 week ago",
    comment:
      "Chocolate Berry Cake was super fresh, decadent, and not overly sweet. The presentation was 10/10. Definitely our go-to cake shop in Mundhwa now!",
    cakeOrdered: "Chocolate Berry Cake (500 g)",
    verified: true,
    photoUrl: reviewChocolatePhoto,
  },
  {
    id: "rev-3",
    author: "Ananya Kulkarni",
    locationId: "pimpri-chinchwad",
    locationName: "Pimpri-Chinchwad",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "Ordered the 2-Tier Princess cake for my daughter's 3rd birthday. The finish, pearls, and fresh roses were breathtaking! Everyone at the venue praised the detail.",
    cakeOrdered: "2-Tier Pink Princess Cake (2 kg)",
    verified: true,
    photoUrl: princessCakeImage,
  },
  {
    id: "rev-4",
    author: "Vikram Patil",
    locationId: "ganesh-park",
    locationName: "Ganesh Park, Govind Garden Rd",
    rating: 5,
    date: "3 weeks ago",
    comment:
      "The 3D Fairy Butterfly Cake was a showstopper! Handcrafted wings and purple door looked straight out of a storybook. 100% recommended!",
    cakeOrdered: "Enchanted 3D Fairy Butterfly Cake (1.5 kg)",
    verified: true,
    photoUrl: butterflyCakeImage,
  },
  {
    id: "rev-5",
    author: "Priya Mehta",
    locationId: "lohegaon-dhanori",
    locationName: "Moreyshree Centre, Dhanori",
    rating: 5,
    date: "1 month ago",
    comment:
      "Ordered the 2-tier Pink & Blue Ombre Sphere cake for our anniversary. It was beyond beautiful — the chrome gold spheres and pastel gradient were exactly what I envisioned. Taste was equally amazing!",
    cakeOrdered: "Pink & Blue Ombre Sphere 2-Tier Cake (2 kg)",
    verified: true,
    photoUrl: ombreSphereImage,
  },
  {
    id: "rev-6",
    author: "Sneha Joshi",
    locationId: "old-mundhwa",
    locationName: "Old Mundhwa Rd",
    rating: 5,
    date: "1 month ago",
    comment:
      "Got the Pink Marble Rose Cake for Shrauya's birthday — it was absolutely gorgeous! The gold fault lines, fresh sugar roses and baby's breath flowers made it look like a wedding cake. Taste was divine. Highly recommended!",
    cakeOrdered: "Pink Marble Rose 2-Tier Luxury Cake (2.5 kg)",
    verified: true,
    photoUrl: pinkMarbleImage,
  },
  {
    id: "rev-7",
    author: "Rahul Nair",
    locationId: "pimpri-chinchwad",
    locationName: "Pimpri-Chinchwad",
    rating: 5,
    date: "6 weeks ago",
    comment:
      "The Baby Elephant cake for my son Jinay's first birthday was so adorable! The fondant details were perfect — sky blue, little elephant on top with yellow daisies. Everyone loved it!",
    cakeOrdered: "Baby Elephant 'ONE' First Birthday Cake (1 kg)",
    verified: true,
    photoUrl: elephantCakeImage,
  },
];

export function getCake(productId: string) {
  if (productId === "custom-cake") {
    return {
      id: "custom-cake",
      name: "Custom Bespoke Cake",
      description: "Baked to your custom flavor, size, frosting, and inscription request.",
      image: chocolateBerryImage,
      estimateFor500g: 850,
      occasions: ["Birthday", "Anniversary", "Wedding", "Just because"] as const,
    };
  }
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
