import ContactForm from '@/components/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Epoxy Flooring in Bethlehem, PA | Free Estimates',
  description:
    'Professional epoxy flooring and concrete coating services in Bethlehem, PA. Free estimates and fast turnaround.',
}

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">
        Epoxy Flooring in Bethlehem, PA
      </h1>

      <p className="text-lg mb-6">
        We install durable epoxy and polyaspartic floor coatings for garages,
        basements, and commercial spaces in Bethlehem, PA.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Why Homeowners Choose Our Coatings
      </h2>

      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Hot tire resistant</li>
        <li>Chemical resistant</li>
        <li>Easy to clean</li>
        <li>Fast installation</li>
        <li>Free estimates</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">
        Get Your Free Estimate
      </h2>

      <ContactForm />
    </main>
  )
}