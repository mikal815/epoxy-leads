'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = async () => {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push('/dashboard')
    } else {
      alert('Wrong password')
    }
  }

  return (
    <main className="flex items-center justify-center h-screen">
      <div className="space-y-4 border p-6 rounded-lg w-80">
        <h1 className="text-xl font-bold">Dashboard Login</h1>

        <input
          type="password"
          className="border w-full p-2"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-black text-white w-full p-2"
        >
          Login
        </button>
      </div>
    </main>
  )
}