import api from "./api";

const Survey = (() => {
  const save = async (formData, token) => {
    try {
      console.log('Recibiendo data: ', formData, token);
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