import { useEffect } from 'react'
import {
  EyeIcon,
  PencilSquareIcon,
  PlusCircleIcon
} from '@heroicons/react/20/solid'

import useAdministrator from '../../../hooks/useAdministrator'
import useMyNavigate from '../../../hooks/useMyNavigate'

import { formatDate } from '../../../utils/functions'
import { exportToExcel } from '../../../utils/excel'

import Table from '../../../components/shared/Table/Table'
import CustomButton, {
  ButtonStyle
} from '../../../components/shared/Buttons/Buttons'
import Title from '../../../components/shared/Title'

export default function AdminMenuPage() {
  const { navigateToCreateAdmin, navigateToViewAdmin, navigateToEditAdmin } =
    useMyNavigate()
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

  const actionItems = [
    {
      label: 'Ver',
      icon: EyeIcon,
      action: navigateToViewAdmin
    },
    {
      label: 'Editar',
      icon: PencilSquareIcon,
      action: navigateToEditAdmin
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

  const handleExport = jsonData => {
    const transformedData = jsonData.map(row => ({
      Nombre: `${row.firstName} ${row.lastName}`,
      Email: row.email,
      DNI: row.dni,
      Teléfono: row.phone,
      Rol: row.role,
      'Fecha de Creación': new Date(parseInt(row.createdAt)).toLocaleString(),
      'Última Actualización': new Date(parseInt(row.updatedAt)).toLocaleString()
    }))

    exportToExcel(transformedData, 'Administradores')
  }

  return (
    <div className='space-y-6'>
      <Title
        title='Administradores'
        description='Una lista de todos los administradores, con su nombre, correo electrónico y rol.'
      />
      <Table data={administratorList} columns={columns}>
        <Table.Header handleExport={handleExport}>
          <CustomButton
            onClick={navigateToCreateAdmin}
            label={'Añadir administrador'}
            icon={PlusCircleIcon}
            variant={ButtonStyle.Fill}
          />
        </Table.Header>
        <Table.Body
          actionItems={actionItems}
          onActionClick={navigateToViewAdmin}
        />
      </Table>
    </div>
  )
}
