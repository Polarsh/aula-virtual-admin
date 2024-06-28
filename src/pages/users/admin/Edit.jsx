import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

import AdminForm from '../../../components/users/AdminForm'

import useAdministrator from '../../../hooks/useAdministrator'

export default function EditAdminPage() {
  const { adminId } = useParams()

  const { administrator, isLoading, error, getAdministratorById } =
    useAdministrator()

  useEffect(() => {
    getAdministratorById(adminId)
  }, [])

  const initialData = administrator

  if (isLoading) return <div>Cargando...</div>
  if (error) return <div>Error: {error.message}</div>
  if (!administrator) return <div>No se encontró el administrador</div>

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='w-full space-y-8 bg-gray-50 p-10 rounded-xl shadow-lg'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Editar Administrador
          </h2>
        </div>
        <AdminForm
          adminId={adminId}
          initialData={initialData}
          buttonText={'Guardar cambios'}
          buttonTextSubmit={'Guardando ...'}
        />
      </div>
    </div>
  )
}
