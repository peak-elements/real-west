import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Section } from "@/components/section"

export default function ProcessPage() {
  return (
    <main>
      <SiteHeader />
      <Section className="pt-10 md:pt-14">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold text-neutral-900">Our Process</h1>
          <p className="mt-2 text-neutral-700">Real extraction. Real time. No shortcuts.</p>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="rounded-xl border border-neutral-200/70 bg-white p-5">
            <h3 className="text-lg font-semibold text-neutral-900">01 — Harvest & Source</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Local growers in AZ and NM. Peak ripeness harvests, hand-picked botanicals.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-200/70 bg-white p-5">
            <h3 className="text-lg font-semibold text-neutral-900">02 — Extract & Infuse</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Cold-pressing citrus peels. Maceration in grain alcohol. Steam distillation where appropriate. Days to weeks.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-200/70 bg-white p-5">
            <h3 className="text-lg font-semibold text-neutral-900">03 — Blend & Age</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Small batch blending and testing. Time to marry ingredients—never rushed.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-200/70 bg-white p-5">
            <h3 className="text-lg font-semibold text-neutral-900">04 — Bottle & Number</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Hand-filled, numbered, and dated. When it’s gone, it’s gone.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl rounded-2xl border border-neutral-200/70 bg-neutral-50 p-6 md:p-8">
          <h3 className="text-xl font-semibold text-neutral-900">Why We Do It This Way</h3>
          <p className="mt-2 text-neutral-700">
            We could buy synthetics and mass-produce. But we’re capturing time and place—300+ natural compounds that can’t be replicated.
          </p>
        </div>
      </Section>

      <SiteFooter />
    </main>
  )
}
