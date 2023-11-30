import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState("hay acceso al token");

  const registerUser = (userData) => {
    // Implement your user registration logic here
    console.log('Registering user:', userData);
  };

  return (
    <UserContext.Provider value={{ token, setToken, registerUser }}>
      {children}
    </UserContext.Provider>
  );
};
