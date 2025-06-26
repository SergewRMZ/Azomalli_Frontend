import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children })=> {
  const [user, setUser] = useState(() => {
    const loadUser = async () => {
      const storedUser = await AsyncStorage.getItem('user');
      if(storedUser) setUser(JSON.parse(storedUser));
    };

    loadUser();
  }, []);
  
  const login = async (userData) => {
    console.log('Almacenando credenciales...', userData);
    setUser(userData);
    await AsyncStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);