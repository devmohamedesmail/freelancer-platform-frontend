import axios from 'axios';
import React, { createContext, useContext, useState, ReactNode,useEffect } from 'react'




interface User {
  id: number;
  username: string;
  email: string;
}


interface RegisterPayload {
  username: string;
  email: string;
  password: string;
}

export interface LoginPayload {
  identifier: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  login: (data: LoginPayload) => Promise<void>;
  register: (data: RegisterPayload) => Promise<void> ;
  logout: () => void;
}



const AuthContext = createContext<AuthContextType | null>(null);


export default function AuthProvider({ children }: { children: ReactNode }) {
const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);





  const register = async ({username,email,password}:RegisterPayload) => {
    try {

      const response = await axios.post('https://freelancer-platform-backend-dkqh.onrender.com/api/auth/local/register',{
        username: username,
        email: email,
        password:password,
      })
      const userData = response.data.user
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      return userData;
    } catch (error) {
      console.log(error)
    }
  }

  const login = async (data: LoginPayload) => {
    
  }


  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}


export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
