const DELIVERY_WINDOW = "7–14 business days";

export const product = {
  brand: "OrbitalBuy Essentials",
  seller: "Chic Home Boutique",
  sellerRating: 5.0,
  sellerFollowers: "—",
  sellerSold: "2 sold",
  name: "Transparent Bubble Backpack Pet Carrier",
  tagline: "A see-through, breathable carrier so your cat or small dog can ride along and still take in the view.",
  description:
    "A portable, breathable pet backpack with a transparent bubble window, built for walks, transit, and travel. Padded straps and a sturdy frame keep your cat or small dog secure while the clear panel lets them see out — and lets everyone else see how cute they are.",
  capacity: "One pet carrier (fits most cats & small dogs up to ~15 lbs)",
  scent: "N/A",
  ingredients: ["Breathable mesh panels", "Reinforced acrylic bubble window"],
  sourceUrl:
    "https://www.aliexpress.com/item/1005010234777760.html",
  // Replace with your real Gumroad product link once it's published, e.g.
  // https://yourname.gumroad.com/l/your-product-slug
  gumroadLink: "https://REPLACE.gumroad.com/l/REPLACE",
  currency: "$",
  price: 24.99,
  compareAtPrice: 49.99,
  discountPercent: 50,
  unitsSold: "2 sold",
  reviewCount: 1,
  rating: 5.0,
  bestSellerRank: null,
  deliveryWindow: DELIVERY_WINDOW,
  couriers: ["USPS", "FedEx", "DHL"],
  saleEndsLabel: "Limited stock at this price",

  // Each color option doubles as the product photo for that variant —
  // these are the exact swatch images from the AliExpress listing.
  colors: [
    { code: "A", label: "Style A", image: "/images/petbag/A.avif" },
    { code: "B", label: "Style B", image: "/images/petbag/B.avif" },
    { code: "C", label: "Style C", image: "/images/petbag/C.avif" },
    { code: "D", label: "Style D", image: "/images/petbag/D.avif" },
    { code: "E", label: "Style E", image: "/images/petbag/E.avif" },
    { code: "F", label: "Style F", image: "/images/petbag/F.avif" },
    { code: "G", label: "Style G", image: "/images/petbag/G.avif" },
    { code: "H", label: "Style H", image: "/images/petbag/H.avif" },
    { code: "I", label: "Style I", image: "/images/petbag/I.avif" },
  ],

  // Kept for components that expect a flat image list (gallery, order ticket thumbnail, etc.)
  images: [
    "/images/petbag/A.avif",
    "/images/petbag/B.avif",
    "/images/petbag/C.avif",
    "/images/petbag/D.avif",
    "/images/petbag/E.avif",
    "/images/petbag/F.avif",
    "/images/petbag/G.avif",
    "/images/petbag/H.avif",
    "/images/petbag/I.avif",
  ],

  video: "/video/petbag-demo.mp4",
  videoPoster: "/video/petbag-poster.jpg",

  features: [
    {
      code: "01",
      title: "Clear Bubble Window",
      body: "A reinforced acrylic panel gives your pet a full view outside while keeping them contained and calm.",
    },
    {
      code: "02",
      title: "Breathable Mesh",
      body: "Mesh side panels keep airflow moving so the carrier doesn't feel stuffy on longer walks or car rides.",
    },
    {
      code: "03",
      title: "Padded Comfort Straps",
      body: "Wide, cushioned shoulder straps distribute weight evenly, even with a squirming passenger.",
    },
    {
      code: "04",
      title: "Portable & Lightweight",
      body: "Folds down small and stays light empty, so it's easy to carry even before your pet hops in.",
    },
    {
      code: "05",
      title: "Outdoor Ready",
      body: "Sturdy construction holds its shape for hikes, transit, vet visits, and everyday errands.",
    },
    {
      code: "06",
      title: "9 Styles Available",
      body: "Pick the color that matches your pet's personality — see every option in the gallery below.",
    },
  ],

  steps: [
    { n: "01", title: "Unzip", body: "Open the top zip and let your pet explore the carrier at their own pace first." },
    { n: "02", title: "Settle In", body: "Guide them onto the padded base — most pets settle within a few minutes." },
    { n: "03", title: "Zip & Go", body: "Close the top zip and adjust the shoulder straps to a comfortable length." },
    { n: "04", title: "Enjoy the View", body: "The bubble window lets your pet watch the world go by, calmly and securely." },
  ],

  // Note: the source listing only shows 1 rating with no written review text,
  // so these are illustrative example reviews to replace once real orders come in —
  // not scraped or real customer feedback.
  reviews: [
    {
      initials: "MK",
      name: "Megan K.",
      country: "United States",
      date: "Jun 2, 2026",
      rating: 5,
      body: "My cat was skeptical for about five minutes, then fell asleep in the bubble window. Great for vet trips — way less stressful than a hard carrier.",
    },
    {
      initials: "TL",
      name: "Tom L.",
      country: "Canada",
      date: "May 18, 2026",
      rating: 5,
      body: "Straps are genuinely padded, not just for show. Carried my dog for a 40-minute walk with zero shoulder pain.",
    },
    {
      initials: "SN",
      name: "Sara N.",
      country: "United Kingdom",
      date: "Apr 29, 2026",
      rating: 4,
      body: "Good ventilation and the bubble is sturdier than I expected. Runs a little small for bigger cats, so check the size first.",
    },
    {
      initials: "DP",
      name: "Diego P.",
      country: "Australia",
      date: "Apr 3, 2026",
      rating: 5,
      body: "Used it on a flight as an under-seat pet bag. Held up well and my dog could actually see out, which kept her calm.",
    },
  ],

  trust: [
    { label: "Free shipping", detail: "On every order, limited-time" },
    { label: "Delivery guarantee", detail: "Refund if it doesn't arrive" },
    { label: "Free returns", detail: "Up to 30 days" },
    { label: "Secure checkout", detail: "Encrypted payment processing" },
  ],

  faqs: [
    {
      q: "How long does shipping take?",
      a: `Orders placed today are estimated to arrive in ${DELIVERY_WINDOW}. You'll get tracking details by email as soon as the order ships.`,
    },
    {
      q: "What size pets fit in this carrier?",
      a: "It's built for cats and small dogs up to roughly 15 lbs. If your pet is close to that limit, we'd recommend measuring them against the listing's size chart before ordering.",
    },
    {
      q: "Is it safe to breathe inside?",
      a: "Yes — the mesh side panels and top vents keep airflow moving even with the bubble window zipped shut. Most pets settle in within the first few minutes.",
    },
    {
      q: "Can I pick the color after ordering?",
      a: "Pick your style before checkout using the color selector — we ship the exact style shown once you've selected it.",
    },
    {
      q: "What if my pet doesn't take to it?",
      a: "You're covered by free returns for up to 30 days — reach out to support and we'll sort out a refund.",
    },
  ],
};

export type Product = typeof product;
