import { flexRender } from '@tanstack/react-table'

import {
  ChevronDownIcon,
  ChevronUpDownIcon,
  ChevronUpIcon
} from '@heroicons/react/20/solid'

export default function TableBody({ table, actionLabel, onActionClick }) {
  return (
    <div className='flow-root'>
      <div className='overflow-x-auto -m-1 p-1'>
        <div className='inline-block min-w-full align-middle'>
          <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg'>
            <table className='min-w-full divide-y divide-gray-300'>
              <thead className='bg-gray-50'>
                {table.getHeaderGroups().map(headerGroup => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header, index) => (
                      <th
                        key={header.id}
                        scope='col'
                        className={`py-3.5 ${index === 0 ? 'pl-4 pr-3 sm:pl-6' : 'px-3'} text-left text-sm font-semibold text-gray-900`}>
                        <div className='flex items-center justify-between'>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          <div
                            onClick={header.column.getToggleSortingHandler()}
                            className='cursor-pointer'>
                            {(() => {
                              const isSorted = header.column.getIsSorted()
                              if (isSorted === 'asc') {
                                return (
                                  <ChevronUpIcon
                                    aria-hidden='true'
                                    className={`h-5 w-5 ${isSorted ? 'text-purple-500' : 'text-gray-400'}`}
                                  />
                                )
                              } else if (isSorted === 'desc') {
                                return (
                                  <ChevronDownIcon
                                    aria-hidden='true'
                                    className={`h-5 w-5 ${isSorted ? 'text-purple-500' : 'text-gray-400'}`}
                                  />
                                )
                              } else {
                                return (
                                  <ChevronUpDownIcon
                                    aria-hidden='true'
                                    className='h-5 w-5 text-gray-400'
                                  />
                                )
                              }
                            })()}
                          </div>
                        </div>
                      </th>
                    ))}
                    <th
                      scope='col'
                      className='relative py-3.5 pl-3 pr-4 sm:pr-6'>
                      <span className='sr-only'>Acción</span>
                    </th>
                  </tr>
                ))}
              </thead>
              <tbody className='divide-y divide-gray-200 bg-white'>
                {table.getRowModel().rows.map(row => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell, index) => (
                      <td
                        key={cell.id}
                        className={`whitespace-nowrap py-4 text-sm ${index === 0 ? 'pl-4 pr-3 font-medium text-gray-900 sm:pl-6' : 'px-3 text-gray-500'}`}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                    <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
                      <button
                        onClick={() => onActionClick(row.original.id)}
                        className='text-indigo-600 hover:text-indigo-900'>
                        {actionLabel}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
