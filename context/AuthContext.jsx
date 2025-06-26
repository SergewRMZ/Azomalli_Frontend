import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children })=> {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);

  useEffect(() => {
    const loadCredentials = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token');
        const storedUser = await AsyncStorage.getItem('user');
        const storedPassword = await AsyncStorage.getItem('password');


        if(storedPassword) setPassword(storedPassword);
        if (storedToken) setToken(storedToken);
        if (storedUser) setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Error cargando credenciales del almacenamiento:", e);
      }
    };

    loadCredentials();
  }, []);
  
  const login = async (userData, password, token) => {
    console.log('Almacenando credenciales...');
    setUser(userData);
    setToken(token);
    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('password', password);
    await AsyncStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = async () => {
    setUser(null);
    setToken(null);
    await AsyncStorage.removeItem('user');
    await AsyncStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, password, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);