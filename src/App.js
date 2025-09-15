import React, { useState, useEffect } from 'react';
import ActivityForm from './components/ActivityForm';
import CarbonResult from './components/CarbonResult';
import Recommendation from './components/Recommendation';
import CarbonChart from './components/CarbonChart';
import { carbonAPI } from './services/api';
import { DEFAULT_ACTIVITY } from './utils/constants';
import './App.css';

function App() {
  const [formData, setFormData] = useState(DEFAULT_ACTIVITY);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [backendStatus, setBackendStatus] = useState('checking');

  useEffect(() => {
    checkBackendConnection();
    loadHistory();
  }, []);

  const checkBackendConnection = async () => {
    try {
      await carbonAPI.healthCheck();
      setBackendStatus('connected');
    } catch (error) {
      setBackendStatus('disconnected');
      console.error('Backend connection failed:', error);
    }
  };

  const loadHistory = async () => {
    try {
      const data = await carbonAPI.fetchHistory();
      // Map backend data to frontend format if needed
      const formatted = data.map(item => ({
        date: item.date,
        carbonFootprint: item.carbonFootprint,
        recommendation: item.recommendation || '', // optional
      }));
      setHistory(formatted);
    } catch (error) {
      console.error('Failed to load history:', error);
    }
  };

  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: name.includes('Km') || name.includes('Kwh') || name.includes('AmountKg')
        ? Number(value)
        : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await carbonAPI.calculateFootprint(formData);
      setResult(response);

      // Reload history from backend to include new record
      await loadHistory();
    } catch (error) {
      alert('Error calculating carbon footprint. Please check if backend is running.');
      console.error('Calculation error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🌱 EcoTracker</h1>
        <div className={`backend-status ${backendStatus}`}>
          Backend: {backendStatus === 'connected' ? '✅ Connected' : '❌ Disconnected'}
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          <ActivityForm
            formData={formData}
            onChange={handleInputChange}
            onSubmit={handleSubmit}
            loading={loading}
          />

          {result && (
            <div className="results-section">
              <CarbonResult result={result} />
              <Recommendation recommendation={result.recommendation} />
            </div>
          )}

          <CarbonChart history={history} />
        </div>
      </main>
    </div>
  );
}

export default App;