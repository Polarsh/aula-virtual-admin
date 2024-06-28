import { useEffect } from 'react'

import useAdministrator from '../../../hooks/useAdministrator'
import useMyNavigate from '../../../hooks/useMyNavigate'

import HeaderTable from '../../../components/users/HeaderTable'
import AdminTable from '../../../components/users/AdminTable'

export default function AdminMenuPage() {
  const { navigateToCreateAdmin, navigateToViewAdmin } = useMyNavigate()
  const { administratorList, isLoading, error, getAllAdministrators } =
    useAdministrator()

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
    <div>
      <HeaderTable
        title='Administradores'
        description='A list of all the users in your account including their name, title, email and role.'
        buttonText='Añadir administrador'
        onButtonClick={navigateToCreateAdmin}
      />
      {administratorList.length > 0 ? (
        <AdminTable
          data={administratorList}
          onActionClick={navigateToViewAdmin}
        />
      ) : (
        // TODO
        <>La lista de administradores es vacía</>
      )}
    </div>
  )
}
