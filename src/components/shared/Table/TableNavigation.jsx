import CustomButton, { ButtonStyle } from '../Buttons/Buttons'

export default function TableNavigation({ table }) {
  return (
    <nav
      aria-label='Pagination'
      className='flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6'>
      <div className='hidden sm:block'>
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
      <div className='flex flex-1 justify-between sm:justify-end gap-3'>
        <CustomButton
          onClick={() => table.previousPage()}
          label={'Anterior'}
          disabled={!table.getCanPreviousPage()}
          variant={ButtonStyle.Text}
        />
        <CustomButton
          onClick={() => table.nextPage()}
          label={'Siguiente'}
          disabled={!table.getCanNextPage()}
          variant={ButtonStyle.Text}
        />
      </div>
    </nav>
  )
}
