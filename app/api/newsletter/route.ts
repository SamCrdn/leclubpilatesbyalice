import { NextRequest, NextResponse } from 'next/server'

const BREVO_API_KEY = process.env.BREVO_API_KEY
const LIST_ID       = process.env.BREVO_NEWSLETTER_LIST_ID
  ? parseInt(process.env.BREVO_NEWSLETTER_LIST_ID, 10)
  : undefined

export async function POST(req: NextRequest) {
  if (!BREVO_API_KEY) {
    return NextResponse.json({ error: 'Service indisponible' }, { status: 503 })
  }

  const { email } = await req.json()

  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
  }

  const body: Record<string, unknown> = { email }
  if (LIST_ID) body.listIds = [LIST_ID]

  const res = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'api-key': BREVO_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  // 204 = déjà inscrit, on traite ça comme un succès
  if (res.ok || res.status === 204) {
    return NextResponse.json({ ok: true })
  }

  const data = await res.json().catch(() => ({}))
  // code 4 = contact already exists in Brevo
  if (data?.code === 'duplicate_parameter') {
    return NextResponse.json({ ok: true })
  }

  return NextResponse.json({ error: 'Erreur inscription' }, { status: 500 })
}
