export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <h1 className="text-4xl font-bold">Terms & Conditions</h1>

      <p className="text-gray-700">
        By using this website, you agree to the following terms and conditions.
      </p>

      <h2 className="text-2xl font-semibold">Service Description</h2>
      <p className="text-gray-700">
        This website provides a contact form for users to request service estimates.
        Submissions are used to connect users with service providers.
      </p>

      <h2 className="text-2xl font-semibold">Messaging</h2>
      <p className="text-gray-700">
        By submitting a form, users consent to receive SMS or phone contact regarding
        their inquiry. Message and data rates may apply.
      </p>

      <h2 className="text-2xl font-semibold">Opt-Out</h2>
      <p className="text-gray-700">
        Users may request to stop communications at any time by replying STOP.
      </p>

      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="text-gray-700">
        For questions, contact us through the website form.
      </p>
    </main>
  )
}