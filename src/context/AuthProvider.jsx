import { createContext, useContext, useState } from 'react'

export const authContext = createContext()

export const useAuth = () => {
  const context = useContext(authContext)
  return context
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(false)
  const [authState, setAuthState] = useState(false)

  return (
    <authContext.Provider value={{ currentUser, authState }}>
      {children}
    </authContext.Provider>
  )
}
