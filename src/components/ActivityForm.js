// src/components/ActivityForm.js
import React from 'react';
import { TRANSPORT_OPTIONS, FOOD_OPTIONS } from '../utils/constants';

const ActivityForm = ({ formData, onChange, onSubmit, loading }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  return (
    <div className="activity-form">
      <h2>Record Daily Activities</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Transportation:</label>
          <select
            name="transportation"
            value={formData.transportation}
            onChange={handleInputChange}
          >
            {TRANSPORT_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Distance (km):</label>
          <input
            type="number"
            name="transportDistanceKm"
            value={formData.transportDistanceKm}
            onChange={handleInputChange}
            min="0"
            step="0.1"
            placeholder="Enter distance"
          />
        </div>

        <div className="form-group">
          <label>Energy Consumption (kWh):</label>
          <input
            type="number"
            name="energyConsumptionKwh"
            value={formData.energyConsumptionKwh}
            onChange={handleInputChange}
            min="0"
            step="0.1"
            placeholder="Enter kWh used"
          />
        </div>

        <div className="form-group">
          <label>Food Type:</label>
          <select
            name="foodType"
            value={formData.foodType}
            onChange={handleInputChange}
          >
            {FOOD_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Food Amount (kg):</label>
          <input
            type="number"
            name="foodAmountKg"
            value={formData.foodAmountKg}
            onChange={handleInputChange}
            min="0"
            step="0.01"
            placeholder="Enter kg consumed"
          />
        </div>

        <button type="submit" disabled={loading} className="calculate-btn">
          {loading ? 'Calculating...' : 'Calculate Carbon Footprint'}
        </button>
      </form>
    </div>
  );
};

export default ActivityForm;