import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [count, setCount] = useState(0)
  const name = "noori";

  return (
    <AuthContext.Provider value={{ name, count, setCount }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
