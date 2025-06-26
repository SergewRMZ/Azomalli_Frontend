import api from "./api";

export const Animo = (() => {
  const analyzer = async (formData, token) => {
    try {
      console.log(formData);
      const response = await api.post('/emotion/analyzer', formData, {
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
    analyzer
  }
})();