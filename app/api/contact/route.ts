import { NextRequest, NextResponse } from 'next/server'

const BREVO_API_KEY = process.env.BREVO_API_KEY
const TO_EMAIL      = process.env.CONTACT_TO_EMAIL ?? 'contact@leclubpilates.com'
const TO_NAME       = 'Le Club Pilates'

export async function POST(req: NextRequest) {
  if (!BREVO_API_KEY) {
    return NextResponse.json({ error: 'Service indisponible' }, { status: 503 })
  }

  const { name, email, subject, message } = await req.json()

  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return NextResponse.json({ error: 'Champs manquants' }, { status: 400 })
  }

  const subjectLabels: Record<string, string> = {
    abonnement: 'Question sur un abonnement',
    technique:  'Problème technique',
    programme:  'Aide pour choisir un programme',
    autre:      'Autre',
  }

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'api-key': BREVO_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      sender:  { name, email },
      to:      [{ email: TO_EMAIL, name: TO_NAME }],
      replyTo: { email, name },
      subject: `[Contact] ${subjectLabels[subject] ?? subject}`,
      textContent: `Nom : ${name}\nEmail : ${email}\nSujet : ${subjectLabels[subject] ?? subject}\n\n${message}`,
      htmlContent: `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Sujet :</strong> ${subjectLabels[subject] ?? subject}</p>
        <hr />
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    }),
  })

  if (!res.ok) {
    return NextResponse.json({ error: 'Erreur envoi' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
