import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

export default function TableNavigation({ table }) {
  return (
    <div className='flex items-center justify-between border-gray-200 px-4 sm:px-6'>
      <div className='flex flex-1 items-center justify-between'>
        <div>
          <p className='text-sm text-gray-700'>
            Mostrando{' '}
            <span className='font-medium'>
              {Math.min(
                table.getState().pagination.pageIndex *
                  table.getState().pagination.pageSize +
                  1,
                table.getFilteredRowModel().rows.length
              )}
            </span>{' '}
            a{' '}
            <span className='font-medium'>
              {Math.min(
                (table.getState().pagination.pageIndex + 1) *
                  table.getState().pagination.pageSize,
                table.getFilteredRowModel().rows.length
              )}
            </span>{' '}
            de{' '}
            <span className='font-medium'>
              {table.getFilteredRowModel().rows.length}
            </span>{' '}
            resultados
          </p>
        </div>
        <div>
          <nav
            className='isolate inline-flex -space-x-px rounded-md shadow-sm'
            aria-label='Pagination'>
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className='relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed'>
              <span className='sr-only'>Anterior</span>
              <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
            </button>
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className='relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed'>
              <span className='sr-only'>Siguiente</span>
              <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}
