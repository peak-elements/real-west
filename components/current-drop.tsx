import { Badge } from "@/components/ui/badge"
import { NewsletterForm } from "@/components/newsletter-form"

export function CurrentDrop({
  name = "Current Drop: Desert Citrus",
  subtitle = "Our founders collection. Limited batch, numbered bottles.",
  price = 75,
  compareAt = 150,
  limitedNote = "🏜️ Limited Edition",
}: {
  name?: string
  subtitle?: string
  price?: number
  compareAt?: number
  limitedNote?: string
}) {
  return (
    <div className="grid gap-6 rounded-3xl border border-stone-200/80 bg-gradient-to-br from-amber-50 via-white to-emerald-50 p-6 shadow-[0_10px_30px_-10px_rgba(16,24,16,0.12)] md:grid-cols-2 md:gap-10 md:p-10">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl ring-1 ring-stone-200/70 shadow-md">
        <img
          src="https://picsum.photos/seed/desert-citrus/900/700"
          alt="Desert Citrus bottle"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-center">
        <div className="mb-2">
          <Badge
            variant="secondary"
            className="bg-emerald-100 text-emerald-900 ring-1 ring-emerald-300/60"
          >
            {limitedNote}
          </Badge>
        </div>
        <h3 className="text-3xl font-bold text-stone-950">{name}</h3>
        <p className="mt-1 text-stone-700">{subtitle}</p>

        <div className="mt-4 space-y-2 text-sm text-stone-800">
          <div>
            {"Arizona grapefruit and orange with New Mexico juniper and sage. Cedarwood and bergamot base."}
          </div>
          <div>{"300+ natural compounds per ingredient."}</div>
        </div>

        <div className="mt-6 flex items-baseline gap-3">
          <div className="text-2xl font-semibold text-stone-950">${price}</div>
          <div className="text-sm text-stone-500 line-through">${compareAt}</div>
          <div className="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-900 ring-1 ring-amber-300/60">
            {"Founders pricing"}
          </div>
        </div>

        {/* Newsletter primary CTA (no reservations) */}
        <div className="mt-6 rounded-xl border border-stone-200/80 bg-white/70 p-4 shadow-sm">
          <div className="text-sm font-medium text-stone-900">Get notified when this batch drops</div>
          <p className="mt-1 text-xs text-stone-600">
            {"We announce to the newsletter first."}
          </p>
          <div className="mt-3">
            <NewsletterForm cta="Notify me" />
          </div>
        </div>
      </div>
    </div>
  )
}
