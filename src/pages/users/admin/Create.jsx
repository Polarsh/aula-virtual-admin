import AdminForm from '../../../components/users/AdminForm'

export default function CreateAdminPage() {
  const initialData = {
    firstName: '',
    lastName: '',
    dni: '',
    email: '',
    phone: '',
    role: 'Administrador'
  }

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='w-full space-y-8 bg-gray-50 p-10 rounded-xl shadow-lg'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Crear Nuevo Administrador
          </h2>
        </div>
        <AdminForm
          initialData={initialData}
          buttonText={'Crear'}
          buttonTextSubmit={'Creando ...'}
        />
      </div>
    </div>
  )
}
