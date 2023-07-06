/**
 * This component displays a graph of the user's weights per date.
 * The component is used in UserHomePageForm.jsx.
 */
import React from 'react';
import { Line } from 'react-chartjs-2';

// GraphComponent function
function GraphComponent({ selectedTrainings }) {
 // Extracting the last 10 dates, weights, and training names from selectedTrainings
 const last8SelectedTrainings = selectedTrainings.slice(-8);
 const dates = last8SelectedTrainings.map((training) => {
   const date = new Date(training.startDate);
   const day = String(date.getDate()).padStart(2, '0');
   const month = String(date.getMonth() + 1).padStart(2, '0');
   const year = date.getFullYear();
   return `${day}/${month}/${year}`;
 });

  const weights = last8SelectedTrainings.map((training) => training.weight);
  const trainingNames  = last8SelectedTrainings.map((training) => training.name);

// Create the chart data
const chartData = {
  labels: trainingNames,
  datasets: [
    {
      label: 'Weight',
      data: weights ,
      borderColor: 'cyan',
      fill: true,
      display: true,
      text: "Weight",
      responsive: true,
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
            const dataIndex = context.dataIndex;
            const date = dates[dataIndex];
            return `Date: ${date} -${label}: ${context.parsed.y} kg  `;
          }
          return null;
        },
      },
    },
  },
};
  return (
    <div>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default GraphComponent;