export default function TableHeader({ children, filtering, setFiltering }) {
  return (
    <div className='flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center gap-4'>
      <input
        type='text'
        placeholder='Buscar...'
        value={filtering}
        onChange={e => setFiltering(e.target.value)}
        className='block w-full sm:w-1/2 rounded-md border-0 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
      />
      {children}
    </div>
  )
}
