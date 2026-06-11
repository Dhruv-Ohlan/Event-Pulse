import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || (import.meta.env.DEV ? '/api' : 'https://event-pulse-api-nwyz.onrender.com/api'),
  headers: {
    'Content-Type': 'application/json',
  },
});

export const campaignService = {
  createCampaign: (data) => api.post('/campaigns', data),
  getAllCampaigns: () => api.get('/campaigns'),
  getCampaignById: (id) => api.get(`/campaigns/${id}`),
  generateBlueprint: (id) => api.post(`/campaigns/${id}/generate`),
};

export default api;
