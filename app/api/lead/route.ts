import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { twilio } from '@/lib/twilio'

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

    // 2. Send SMS alert
    await twilio.messages.create({
      body: `NEW LEAD 🚨\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`,
      from: process.env.TWILIO_PHONE_NUMBER!,
      to: process.env.CONTRACTOR_PHONE!,
    })

    console.log('Lead saved + SMS sent')

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { success: false },
      { status: 500 }
    )
  }
}