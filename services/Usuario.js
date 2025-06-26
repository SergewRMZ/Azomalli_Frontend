import api from "./api";

export const Usuario = (() => {
  const register = async (formData) => {
    try {
      const response = await api.post('/auth/register', formData);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error.response;
    }
  }

  const login = async (formData) => {
    try {
      const response = await api.post('/auth/login', formData);
      return response.data
    } catch (error) {
      throw error.response;
    }
  }

  return {
    register,
    login
  }
})();

