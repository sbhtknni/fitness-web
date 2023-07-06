/**
 * This component is a graph that shows the number of days in each program.
 * It is used in the UserHomePageComp component.
 */
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
// DaysPerProgramGraph function
const DaysPerProgramGraph = (props) => {
  const { dataArr } = props;
    const labels = Object.keys(dataArr.daysInEachProgram);
    const data = Object.values(dataArr.daysInEachProgram);
  // the labels and data for the graph
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Days Per Program',
        data,
        backgroundColor: 'rgb(255, 99, 132)',
        stack: 'Stack 0',
      },
    ],
  };
  // the view of the graph
  const options = {
    plugins: {
      title: {
        display: false,
        text: '',
      },
    },
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: 'Programs',
        },
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: 'Days',
        },
      },
    },
    };
    
  return <Bar options={options} data={chartData} />;
};

export default DaysPerProgramGraph;
