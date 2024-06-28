import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import useAdministrator from '../../../hooks/useAdministrator'
import useMyNavigate from '../../../hooks/useMyNavigate'

import DeleteModalValidation from '../../../components/shared/Modals/Delete'

export default function ViewAdminPage() {
  const { adminId } = useParams()

  const {
    administrator,
    isLoading,
    error,
    getAdministratorById,
    deleteAdministrator
  } = useAdministrator()

  const { navigateToAdminMenu, navigateToEditAdmin } = useMyNavigate()

  const [showDeleteModal, setShowDeleteModal] = useState(false)

  useEffect(() => {
    getAdministratorById(adminId)
  }, [])

  const handleDelete = async adminId => {
    // TODO
    try {
      await deleteAdministrator(adminId)
      navigateToAdminMenu()
    } catch (error) {}
  }

  if (isLoading) return <div>Cargando...</div>
  if (error) return <div>Error: {error.message}</div>
  if (!administrator) return <div>No se encontró el administrador</div>

  return (
    <>
      <div className='mx-auto max-w-lg p-8 bg-white shadow-md rounded-md'>
        <h2 className='text-2xl font-bold mb-4'>Detalles del Administrador</h2>
        <h2 className='text-2xl font-bold mb-4'>
          show: {showDeleteModal ? 'true' : 'false'}
        </h2>
        {administrator && (
          <div>
            <div className='space-y-4'>
              <div>
                <label className='block text-gray-600 text-sm font-semibold mb-1'>
                  Nombre completo:
                </label>
                <p>{administrator.fullName}</p>
              </div>
              <div>
                <label className='block text-gray-600 text-sm font-semibold mb-1'>
                  DNI:
                </label>
                <p>{administrator.dni}</p>
              </div>
              <div>
                <label className='block text-gray-600 text-sm font-semibold mb-1'>
                  Email:
                </label>
                <p>{administrator.email}</p>
              </div>
              <div>
                <label className='block text-gray-600 text-sm font-semibold mb-1'>
                  Teléfono:
                </label>
                <p>{administrator.phone}</p>
              </div>
              <div>
                <label className='block text-gray-600 text-sm font-semibold mb-1'>
                  Rol:
                </label>
                <p>{administrator.role}</p>
              </div>
              <div>
                <label className='block text-gray-600 text-sm font-semibold mb-1'>
                  Creado en:
                </label>
                <p>{new Date(administrator.createdAt).toLocaleDateString()}</p>
              </div>
              <div>
                <label className='block text-gray-600 text-sm font-semibold mb-1'>
                  Última actualización:
                </label>
                <p>{new Date(administrator.updatedAt).toLocaleDateString()}</p>
              </div>
            </div>
            <div className='mt-6'>
              <button
                onClick={() => navigateToEditAdmin(adminId)}
                className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mr-4'>
                Editar
              </button>
              <button
                onClick={() => setShowDeleteModal(!showDeleteModal)}
                className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md'>
                Eliminar
              </button>
            </div>
          </div>
        )}
      </div>
      {showDeleteModal ? (
        <DeleteModalValidation
          title={'Deactivate account'}
          content={
            'Are you sure you want to deactivate your account? All of your data will be permanently removed from our servers forever. This action cannot be undone.'
          }
          onConfirmClick={() => handleDelete(adminId)}
          onCloseModal={() => setShowDeleteModal(false)}
        />
      ) : (
        <></>
      )}
    </>
  )
}
