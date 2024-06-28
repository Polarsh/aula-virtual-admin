import { useState } from 'react'
import AdminService from '../services/AdminService'
import { useApp } from '../context/AppContext'

const useAdministrator = () => {
  const [administratorList, setAdministratorList] = useState([])
  const [administrator, setAdministrator] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const { setAlertMessage } = useApp()

  const getAllAdministrators = async () => {
    setIsLoading(true)
    try {
      const data = await AdminService.getAllAdministrators()
      setAdministratorList(data)
      setError(null)
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  const getAdministratorById = async id => {
    setIsLoading(true)
    try {
      const data = await AdminService.getAdministratorById(id)
      setAdministrator(data)
      setError(null)
    } catch (error) {
      setError(error)
      setAdministrator(null)
    } finally {
      setIsLoading(false)
    }
  }

  const createAdministrator = async adminData => {
    setIsLoading(true)
    try {
      await AdminService.createAdministrator(adminData)
      setError(null)
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  const updateAdministrator = async (id, adminData) => {
    setIsLoading(true)
    try {
      await AdminService.updateAdministrator(id, adminData)
      setError(null)
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  const deleteAdministrator = async id => {
    setIsLoading(true)
    try {
      await AdminService.deleteAdministrator(id)
      setError(null)

      setAlertMessage({
        type: 'success',
        title: 'Administrador fue eliminado exitosamente',
        content: 'Administrador fue eliminado exitosamente'
      })
    } catch (error) {
      setError(error)

      setAlertMessage({
        type: 'error',
        title: 'Error en la eliminación.',
        content: error
      })
    } finally {
      setIsLoading(false)
    }
  }

  return {
    administratorList,
    administrator,
    error,
    isLoading,
    getAllAdministrators,
    getAdministratorById,
    createAdministrator,
    updateAdministrator,
    deleteAdministrator
  }
}

export default useAdministrator
