export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as { email?: string } | null
  const email = body?.email?.toString().trim()
  if (!email) {
    return new Response(JSON.stringify({ ok: false, error: "Email required" }), { status: 400 })
  }
  console.log("[newsletter] new subscriber:", email)
  return new Response(JSON.stringify({ ok: true }), { status: 200 })
}
