import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Section } from "@/components/section"
import { Badge } from "@/components/ui/badge"
import { NewsletterForm } from "@/components/newsletter-form"

export default function ProductsPage() {
  return (
    <main>
      <SiteHeader />
      <Section className="pt-10 md:pt-14">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-stone-950">Our Products</h1>
          <p className="mt-2 text-stone-700">
            Limited drops. Real ingredients. No warehouses full of synthetic stock.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 rounded-3xl border border-stone-200/80 bg-white p-6 shadow-sm md:grid-cols-2 md:gap-10 md:p-10">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl ring-1 ring-stone-200/70 shadow-md">
            <img
              src="https://picsum.photos/seed/founders-desert-citrus/900/700"
              alt="Founders Collection: Desert Citrus"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <div className="mb-2">
              <Badge
                variant="secondary"
                className="bg-emerald-100 text-emerald-900 ring-1 ring-emerald-300/60"
              >
                🏜️ Limited Edition
              </Badge>
            </div>
            <h2 className="text-2xl font-bold text-stone-950">Founders Collection: Desert Citrus</h2>
            <p className="mt-2 text-stone-700">
              Arizona grapefruit and orange meet New Mexico juniper and sage. Grounded with
              cedarwood and bergamot.
            </p>
            <div className="mt-4 flex items-baseline gap-3">
              <div className="text-2xl font-semibold text-stone-950">$75</div>
              <div className="text-sm text-stone-500 line-through">$150</div>
              <div className="text-xs text-emerald-800">50% OFF — Founders pricing</div>
            </div>
            <div className="mt-3 text-sm text-amber-800">
              {"⚠️ Extremely Limited: Only 100 bottles. This exact batch will never exist again."}
            </div>

            {/* Newsletter instead of reservations */}
            <div id="newsletter" className="mt-6 rounded-xl border border-stone-200/80 bg-emerald-50/70 p-5">
              <h3 className="text-base font-semibold text-stone-950">Be first to know</h3>
              <p className="mt-1 text-sm text-stone-700">
                We email the list when bottles go live.
              </p>
              <div className="mt-4">
                <NewsletterForm cta="Notify me" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-4xl">
          <h3 className="text-xl font-bold text-stone-950">Seasonal Drops</h3>
          <p className="mt-1 text-stone-700">We make what nature provides, when it provides it.</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              { season: "Spring", detail: "Citrus Season" },
              { season: "Summer", detail: "Desert Blooms" },
              { season: "Fall", detail: "Botanical Harvest" },
              { season: "Winter", detail: "Extraction Time" },
            ].map((s) => (
              <div
                key={s.season}
                className="rounded-2xl border border-stone-200/80 bg-gradient-to-br from-amber-50 via-white to-emerald-50 p-5 shadow-sm"
              >
                <div className="text-sm font-semibold text-stone-950">{s.season}</div>
                <div className="mt-1 text-sm text-stone-700">{s.detail}</div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-stone-600">
            {"No warehouses full of synthetic stock. Just two people making cologne that actually smells like the desert."}
          </p>
        </div>
      </Section>

      <SiteFooter />
    </main>
  )
}
