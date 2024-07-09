import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

import AdminForm from '../../../components/users/AdminForm'

import useAdministrator from '../../../hooks/useAdministrator'
import CardComponent from '../../../components/shared/Cards/Card'
import Title from '../../../components/shared/Title'

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
    <>
      <div className='space-y-6'>
        <Title
          title={'Editar administrador'}
          description={'Aqui podras editar el detalle del administrador'}
        />

        {administrator && (
          <CardComponent>
            <AdminForm
              adminId={adminId}
              initialData={initialData}
              buttonText={'Guardar cambios'}
              buttonTextSubmit={'Guardando ...'}
            />
          </CardComponent>
        )}
      </div>
    </>
  )
}
