import axios from 'axios';

const rawBase = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? '/api' : 'https://event-pulse-api-nwyz.onrender.com/api');
const apiBaseUrl = rawBase.replace(/\/$/, '');

const api = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach token automatically when present
api.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('eventPulseToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  login: (data) => api.post('auth/login', data),
  register: (data) => api.post('auth/register', data),
};

export const campaignService = {
  createCampaign: (data) => api.post('campaigns', data),
  getAllCampaigns: () => api.get('campaigns'),
  getCampaignById: (id) => api.get(`campaigns/${id}`),
  generateBlueprint: (id) => api.post(`campaigns/${id}/generate`),
};

export default api;
