/* eslint-disable react/display-name */
import React, { useState } from 'react'

import TableTitle from './TableTitle'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'
import TableNavigation from './TableNavigation'

// Componente principal de la tabla
const Table = ({ children, data, columns }) => {
  const [filtering, setFiltering] = useState('')
  const [sorting, setSorting] = useState([])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: { sorting, globalFilter: filtering },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering
  })

  return (
    <div className='space-y-4'>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            table,
            filtering,
            setFiltering
          })
        }
        return child
      })}
    </div>
  )
}

// Subcomponente Title
Table.Title = ({ title, description }) => {
  return <TableTitle title={title} description={description} />
}

// Subcomponente Header
Table.Header = ({ children, filtering, setFiltering }) => {
  return (
    <TableHeader filtering={filtering} setFiltering={setFiltering}>
      {children}
    </TableHeader>
  )
}

// Subcomponente Body
Table.Body = ({ table, actionLabel, onActionClick }) => {
  return (
    <>
      <TableBody
        table={table}
        actionLabel={actionLabel}
        onActionClick={onActionClick}
      />
      <TableNavigation table={table} />
    </>
  )
}

export default Table
