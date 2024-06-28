import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import LoginPage from './pages/sign/Login'
import HomePage from './pages/Home'
import { AuthProvider } from './context/AuthProvider'
import PageLayout from './layout/PageLayout'
import DefaultPage from './pages/Default'

import ProtectedRoute from './components/utils/ProtectedRoute'

import DashboardPage from './pages/dashboard/Dashboard'

import AdminMenuPage from './pages/users/admin/Menu'
import CreateAdminPage from './pages/users/admin/Create'
import ViewAdminPage from './pages/users/admin/Detail'
import EditAdminPage from './pages/users/admin/Edit'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <AppProvider>
      <AuthProvider>
        <ScrollToTop />
        <Routes>
          <Route path='/iniciar-sesion' element={<LoginPage />} />
          <Route element={<ProtectedRoute redirectPath={'/iniciar-sesion'} />}>
            <Route path='/' element={<PageLayout />}>
              <Route index element={<HomePage />} />
              <Route path='dashboard' element={<DashboardPage />} />
              <Route path='gestion-usuarios'>
                <Route path='administradores'>
                  <Route index element={<AdminMenuPage />} />
                  <Route path='nuevo' element={<CreateAdminPage />} />
                  <Route path='editar/:adminId' element={<EditAdminPage />} />
                  <Route path='ver/:adminId' element={<ViewAdminPage />} />
                </Route>
                {/* <Route path='estudiantes'>
                  <Route index element={<StudentMenuPage />} />
                  <Route path='nuevo' element={<CreateStudentPage />} />
                  <Route path='editar/:adminId' element={<EditStudentPage />} />
                  <Route path='ver/:adminId' element={<PageStudentPage />} />
                </Route> */}
              </Route>
              <Route path='*' element={<DefaultPage />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </AppProvider>
  )
}
