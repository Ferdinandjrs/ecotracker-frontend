// src/components/Recommendation.js
import React from 'react';

const Recommendation = ({ recommendation }) => {
  if (!recommendation) return null;

  return (
    <div className="recommendation">
      <h3>🌱 Eco Recommendations</h3>
      <div className="recommendation-card">
        <p>{recommendation}</p>
      </div>
    </div>
  );
};

export default Recommendation;