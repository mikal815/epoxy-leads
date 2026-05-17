import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Garage Floor Coating Allentown PA | Free Estimates',
  description:
    'Professional garage floor coating services in Allentown, PA. Durable epoxy and concrete coatings for residential and commercial floors.',
}

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-10">

      <h1 className="text-4xl font-bold">
        Garage Floor Coating in Allentown, PA
      </h1>

      <p className="text-lg text-gray-600">
        High-quality garage floor coatings designed to protect and upgrade your concrete surfaces.
        Durable, stain-resistant, and built to last.
      </p>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Benefits</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Protects concrete from oil, chemicals, and wear</li>
          <li>Easy to clean and maintain</li>
          <li>Improves garage appearance instantly</li>
          <li>Long-lasting epoxy coating system</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Get a Free Quote</h2>
        <ContactForm />
      </section>

    </main>
  )
}