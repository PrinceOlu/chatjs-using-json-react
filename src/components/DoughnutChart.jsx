import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import doughnutData from '../database/Doughnutdb.json';

function DoughnutChart() {
  return (
    <div>
      <h1>A Simple Chart.js App</h1>
      <Doughnut
        data={{
          labels: doughnutData.map((data) => data.label),
          datasets: [
            {
              label: 'Data',
              data: doughnutData.map((data) => data.value),
              backgroundColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)'
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)'
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
          },
        }}
      />
    </div>
  );
}

export default DoughnutChart;
