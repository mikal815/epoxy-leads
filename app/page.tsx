import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Epoxy Flooring Allentown PA | Free Estimates',
  description:
    'Professional epoxy flooring installation in Allentown, Pennsylvania.',
}

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
              Allentown Epoxy Flooring
            </p>

            <h1 className="mb-6 text-5xl font-bold leading-tight">
              Durable Epoxy Floors For Homes & Garages
            </h1>

            <p className="mb-8 text-lg text-gray-600">
              Serving homeowners and businesses throughout Allentown, PA.
            </p>

            <div className="space-y-3 text-gray-700">
              <p>✔ Garage epoxy floors</p>
              <p>✔ Commercial coatings</p>
              <p>✔ Concrete sealing</p>
              <p>✔ Free estimates</p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold">
            Why Choose Us
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border bg-white p-6">
              <h3 className="mb-2 font-semibold">Fast Quotes</h3>
              <p className="text-sm text-gray-600">
                Rapid response times and easy scheduling.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <h3 className="mb-2 font-semibold">Durable Coatings</h3>
              <p className="text-sm text-gray-600">
                Built to handle heavy wear and tear.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <h3 className="mb-2 font-semibold">Local Experts</h3>
              <p className="text-sm text-gray-600">
                Serving Allentown and surrounding areas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}