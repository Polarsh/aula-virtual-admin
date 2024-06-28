import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'

export default function Table2({
  headers,
  data,
  itemsPerPage = 10,
  actionText,
  onActionClick
}) {
  const [currentPage, setCurrentPage] = useState(1)

  const titles = headers.map(header => header.label)
  const columns = headers.map(header => header.value)

  // Calcular los índices
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedData = data.slice(startIndex, endIndex)

  const totalPages = Math.ceil(data.length / itemsPerPage)

  // Reiniciar página si hay cambio
  useEffect(() => {
    setCurrentPage(1)
  }, [data])

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages))
  }

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1))
  }

  return (
    <div>
      <div className='flow-root'>
        <div className='overflow-x-auto -m-1 p-1 pb-2'>
          <div className='inline-block min-w-full align-middle'>
            <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-300'>
                <thead className='bg-gray-50'>
                  <tr>
                    {titles.map((title, index) => (
                      <th
                        key={title}
                        scope='col'
                        className={`py-3.5 ${index === 0 ? 'pl-4 pr-3 sm:pl-6' : 'px-3'} text-left text-sm font-semibold text-gray-900`}>
                        {title}
                      </th>
                    ))}
                    <th
                      scope='col'
                      className='relative py-3.5 pl-3 pr-4 sm:pr-6'>
                      <span className='sr-only'>{actionText}</span>
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 bg-white'>
                  {paginatedData.length > 0 ? (
                    paginatedData.map((item, index) => (
                      <tr key={index}>
                        {columns.map((column, colIndex) => (
                          <td
                            key={column}
                            className={`whitespace-nowrap py-4 text-sm ${colIndex === 0 ? 'pl-4 pr-3 font-medium text-gray-900 sm:pl-6' : 'px-3 text-gray-500'}`}>
                            {item[column]}
                          </td>
                        ))}
                        <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
                          <button
                            onClick={() => onActionClick(item.id)}
                            className='text-indigo-600 hover:text-indigo-900'>
                            {actionText}
                            <span className='sr-only'>
                              , {item[columns[0]]}
                            </span>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={headers.length + 1}
                        className='py-4 text-center text-sm text-gray-500'>
                        No hay datos disponibles.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Paginación */}
      <div className='flex items-center justify-between border-gray-200 bg-white px-4 py-3 sm:px-6'>
        {/* <div className='flex flex-1 justify-between sm:hidden'>
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50'>
            Anterior
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50'>
            Siguiente
          </button>
        </div> */}
        <div className='flex flex-1 items-center justify-between'>
          <div>
            <p className='text-sm text-gray-700'>
              Mostrando <span className='font-medium'>{startIndex + 1}</span> a{' '}
              <span className='font-medium'>
                {Math.min(endIndex, data.length)}
              </span>{' '}
              de <span className='font-medium'>{data.length}</span> resultados
            </p>
          </div>
          <div>
            <nav
              className='isolate inline-flex -space-x-px rounded-md shadow-sm'
              aria-label='Pagination'>
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className='relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50'>
                <span className='sr-only'>Anterior</span>
                <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
              </button>
              {[...Array(totalPages)].map((_, pageIndex) => (
                <button
                  key={pageIndex}
                  onClick={() => setCurrentPage(pageIndex + 1)}
                  className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${pageIndex + 1 === currentPage ? 'bg-indigo-600 text-white' : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20'}`}>
                  {pageIndex + 1}
                </button>
              ))}
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className='relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50'>
                <span className='sr-only'>Siguiente</span>
                <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
