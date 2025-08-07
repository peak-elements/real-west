"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export function WaitlistForm({
  cta = "Join the waitlist",
  successMessage = "You're on the list. We’ll email you for the next drop.",
}: {
  cta?: string
  successMessage?: string
}) {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error("Failed")
      toast({ title: "Joined ✅", description: successMessage })
      setEmail("")
    } catch {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-md items-center gap-2">
      <Input
        required
        type="email"
        placeholder="you@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-white"
        aria-label="Email address"
      />
      <Button type="submit" disabled={loading} className="bg-neutral-900 text-white hover:bg-neutral-800">
        {loading ? "Joining..." : cta}
      </Button>
    </form>
  )
}
