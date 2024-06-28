import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute({ redirectPath }) {
  if (false) {
    return <Navigate to={redirectPath} replace />
  }

  return <Outlet />
}
