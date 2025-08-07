import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Polaroid } from "./polaroid"
import { Sun } from 'lucide-react'

export function Hero({
  heading = "REAL WEST",
  tagline = "From Mesa to Santa Fe — small-batch botanicals with a handshake and a smile.",
  description = "We source close to home, extract the slow way, and bottle what the desert actually smells like. No fluff. Just the good stuff.",
}: {
  heading?: string
  tagline?: string
  description?: string
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-stone-300/70 bg-hero-paper shadow-[0_10px_30px_-10px_rgba(87,65,39,0.18)]">
      {/* soft sun glow */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-amber-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 -bottom-20 h-72 w-72 rounded-full bg-emerald-300/25 blur-3xl" />

      <div className="grid gap-10 p-6 md:grid-cols-2 md:gap-12 md:p-12">
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-300/80 bg-amber-100/80 px-3 py-1 text-xs font-medium text-amber-900 shadow-sm">
            <Sun className="h-3.5 w-3.5" />
            {"Handcrafted in the Southwest"}
          </div>

          <h1 className="font-display mt-4 text-5xl font-bold leading-[1.05] text-stone-950 md:text-6xl">
            {heading}
          </h1>
          <p className="mt-3 text-lg text-stone-800">{tagline}</p>
          <p className="mt-4 max-w-prose text-stone-700">{description}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button asChild className="bg-emerald-700 text-white hover:bg-emerald-800">
              <Link href="/products">See the Current Drop</Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-stone-300 bg-white text-stone-900 hover:bg-amber-50"
            >
              <Link href="/process">How we make it</Link>
            </Button>
          </div>
        </div>

        {/* Sunlit pinboard with polaroids */}
        <div className="relative mx-auto grid w-full max-w-lg grid-cols-2 items-start gap-4">
          <Polaroid
            src="https://picsum.photos/seed/desert-bottle/900/700"
            alt="Bottle on windowsill"
            caption="Windowsill at noon, Mesa AZ"
            rotate={-3}
            className="col-span-1"
          />
          <Polaroid
            src="https://picsum.photos/seed/juniper/700/700"
            alt="Juniper sprigs"
            caption="Juniper after rain"
            rotate={5}
            className="col-span-1 translate-y-6"
          />
          <Polaroid
            src="https://picsum.photos/seed/citrus/900/700"
            alt="Hand-peeled citrus"
            caption="Hand‑peeled grapefruit"
            rotate={-1}
            className="col-span-2 -mt-2"
          />
          {/* little stamp */}
          <div className="pointer-events-none absolute -right-2 -bottom-4 rounded-full border-2 border-dashed border-emerald-700/50 bg-emerald-50/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-900">
            {"Small Batch • Numbered"}
          </div>
        </div>
      </div>
    </div>
  )
}
