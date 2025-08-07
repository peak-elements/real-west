export type Post = {
  slug: string
  title: string
  date: string
  category: string
  summary: string
  content: Array<{ type: "h2" | "p" | "ul" | "li" | "hr"; text?: string }>
}

export const posts: Post[] = [
  {
    slug: "why-we-started-real-west",
    title: "Why We Started Real West: A Gaming Origin Story",
    date: "December 15, 2024",
    category: "Origin Story",
    summary:
      "Two gamers got tired of cringe cologne ads and decided to make something real. Late-night Discord calls turned into a fragrance company.",
    content: [
      { type: "p", text: "It started with a YouTube ad... cringe lab coats and ancient formulas." },
      { type: "p", text: "Our Discord became a fragrance lab notebook, shipping extracts AZ ↔ NM." },
      { type: "p", text: "After 47 iterations, we bottled the Southwest after rain—honest, clean, real." },
    ],
  },
  {
    slug: "the-art-of-citrus-extraction",
    title: "The Art of Citrus Extraction: Why We Hand-Peel Everything",
    date: "December 10, 2024",
    category: "Process",
    summary:
      "Machine extraction is faster, but hand-peeling at peak ripeness creates oils that actually smell like fresh fruit.",
    content: [
      { type: "p", text: "Industrial methods are fast and cheap but flatten complexity." },
      { type: "p", text: "We hand-peel at peak ripeness, cold-pressing immediately to preserve volatiles." },
      { type: "p", text: "It takes ~50 oranges per bottle—small batch by necessity, not marketing." },
    ],
  },
  {
    slug: "desert-botanicals-goldmine",
    title: "Desert Botanicals: The Unexpected Fragrance Goldmine",
    date: "December 5, 2024",
    category: "Ingredients",
    summary:
      "The Southwest is a biodiverse scent library—juniper, desert sage, four o’clock, epazote, desert willow, and more.",
    content: [
      { type: "p", text: "The desert is anything but barren—it's aromatically rich and nuanced." },
      { type: "p", text: "New Mexico juniper differs from gin juniper—clean, resinous, cedar-pine hints." },
      { type: "p", text: "Timing is everything; each plant peaks briefly, guiding our calendar." },
    ],
  },
  {
    slug: "why-we-will-never-scale",
    title: "Why We'll Never Scale: The Small Batch Philosophy",
    date: "November 28, 2024",
    category: "Philosophy",
    summary:
      "Scaling would force compromises we won’t make. We prefer integrity over scale.",
    content: [
      { type: "p", text: "Scaling means synthetics, warehouses, and compromises—everything we avoid." },
      { type: "p", text: "We make what nature provides, when it provides it—some years 200 bottles, some 50." },
      { type: "p", text: "Value lives in staying small, staying real, and staying true." },
    ],
  },
  {
    slug: "seasonal-fragrance-calendar",
    title: "Our Seasonal Fragrance Calendar: What to Expect When",
    date: "November 20, 2024",
    category: "Process",
    summary:
      "We operate on nature’s schedule, not retail calendars. Here’s our year at a glance.",
    content: [
      { type: "h2", text: "Spring (Mar–May): Citrus Season" },
      { type: "p", text: "Peak brightness and volatility—grapefruit, oranges, bergamot." },
      { type: "h2", text: "Summer (Jun–Aug): Desert Bloom" },
      { type: "p", text: "Delicate botanicals—four o’clock, desert willow—heat brings challenges." },
      { type: "h2", text: "Fall (Sep–Nov): Botanical Harvest" },
      { type: "p", text: "Juniper berries ripen; sage at peak potency; cooler work." },
      { type: "h2", text: "Winter (Dec–Feb): Extraction & Blending" },
      { type: "p", text: "Quiet season—processing, tinctures, formulation, and planning." },
    ],
  },
  {
    slug: "fragrance-vs-cologne",
    title: "Fragrance vs. Cologne: Why We Use Both Terms",
    date: "November 15, 2024",
    category: "Education",
    summary:
      "Terminology matters less than concentration and longevity—ours sits near eau de parfum strength without heaviness.",
    content: [
      { type: "p", text: "“Cologne” vs “fragrance” is often semantics; we welcome everyone." },
      { type: "p", text: "Desert Citrus is ~15% aromatics—EDP longevity with fresh character." },
      { type: "p", text: "Natural oils interact with skin chemistry; variation is a feature, not a bug." },
    ],
  },
]
