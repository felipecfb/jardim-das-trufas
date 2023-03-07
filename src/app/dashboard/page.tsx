import { PrivateRoute } from '@/components/PrivateRoute'

export default function Dashboard() {
  return (
    <PrivateRoute>
      <div>
        <h1>Dashboard</h1>
      </div>
    </PrivateRoute>
  )
}
