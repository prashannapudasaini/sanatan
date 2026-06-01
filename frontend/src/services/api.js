import axios from 'axios';

// Pull from environment variables (e.g., https://api.sdbnepal.org.np)
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost/backend/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to inject JWT token into secure requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('sdb_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;