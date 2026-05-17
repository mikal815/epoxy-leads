import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { password } = await req.json()

  if (password === process.env.DASHBOARD_PASSWORD) {
    const res = NextResponse.json({ success: true })

    res.cookies.set('dash_auth', password, {
      httpOnly: true,
      secure: true,
      path: '/',
    })

    return res
  }

  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
}