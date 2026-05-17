'use client'

import { useState } from 'react'

export default function LeadForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    setLoading(true)

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phone,
          message,
          source_page: window.location.pathname,
        }),
      })

      if (!res.ok) {
        throw new Error('Submission failed')
      }

      setSuccess(true)

      setName('')
      setPhone('')
      setMessage('')
    } catch (err) {
      console.error(err)
      alert('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-lg"
    >
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-3 w-full"
        required
      />

      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border p-3 w-full"
        required
      />

      <textarea
        placeholder="Tell us about your project"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-3 w-full"
        rows={5}
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white px-6 py-3"
      >
        {loading ? 'Submitting...' : 'Get Free Estimate'}
      </button>

      {success && (
        <p className="text-green-600 font-medium">
          Submitted successfully.
        </p>
      )}
    </form>
  )
}