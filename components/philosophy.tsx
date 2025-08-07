export function Philosophy() {
  const features = [
    "Water-Soluble Aromatics captured",
    "Heavyweight Compounds preserved",
    "Heat-Sensitive Molecules intact",
    "Natural Fixatives retained",
  ]
  return (
    <div className="rounded-2xl border border-neutral-200/70 bg-white p-6 md:p-10">
      <h3 className="text-2xl font-semibold text-neutral-900">{"300+ Compounds Per Ingredient"}</h3>
      <p className="mt-1 text-neutral-700">
        {"Our cold maceration process captures what essential oils leave behind."}
      </p>
      <p className="mt-4 max-w-3xl text-neutral-700">
        {"While typical essential oils give you 50–100 compounds, our cold extraction preserves over 300 per ingredient. All the complexity that makes real botanicals irreplaceable."}
      </p>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {features.map((f) => (
          <li key={f} className="rounded-xl border border-neutral-200/70 bg-neutral-50 px-4 py-3 text-sm text-neutral-800">
            {`• ${f}`}
          </li>
        ))}
      </ul>
    </div>
  )
}
