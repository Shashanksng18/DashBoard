import React from 'react';
import { Line} from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-moment';

const LineChart = ({ data }) => {
  const chartData = {
    labels: data.map(entry => entry.Timestamp),
    datasets: [
      {
        label: 'Profit Percentage',
        data: data.map(entry => ({
          x: new Date(entry.Timestamp),
          y: parseFloat(entry["Profit Percentage"]),
        })),
       backgroundColor: 'rgba(37, 205, 37, 0.2)',
       borderColor: '#25CD25',
       borderWidth: 2,
       borderDash: [2, 2],
       borderWidth: 2, 
       fill: true, 
       pointRadius: 1,
      },
  
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'year', // or 'hour', 'minute', etc. depending on your data
          tooltipFormat: 'YYYY',
        },
        ticks: {
          source: 'date',
          unitStepSize: 1,
        },
      },
      y: {
        title: {
          display: false,
        },
      },
    },
  };

  return (
    <div>
       <Line data={chartData} width="492px" height="160px" options={options}/>
    </div>
  );
};

export default LineChart;
