import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { adminSchema } from '../../services/AdminService'
import useAdministrator from '../../hooks/useAdministrator'
import useMyNavigate from '../../hooks/useMyNavigate'

export default function AdminForm({
  adminId,
  initialData,
  buttonText,
  buttonTextSubmit
}) {
  const { createAdministrator, updateAdministrator, isLoading, error } =
    useAdministrator()
  const { navigateToAdminMenu } = useMyNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: initialData,
    resolver: yupResolver(adminSchema)
  })

  const onSubmit = async data => {
    try {
      if (adminId) {
        await updateAdministrator(adminId, data)
      } else {
        await createAdministrator(data)
      }
      navigateToAdminMenu()
      reset()
    } catch (error) {
      if (error.inner) {
        // Manejar errores de validación de Yup
        error.inner.forEach(e => alert(e.message))
      } else {
        // Manejar otros errores (e.g., de red)
        alert('Error al enviar los datos')
      }
    }
  }

  const inputClass =
    'w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500'
  const labelClass = 'block mb-2 text-sm font-bold text-gray-700'
  const errorClass = 'mt-1 text-xs text-red-500'

  return (
    <>
      <form className='mt-8 space-y-6' onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-2 gap-6'>
          {/* Nombre */}
          <div>
            <label htmlFor='firstName' className={labelClass}>
              Nombres
            </label>
            <input
              id='firstName'
              {...register('firstName')}
              className={inputClass}
              placeholder='Nombre completo'
            />
            {errors.firstName && (
              <p className={errorClass}>{errors.firstName.message}</p>
            )}
          </div>
          {/* Apellido */}
          <div>
            <label htmlFor='lastName' className={labelClass}>
              Apellidos
            </label>
            <input
              id='lastName'
              {...register('lastName')}
              className={inputClass}
              placeholder='Apellidos'
            />
            {errors.lastName && (
              <p className={errorClass}>{errors.lastName.message}</p>
            )}
          </div>
          {/* DNI */}
          <div>
            <label htmlFor='dni' className={labelClass}>
              DNI
            </label>
            <input
              id='dni'
              {...register('dni')}
              className={inputClass}
              placeholder='DNI'
            />
            {errors.dni && <p className={errorClass}>{errors.dni.message}</p>}
          </div>
          {/* Email */}
          <div>
            <label htmlFor='email' className={labelClass}>
              Email
            </label>
            <input
              id='email'
              type='email'
              {...register('email')}
              className={inputClass}
              placeholder='Email'
            />
            {errors.email && (
              <p className={errorClass}>{errors.email.message}</p>
            )}
          </div>
          {/* Teléfono */}
          <div>
            <label htmlFor='phone' className={labelClass}>
              Teléfono
            </label>
            <input
              id='phone'
              {...register('phone')}
              className={inputClass}
              placeholder='Teléfono'
            />
            {errors.phone && (
              <p className={errorClass}>{errors.phone.message}</p>
            )}
          </div>
          {/* Rol */}
          <div>
            <label htmlFor='role' className={labelClass}>
              Rol
            </label>
            <select id='role' {...register('role')} className={inputClass}>
              <option value='Administrador'>Administrador</option>
              <option value='Administrador de Soporte'>
                Administrador de Soporte
              </option>
              <option value='Super Administrador'>Super Administrador</option>
            </select>
            {errors.role && <p className={errorClass}>{errors.role.message}</p>}
          </div>
        </div>

        <div>
          <button
            type='submit'
            disabled={isLoading}
            className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
            {isLoading ? buttonTextSubmit : buttonText}
          </button>
        </div>
      </form>
      {error && (
        <div className='mt-4 text-center text-red-500'>{error.message}</div>
      )}
    </>
  )
}
