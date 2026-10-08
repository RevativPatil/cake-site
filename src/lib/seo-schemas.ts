export const bakerySchema = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  "@id": "https://thecakevault.in/#bakery",
  name: "The Cake Vault",
  url: "https://thecakevault.in",
  logo: "https://thecakevault.in/favicon.ico",
  image: "https://thecakevault.in/og-image.png",
  description:
    "Top-rated bakery and cake shop in Pune with 5 verified locations (Lohegaon Rd / Dhanori, Old Mundhwa Rd, Pimpri-Chinchwad, Ganesh Park, Santosh Mangal Karyalay). Fresh 100% eggless cakes, custom birthday designer cakes, Rasmalai cakes & same-day delivery.",
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
    "Rasmalai cake shop Pune",
  ],
  areaServed: [
    "Dhanori, Pune",
    "Lohegaon Road, Pune",
    "Old Mundhwa Road, Pune",
    "Pimpri-Chinchwad",
    "Ganesh Park, Pune",
    "Santosh Mangal Karyalay, Pune",
    "Pune, Maharashtra",
  ],
  servesCuisine: [
    "Bakery",
    "Custom Cakes",
    "Designer Birthday Cakes",
    "Eggless Cakes",
    "Rasmalai Fusion Cakes",
    "Desserts",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 18.5204303,
    longitude: 73.8567437,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "332",
    bestRating: "5",
    worstRating: "1",
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
        addressCountry: "IN",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "39",
      },
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
        addressCountry: "IN",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.7",
        reviewCount: "174",
      },
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
        addressCountry: "IN",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "88",
      },
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
        addressCountry: "IN",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "29",
      },
    },
    {
      "@type": "Bakery",
      name: "The Cake Vault - Santosh Mangal Karyalay",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Near Santosh Mangal Karyalay",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "2",
      },
    },
  ],
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far in advance should I place a custom cake request at The Cake Vault?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For standard menu cakes, same-day delivery or pickup is often available (with 2-4 hours advance notice). For custom bespoke designs or double-tiered cakes, we recommend placing your request 24 to 48 hours in advance.",
      },
    },
    {
      "@type": "Question",
      name: "Are eggless cake options available at all store locations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! All signature flavours and custom cakes can be prepared 100% eggless upon request. Just mention your dietary preference when ordering.",
      },
    },
    {
      "@type": "Question",
      name: "Can I collect my order directly from a store location?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! You can choose in-store pickup at any of our 5 verified store locations (Dhanori, Old Mundhwa Rd, Pimpri-Chinchwad, Ganesh Park, or Santosh Mangal Karyalay) or opt for safe doorstep delivery.",
      },
    },
    {
      "@type": "Question",
      name: "How can I track my cake order status?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enter your reference number (e.g. TCV-100245) into our live Order Request Tracker at the top of the website to view step-by-step progress from crafting to dispatch.",
      },
    },
  ],
};

export const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "Fresh Cream Rasmalai Fusion Cake",
        description:
          "Cardamom-infused sponge soaked in saffron milk, layered with authentic rasmalai pieces and roasted pistachios.",
        image: "https://thecakevault.in/cake-rasmalai.jpg",
        offers: {
          "@type": "Offer",
          price: "650",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "Belgian Dark Chocolate Truffle Cake",
        description:
          "Rich 70% dark Belgian chocolate ganache layered with moist chocolate sponge and cocoa nib crunch.",
        image: "https://thecakevault.in/cake-truffle.jpg",
        offers: {
          "@type": "Offer",
          price: "580",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Product",
        name: "Royal Red Velvet Cream Cheese Cake",
        description:
          "Crimson velvet sponge with real cream cheese frosting, subtle cocoa notes, and red velvet crumb crown.",
        image: "https://thecakevault.in/cake-velvet.jpg",
        offers: {
          "@type": "Offer",
          price: "620",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Product",
        name: "Exotic Fresh Fruit Garden Cake",
        description:
          "Light vanilla chiffon filled with vanilla bean whipped cream and topped with kiwi, berries, mango, and dragonfruit.",
        image: "https://thecakevault.in/cake-fruit.jpg",
        offers: {
          "@type": "Offer",
          price: "590",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      },
    },
  ],
};
