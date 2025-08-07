import { Droplet, Leaf, ShieldCheck } from 'lucide-react'

const items = [
  { label: "100% Natural Ingredients", icon: Droplet },
  { label: "Local First Sourcing", icon: Leaf },
  { label: "Zero Synthetic Fragrances", icon: ShieldCheck },
]

export function Stats() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {items.map((item, i) => {
        const Icon = item.icon
        return (
          <div
            key={item.label}
            className="flex items-center gap-3 rounded-2xl border border-stone-300/70 bg-white px-4 py-3 shadow-sm"
          >
            <div
              className={[
                "rounded-lg p-2 ring-1",
                i === 0 && "bg-emerald-100 text-emerald-900 ring-emerald-300/70",
                i === 1 && "bg-amber-100 text-amber-900 ring-amber-300/70",
                i === 2 && "bg-lime-100 text-lime-900 ring-lime-300/70",
              ].join(" ")}
            >
              <Icon className="h-5 w-5" />
            </div>
            <div className="text-sm font-semibold text-stone-900">{item.label}</div>
          </div>
        )
      })}
    </div>
  )
}
