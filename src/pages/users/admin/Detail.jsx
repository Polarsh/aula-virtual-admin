import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { BiSave } from 'react-icons/bi'
import { TrashIcon } from '@heroicons/react/20/solid'

import useAdministrator from '../../../hooks/useAdministrator'
import useMyNavigate from '../../../hooks/useMyNavigate'

import DeleteModalValidation from '../../../components/shared/Modals/Delete'
import Title from '../../../components/shared/Title'
import CustomButton, {
  ButtonStyle
} from '../../../components/shared/Buttons/Buttons'
import CardComponent from '../../../components/shared/Cards/Card'
import { formatDateTime } from '../../../utils/functions'

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

  const administratorDetails = [
    {
      label: 'Nombre',
      value: administrator.firstName
    },
    {
      label: 'Apellido',
      value: administrator.lastName
    },
    { label: 'DNI', value: administrator.dni },
    { label: 'Email', value: administrator.email },
    { label: 'Teléfono', value: administrator.phone },
    { label: 'Rol', value: administrator.role },
    {
      label: 'Creado en',
      value: formatDateTime(administrator.createdAt)
    },
    {
      label: 'Última actualización',
      value: formatDateTime(administrator.updatedAt)
    }
  ]

  const labelClass = 'block mb-2 text-sm font-bold text-gray-700'
  const inputClass =
    'w-full px-3 py-2 text-gray-700 border rounded-lg border-gray-700'

  return (
    <>
      <div className='space-y-6'>
        <Title
          title={'Detalles del administrador'}
          description={'Aqui podras encontrar el detalle del administrador'}
        />

        {administrator && (
          <CardComponent>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              {administratorDetails.map((detail, index) => (
                <div key={detail.label}>
                  <label className={labelClass}>{detail.label}</label>
                  <div className={inputClass}>{detail.value}</div>
                </div>
              ))}
            </div>

            {/* Botones */}
            <div className='mt-6 flex flex-wrap gap-4 justify-end sm:flex-nowrap'>
              <CustomButton
                onClick={() => setShowDeleteModal(!showDeleteModal)}
                label={'Eliminar'}
                icon={TrashIcon}
                variant={ButtonStyle.Cancel}
              />
              <CustomButton
                onClick={() => navigateToEditAdmin(adminId)}
                label={'Editar'}
                icon={BiSave}
                variant={ButtonStyle.Fill}
              />
            </div>
          </CardComponent>
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
