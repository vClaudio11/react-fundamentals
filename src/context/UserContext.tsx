import { createContext, useContext } from "react"

interface User {
    name: string
    role: string
    age: number
}

interface UserContextType {
    user: User
}

export const UserContext = createContext<UserContextType | null>(null) 

export function useUser() {
    const context = useContext(UserContext)
    if (!context) throw new Error("useUser must be used within a UserProvider")
    return context
}