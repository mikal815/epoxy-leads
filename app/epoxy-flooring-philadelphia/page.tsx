import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Epoxy Flooring Philadelphia PA | Free Estimates',
  description:
    'Professional epoxy flooring services in Philadelphia, PA. Durable garage floor coatings, basement epoxy, and commercial concrete coatings. Free estimates available.',
}

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">

      {/* HERO */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">
          Epoxy Flooring in Philadelphia, PA
        </h1>

        <p className="text-lg text-gray-600">
          High-durability epoxy floor coatings for garages, basements, and commercial spaces.
          Upgrade your concrete with a long-lasting, easy-to-clean surface.
        </p>

        <div className="text-sm text-gray-500">
          Free estimates • Local service • Fast turnaround
        </div>
      </section>

      {/* BENEFITS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Why Epoxy Flooring?</h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Extremely durable and long-lasting surface</li>
          <li>Resistant to stains, chemicals, and oil</li>
          <li>Easy to clean and maintain</li>
          <li>Improves garage and basement appearance instantly</li>
          <li>Increases property value</li>
        </ul>
      </section>

      {/* SERVICES */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold">Garage Floors</h3>
            <p className="text-sm text-gray-600">
              Durable coatings designed for vehicles and heavy use.
            </p>
          </div>

          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold">Basement Epoxy</h3>
            <p className="text-sm text-gray-600">
              Moisture-resistant flooring for clean finished basements.
            </p>
          </div>

          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold">Commercial Floors</h3>
            <p className="text-sm text-gray-600">
              Industrial-grade epoxy for warehouses and shops.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>

        <div className="space-y-4 text-gray-700">
          <div>
            <h3 className="font-semibold">How long does epoxy flooring last?</h3>
            <p>With proper installation, epoxy floors can last 10–20 years or more.</p>
          </div>

          <div>
            <h3 className="font-semibold">Is epoxy flooring slippery?</h3>
            <p>
              No — anti-slip additives can be applied for safety in garages and commercial spaces.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">How much does it cost?</h3>
            <p>
              Pricing depends on square footage and surface condition. Free estimates are available.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          Get a Free Epoxy Flooring Quote in Philadelphia
        </h2>

        <p className="text-gray-600">
          Fill out the form below and we’ll get back to you with pricing and availability.
        </p>

        <ContactForm />
      </section>

    </main>
  )
}