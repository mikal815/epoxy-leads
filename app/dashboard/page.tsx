import { createClient } from '@supabase/supabase-js'

export const dynamic = 'force-dynamic'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default async function DashboardPage() {
  const { data: leads, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-bold text-red-500">Error loading leads</h1>
        <pre>{error.message}</pre>
      </div>
    )
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-10 space-y-6">
      <h1 className="text-3xl font-bold">Leads Dashboard</h1>

      {!leads || leads.length === 0 ? (
        <p className="text-gray-600">No leads yet.</p>
      ) : (
        <div className="overflow-x-auto border rounded-lg">
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Message</th>
                <th className="p-3">Time</th>
              </tr>
            </thead>

            <tbody>
              {leads.map((lead: any, i: number) => (
                <tr key={i} className="border-t">
                  <td className="p-3">{lead.name}</td>
                  <td className="p-3">{lead.phone}</td>
                  <td className="p-3">{lead.message}</td>
                  <td className="p-3">
                    {new Date(lead.created_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  )
}