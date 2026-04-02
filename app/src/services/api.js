import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // Proxy in vite.config.js handles this
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
