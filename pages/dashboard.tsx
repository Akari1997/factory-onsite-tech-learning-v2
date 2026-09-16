export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-xl font-semibold mb-4">Manager Dashboard</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">Team Completion: <strong>72%</strong></div>
        <div className="bg-white p-4 rounded shadow">Overdue: <strong>3</strong></div>
        <div className="bg-white p-4 rounded shadow">Active Paths: <strong>8</strong></div>
      </div>
      <section className="mt-6">
        <h3 className="text-lg font-medium mb-2">Recent Activity</h3>
        <ul className="space-y-2">
          <li className="p-3 bg-white rounded shadow">Alice completed: Lockout/Tagout - Module 2</li>
        </ul>
      </section>
    </div>
  )
}
