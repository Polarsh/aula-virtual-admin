import { CiSearch } from 'react-icons/ci'

export default function TableHeader({ children, filtering, setFiltering }) {
  return (
    <div className='flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center gap-4'>
      <div className='relative w-full sm:w-1/2'>
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
          <CiSearch className='h-5 w-5 text-gray-400' aria-hidden='true' />
        </div>
        <input
          type='text'
          placeholder='Buscar...'
          value={filtering}
          onChange={e => setFiltering(e.target.value)}
          className='block w-full rounded-md border-0 py-1.5 pl-10 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        />
      </div>
      {children}
    </div>
  )
}
