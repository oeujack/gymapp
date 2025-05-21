import { createContext, useState, type ReactNode } from "react"
import type { User } from "../types/User"

export type AuthContextDataProps = {
  user: User
}

type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState({
    id: "1",
    name: "Jackson",
    email: "jackson@email.com",
    avatar: "jackson.png",
  })

  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
