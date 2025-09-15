// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/carbon';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const carbonAPI = {
  // Calculate carbon footprint
  calculateFootprint: async (activityData) => {
    try {
      const response = await api.post('/calculate', activityData);
      return response.data;
    } catch (error) {
      console.error('Error calculating carbon footprint:', error);
      throw error;
    }
  },

  // Health check
  healthCheck: async () => {
    try {
      const response = await api.get('/health');
      return response.data;
    } catch (error) {
      console.error('Backend health check failed:', error);
      throw error;
    }
  },

  // Get emission factors
  getEmissionFactors: async () => {
    try {
      const response = await api.get('/emission-factors');
      return response.data;
    } catch (error) {
      console.error('Error getting emission factors:', error);
      throw error;
    }
  },
 fetchHistory: async () => {
    try {
      const response = await api.get('/history');
      return response.data;
    } catch (error) {
      console.error('Error fetching history:', error);
      throw error;
    }
  }
};