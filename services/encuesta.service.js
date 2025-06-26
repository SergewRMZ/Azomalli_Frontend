import api from "./api";

export const Survey = (() => {
  const save = async (formData, token) => {
    try {
      const response = await api.post('/auth/register-survey', formData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      return response.data;
    } catch (error) {
      throw error.response;
    }
  }

  return {
    save
  }
})();
