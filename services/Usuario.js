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

  const updateTermsAndSurvey = async (formData, token) => {
    try {
      const response = await api.post('/auth/update-status', formData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      throw error.response;
    }
  }

  const getActivites = async (token) => {
    try {
      const response = await api.get('/activity/emotion', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      return response.data;
    } catch (error) {
      throw error.response;
    }
  }

  const getStatistics = async (token) => {
    try {
      const response = await api.get('/emotion/getLastStatistics', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      throw error.response;
    }
  }

  const getDailyTips = async (token) => {
    try {
      const response = await api.get('/daily-tip', {
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
    register,
    login,
    updateTermsAndSurvey, 
    getActivites, getStatistics,
    getDailyTips
  }
})();

