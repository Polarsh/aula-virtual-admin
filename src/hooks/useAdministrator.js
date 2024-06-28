import { useState } from 'react'

import { toast } from 'sonner'

import AdminService from '../services/AdminService'

const useAdministrator = () => {
  const [administratorList, setAdministratorList] = useState([])
  const [administrator, setAdministrator] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

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

      toast.success('Administrador fue eliminado exitosamente')
    } catch (error) {
      setError(error)

      toast.error('Administrador fue eliminado exitosamente')
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
