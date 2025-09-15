// src/components/CarbonChart.js
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CarbonChart = ({ history }) => {
  if (!history || history.length === 0) return null;

  const chartData = {
    labels: history.map(item => item.date),
    datasets: [
      {
        label: 'Carbon Footprint (kg CO₂)',
        data: history.map(item => item.carbonFootprint),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Carbon Footprint History',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'kg CO₂',
        },
      },
    },
  };

  return (
    <div className="carbon-chart">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default CarbonChart;