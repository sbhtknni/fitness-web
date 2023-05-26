import React from 'react';
import { Line } from 'react-chartjs-2';

function GraphComponent({ selectedTrainings }) {
  // Extracting the dates, weights, and training names from selectedTrainings
  const dates = selectedTrainings.map((training) => {
    const date = new Date(training.startDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  });
    const weights = selectedTrainings.map((training) => training.weight);
  const trainingNames  = selectedTrainings.map((training) => training.name);
  const totalTrainings = selectedTrainings.length;

// Create the chart data
const chartData = {
  labels: dates,
  datasets: [
    {
      label: 'Weight',
      data: weights,
      borderColor: 'cyan',
      fill: true,
    },
  ],
};

// Customizing the tooltips to display the training name
const chartOptions = {
  plugins: {
    tooltip: {
      callbacks: {
        label: (context) => {
          const label = context.dataset.label;
          if (context.parsed.y !== null) {

            const trainingName = trainingNames[context.dataIndex] ; // Get the corresponding training name
            return `${label}: ${context.parsed.y} kg ->(${trainingName})`;
          }
          return null;
        },
      },
    },
  },
};
  return (
    <div>
    <div>
      <h2>Weight Chart</h2>
      <Line data={chartData} options={chartOptions} />
    </div>

    </div>
    
  );
};

export default GraphComponent;