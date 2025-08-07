import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-neutral-200/70 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="mb-3 font-semibold tracking-[0.2em] text-neutral-900">
            REAL WEST
          </div>
          <p className="text-sm text-neutral-600">
            No BS. Just Botanicals.
          </p>
        </div>

        <div>
          <div className="mb-3 text-sm font-semibold tracking-wide text-neutral-900">
            Company
          </div>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            <li><Link href="/process" className="hover:underline">Process</Link></li>
            <li><Link href="/products" className="hover:underline">Products</Link></li>
          </ul>
        </div>

        <div>
          <div className="mb-3 text-sm font-semibold tracking-wide text-neutral-900">
            Legal
          </div>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li><Link href="#" className="hover:underline">Terms</Link></li>
            <li><Link href="#" className="hover:underline">Privacy</Link></li>
            <li><Link href="#" className="hover:underline">Shipping</Link></li>
          </ul>
        </div>

        <div>
          <div className="mb-3 text-sm font-semibold tracking-wide text-neutral-900">
            Social
          </div>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">TikTok</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-200/70">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-neutral-600">
          {"© 2025 Real West. All rights reserved. Made with ☕ in the Southwest."}
        </div>
      </div>
    </footer>
  )
}
