import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.100.29:5000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;