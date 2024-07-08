import { useEffect } from 'react'

import useAdministrator from '../../../hooks/useAdministrator'
import useMyNavigate from '../../../hooks/useMyNavigate'

import { formatDate } from '../../../utils/functions'
import Table from '../../../components/shared/Table/Table'

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
    return <div>Error: {error.message}</div>
  }

  return (
    <div className='space-y-6'>
      <Table>
        <Table.Title
          title='Administradores'
          description='Una lista de todos los administradores, con su nombre, correo electrónico y rol.'
        />
        <Table.Header>
          <button
            onClick={navigateToCreateAdmin}
            type='button'
            className='rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            Exportar CSV
          </button>
          <button
            onClick={navigateToCreateAdmin}
            type='button'
            className='rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            Añadir administrador
          </button>
        </Table.Header>
        <Table.Body
          data={administratorList}
          columns={columns}
          onActionClick={navigateToViewAdmin}
        />
      </Table>
    </div>
  )
}
