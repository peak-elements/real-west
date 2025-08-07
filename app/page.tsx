import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Section } from "@/components/section"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Approach } from "@/components/approach"
import { ProcessTeaser } from "@/components/process-teaser"
import { CurrentDrop } from "@/components/current-drop"
import { Philosophy } from "@/components/philosophy"
import { NewsletterForm } from "@/components/newsletter-form"
import { Button } from "@/components/ui/button"
import { MessageCircle } from 'lucide-react'
import Link from "next/link"

export default function Page() {
  return (
    <main>
      <SiteHeader />

      {/* Hero unchanged */}
      <Section className="pt-10 md:pt-14">
        <Hero />
      </Section>

      {/* Tighten spacing directly below hero */}
      <Section className="py-2 md:py-3">
        <Stats />
      </Section>

      {/* Our Approach — tighter block with small label */}
      <Section className="py-7 md:py-9">
        <div className="mb-4">
          <span className="rounded-full border border-dashed border-amber-400/70 bg-amber-50/70 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-900">
            Our Way
          </span>
          <h2 className="mt-2 text-2xl font-bold text-stone-950">Our Approach</h2>
          <p className="mt-1 text-stone-700">
            Local first. Patient extraction. Respect for ingredients.
          </p>
        </div>
        <Approach />
      </Section>

      {/* Process teaser — less outer space */}
      <Section className="py-6 md:py-8">
        <ProcessTeaser />
      </Section>

      {/* Current Drop — slightly tighter */}
      <Section className="py-7 md:py-9">
        <div className="mb-4">
          <span className="rounded-full border border-dashed border-emerald-400/70 bg-emerald-50/70 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-900">
            Limited Run
          </span>
          <h2 className="mt-2 text-2xl font-bold text-stone-950">Current Drop</h2>
          <p className="mt-1 text-stone-700">Founders Collection — numbered bottles, limited run.</p>
        </div>
        <CurrentDrop />
      </Section>

      {/* Philosophy — slightly tighter */}
      <Section className="py-7 md:py-9">
        <Philosophy />
      </Section>

      {/* Newsletter band — slightly tighter */}
      <Section className="py-8 md:py-10">
        <div className="rounded-2xl border border-stone-200/80 bg-gradient-to-br from-emerald-50 via-white to-amber-50 p-6 shadow-sm md:p-10">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <h3 className="text-2xl font-bold text-stone-950">Stay in the Loop</h3>
              <p className="mt-1 text-stone-700">
                Get notified when we drop new batches. Join our Discord for behind-the-scenes.
              </p>
              <div className="mt-4">
                <NewsletterForm />
              </div>
            </div>
            <div className="flex justify-start md:justify-end">
              <Button
                asChild
                variant="outline"
                className="border-emerald-300/80 text-emerald-900 hover:bg-emerald-50"
              >
                <Link href="#" aria-label="Join our Discord">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Join our Discord
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <SiteFooter />
    </main>
  )
}
