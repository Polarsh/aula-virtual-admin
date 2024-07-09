// Convertir timestamp unix a fecha
export const formatDate = timestamp => {
  const numericTimestamp =
    typeof timestamp === 'string' ? parseInt(timestamp, 10) : timestamp

  const date = new Date(numericTimestamp)

  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}

// Convertir timestamp unix a fecha con hora, minuto y segundo
export const formatDateTime = timestamp => {
  const numericTimestamp =
    typeof timestamp === 'string' ? parseInt(timestamp, 10) : timestamp

  const date = new Date(numericTimestamp)

  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear()

  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const seconds = date.getSeconds().toString().padStart(2, '0')

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
}
