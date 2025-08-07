import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Section } from "@/components/section"

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <Section className="pt-10 md:pt-14">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold text-neutral-900">About Real West</h1>
          <p className="mt-2 text-neutral-700">The story of two gamers who decided to revolutionize fragrance.</p>
        </div>
      </Section>

      <Section>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-neutral-200/70 bg-white p-5">
            <h3 className="text-lg font-semibold text-neutral-900">Ryan — Mesa, Arizona</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Jack of all trades—technology, operations, and Arizona botanicals sourcing.
            </p>
            <ul className="mt-3 text-sm text-neutral-800">
              <li>{"• 🍊 Tincture sourcing"}</li>
              <li>{"• 💻 Technology & operations"}</li>
            </ul>
          </div>

          <div className="rounded-xl border border-neutral-200/70 bg-white p-5">
            <h3 className="text-lg font-semibold text-neutral-900">Shade — Santa Fe, New Mexico</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Lead fragrance expert and production manager; logistics background.
            </p>
            <ul className="mt-3 text-sm text-neutral-800">
              <li>{"• 🌿 Fragrance development"}</li>
              <li>{"• ⚗️ Production & logistics"}</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-neutral-900">Origin Story</h2>
          <div className="mt-4 space-y-6 text-neutral-800">
            <div>
              <h3 className="font-semibold">2014 — The Meeting</h3>
              <p className="text-sm text-neutral-700">
                Met in a Counter-Strike match—friendship that led to a fragrance company.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">2023 — The Idea</h3>
              <p className="text-sm text-neutral-700">
                No gimmicks, no fake science—just real ingredients extracted properly.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">2024 — The Process</h3>
              <p className="text-sm text-neutral-700">
                Cold maceration preserved 300+ compounds vs 50–100 from essential oils.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">2025 — Real West Was Born</h3>
              <p className="text-sm text-neutral-700">
                Direct-to-consumer cologne made from real ingredients.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
          {[
            { title: "100% Natural", body: "Every ingredient comes from the earth. No synthetics." },
            { title: "Slow Process", body: "Botanical tinctures take days, not minutes." },
            { title: "Honest Marketing", body: "We make cologne that smells good. That’s it." },
          ].map((v) => (
            <div key={v.title} className="rounded-xl border border-neutral-200/70 bg-white p-5">
              <h3 className="text-base font-semibold text-neutral-900">{v.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl rounded-2xl border border-neutral-200/70 bg-neutral-50 p-6 md:p-8">
          <h3 className="text-xl font-semibold text-neutral-900">Ready for Something Real?</h3>
          <p className="mt-1 text-neutral-700">Join the waitlist for our next drop.</p>
          <div className="mt-4">
            {/* Inline waitlist form reuse would be nice, but keep Products as primary funnel */}
            <a
              href="/products#waitlist"
              className="inline-flex rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
            >
              Join the Waitlist
            </a>
          </div>
        </div>
      </Section>

      <SiteFooter />
    </main>
  )
}
