import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ProcessTeaser() {
  return (
    <div className="rounded-2xl border border-neutral-200/70 bg-white p-5 md:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-neutral-900">Our Process</h3>
          <p className="mt-1 max-w-2xl text-neutral-700">
            {"Cold maceration preserves what heat destroys—capturing 300+ natural compounds per ingredient."}
          </p>
          <ul className="mt-3 grid gap-2 text-sm text-neutral-700 md:grid-cols-2">
            <li>{"• Tiered sourcing: Local first, USA second, imports only when necessary"}</li>
            <li>{"• Cold maceration extraction—time to preserve compounds"}</li>
            <li>{"• 300+ compounds vs 50–100 from essential oils"}</li>
            <li>{"• Water-soluble aromatics and natural fixatives preserved"}</li>
          </ul>
        </div>
        <div className="shrink-0">
          <Button asChild className="bg-neutral-900 text-white hover:bg-neutral-800">
            <Link href="/process">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
