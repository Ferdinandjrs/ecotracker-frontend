// src/components/CarbonResult.js
import React from 'react';

const CarbonResult = ({ result }) => {
  if (!result) return null;

  return (
    <div className="carbon-result">
      <h2>Carbon Footprint Result</h2>
      <div className="result-card">
        <h3 className="footprint-value">
          {result.carbonFootprint.toFixed(2)} kg CO₂
        </h3>
        <p className="footprint-label">Total Carbon Emissions</p>
      </div>
    </div>
  );
};

export default CarbonResult;