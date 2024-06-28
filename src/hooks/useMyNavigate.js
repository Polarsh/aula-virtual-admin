import { useNavigate } from 'react-router-dom'

const useMyNavigate = () => {
  const navigate = useNavigate()

  const navigateToAdminMenu = () => {
    navigate('/gestion-usuarios/administradores')
  }

  const navigateToCreateAdmin = () => {
    navigate('/gestion-usuarios/administradores/nuevo')
  }

  const navigateToEditAdmin = adminId => {
    navigate(`/gestion-usuarios/administradores/editar/${adminId}`)
  }

  const navigateToViewAdmin = adminId => {
    navigate(`/gestion-usuarios/administradores/ver/${adminId}`)
  }

  return {
    navigateToAdminMenu,
    navigateToCreateAdmin,
    navigateToEditAdmin,
    navigateToViewAdmin
  }
}

export default useMyNavigate
