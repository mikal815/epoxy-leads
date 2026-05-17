import { createClient } from '@supabase/supabase-js'

export const dynamic = 'force-dynamic'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

async function updateStatus(id: number, status: string) {
  'use server'
  await supabase.from('leads').update({ status }).eq('id', id)
}

export default async function DashboardPage() {
  const { data: leads } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <main className="max-w-6xl mx-auto px-6 py-10 space-y-6">
      <h1 className="text-3xl font-bold">Leads Dashboard</h1>

      <div className="overflow-x-auto border rounded-lg">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Message</th>
              <th className="p-3">Source</th>
              <th className="p-3">Status</th>
              <th className="p-3">Time</th>
            </tr>
          </thead>

          <tbody>
            {leads?.map((lead: any) => (
              <tr key={lead.id} className="border-t">
                <td className="p-3">{lead.name}</td>
                <td className="p-3">{lead.phone}</td>
                <td className="p-3">{lead.message}</td>
                <td className="p-3">{lead.source_page || '-'}</td>
                <td className="p-3">
                  <form
  action={async (formData) => {
    'use server'

    const status = formData.get('status') as string

    await supabase
      .from('leads')
      .update({ status })
      .eq('id', lead.id)
  }}
  className="flex gap-2 items-center"
>
  <select
    name="status"
    defaultValue={lead.status || 'new'}
    className="border p-1"
  >
    <option value="new">New</option>
    <option value="contacted">Contacted</option>
    <option value="closed">Closed</option>
  </select>

  <button
    type="submit"
    className="border px-2 py-1 text-sm"
  >
    Save
  </button>
</form>
                </td>

                <td className="p-3">
                  {new Date(lead.created_at).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}