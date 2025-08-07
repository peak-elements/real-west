export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as { email?: string } | null
  const email = body?.email?.toString().trim()
  if (!email) {
    return new Response(JSON.stringify({ ok: false, error: "Email required" }), { status: 400 })
  }

  // For this demo, we just log. In production, connect to your email provider or DB.
  console.log("[waitlist] new subscriber:", email)
  return new Response(JSON.stringify({ ok: true }), { status: 200 })
}
