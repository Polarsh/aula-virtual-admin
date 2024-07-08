import { useEffect } from 'react'
import { EyeIcon, PlusCircleIcon } from '@heroicons/react/20/solid'
import { BiDownArrow } from 'react-icons/bi'

import useAdministrator from '../../../hooks/useAdministrator'
import useMyNavigate from '../../../hooks/useMyNavigate'

import { formatDate } from '../../../utils/functions'

import Table from '../../../components/shared/Table/Table'
import CustomButton, {
  ButtonStyle
} from '../../../components/shared/Buttons/Buttons'

export default function AdminMenuPage() {
  const { navigateToCreateAdmin, navigateToViewAdmin } = useMyNavigate()
  const { administratorList, isLoading, error, getAllAdministrators } =
    useAdministrator()

  const columns = [
    {
      header: 'Nombres',
      accessorFn: row => `${row.firstName} ${row.lastName}`
    },
    { header: 'Email', accessorKey: 'email' },
    { header: 'Rol', accessorKey: 'role' },
    {
      header: 'Fecha de creación',
      accessorKey: 'createdAt',
      cell: info => formatDate(info.row.original.createdAt),
      sortingFn: 'datetime'
    }
  ]

  useEffect(() => {
    getAllAdministrators()
  }, [])

  if (isLoading) {
    return <div>Cargando...</div>
  }

  if (error) {
    // todo
    /* return <div>Error: {error.message}</div> */
  }

  return (
    <div className='space-y-6'>
      <Table.Title
        title='Administradores'
        description='Una lista de todos los administradores, con su nombre, correo electrónico y rol.'
      />
      <div className='mt-8 bg-white p-5 shadow-lg rounded-lg'>
        <Table data={administratorList} columns={columns}>
          <Table.Header>
            <CustomButton
              onClick={() => {}}
              label={'Exportar CSV'}
              icon={BiDownArrow}
              variant={ButtonStyle.Fill}
            />
            <CustomButton
              onClick={navigateToCreateAdmin}
              label={'Añadir administrador'}
              icon={PlusCircleIcon}
              variant={ButtonStyle.Outline}
            />
          </Table.Header>
          <Table.Body
            actionLabel={
              <span className='flex gap-2'>
                Visualizar
                <EyeIcon aria-hidden='true' className='h-5 w-5 text-gray-400' />
              </span>
            }
            onActionClick={navigateToViewAdmin}
          />
        </Table>
      </div>
    </div>
  )
}
