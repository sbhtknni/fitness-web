/**
 * This component is a pie chart that shows the percentage of each training program
 * It is used in the UserHomePageComp component.
 */
import React from 'react';
import { Chart } from 'chart.js';
import 'chartjs-plugin-datalabels';
// never remove this import!!!!!! :
import Chartt from 'chart.js/auto'

// ChartTrainigGraph function
const ChartTrainigGraph = ({ selectedTrainings }) => {
  const chartRef = React.useRef(null);
  const trainingNames = [...new Set(selectedTrainings.map((training) => training.name))];
  const totalCount = selectedTrainings.length;

  React.useEffect(() => {
    const ctxP = chartRef.current.getContext('2d');
    let myPieChart = null;

    // Calculate the occurrences of each training program
    const createChart = () => {
      const colors = generateColors(trainingNames.length);
      myPieChart = new Chart(ctxP, {
        type: 'pie',
        // The data for our dataset + the percentage of each training program
        data: {
          labels: trainingNames.map((name) => `${name} (${getPercentage(name)}%)`),
          datasets: [
            {
              data: calculateOccurrences(trainingNames, selectedTrainings),
              backgroundColor: colors,
              hoverBackgroundColor: colors,
            },
          ],
        },
        options: {
          responsive: true,
          legend: {
            position: 'right',
            labels: {
              padding: 20,
              boxWidth: 10,
            },
          },
          plugins: {
            datalabels: {
              formatter: (value, ctx) => {
                const percentage = getPercentage(ctx.chart.data.labels[ctx.dataIndex]);
                return `${value} (${percentage}%)`;
              },
              color: 'white',
              labels: {
                title: {
                  font: {
                    size: '16',
                  },
                },
              },
            },
          },
        },
      });
    };

    // Destroy the chart instance if it exists
    const destroyChart = () => {
      if (myPieChart) {
        myPieChart.destroy();
        myPieChart = null;
      }
    };

    destroyChart(); // Destroy any existing chart instance
    createChart(); // Create the new chart

    return () => {
      destroyChart(); // Clean up the chart on unmount
    };
  }, [selectedTrainings]); // Include selectedTrainings in the dependency array to update the chart when it changes

  const calculateOccurrences = (trainingNames, selectedTrainings) => {
    const occurrences = trainingNames.map((name) =>
      selectedTrainings.filter((training) => training.name === name).length
    );
    return occurrences;
  };

  // Generate colors for the chart (each training program has a different color) 
  const generateColors = (count) => {
    const colors = [];
    for (let i = 0; i < count; i++) {
      const hue = (i * 360) / count;
      const color = `hsl(${hue}, 50%, 60%)`;
      colors.push(color);
    }
    return colors;
  };
  // Calculate the percentage of each training program 
  // the percentage of each training program is the number of occurrences of the training program divided by the total number of training programs
  const getPercentage = (name) => {
    const count = selectedTrainings.filter((training) => training.name === name).length;
    const percentage = ((count / totalCount) * 100).toFixed(2);
    return percentage;
  };

  return <canvas id="labelChart" ref={chartRef}></canvas>;
};

export default ChartTrainigGraph;
