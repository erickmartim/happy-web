import React, { createContext, useEffect, useState } from "react";
import api from "services/api";
import * as authService from 'services/auth';

interface AuthContextProps {
  signed: boolean;
  user: object | null;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthProvider({children}:any) {
  const [user, setUser] = useState<object | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function loadStoragedData() {
    const storagedUser = await localStorage.getItem('@RAuth:user');
    const storagedToken = await localStorage.getItem('@RAuth:token');
    
    if(storagedUser && storagedToken) {
      setUser(JSON.parse(storagedUser));
      api.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;
    }

    setLoading(false);
  }

  loadStoragedData();
        
  }, []);
  
  async function signIn() {
    const response = await authService.signIn();
    
    setUser(response.user);
    
    api.defaults.headers['Authorization'] = `Bearer ${response.token}`;
    
    localStorage.setItem('@RAuth:user', JSON.stringify(response.user));
    localStorage.setItem('@RAuth:token', response.token);
  }
  
  function signOut() {
    localStorage.clear();
    setUser(null);
  }
  
  return (
    <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut }}>
      { children }
    </AuthContext.Provider>
    );
  }
  
  export default AuthContext;