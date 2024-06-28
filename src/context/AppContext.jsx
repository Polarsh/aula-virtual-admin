import { createContext, useContext, useState } from 'react'

export const appContext = createContext()

export const useApp = () => {
  const context = useContext(appContext)
  return context
}

export function AppProvider({ children }) {
  const [alertMessage, setAlertMessage] = useState(null)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <appContext.Provider
      value={{
        alertMessage,
        setAlertMessage,
        darkMode,
        setDarkMode
      }}>
      {children}
    </appContext.Provider>
  )
}
