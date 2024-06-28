import { useEffect } from 'react'

import useAdministrator from '../../../hooks/useAdministrator'
import useMyNavigate from '../../../hooks/useMyNavigate'

import HeaderTable from '../../../components/users/HeaderTable'
import AdminTable from '../../../components/users/AdminTable'
import { useApp } from '../../../context/AppContext'

export default function AdminMenuPage() {
  const { navigateToCreateAdmin, navigateToViewAdmin } = useMyNavigate()
  const { administratorList, isLoading, error, getAllAdministrators } =
    useAdministrator()

  const { setAlertMessage } = useApp()

  useEffect(() => {
    getAllAdministrators()
  }, [])

  if (isLoading) {
    return <div>Cargando...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  const handleSuccess = () => {
    setAlertMessage({
      type: 'success',
      title: 'Administrador fue eliminado exitosamente',
      content: 'Administrador fue eliminado exitosamente'
    })
  }

  const handleWarning = () => {
    setAlertMessage({
      type: 'warning',
      title: 'Administrador fue eliminado exitosamente',
      content: 'Administrador fue eliminado exitosamente'
    })
  }

  const handleError = () => {
    setAlertMessage({
      type: 'error',
      title: 'Administrador fue eliminado exitosamente',
      content: 'Administrador fue eliminado exitosamente'
    })
  }

  return (
    <div>
      <HeaderTable
        title='Administradores'
        description='A list of all the users in your account including their name, title, email and role.'
        buttonText='Añadir administrador'
        onButtonClick={navigateToCreateAdmin}
      />
      <button onClick={handleSuccess}>success</button>
      <button onClick={handleWarning}>warning</button>
      <button onClick={handleError}>error</button>
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
