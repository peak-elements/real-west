import { FlaskConical, Sprout, Compass } from 'lucide-react'

const approaches = [
  {
    title: "Local First",
    icon: Sprout,
    body:
      "We buy from neighbors and growers. Leftover citrus becomes juice; botanicals go back to the soil.",
  },
  {
    title: "The Adventure",
    icon: Compass,
    body:
      "Learning from the land—every batch teaches us something new.",
  },
  {
    title: "The Craft",
    icon: FlaskConical,
    body:
      "Slow maceration and gentle extraction. Time over tricks.",
  },
]

export function Approach() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {approaches.map((a) => {
        const Icon = a.icon
        return (
          <div
            key={a.title}
            className="rounded-2xl border border-dashed border-stone-400/70 bg-stone-50 p-4 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-white p-2 text-emerald-800 ring-1 ring-stone-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-stone-950">{a.title}</h3>
            </div>
            <p className="mt-3 text-sm text-stone-700">{a.body}</p>
          </div>
        )
      })}
    </div>
  )
}
