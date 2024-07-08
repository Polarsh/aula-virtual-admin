/* eslint-disable react/display-name */
import React, { useState } from 'react'

import TableTitle from './TableTitle'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

// Componente principal de la tabla
const Table = ({ children }) => {
  const [filtering, setFiltering] = useState('')

  return (
    <div className='space-y-4'>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
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
Table.Body = ({ data, columns, onActionClick, filtering, setFiltering }) => {
  return (
    <TableBody
      data={data}
      columns={columns}
      onActionClick={onActionClick}
      filtering={filtering}
      setFiltering={setFiltering}
    />
  )
}

export default Table
