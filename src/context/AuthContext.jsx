import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [role, setRole] = useState(null); 
  const [department, setDepartment] = useState(null);
  const [user, setUser] = useState(null);

  const login = (roleType, userName, deptName) => {
    setRole(roleType);
    setUser({ name: userName });
    setDepartment(deptName);
  };

  const logout = () => {
    setRole(null);
    setUser(null);
    setDepartment(null);
  };

  return (
    <AuthContext.Provider value={{ role, department, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
