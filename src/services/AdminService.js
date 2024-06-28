/* eslint-disable space-before-function-paren */
// src/services/AdminService.js
import { httpHelper } from '../utils/httpHelper'
import * as Yup from 'yup'

class ValidationError extends Error {
  constructor(errors) {
    super('Validation Error')
    this.errors = errors
  }
}

export const adminSchema = Yup.object({
  firstName: Yup.string().required('Es requerido'),
  lastName: Yup.string().required('Es requerido'),
  dni: Yup.string()
    .length(8, 'Debe tener 8 carácteres')
    .matches('^[0-9]*$', 'No es válido')
    .required('Es requerido'),
  email: Yup.string().email('No es válido').required('Es requerido'),
  phone: Yup.string()
    .length(9, 'Debe tener 9 carácteres')
    .matches('^9[0-9]{8}$', 'El teléfono no es válido')
    .required('Es requerido'),
  role: Yup.string().required('El rol es requerido')
}).required()

class AdminService {
  constructor() {
    this.endpoint = '/administrators'
  }

  async getAllAdministrators() {
    try {
      return await httpHelper.get(this.endpoint)
    } catch (error) {
      console.error('Error fetching administrators:', error)
      throw error
    }
  }

  async getAdministratorById(id) {
    try {
      await Yup.string().required('ID is required').validate(id)
      return await httpHelper.get(`${this.endpoint}/${id}`)
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        throw new ValidationError({ id: error.message })
      }
      console.error(`Error fetching administrator with id ${id}:`, error)
      throw error
    }
  }

  async createAdministrator(adminData) {
    // Temporal - esto cambiará al back
    adminData.createdAt = Date.now()
    adminData.updatedAt = Date.now()
    //

    try {
      await adminSchema.validate(adminData, { abortEarly: false })
      return await httpHelper.post(this.endpoint, adminData)
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = error.inner.reduce((acc, err) => {
          acc[err.path] = err.message
          return acc
        }, {})
        throw new ValidationError(errors)
      }
      console.error('Error creating administrator:', error)
      throw error
    }
  }

  async updateAdministrator(id, adminData) {
    // Temporal - esto cambiará al back
    adminData.updatedAt = Date.now()
    //
    try {
      await Yup.string().required('ID is required').validate(id)
      await adminSchema.validate(adminData, { abortEarly: false })
      return await httpHelper.put(`${this.endpoint}/${id}`, adminData)
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = error.inner.reduce((acc, err) => {
          acc[err.path] = err.message
          return acc
        }, {})
        throw new ValidationError(errors)
      }
      console.error(`Error updating administrator with id ${id}:`, error)
      throw error
    }
  }

  async deleteAdministrator(id) {
    try {
      await Yup.string().required('ID is required').validate(id)
      await httpHelper.delete(`${this.endpoint}/${id}`)
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        throw new ValidationError({ id: error.message })
      }
      console.error(`Error deleting administrator with id ${id}:`, error)
      throw error
    }
  }
}

export default new AdminService()
