import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Section } from "@/components/section"
import { posts } from "@/data/posts"

export default function BlogIndexPage() {
  return (
    <main>
      <SiteHeader />
      <Section className="pt-10 md:pt-14">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold text-neutral-900">Blog</h1>
          <p className="mt-2 text-neutral-700">Stories from the desert—process, philosophy, and ingredients.</p>
        </div>
      </Section>

      <Section>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <article key={p.slug} className="rounded-xl border border-neutral-200/70 bg-white p-5">
              <div className="text-xs text-neutral-500">{p.date} • {p.category}</div>
              <h2 className="mt-2 text-lg font-semibold text-neutral-900">
                <Link href={`/blog/${p.slug}`} className="hover:underline">{p.title}</Link>
              </h2>
              <p className="mt-2 text-sm text-neutral-700">{p.summary}</p>
              <div className="mt-3">
                <Link href={`/blog/${p.slug}`} className="text-sm font-medium text-neutral-900 underline">
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <SiteFooter />
    </main>
  )
}
