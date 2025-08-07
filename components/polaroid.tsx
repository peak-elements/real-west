type PolaroidProps = {
  src?: string
  alt?: string
  caption?: string
  rotate?: number
  className?: string
}

export function Polaroid({
  src = "https://picsum.photos/seed/polaroid/800/600",
  alt = "Polaroid",
  caption = "Sun after the rain",
  rotate = -2,
  className = "",
}: PolaroidProps) {
  return (
    <figure
      className={[
        "relative isolate w-full max-w-sm rounded-sm bg-white ring-1 ring-stone-300 shadow-md",
        "transition-transform",
        className,
      ].join(" ")}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-stone-100">
        <img src={src || "/placeholder.svg"} alt={alt} className="h-full w-full object-cover" />
      </div>
      <figcaption className="font-hand px-3 pb-3 pt-2 text-[13px] leading-tight text-stone-700">
        {caption}
      </figcaption>

      {/* masking tape corners */}
      <span className="pointer-events-none absolute -top-2 left-6 h-5 w-20 rotate-[-8deg] rounded-[2px] bg-amber-200/80 shadow-sm" />
      <span className="pointer-events-none absolute -top-1 right-6 h-5 w-16 rotate-[6deg] rounded-[2px] bg-emerald-200/70 shadow-sm" />
    </figure>
  )
}
