import ContactForm from '@/components/ContactForm'

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-10">
      <h1 className="text-4xl font-bold">
        Concrete Coatings in Hoboken, NJ
      </h1>

      <p className="text-gray-600 text-lg">
        Durable concrete coating solutions for garages, basements, and commercial spaces in Hoboken.
      </p>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Why Choose Concrete Coatings?</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Long-lasting protection for concrete surfaces</li>
          <li>Resistant to moisture, stains, and wear</li>
          <li>Improves appearance and durability</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Get a Free Quote</h2>
        <ContactForm />
      </section>
    </main>
  )
}