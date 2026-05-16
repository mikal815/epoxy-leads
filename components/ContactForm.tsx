'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()

  const form = e.currentTarget

  setLoading(true)

  const formData = new FormData(form)

  const payload = {
    name: formData.get('name'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  }

  try {
    const res = await fetch('/api/lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (res.ok) {
      setSuccess(true)
      form.reset()
    }
  } catch (error) {
    console.error(error)
  }

  setLoading(false)
}

  return (
    <div className="rounded-2xl border p-6 shadow-sm bg-white">
      <h2 className="mb-4 text-2xl font-bold">
        Get a Free Estimate
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Name"
          required
          className="w-full rounded-lg border p-3"
        />

        <input
          name="phone"
          placeholder="Phone"
          required
          className="w-full rounded-lg border p-3"
        />

        <textarea
          name="message"
          placeholder="Tell us about your project"
          className="w-full rounded-lg border p-3"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-black p-3 text-white"
        >
          {loading ? 'Submitting...' : 'Request Estimate'}
        </button>

        {success && (
          <p className="text-sm text-green-600">
            Your request was submitted successfully.
          </p>
        )}
      </form>
    </div>
  )
}