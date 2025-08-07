import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"

export function Section({
  children,
  className = "",
  id,
  container = true,
}: PropsWithChildren<{ className?: string; id?: string; container?: boolean }>) {
  return (
    <section id={id} className={cn("py-14 md:py-20", className)}>
      <div className={cn(container && "mx-auto max-w-6xl px-4")}>{children}</div>
    </section>
  )
}
