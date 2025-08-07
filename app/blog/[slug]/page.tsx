import { notFound } from "next/navigation"
import { posts } from "@/data/posts"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Section } from "@/components/section"

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return notFound()

  return (
    <main>
      <SiteHeader />
      <Section className="pt-10 md:pt-14">
        <article className="mx-auto max-w-3xl">
          <div className="text-xs text-neutral-500">{post.date} • {post.category}</div>
          <h1 className="mt-2 text-3xl font-semibold text-neutral-900">{post.title}</h1>

          <div className="prose prose-neutral mt-6 max-w-none">
            {post.content.map((block, i) => {
              if (block.type === "h2") {
                return <h2 key={i} className="mt-8 text-xl font-semibold text-neutral-900">{block.text}</h2>
              }
              if (block.type === "p") {
                return <p key={i} className="text-neutral-800">{block.text}</p>
              }
              if (block.type === "hr") {
                return <hr key={i} className="my-6 border-neutral-200/70" />
              }
              if (block.type === "ul" || block.type === "li") {
                // Not used in our seed, but supports future content
                return null
              }
              return null
            })}
          </div>
        </article>
      </Section>
      <SiteFooter />
    </main>
  )
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export const dynamicParams = false
