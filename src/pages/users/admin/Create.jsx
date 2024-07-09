import CardComponent from '../../../components/shared/Cards/Card'
import Title from '../../../components/shared/Title'
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
    <>
      <div className='space-y-6'>
        <Title
          title={'Crear administrador'}
          description={'Aqui podrás crear el detalle del administrador'}
        />

        <CardComponent>
          <AdminForm initialData={initialData} type={'create'} />
        </CardComponent>
      </div>
    </>
  )
}
