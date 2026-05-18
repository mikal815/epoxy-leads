import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { twilio } from '@/lib/twilio'
import { resend } from '@/lib/resend'

export async function POST(req: Request) {
  try {
    const { name, phone, message, source_page } = await req.json()

    // 1. Save to Supabase
    await supabase.from('leads').insert({
      name,
      phone,
      message,
      source_page,
    })

    // 2. Send email notification
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.NOTIFICATION_EMAIL!,
      subject: `New Lead: ${name}`,
      text: `
New Lead Received

Name: ${name}
Phone: ${phone}
Message: ${message}
Source: ${source_page || 'unknown'}
      `.trim(),
    })

    // 3. Attempt SMS notification (may fail while Twilio A2P is pending)
    try {
      await twilio.messages.create({
        body: `NEW LEAD 🚨\nName: ${name}\nPhone: ${phone}\nMessage: ${message}\nSource: ${source_page || 'unknown'}`,
        from: process.env.TWILIO_PHONE_NUMBER!,
        to: process.env.CONTRACTOR_PHONE!,
      })
    } catch (smsError) {
      console.error('Twilio SMS failed:', smsError)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { success: false },
      { status: 500 }
    )
  }
}