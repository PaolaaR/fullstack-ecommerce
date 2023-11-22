import { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [token,setToken] = useState("token access")

    return (
        <UserContext.Provider value={{
            token,
            setToken
            }}>
            {children}
        </UserContext.Provider>
    )
}