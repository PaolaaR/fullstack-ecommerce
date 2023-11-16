import { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [token,setToken] = useState("hay acceso al token")

    return (
        <UserContext.Provider value={{
            token,
            setToken
            }}>
            {children}
        </UserContext.Provider>
    )
}