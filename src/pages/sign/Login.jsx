export default function LoginPage() {
  return (
    <>
      <div className='flex min-h-screen flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-[480px] bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12'>
          <div className='sm:mx-auto sm:w-full sm:max-w-md'>
            <img
              className='mx-auto h-10 w-auto'
              src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
              alt='Tu Empresa'
            />
            <h2 className='mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
              Inicia sesión en tu cuenta
            </h2>
          </div>
          <div className='mt-10'>
            <form className='space-y-6' action='#' method='POST'>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Correo electrónico
                </label>
                <div className='mt-2'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    required
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Contraseña
                </label>
                <div className='mt-2'>
                  <input
                    id='password'
                    name='password'
                    type='password'
                    autoComplete='current-password'
                    required
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='text-end text-sm leading-6'>
                <a
                  href='#'
                  className='font-semibold text-indigo-600 hover:text-indigo-500'>
                  ¿Olvidaste tu contraseña?
                </a>
              </div>

              <div>
                <button
                  type='submit'
                  className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                  Iniciar sesión
                </button>
              </div>
            </form>
          </div>
          <p className='mt-10 text-center text-sm text-gray-500'>
            ¿No tienes cuenta?{' '}
            <a
              href='/matricula'
              className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
              Crear cuenta
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
