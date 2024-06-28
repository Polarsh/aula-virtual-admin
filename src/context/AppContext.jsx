import { createContext, useContext, useEffect, useState } from 'react'
import { toast, Toaster } from 'sonner'

export const appContext = createContext()

export const useApp = () => {
  const context = useContext(appContext)
  return context
}

export function AppProvider({ children }) {
  const [alertMessage, setAlertMessage] = useState(null)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (!alertMessage) {
      return
    }

    if (alertMessage.type === 'success') {
      toast.success(alertMessage.title)
    }

    if (alertMessage.type === 'warning') {
      toast.warning(alertMessage.title)
    }

    if (alertMessage.type === 'error') {
      toast.error(alertMessage.title)
    }
  }, [alertMessage])

  return (
    <appContext.Provider
      value={{
        alertMessage,
        setAlertMessage,
        darkMode,
        setDarkMode
      }}>
      {children}
      <Toaster richColors position='top-right' />
    </appContext.Provider>
  )
}
