import { useEffect, useState } from 'react'

import useAdministrator from '../../../hooks/useAdministrator'
import useMyNavigate from '../../../hooks/useMyNavigate'

import HeaderTable from '../../../components/users/HeaderTable'
import Table from '../../../components/users/Table'

export default function AdminMenuPage() {
  const { navigateToCreateAdmin, navigateToViewAdmin } = useMyNavigate()
  const { administratorList, isLoading, error, getAllAdministrators } =
    useAdministrator()

  const [searchTerm, setSearchTerm] = useState('')

  const headers = [
    { label: 'Nombre', value: 'fullName' },
    { label: 'Email', value: 'email' },
    { label: 'Rol', value: 'role' }
  ]

  const filteredData = administratorList
    .map(admin => ({
      id: admin.id,
      fullName: admin.firstName + ' ' + admin.lastName,
      email: admin.email,
      role: admin.role
    }))
    .filter(
      admin =>
        admin.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        admin.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        admin.role.toLowerCase().includes(searchTerm.toLowerCase())
    )

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
      <HeaderTable
        title='Administradores'
        description='Una lista de todos los administradores, con su nombre, correo electrónico y rol.'
      />

      <div className='flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center gap-4'>
        <input
          type='text'
          placeholder='Buscar...'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className='block w-full sm:w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        />
        <button
          onClick={navigateToCreateAdmin}
          type='button'
          className='rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
          Añadir administrador
        </button>
      </div>

      <Table
        headers={headers}
        data={filteredData}
        itemsPerPage={10}
        actionText={'Editar'}
        onActionClick={navigateToViewAdmin}
      />
    </div>
  )
}
